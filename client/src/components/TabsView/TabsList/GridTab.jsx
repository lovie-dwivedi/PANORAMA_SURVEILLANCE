import Tab from "@material-ui/core/Tab";
import React, { Fragment } from "react";

function GridTab(props) {
  const { classes, gridName = "New Tab", gridId, index, ...tabProps } = props;

  return (
    <Fragment>
     
        <Tab
          {...tabProps}
          label={gridName}
          //classes={{ wrapper: classes.tabWrapper }}
          //component="div" 
          //{...a11yProps(index)}
         
        ></Tab>
      
    </Fragment>
  );
}

export default React.memo(GridTab);

/*
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
*/