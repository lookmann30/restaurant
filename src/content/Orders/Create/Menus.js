import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  CardMedia,
  Typography,
  ButtonGroup
} from '@mui/material';

import NextLink from 'next/link';


function Menus() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Create Order</Typography>
        <NextLink href="/order/transections" passHref>
          <Button variant='outlined' >View Transections</Button>
        </NextLink>
      </Box>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="/static/images/menu/tom-yum-kung.jpg"
              alt="Paella dish"
              sx={{ mt: 2, borderRadius: "5px" }}
            />
            <CardContent>
              <Typography variant="h3" noWrap>
                ต้มยำกุ้ง
              </Typography>

              <Box
                sx={{
                  pt: 1
                }}
              >
                <Typography variant="h5" gutterBottom noWrap>
                  Price
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  150 Bath
                </Typography>
              </Box>
              <ButtonGroup size="small" aria-label="small outlined button group" sx={{my:1}}>
                <Button sx={{ borderColor:"#D6D7D8"}}>+</Button>
                <Button disabled sx={{
                                "&:disabled": {
                                  borderColor: "#D6D7D8"
                                }
                              }}>{0}</Button>
                <Button sx={{ borderColor:"#D6D7D8"}}>-</Button>
              </ButtonGroup>
              <Button fullWidth variant='contained' sx={{ mt: 2 }}>Add</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="/static/images/menu/kang-som.jpg"
              alt="Paella dish"
              sx={{ mt: 2, borderRadius: "5px" }}
            />
            <CardContent>
              <Typography variant="h3" noWrap>
                แกงส้ม
              </Typography>

              <Box
                sx={{
                  pt: 1
                }}
              >
                <Typography variant="h5" gutterBottom noWrap>
                  Price
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  130 Bath
                </Typography>
              </Box>
              <ButtonGroup size="small" aria-label="small outlined button group" sx={{my:1}}>
                <Button sx={{ borderColor:"#D6D7D8"}}>+</Button>
                <Button disabled sx={{
                                "&:disabled": {
                                  borderColor: "#D6D7D8"
                                }
                              }}>{0}</Button>
                <Button sx={{ borderColor:"#D6D7D8"}}>-</Button>
              </ButtonGroup>
              <Button fullWidth variant='contained' sx={{ mt: 2 }}>Add</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="/static/images/menu/green-curry.jpg"
              alt="Paella dish"
              sx={{ mt: 2, borderRadius: "5px" }}
            />
            <CardContent>
              <Typography variant="h3" noWrap>
                แกงเขียวหวาน
              </Typography>

              <Box
                sx={{
                  pt: 1
                }}
              >
                <Typography variant="h5" gutterBottom noWrap>
                  Price
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  120 Bath
                </Typography>
              </Box>
              <ButtonGroup size="small" aria-label="small outlined button group" sx={{my:1}}>
                <Button sx={{ borderColor:"#D6D7D8"}}>+</Button>
                <Button disabled sx={{
                                "&:disabled": {
                                  borderColor: "#D6D7D8"
                                }
                              }}>{0}</Button>
                <Button sx={{ borderColor:"#D6D7D8"}}>-</Button>
              </ButtonGroup>
              <Button fullWidth variant='contained' sx={{ mt: 2 }}>Add</Button>
            </CardContent>
          </Card>
        </Grid>
        {/*         
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new wallet">
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid> */}
      </Grid>
    </>
  );
}

export default Menus;
