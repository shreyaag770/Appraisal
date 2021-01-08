import React, {useState, useEffect} from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";
import { makeStyles } from '@material-ui/core/styles';
import Buttons from './buttons';
import axios from 'axios'


const newStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Content = () => {

  const [currentData, setCurrentData]= useState({
    persons: [
      {praises: 5, highfives:5, id:1}
    ]
  });

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
		axios
			.get('/users/display')
			.then(res => {
        setProfiles(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

  const switchDataHandler = (coffeMakerObj)=> {
    const praises=coffeMakerObj.praise;
    const highfives=coffeMakerObj.highFive;
    const id = coffeMakerObj._id;
    setCurrentData({
      persons: [
        {praises: praises, highfives:highfives, id:id}
      ]
    })
  }

  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={2}>
        <CoffeCard titles={coffeMakerObj.name}
        image={coffeMakerObj.photo}
        clicked={()=>switchDataHandler(coffeMakerObj)} 
        />
      </Grid>
    );
  };
  const classes=newStyles();

  return (
    <Grid  container className={classes.paper} spacing={2} xs={12} sm={12}>
      <Grid item xs={6} sm={2}>
        <Buttons 
        appreciation ={currentData.persons[0].praises}
        highfives={currentData.persons[0].highfives}
         id = {currentData.persons[0].id}/>
      </Grid>
      {profiles.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;