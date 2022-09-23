import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';

import PageHeader from 'src/content/Dashboards/Overview/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';

import Overview from 'src/content/Dashboards/Overview/Overview';

function DashboardOverview() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
        
          <Grid item lg={8} xs={12}>
            <Overview />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

DashboardOverview.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardOverview;
