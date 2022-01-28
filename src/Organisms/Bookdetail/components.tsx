import { Button, createTheme, Grid,        Tab,  Tabs,  ThemeProvider,  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import HeadsetIcon from '@mui/icons-material/Headset';
import { AccessTime, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import Category from "../../Molecules/Category/Category";
import { MyButton } from "../../Atoms/MyButton/MyButton";
import { MyTabs } from "../MyTabs/MyTabs";
import { SetUpKindle } from "../MyModal/SetUpKindle";




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
    height: '30px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
  
   }
   ,
   buynow:
   {
    position: 'static',
    height: '30px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    color:'#2CE080'
    
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


 
 export const ReadTime:React.FunctionComponent<{readTime:string}> = (props) =>
 {
     const classes=useStyles();
       return(

        <Grid container item>
        <Grid item style={{marginLeft:'10px'}}>
            <Category categoryname={props.readTime} icon={<AccessTime />} >
            </Category>
            </Grid>
            <Grid item style={{marginLeft:'10px'}}>
            <Category categoryname="Audio available" icon={<HeadsetIcon />} >
            </Category>
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

 export const SynopsisTabs:React.FunctionComponent = () =>
 {

     
    const classes=useStyles();
     return(   

   <MyTabs tabNames={["Synopsis","Who's it for?","About the author"]} className={classes.tabname} tabValues={[<Info />,<Info />,<Info />]} />

     );
 }
 export const SendToKindle:React.FunctionComponent = () =>{

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const classes=useStyles();
    return(
<>
        <Button variant="text" style={{textTransform:'initial'}} onClick={handleOpen}>
        <Grid container item>
            <Grid item>
                <Typography className={classes.sendtokindle}>Send to Kindle</Typography>
            </Grid>
            <Grid item>
              <ArrowForwardIcon />
            </Grid>

        </Grid>
        </Button>

        <SetUpKindle open={open} handleClose={handleClose} />

        </>       

    );
 }

 export const Buttons:React.FunctionComponent = () =>{
     
    const classes=useStyles();

    const handleClick=(event:React.MouseEvent,name:string)=>{
       
        console.log(name," button is clicked")
    }

   
    return(

        <>
       
        <ThemeProvider theme={theme}>

            <Grid container columnSpacing="15px">

                <Grid item>
                            <MyButton handleClick={event=>handleClick(event,"Read now")}
                             buttonName="Read now" variant="outlined" className={classes.readnow} />

                </Grid>

             
                <Grid item>
                 
                  <MyButton buttonName={
                     <Category categoryname="Buy now" sx={{color:'#2CE080'}}
                     icon={<ShoppingCartCheckoutOutlined className={classes.shop}/>}>
                      </Category>
                  } variant="outlined" handleClick={event=>handleClick(event,"Buy now")}
                   className={classes.buynow}>
                      
                  </MyButton>
                 
                </Grid>

                
                <Grid item >

                <SendToKindle />

                </Grid>

             

            </Grid>

        </ThemeProvider>

        </>

    );
 }

