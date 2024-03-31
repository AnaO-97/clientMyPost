import './App.css';
import { useSelector } from "react-redux";
import { Navbar, Home, Landing } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();
  const userData   = useSelector(( state )=> state.userData);

  return (
    <div className = { pathname !== "/landing" ? "App" : "Landing" }>
      {
        pathname !== "/landing"
        ? <Navbar userData = { userData }/>
        : null
      }

      <Routes>
        <Route exact path = "/landing"
               element    = { <Landing/> } 
        > </Route>

        <Route exact path = "/home"
               element    = { <Home  userData = { userData } pathname = { pathname }/> } 
        > </Route>

        <Route exact path = "/home/settings"
               element    = { <Home  userData = { userData } pathname = { pathname }/> } 
        > </Route>

        <Route exact path = "/home/modifyPost"
               element    = { <Home  userData = { userData } pathname = { pathname }/> } 
        > </Route>
      </Routes>
    </div>
  );
}

export default App;