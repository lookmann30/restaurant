import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

const CardSuccessAction = styled(Card)(
  ({ theme }) => ({
    backgroundColor: "#24B12F"
  })
);

const CardCancelAction = styled(Card)(
  ({ theme }) => ({
    backgroundColor: "#DA0606"
  })
);

const CardTotalAction = styled(Card)(
  ({ theme }) => ({
    backgroundColor: "#444FF5"
  })
);

const CardTextContent = styled(Typography)(
  ({ theme }) => ({
    color: "#F9F9F9"
  })
)

function Overview() {
  return (
    <>
      <Box
        display="flex"
        alignItems="stretch"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Overview</Typography>
       
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} item display="flex">
          <CardTotalAction
            sx={{
              px: 1,
              width: "100%"
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="sigma"
                  src="/static/images/placeholders/logo/sigma.png"
                />
              </AvatarWrapper>
              <CardTextContent variant="h5" noWrap>
                Total orders
              </CardTextContent>
             
              <Box
                sx={{
                  pt: 3
                }}
              >
                <CardTextContent variant="h3" gutterBottom noWrap>
                  10 Orders
                </CardTextContent>
              
              </Box>
            </CardContent>
          </CardTotalAction>
        </Grid>
        <Grid xs={12} sm={6} md={4} item display="flex">
          <CardSuccessAction
            sx={{
              px: 1,
              width: "100%"
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="accept"
                  src="/static/images/placeholders/logo/accept.png"
                />
              </AvatarWrapper>
              <CardTextContent variant="h5" noWrap>
                Complete orders
              </CardTextContent>
             
              <Box
                sx={{
                  pt: 3
                }}
              >
                <CardTextContent variant="h3" gutterBottom noWrap>
                  10 Orders
                </CardTextContent>
                <CardTextContent variant="subtitle2" noWrap>
                  2000 Bath
                </CardTextContent>
              </Box>
            </CardContent>
          </CardSuccessAction>
        </Grid>
        <Grid xs={12} sm={6} md={4} item display="flex">
          <CardCancelAction
            sx={{
              px: 1,
              width: "100%"
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="accept"
                  src="/static/images/placeholders/logo/failed.png"
                />
              </AvatarWrapper>
              <CardTextContent variant="h5" noWrap>
                Cancel orders
              </CardTextContent>
             
              <Box
                sx={{
                  pt: 3
                }}
              >
                <CardTextContent variant="h3" gutterBottom noWrap>
                  10 Orders
                </CardTextContent>
              </Box>
            </CardContent>
          </CardCancelAction>
        </Grid>
        
      </Grid>
    </>
  );
}

export default Overview;
