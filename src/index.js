import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

import store from "./store";
import {Provider} from 'react-redux';

const {
dateTime,
newTasks,
newOrders,
tickets,
orders,
taskItem,
tasks,
messages
} = state;

ReactDOM.render(
  <Provider store={store}>
  <App 
    dateTime={dateTime}
    orders={orders} 
    messages={messages}
    tasks={tasks}
    />
    </Provider>
    ,
  document.getElementById("root")
);
