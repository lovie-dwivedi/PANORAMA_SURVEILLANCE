import React,{ useState,useEffect }  from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';
import { useSelector } from "react-redux";
import {
  getCurrentViewTabIndex,
} from "../reducers/selectors";
import PluginsView from './PluginsView';
import UsersView from './UsersView';

  export default function Main2() {
    const tabIndex = useSelector((state) => getCurrentViewTabIndex(state));
    return (
      <>
      <br/>
      <div style={{color:"#343774",fontSize:"20px"}}>
        {(function() {
          if (tabIndex==0) {
            return "All Users"
          } else if(tabIndex==1) {
            return "All Plugins"
          }
          else{
            return "All Users"
          }
        })()}
      </div>
      <br/>
      {(function() {
          if (tabIndex==0) {
            return <UsersView/>
          } else if(tabIndex==1) {
            return <PluginsView/>
          }
          else{
            return <UsersView/>
          }
        })()}
      </>
    );
  }
  