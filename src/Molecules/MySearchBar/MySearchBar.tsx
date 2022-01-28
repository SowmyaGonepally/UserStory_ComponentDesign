import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    
    searchField:
     {
       
        marginBottom:'0px'
    }
}); 
const MySearchBar=()=>{

    const classes=useStyles();

    return(
    <div id="searchbar" style={{marginTop:'58px'}}>
       <TextField id="search" label="Search by title or author"  
        style={{width:'658px'}} className={classes.searchField} variant="standard" InputProps={{
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