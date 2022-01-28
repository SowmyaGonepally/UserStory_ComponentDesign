import {  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MySearchBar from "../../Molecules/MySearchBar/MySearchBar";
import MyAppBar from "../AppBar/MyAppBar";
import GridOfBooks from "../GridOfBooks/GridOfBooks";

const useStyles=makeStyles({

    upvote:{
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6D787E',
    paddingLeft:'264px',
    marginTop:'40px'
    }

});


export const SearchOrganism=()=>{

    const classes=useStyles();

    return(

        <React.Fragment>

  

        <Typography variant="caption" className={classes.upvote}> 
            Upvote your favourites below or search to add a new book
        </Typography>


       <div id="search" style={{ paddingLeft: '264px', marginTop: '100px' }}>
          <MySearchBar />
       </div>
       
       
        </React.Fragment>

    );

}