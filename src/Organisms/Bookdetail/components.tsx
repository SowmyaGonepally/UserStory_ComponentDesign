import { Button, createTheme, Grid,    StyledEngineProvider,    Tab,  Tabs,  ThemeProvider,  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TimeIcon from "../../Atoms/TimeIcon/TimeIcon";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image_2 from '../../Atoms/images/2.png';

import HeadsetIcon from '@mui/icons-material/Headset';
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";




const theme=createTheme({

    palette:{
        primary:{
            main:'#2CE080'
        },
        secondary:{
            main:'#03314B'
        }
    }

});

 export const useStyles=makeStyles({

    Bookname:
    {
        position: 'absolute',
        width: '496px',
        height: '45px',
        left: '264px',
        top: '206px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '45px',
        color: '#03314B',
        
    },
    caption:
    {
        position: 'absolute',
        width: '519px',
        height: '25px',
        left: '264px',
        top: '275px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#03314B'
    },
    author:
    {
        position: 'absolute',
        height: '20px',
        left: '264px',
        top: '324px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#6D787E'
    },
    readtime:{
          
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'right',
        color: '#6D787E'
    },
   sendtokindle:
   {
    height: '20px',
    left: '0px',
    marginTop: '7px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#6D787E'
    
   },
   image:
   {
              
    position: 'absolute',
    width: '304px',
    height: '304px',
    left: '998px',
    top: '206px'
   },
   readnow:
   {
    position: 'static',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px'
   }
   ,
   buynow:
   {
    position: 'static',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px'
    
   },
   tabname:
   {
          
    position: 'static',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform:'initial',
    '&.Mui-selected': {
        color: '#03314B',
      },
   },
   info:{
        
    position: 'absolute',
    width: '600px',
    height: '100px',
    left: '264px',
    top: '624px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#03314B',
    marginTop:'20px'
   },
   keyideas:
   {
       position: 'absolute',
       height: '20px',
       left: '264px',
       top: '146px',
       fontFamily: 'Raleway',
       fontStyle: 'normal',
       fontWeight: 'normal',
       fontSize: '16px',
       lineHeight: '20px',
       color: '#03314B'
       
   },
   wrapIconLeft: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    paddingTop:'2%',
    color: '#6D787E',
 },
 shop: {
    verticalAlign: 'middle',
    display: 'inline-flex',
     width:'20px',
    color: '#6D787E',
 },

 });


 export const ReadTime:React.FunctionComponent = () =>
 {
     const classes=useStyles();
       return(

        <Grid container item>
        <Grid item style={{marginLeft:'10px'}}>
        <Typography variant='caption' className={classes.wrapIconLeft}><TimeIcon /> 13-minute read  &nbsp; &nbsp; &nbsp; &nbsp;<HeadsetIcon /> Audio available</Typography><br></br>
        </Grid>
       </Grid>

       );
 }

 export const Info:React.FunctionComponent = () =>
 {

    const classes=useStyles();
     return(

        <React.Fragment>

         <div >
             <Typography className={classes.info} variant="body1" fontWeight={500}>
             Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 
             1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and 
             innovators of today. This new edition combines the timeless business advice and strategy of 
             the original text, supplemented with cutting-edge insights and case studies pertinent to today’s 
             business world.
             </Typography>
         </div>

        </React.Fragment>

     );
 }

 export const Synopsis:React.FunctionComponent = () =>
 {

    const [value,setValue]=useState(0);

    
     
    const classes=useStyles();
     return(

   <ThemeProvider theme={theme}>

     <Tabs value={value}  style={{marginTop:'72px',marginLeft:'264px'}} >
           
           <Tab label="Synopsis"  className={classes.tabname} value={0} sx={{width:'200px'}}/>
           <Tab label="Who is it for?" className={classes.tabname} value={1} sx={{width:'200px'}} />
           <Tab label="About the author" className={classes.tabname} value={2} sx={{width:'200px'}} />

     </Tabs>

     {value===0 && <Info />}


   </ThemeProvider>

     );
 }
 export const SendToKindle:React.FunctionComponent = () =>{

    const classes=useStyles();
    return(

        <Button variant="text">
        <Grid container item>
            <Grid item>
                <Typography className={classes.sendtokindle}>Send to Kindle</Typography>
            </Grid>

            <Grid item>
              <ArrowForwardIcon />
            </Grid>

        </Grid>
        </Button>

    );
 }

 export const Buttons:React.FunctionComponent = () =>{
     
    const classes=useStyles();

   
    return(

        <>
       
        <ThemeProvider theme={theme}>

            <Grid container columnSpacing="15px">

                <Grid item>

                    <Button variant="outlined" style={{textTransform:'initial'}} >
                        <Typography className={classes.readnow} >
                        Read now
                            </Typography></Button>

                </Grid>

             
                <Grid item>
                 
                    <Button variant="outlined" style={{textTransform:'initial'}}  >
                        <Typography className={classes.buynow}> <ShoppingCartCheckoutOutlined className={classes.shop} />
                     &nbsp;  Buy now
                            </Typography></Button>
                 

                </Grid>

                
                <Grid item >

                <SendToKindle />

                </Grid>

             

            </Grid>

        </ThemeProvider>

        </>

    );
 }

