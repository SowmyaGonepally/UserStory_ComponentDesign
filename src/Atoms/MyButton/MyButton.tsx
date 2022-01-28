import { Button, StyledEngineProvider, Typography } from "@mui/material"
import React from 'react';


interface Props
{
    buttonName:any,
    variant:"text" | "contained" | "outlined",
    className:any
}
export const MyButton:React.FunctionComponent<Props>=(props)=>{
     
    return(

    <StyledEngineProvider injectFirst>

      <Button variant={props.variant} style={{textTransform:'initial'}} className={props.className}>
                        <Typography >  {props.buttonName} </Typography>
           </Button>


    
       
    </StyledEngineProvider>
       

    
       
    )
}