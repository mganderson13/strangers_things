import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetails from './features/posts/PostDetails.jsx';
import PostPage from './features/posts/postPage.jsx';
import Root from './layout/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
  {
    path: "/",
    element: <PostPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
  },
],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
