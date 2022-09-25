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

  useEffect(() => {
    async function GetOrder() {
      await axiosInstance.get('/orders'
        , { "token": cookies.token })
        .then(result => {
          const order = result.data.result;
          const initialOrder =  order.map(val => {
            return {
              id: val.orders_id,
              detail: val.orders_detail,
              createBy: val.user.users_username,
              status: val.orders_status,
              totalPrice: val.orders_total_price,
              cookingStatus : val.orders_cooking_status,
              cdate: val.orders_cdate
            }
          })
          setOrder(_.reverse(initialOrder))
        })
        .catch(function (error) {
          console.log(error)
        });
    }
    GetOrder();
  }, [])

  const deleteOrder = async (orderId) => {
    await axiosInstance.put(`/orders/updateOrder/${orderId}`
    ,
    { 
      orders_status : "Cancel",
      orders_cooking_status : "Cancel"
    }
    , { "token": cookies.token })
    .then(result => {
      router.reload()
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  return (
    <Card>
        <RecentOrdersTable orders={orders} deleteOrder={deleteOrder}/>
    </Card>
  );
}

export default RecentOrders;
