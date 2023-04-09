import './App.css'
import Page1 from './pages/page1'
import Page2 from './pages/page2';
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import routeNames from './data/routes';

function App() {

  const router = createMemoryRouter([
    {
      path: routeNames[0],
      element: <Page1/>,
    },
    {
      path: routeNames[1],
      element: <Page2/>
    }
  ], {
    initialEntries: routeNames,
    initialIndex: 0,
  });


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
