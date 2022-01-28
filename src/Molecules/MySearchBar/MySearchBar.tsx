import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles=makeStyles({
    
    searchField:
     {
       
        marginBottom:'0px'
    }
}); 
const MySearchBar=()=>{

    const [searchTerm,setSearchTerm] = useState('');

    const handleChange:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =(event)=>{

    //handles change in input text field
         setSearchTerm(event.target.value);
         console.log("Input for search bar is changed - ",searchTerm);
    }

    const classes=useStyles();

    return(
    <div id="searchbar" style={{marginTop:'58px'}}>
       <TextField id="search" label="Search by title or author"  
        onChange={handleChange}
        style={{width:'658px'}} className={classes.searchField}
         variant="standard"
         InputProps={{
       startAdornment: (
       <InputAdornment position="start">
       <SearchOutlinedIcon  style={{color:'#3A4649'}}/>
       </InputAdornment> 
         ) }}
      > </TextField>
  </div>

    );



}

export default MySearchBar;