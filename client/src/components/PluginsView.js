import React,{ useState,useEffect } from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';
import generateGridConfig from "../helpers/generateGridConfig";
import { actions } from "../reducers/gridActions";
import axios from 'axios';
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    border: {
      border: "1 px solid white"
    },
    root1: {
      '& > *': {
        margin: theme.spacing(1),
        width: "100%",
        height:'5ch',
        backgroundColor:"#a5a4a6",
        color:"white",
      },
    },
    paper: {
      //padding: theme.spacing(2),
      paddingTop: "10px",
      paddingLeft:"10px",
      backgroundColor:  "#111328",
      marginBottom:"-15px",
      //border:"1 px solid green"
      //margin: 'auto',
      //maxWidth: 500,
    },
    image: {
      width: 58,
      height: 64,
    },
    img: {
      //margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    headingColor: {
        color: "#a5a4a6",
        //color: "white"
      },
    countColor: {
        color: "yellow",
        fontSize:"25px",
        marginTop:"-10px"
        //color: "white"
      }
  }));

export default function PluginsView() {
    const dispatch = useDispatch();
    const [countries,setCountries] = useState([]);
    useEffect(() => {
      axios
              .get('/getCountry')
              .then(res => {
                setCountries((res.data).splice(0,5))
              })
              .catch(err => {
                console.log(err)
              })
    },[])

    const classes = useStyles();
  
    const addNewTab = (country) => {
        const gridConfig = generateGridConfig();
        dispatch(actions.createNewTab(gridConfig,country));
    }
    return (
        <>
    {countries.map((item) => (
      <div className={classes.root} onClick={() => addNewTab(item.Country)} key={item.Country}>
        <Paper className={classes.paper} square variant="outlined" elevation={3}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="business-graph-with-gold-dollar-sign-vector-1807573.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="subtitle1" className={classes.headingColor}>
                    {item.Country}
                    <div className={classes.countColor}>{item.count}</div>
                  </Typography><br/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <hr/>
      </div>
    ))} 
        </>
    )
}
