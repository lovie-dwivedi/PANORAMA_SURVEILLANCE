import { types } from "../reducers/gridTypes";

import { produce } from "immer"; // https://www.youtube.com/watch?v=FmKjwh34Rn8
import {
 
  getGridById,
  getGridByViewAndGridId,

  //for new tab on clicking
  getCurrentViewAllGrids,
} from "./selectors";

export default function gridReducer(state = {}, action) {
  const payload = action.payload;
  switch (action.type) {

    case types.SET_TAB_INDEX:
      return changeTabIndex(state, payload);

    case types.SET_GRID_DATA:
      return setGridData(state, payload);

    case types.SET_GRID_FETCH_AGAIN_TO_FALSE:
      return setGridFetchAgainToFalse(state, payload);

    case types.SAVE_GRID_SORT_MODEL:
      return saveGridSortModel(state, payload);
  
    case types.SAVE_GRID_FILTER_MODEL:
      return saveGridFilterModel(state, payload);
  
//for new tab on clcking
    case types.ADD_NEW_TAB:
      return addNewTab(state, payload);

    default:
      return state;
  }
}

function changeTabIndex(state, tabIndex) {
  return produce(state, (draftState) => {
    let currentView = draftState.allViews[draftState.currentViewInfo.index];
    currentView.tabIndex = tabIndex;
  });
}


function setGridData(state, { viewId, gridId, newData }) {
  return produce(state, (draftState) => {
    let grid = getGridByViewAndGridId(draftState, viewId, gridId);
    grid.rowData = newData;
  });
}

function setGridFetchAgainToFalse(state, { viewId, gridId }) {
  return produce(state, (draftState) => {
    let grid = getGridByViewAndGridId(draftState, viewId, gridId);
    grid.fetchAgain = false;
  });
}


function saveGridSortModel(state, { gridId, sortModel }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);

    grid.sortModel = sortModel;
  });
}

function saveGridFilterModel(state, { gridId, filterModel }) {
  return produce(state, (draftState) => {
    let grid = getGridById(draftState, gridId);

    grid.filterModel = filterModel;
  });
}

function addNewTab(state, gridConfig) {
  return produce(state, (draftState) => {
    let currentViewAllGrids = getCurrentViewAllGrids(draftState);
    currentViewAllGrids.push(gridConfig);
  });
}







