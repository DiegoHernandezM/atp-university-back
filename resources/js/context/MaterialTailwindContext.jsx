import { createContext, useContext, useReducer } from "react";

const MaterialTailwindContext = createContext();

export function useMaterialTailwindController() {
  return useContext(MaterialTailwindContext);
}

export function MaterialTailwindProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MaterialTailwindContext.Provider value={[state, dispatch]}>
      {children}
    </MaterialTailwindContext.Provider>
  );
}
const storageSidenavType = localStorage.getItem('setSidenavType');
const initialState = {
  fixedNavbar: false,
  openSidenav: false,
  sidenavColor: "white",
  sidenavType: storageSidenavType || "white",
  transparentNavbar: true,
  openConfigurator: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDENAV":
        return { ...state, openSidenav: action.value };
    case "SIDENAV_TYPE":
        return { ...state, sidenavType: action.value };
    case "SIDENAV_COLOR":
        return { ...state, sidenavColor: action.value };
    case "TRANSPARENT_NAVBAR":
        return { ...state, transparentNavbar: action.value };
    case "FIXED_NAVBAR":
        return { ...state, fixedNavbar: action.value };
    case "SET_OPEN_SIDENAV":
      return { ...state, openSidenav: action.payload };
    case "OPEN_CONFIGURATOR":
        return { ...state, openConfigurator: action.value };
    case "SET_FIXED_NAVBAR":
      return { ...state, fixedNavbar: action.payload };
    default:
      return state;
  }
}

export function setOpenSidenav(dispatch, value) {
  dispatch({ type: "SET_OPEN_SIDENAV", payload: value });
}

export function setOpenConfigurator(dispatch, value) {
    dispatch({ type: "OPEN_CONFIGURATOR", value });
}


export function setSidenavType(dispatch, value) {
  console.log("selecciono: "+value);
  localStorage.setItem('setSidenavType', value);
  dispatch({ type: "SIDENAV_TYPE", value });
  location.reload();
}

export function setSidenavColor(dispatch, value) {
  dispatch({ type: "SIDENAV_COLOR", value });
}


export function setTransparentNavbar(dispatch, value) {
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
}

export function setFixedNavbar(dispatch, value) {
  dispatch({ type: "FIXED_NAVBAR", value });
}

