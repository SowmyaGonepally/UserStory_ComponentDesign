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
          <BookCard bookName="The Art Of Living" author="Epictetus" readTime="10-minute read" image="1.png"/>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
          <BookCard bookName="Masters Of Scale" author="ReidHoffman" readTime="12-minute read" image="4.png"/>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
          <BookCard bookName="Radical Product Thinking" author="R.Dutt" readTime="20-minute read" image="3.png"/>
      </Grid>


        </Grid>

       
           
      </Grid>

        </>
    );
}

export default GridOfBooks;


