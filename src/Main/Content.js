import React, {useState} from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";
import { makeStyles } from '@material-ui/core/styles';
import Buttons from './buttons';


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
  // const [praise, setPraise] = useState([])

	// const addPraise = (props) => {
	// 	setPraise([
	// 		...praise,
	// 		{
  //       praises: {props.p},
  //       highfives: {props.h}
        
	// 		}
	// 	])
	// }

// const [highFive, setHighFIve] = useState(0);

  const [currentData, setCurrentData]= useState({
    persons: [
      {praises: 5, highfives:5}
    ]
  });

  const switchDataHandler = (coffeMakerObj)=> {
    // const data=[...coffeMakerObj];
    const praises=coffeMakerObj.p;
    const highfives=coffeMakerObj.h;

    setCurrentData({
      persons: [
        {praises: praises, highfives:highfives}
      ]
    })

  }


  const getCoffeMakerCard = coffeMakerObj => {
   
    return (
      <Grid item xs={12} sm={2}>
        <CoffeCard titles={coffeMakerObj.title}
        image={coffeMakerObj.imageUrl}
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
        highfives={currentData.persons[0].highfives}/>
      </Grid>
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;