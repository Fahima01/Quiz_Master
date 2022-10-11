import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import { QuizQuestionLoaderArray } from './Components/loaders/GetQuestionArray';
import QuizPlay from './Components/QuizPlay/Quizplay';

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
          element: <QuizPlay></QuizPlay>,
          loader: QuizQuestionLoaderArray,
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);
  return (
    <div >
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
