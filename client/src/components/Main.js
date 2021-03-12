import React, { useState,useEffect } from 'react'
import { Box,Button,Container,Grid,makeStyles,Paper,Typography,ButtonBase } from '@material-ui/core';
//import GridExample from './Header3';
//import GridExample2 from './Header4';
import Main0 from './Main0';
import Main2 from './Main2';
import TabsView from './TabsView/TabsView';

export default function Main(props) {
  
    return (
        <div>
        <Grid item xs={12} container spacing={1}>
            <Grid item lg={2} xs={12} sm={6} style={{}}>
            <Main0/>
            </Grid>
            <Grid item lg={8} xs={12} sm={6} style={{}}>
                <TabsView ></TabsView>
            </Grid>
            <Grid item lg={2} xs={12} sm={6} style={{}}>
            <Main2/>
            </Grid>
        </Grid> 
        </div>
    )
}
