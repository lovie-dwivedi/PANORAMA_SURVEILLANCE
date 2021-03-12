import React,{ useState,useEffect } from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      //flexGrow: 1
      marginTop:"8px"
    },
    paper: {
      //padding: theme.spacing(2),
      //backgroundColor:  "#272b48",
      backgroundColor:  "#111328",
      border:"1 px solid #a5a4a6"
      //margin: 'auto',
      //maxWidth: 640,
    },
    image: {
      width: 48,
      height: 50,
      backgroundColor: "#a5a4a6"
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
        //marginTop:"-10px"
        //color: "white"
      }
  }));

export default function UsersView() {
    const classes = useStyles();
    const [data,setData] = useState([]);
    useEffect(() => {
      setData( [
        {
            "Name":"1.Akhil Jain",
            "count": 110,
        },
        {
            "Name":"2.Pravesh Garg",
            "count": 11,
        },
        {
            "Name":"3.Pravesh Garg",
            "count": 11,
        },
        {
            "Name":"4.Sumit Kumar",
            "count": 2,
        },
        {
            "Name":"5.Jogender Yadav",
            "count": 1,
        },
    ])
    },[])

    return (
        <>
    {data.map((item) => (
      <div className={classes.root} key={item.Name}>
          <Grid container spacing={2} className={classes.paper}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <Box className={classes.img} ></Box>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div variant="subtitle1" className={classes.headingColor}>
                    {item.Name}
                    <div className={classes.countColor}>{item.count}</div>
                  </div><br/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr/>
      </div>
      ))}
        </>
    )
}
