import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WEBSITEROUTES from "./router/Router"


const router = createBrowserRouter([
  ...WEBSITEROUTES,
]
)

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
