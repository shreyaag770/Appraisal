import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      flex: 1
      // color: theme.palette.text.secondary,
      
    },
    container: {
      margin: '40px 30px'
    },
    icons:{
      margin: '15px',
      fontSize: '35px'
    },
    arrow:{
      fontsize: '5px',
      textAlign: 'center',
      marginTop: '20px'
    },
    heading:{
      display: 'flex',
      // margin: '5px',
    },
    firstheading: {
      position:'absolute',
      
      left: '333px',
      // top: 'calc(50% - 28px/2 - 451.5px)',
      position: 'absolute',
      width: '229px',
      height: '28px',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '21.94px',
      lineHeight: '45px',
      letterSpacing: '-0.512518px',
      color: '#0085FF'

    },

    company: {
      position:'absolute',
      
      left: '191px',
      // top: 'calc(50% - 28px/2 - 447.5px)',
      position: 'absolute',
      width: '229px',
      height: '28px',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14.94px',
      lineHeight: '47px',
      letterSpacing: '1px',
      color: 'black'
    },
   


  }));

const FirstHeader = ()=>{
    const classes=useStyles();


    return(
        <Grid container className={classes.container} direction="column">
        
            <Grid item container spacing={1}>
            <Grid item className={classes.paper} xs={2} sm={3} >
              <div className={classes.heading}> 
              <div className={classes.company}>COMPANY NAME</div>
              <div className={classes.firstheading} > ARGIL DX </div>
              </div>
             
            </Grid>
            
            <Grid item className={classes.paper}  xs={9} sm={6}></Grid>
            <Grid item  xs={1} sm={3} >
              <div className={classes.heading}>
              <HelpOutlineSharpIcon className={classes.icons}/>
              <NotificationsNoneSharpIcon className={classes.icons}/>
              <Avatar className={classes.icons} alt="Remy Sharp"  src="./assets/images/shreya.jpg"/>
               <KeyboardArrowDownOutlinedIcon className={classes.arrow} />
              </div>
             
              </Grid>
            
              
           
        </Grid>
        </Grid>
        
    );
}

export default FirstHeader;