import { Button, StyledEngineProvider, Typography } from "@mui/material"
import React from 'react';


interface Props
{
    buttonName:any,
    variant:"text" | "contained" | "outlined",
    className:any,
    handleClick?:React.MouseEventHandler<HTMLButtonElement> 
}
export const MyButton:React.FunctionComponent<Props>=(props)=>{
     

    return(

    <StyledEngineProvider injectFirst>

      <Button onClick={props.handleClick}
       variant={props.variant} style={{textTransform:'initial'}} className={props.className}>
                        <Typography >  {props.buttonName} </Typography>
           </Button>


    
       
    </StyledEngineProvider>
       

    
       
    )
}