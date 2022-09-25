import { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';

import { useRouter } from 'next/router'

import axiosInstance from 'src/utils/axios';
import { parseCookies } from 'nookies'

//lodash
import _ from 'lodash';


function RecentOrders() {
  const cookies = parseCookies();
  const router = useRouter();
  const [orders, setOrder] = useState([])
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    async function GetOrder() {
      await axiosInstance.get('/orders'
        , { "token": cookies.token })
        .then(result => {
          const order = result.data.result;
          const removeCancel = order.filter(val => val.orders_status != "Cancel")
          const initialOrder =  removeCancel.map(val => {
            return {
              id: val.orders_id,
              detail: val.orders_detail,
              cookingStatus : val.orders_cooking_status,
              cdate: val.orders_cdate
            }
          })
          setUpdated(false)
          setOrder(_.reverse(initialOrder))
        })
        .catch(function (error) {
          console.log(error)
        });
    }
    GetOrder();
  }, [updated])

  const acceptOrder = async (orderId) => {
    await axiosInstance.put(`/orders/updateOrder/${orderId}`
    ,
    { orders_cooking_status : "Accept"}
    , { "token": cookies.token })
    .then(result => {
      setUpdated(true)
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  return (
    <Card>
        <RecentOrdersTable orders={orders} acceptOrder={acceptOrder}/>
    </Card>
  );
}

export default RecentOrders;
