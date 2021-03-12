import { types } from "./gridTypes";
//for new tab on clicking
import store from "../store";
import genId from "../helpers/idGenerator";
import { getCurrentViewAllGrids } from "./selectors";
import axios from 'axios';

export const actions = {
  
  changeTab(tabIndex) {
    return (dispatch, getState) => {
      let state = getState();
      let currentViewIndex = state.currentViewInfo.index;
      let currentView = state.allViews[currentViewIndex];
      let viewId = state.currentViewInfo.id;
      let grid = currentView.allGrids[tabIndex];
      let gridId = grid.id;
      let gridUrl = grid.url;
      let fetchAgain = grid.fetchAgain;

      dispatch(actions.setTabIndex(tabIndex));

      if (fetchAgain) {
        dispatch(actions.fetchGridData(viewId, gridId, gridUrl));
      }
    };
  },

  setTabIndex(tabIndex) {
    return {
      type: types.SET_TAB_INDEX,
      payload: tabIndex,
    };
  },

  fetchGridData(viewId, gridId, url) {
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json().then((rowData) => {
            //console.log("ghghghg>>>>>>>"+rowData);
            dispatch(actions.fetchGridDataSuccess(viewId, gridId, rowData));
          });
        })
        .catch((err) => {
          dispatch(actions.fetchGridDataFail(err));
        });  
    };
  },
  
  fetchGridData1(viewId, gridId, url,country) {
    return (dispatch) => {
     
        axios
        .get(url, {
          params: {
            country: country
          }
        })
        .then(res => {
          //console.log(res.data)
          dispatch(actions.fetchGridDataSuccess(viewId, gridId, res.data));
          //setData(res.data)
        })
        .catch(err => {
          dispatch(actions.fetchGridDataFail(err));
          //console.log(err)
        })
    };
  },

  fetchGridDataSuccess(viewId, gridId, rowData) {
    return (dispatch) => {
      dispatch(actions.setGridData(viewId, gridId, rowData));
      dispatch(actions.setGridFetchAgainToFalse(viewId, gridId));
    };
  },

  fetchGridDataFail(err) {
    new Error(err, " <<<< FETCH GRID DATA FAIL");
  },


  setGridData(viewId, gridId, newData) {
    return {
      type: types.SET_GRID_DATA,
      payload: { viewId, gridId, newData },
    };
  },

  setGridFetchAgainToFalse(viewId, gridId) {
    return {
      type: types.SET_GRID_FETCH_AGAIN_TO_FALSE,
      payload: { viewId, gridId },
    };
  },


  saveGridSortModel(gridId, sortModel) {
    return {
      type: types.SAVE_GRID_SORT_MODEL,
      payload: { gridId, sortModel },
    };
  },
  saveGridFilterModel(gridId, filterModel) {
    return {
      type: types.SAVE_GRID_FILTER_MODEL,
      payload: { gridId, filterModel },
    };
  },

  //for new tab on clicking

  createNewTab(gridConfig,country) {
    return (dispatch, getState) => {
      let isViewAvailable = getState().currentViewInfo !== null;
      // give the grid an id
      gridConfig.id = genId();

      // handle edge case, when no views are available
      if (!isViewAvailable) {
        let newViewId = genId();
        dispatch(actions.createNewView(newViewId));
      }
      dispatch(actions.addNewTab(gridConfig));

      let currentViewAllGrids = getCurrentViewAllGrids(store.getState());
      let nextTabIndex = currentViewAllGrids.length - 1;
      let currentViewId = store.getState().currentViewInfo.id;

      dispatch(actions.setTabIndex(nextTabIndex));
      dispatch(
        actions.fetchGridData1(currentViewId, gridConfig.id, gridConfig.url,country)
      );
    };
  },
  
  addNewTab(gridConfig) {
    return {
      type: types.ADD_NEW_TAB,
      payload: gridConfig,
    };
  },
};
