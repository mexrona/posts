import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import {Root} from "./components/Root";
import {Posts} from "./pages/posts";
import {AddPost} from "./pages/posts/add";
import {DetailPost} from "./pages/posts/detail";
import {EditPost} from "./pages/posts/edit";
import {Auth} from "./pages/auth";
import {Registration} from "./pages/registration";

/**
 * Главная - / - тут меню и мб виджет с 3мя последними постами
 * /posts - тут все посты с пагинацией, фильтрацией и сортировкой
 * /posts/id - страничка конкретного поста
 * /posts/id/edit - страничка редактирования поста
 * /posts/add - страничка добавления поста (под админом)
 * /auth - страничка авторизации
 * /register - страничка регистрации
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "posts",
                element: <Posts />,
            },
            {
                path: "posts/:id",
                element: <DetailPost />,
            },
            {
                path: "posts/:id/edit",
                element: <EditPost />,
            },
            {
                path: "posts/add",
                element: <AddPost />,
            },
            {
                path: "auth",
                element: <Auth />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
