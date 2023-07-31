import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Routing from "./pages/routing/Routing.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const COLORS = {
  brand: {
    primary: "#1a365d",
    secondary: "#153e75",
  },
};

const THEME = extendTheme({ colors: COLORS });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={THEME}>
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
