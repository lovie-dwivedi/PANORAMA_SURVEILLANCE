import React from "react";

import TabsList from "./TabsList/TabsList";
import PanelsList from "./PanelsList/PanelsList";

export const TabsView = (props) => {
  return (
    <div >
      <TabsList></TabsList>
      <PanelsList></PanelsList>
    </div>
  );
};

export default React.memo(TabsView);
