import "/assets/scss/main.scss"

import * as React from "react"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import { store } from "./assets/stores/store";
import { BrowserRouter } from "react-router-dom";

import {App} from "./assets/components/App"

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);