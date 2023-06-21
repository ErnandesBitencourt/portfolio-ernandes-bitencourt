
import React from "react";
import {Router}  from "./routes/Router"
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Themers";


const App = () => {
  return (
    <div>
     <ThemeProvider theme={Colors}>
        <Router/>
     </ThemeProvider>
    </div>
  );
}

export default App;