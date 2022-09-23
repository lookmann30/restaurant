import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';

import { Container, Grid } from '@mui/material';

import Menus from 'src/content/Orders/Create/Menus';
import Summary from 'src/content/Orders/Create/Summary'

function AddOrder() {
  return (
    <>
      <Head>
        <title>Create order</title>
      </Head>
      <Container maxWidth="lg" sx={{marginTop:5}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8.5} xs={12}>
            <Menus />
          </Grid>
          <Grid item lg={3.5} xs={12}>
            <Summary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

AddOrder.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default AddOrder;
