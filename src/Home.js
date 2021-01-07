import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Headers/Header";
import Content from "./Main/Content";
import { makeStyles } from '@material-ui/core/styles';
import FirstHeader from './Headers/FirstHeader';
import SecondHeader from './Headers/SecondHeader';
import RightDrawer from './RightDrawer/RightDrawer';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(0),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
  }));
  
const Home=()=>{
    const classes=useStyles();
    return(
<div>
<Grid container className={classes.root} direction="column">
           {/* <Grid item className={classes.paper} xs={false} sm={8}/> */}
    <Grid item container>
        <Grid item className={classes.paper} xs={0} sm={1} ><Header/></Grid>
       <Grid item className={classes.paper} xs={12} sm={8} spacing={2}>
       <Grid container className={classes.root} direction="column" spacing={5}>
     
         <Grid item xs={12} sm={12} spacing={2}> <FirstHeader/></Grid>
         <Grid item xs={12} sm={12} spacing={2} >  <SecondHeader/></Grid>
         <Grid item xs={6} sm={12} spacing={2}> <Content /></Grid>
      
      
      
      
       </Grid>
       </Grid>
      
      <Grid item  className={classes.paper}  xs={12} sm={3} >
        <RightDrawer/>
        </Grid>
    </Grid> 
   </Grid> 
      
   

   </div> 
    );
};

export default Home;