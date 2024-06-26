import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";  

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <TodoProvider>
          <App />
        </TodoProvider>  
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
