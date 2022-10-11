import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Quiz from './Components/Quiz/Quiz';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          element: <Home></Home>,
          path: "/",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
