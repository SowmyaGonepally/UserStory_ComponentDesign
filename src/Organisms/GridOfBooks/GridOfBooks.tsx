import {  Grid } from "@mui/material";
import React, {  useState } from "react";

import { makeStyles } from '@mui/styles';
import BookCard from "../../Molecules/BookCard/BookCard";





const useStyles=makeStyles({
        
    grid:
    {
       marginTop:'25px',
       paddingRight:'464px'
    }

});




const GridOfBooks:React.FunctionComponent=()=>
{

    const classes=useStyles();
  
    

    return(
        <>

 <Grid container className={classes.grid} >
      <Grid container columnSpacing="140px" rowSpacing="40px">
         
      <Grid item xs={12} sm={6} md={4}>
          <BookCard/>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
          <BookCard/>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
          <BookCard/>
      </Grid>


        </Grid>

       
           
      </Grid>

        </>
    );
}

export default GridOfBooks;


