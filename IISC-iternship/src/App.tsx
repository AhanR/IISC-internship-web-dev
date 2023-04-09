import './App.css'
import Page1 from './page1'
import { RouterProvider, createMemoryRouter } from "react-router-dom"

function App() {

  const router = createMemoryRouter([
    {
      path: "/",
      element: <Page1/>,
    }
  ], {
    initialEntries: ["/"],
    initialIndex: 0,
  });


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
