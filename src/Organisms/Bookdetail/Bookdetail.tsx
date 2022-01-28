import {  Grid,    StyledEngineProvider,    Tab,  Tabs,  ThemeProvider,  Typography } from "@mui/material";

import React from "react";
import { Buttons, ReadTime, Synopsis, useStyles } from "./components";





const BookDetail : React.FunctionComponent = () =>{

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
                             The Grid
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.caption}>
                             The Decision making tool for every business (Including yours)
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.author}>
                             By Matt Watkinson
                             </Typography>  
                         </Grid>

                         <Grid item style={{marginTop:'320px',marginLeft:'264px'}}>

                            <ReadTime />
                             
                         </Grid>

                        <Grid item style={{marginTop:'45px',marginLeft:'264px'}}>

                            <Buttons /> 

                        </Grid>



                     </Grid>

                 </Grid>


             </Grid>

             <Grid item className={classes.image} >

             <img src="grid.png" width="404px" height="404px" alt="Beyond Entrepreneurship 2.0"></img>

             </Grid>

             
         </Grid>


         <Synopsis />

            
        </StyledEngineProvider>

    );
}
export default BookDetail;

