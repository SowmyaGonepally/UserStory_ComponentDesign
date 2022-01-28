import {  createTheme, Grid,    StyledEngineProvider,  Typography } from "@mui/material";

import React from "react";

import { Buttons, ReadTime,   SynopsisTabs,   useStyles } from "./components";


interface Props{
    bookName:string,
    author:string,
    caption:string,
    image:any,
    readTime:string
}
 
const BookDetail : React.FunctionComponent<Props> = (props) =>{

    const classes= useStyles();

    
    return(

        <StyledEngineProvider injectFirst>

 <div id="keyideas" style={{marginTop:'60px',marginLeft:'264px'}}>
            <Typography className={classes.keyideas}>Get the key ideas from</Typography>
        </div>
         
         <Grid container>

             <Grid item>


                 <Grid container>

                     <Grid item>

                         <Grid item>
                             <Typography className={classes.Bookname}>
                             {props.bookName}
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.caption}>
                             {props.caption}
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.author}>
                             By {props.author}
                             </Typography>  
                         </Grid>

                         <Grid item style={{marginTop:'320px',marginLeft:'264px'}}>

                            <ReadTime readTime={props.readTime}/>
                             
                         </Grid>

                        <Grid item style={{marginTop:'45px',marginLeft:'264px'}}>

                            <Buttons /> 

                        </Grid>



                     </Grid>

                 </Grid>


             </Grid>

             <Grid item className={classes.image} >

             <img src={props.image} width="404px" height="404px" alt="Beyond Entrepreneurship 2.0"></img>

             </Grid>

             
         </Grid>


         <SynopsisTabs />

            
        </StyledEngineProvider>

    );
}
export default BookDetail;