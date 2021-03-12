import React from 'react'
import { Box,Button,Container,Grid,Paper,Tabs,Tab } from '@material-ui/core';
import { borders } from '@material-ui/system';

export default function Header() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    localStorage.setItem("tab",value);
    setValue(newValue);
    //props.setValue(newValue)
  };
  //console.log(this.props)
    return (
        <div>
        <Grid item xs={12} spacing={2} container style={{borderBottom:"1px solid #343774",margin:"0",padding:"0"}}>
            <Grid item lg={3} xs={12} sm={6}><div style={{color:"white",fontSize:"25px"}}>Panorama Usage Viewer</div></Grid>
            <Grid item lg={6} xs={12} sm={6}>
            
            </Grid>
            <Grid item lg={3} xs={12} sm={6}><div style={{color:"white"}}></div></Grid>
        </Grid>
        </div>
    )
}
