import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, createTheme, Grid, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MyButton } from '../../Atoms/MyButton/MyButton';
import { SentKindle } from './SentKindle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  height: 600,
  bgcolor: 'background.paper',
  p: 4
};

const useStyles=makeStyles({

    box:
    {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 420,
        height: 600,
        bgcolor: 'background.paper',
        p: 4
    },
    approved:
    {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '20px',
        color: '#2CE080',
    },
    addemail:
    {
      width:"100%",
      textTransform:'initial'
    }

});

const Theme=createTheme({

    typography:{
        fontFamily: 'Raleway'
        
    },
    palette:{
        primary:{
            main:'#2CE080'
        }
    }

});
interface Props{

  open:boolean,
  handleClose:any

}
export const SetUpKindle:React.FunctionComponent<Props> = (props)=> {
 

  const handleClick=(event:React.MouseEvent,value:string)=>{

    console.log(value, " button is clicked");
}

  const classes=useStyles();

  const [openChild, setOpenChild] = React.useState(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);

  return (

    <ThemeProvider theme={Theme}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" fontWeight="bold">
           Setup Your Kindle
          </Typography>
          <br></br>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Send blinks right to your Kindle from within the app. 
           </Typography>
           <br></br>
           <Typography variant='body1' fontWeight="bold">
          1.Add Blinkist to your approved document senders</Typography>
           <br></br>
          <Typography variant='body2'>
          You must add kindle@blinkist.com to your list of <Typography className={classes.approved}>approved document senders</Typography> to receive documents sent from Blinkist
          </Typography>
          <br></br>
          <Typography variant='body1' fontWeight="bold">
          2.Add your Kindle email
          </Typography>
          <br></br>
          <Container>
            <Grid container>
              <Grid md={6}>
          <TextField label="email" variant="filled" ></TextField>
          </Grid>
          <Grid md={6}>
          <Select
          value=""
          displayEmpty>
          <MenuItem value="">@kindle.com</MenuItem>
          <MenuItem>@gmail.com</MenuItem>
          <MenuItem >@yahoo.com</MenuItem>
        </Select>
          </Grid>
          </Grid>
          </Container>
          <br></br>
          <MyButton handleClick={handleOpenChild}
          buttonName="Add email" variant="contained" className={classes.addemail} ></MyButton>
          <br></br><br></br>
          <MyButton handleClick={(event)=>handleClick(event,"Need help?")}
           buttonName="Need help?" variant='text' className={classes.addemail}></MyButton>
            </Box>
      </Modal>
      <SentKindle open={openChild} handleOpenChild={handleOpenChild} handleCloseChild={handleCloseChild} />

    </ThemeProvider>

  );
}