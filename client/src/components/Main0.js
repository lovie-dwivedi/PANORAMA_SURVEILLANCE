import React, { useState,useEffect } from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux";
import {
  getCurrentViewTabIndex,
} from "../reducers/selectors";
import PluginsView from './PluginsView';
import UsersView from './UsersView';

const useStyles = makeStyles((theme) => ({
    root1: {
      '& > *': {
        margin: theme.spacing(1),
        width: "100%",
        height:'5ch',
        backgroundColor:"#a5a4a6",
        color:"white",
      },
    },
  }));
  
  function Main0(props) {
    const tabIndex = useSelector((state) => getCurrentViewTabIndex(state));
        /*allGrids.map((grid, i) => {
      //console.log("i="+i)
      //console.log("ic="+grid.id)
      //console.log(grid.rowData)
      //setData1(grid.rowData);
      //console.log(data1)
      if(grid.id==="Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)0"){
        //console.log("grid.rowData.country")
        setData1(grid.rowData);
      }
    })*/
    //console.log(allGrids[0].rowData)
    //setData1(allGrids[0].rowData);
    //console.log(data1)
    
    const classes = useStyles();
  
    return (
    <>
    <form className={classes.root1} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Type Here To Search" variant="filled"  color="primary"
      //helperText="Full width!"
      InputLabelProps={{
        shrink: true,
      }}
      />
    </form>
    {(function() {
          if (tabIndex==0) {
            return <PluginsView/>
          } else if(tabIndex==1) {
            return <UsersView/>
          }
          else{
            return <PluginsView/>
          }
        })()}
     </>
    );
  }
  export default React.memo(Main0);