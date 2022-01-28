import { Button, Grid,  StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props
{
    categoryname:string,
    icon:any,
    sx?:any,
    end?:boolean,
    handleClick?:any
}

const useStyles=makeStyles({

    name:
    {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#6D787E'
        
    },
    icon:
    {
        color: '#042330'

    },
    link:
    {
        textDecoration:'none'
    }
    

});

const Category:React.FunctionComponent<Props>= (props)=>
{

    const classes=useStyles();

    const handleClick=(event:React.MouseEvent,name:string)=>{

        console.log("Category button is clicked",name);

    }
    return(


        <>

        <StyledEngineProvider injectFirst>
       
            <Grid container columnSpacing="10px">
                <Grid item>
                    <Button onClick={event=>handleClick(event,props.categoryname)}
                    startIcon={props.icon} style={{textTransform:'initial'}} className={classes.icon} sx={props.sx}>
                    <Typography className={classes.name} sx={props.sx} >
                        {props.categoryname}
                    </Typography>
                    </Button>
                </Grid>
            </Grid>
            
          

       

        </StyledEngineProvider>

        </>

    );
}

export default Category;