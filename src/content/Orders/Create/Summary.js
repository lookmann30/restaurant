import { useState } from 'react';
import {
  Card,
  CardHeader,
  ListItemText,
  List,
  ListItem,
  Divider,
  Switch,
  ListItemAvatar,
  Avatar,
  styled,
  Box,
  Typography,
  Button,
  IconButton,
  Grid
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import PhoneLockedTwoToneIcon from '@mui/icons-material/PhoneLockedTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Text from 'src/components/Text';

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

function OrderSummary() {
  const [checked, setChecked] = useState(['phone_verification']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card>
      <CardHeader title="Order Summary" />
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 2
          }}
        >
          <Box sx={{display:"flex" , width:"100%", flexDirection:"column"}}>
            <Grid container>
              <Grid item xs={9}>
              <Typography variant="h5" sx={{fontWeight:700}}>List</Typography>

              </Grid>
              <Grid item xs={2}>
              <Typography variant="h5" sx={{fontWeight:700}} >Qty.</Typography>

              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>

            <Grid container sx={{ mt:2 }}>
              <Grid item xs={10} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}}>ต้มยำกุ้ง</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}} >1</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <IconButton aria-label="delete" size="small" disableRipple>
                  <DeleteIcon sx={{fontSize: 18}}/>
                </IconButton>
              </Grid>
            </Grid>
            
            <Grid container sx={{ mt:2 }}>
              <Grid item xs={10} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}}>ต้มยำกุ้ง</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}} >1</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <IconButton aria-label="delete" size="small" disableRipple>
                  <DeleteIcon sx={{fontSize: 18}}/>
                </IconButton>
              </Grid>
            </Grid>

            <Grid container sx={{ mt:2 }}>
              <Grid item xs={10} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}}>ต้มยำกุ้ง</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <Typography variant="h5" sx={{fontWeight:400}} >1</Typography>

              </Grid>
              <Grid item xs={1} display="flex" alignItems={"center"}>
              <IconButton aria-label="delete" size="small" disableRipple>
                  <DeleteIcon sx={{fontSize: 18}}/>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </ListItem>
        <Divider />

        <ListItem
          sx={{
            py: 2
          }}
        >
          <Box sx={{display:"flex" , width:"100%", flexDirection:"column"}}>
           <Box sx={{display:"flex", justifyContent:"space-between" , width:"100%"}}>
              <Box >
              <Typography variant="h4" sx={{fontWeight:700}}>Total</Typography>
              </Box>
              <Box>
              <Typography variant="h4" sx={{fontWeight:700}}>1</Typography>
              </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between" , width:"100%",mt: 2}}>
              <Box >
              <Typography variant="h3" sx={{fontWeight:700}}>Total Price</Typography>
              </Box>
              <Box>
              <Typography variant="h3" color="error" sx={{fontWeight:700}}>300</Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Button variant="contained" color="success" fullWidth>Submit</Button>
            </Box>
          </Box>
            
        </ListItem>

        
      </List>
    </Card>
  );
}

export default OrderSummary;
