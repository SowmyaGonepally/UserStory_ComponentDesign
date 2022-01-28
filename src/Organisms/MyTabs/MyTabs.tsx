import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {createTheme,Tab,  Tabs,  ThemeProvider,  Typography } from "@mui/material";


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
interface Props{
    tabNames:string[],
    className:any,
    tabValues:any[]
}
export const MyTabs:React.FunctionComponent<Props> = (props) =>
 {

    const [value,setValue]=useState(0);

     return(

   <ThemeProvider theme={theme}>

     <Tabs value={value}  style={{marginTop:'72px',marginLeft:'264px'}} >
           
           <Tab label={props.tabNames[0]}  className={props.className} value={0} sx={{width:'200px'}}/>
           <Tab label={props.tabNames[1]} className={props.className} value={1} sx={{width:'200px'}} />
           <Tab label={props.tabNames[2]} className={props.className} value={2} sx={{width:'200px'}} />

     </Tabs>
     {value===0 && props.tabValues[0]}
     {value===1 && props.tabValues[1]}
     {value===2 && props.tabValues[2]}

   </ThemeProvider>

     );
 }