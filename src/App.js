import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
