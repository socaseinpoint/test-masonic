import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from "./pages/List";
import Show from "./pages/Show";
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/:id",
    element: <Show />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
