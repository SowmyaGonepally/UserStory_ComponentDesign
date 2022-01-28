import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, createTheme, Grid, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { MyButton } from '../../Atoms/MyButton/MyButton';

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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    height: 390,
    bgcolor: 'background.paper',
    p: 4
  };
const useStyles=makeStyles({

  
    continue:
    {
      width:"100%",
      textTransform:'initial'
    }

});

interface Props{
  open:boolean,
  handleOpenChild:any,
  handleCloseChild:any
}
export const SentKindle:React.FunctionComponent<Props>=(props)=>{
  
  
    const classes=useStyles();

    const handleClick:React.MouseEventHandler<HTMLButtonElement>=()=>{

        console.log("Continue reading button is clicked");
    }

    return(


        <ThemeProvider theme={Theme}>
       
        <Modal
          open={props.open}
          onClose={props.handleCloseChild}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
             <CheckCircleOutlineIcon  style={{color:'green',marginLeft:'45%',fontSize:'70px'}} />
            <br></br>
            <Typography id="modal-modal-description" variant='h5' sx={{ mt: 2 }} fontWeight="bold">
             <Typography style={{color:'blue',fontWeight:'bold'}} variant='h5'>The Grid</Typography>  was successfully sent to your kindle
             </Typography>
             <br></br>
             <Typography variant='body1'>
             Next time you sync your Kindle the blinks will be waiting for you.Please be patient - they can be slow travelers!
         </Typography>
             <br></br>      
             <MyButton handleClick={handleClick}
             buttonName="Continue Reading" variant="contained" className={classes.continue} />
          </Box>
        </Modal>
      </ThemeProvider>

    );
}