import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import News from "../../components/News/News";
import TearmsAndCondition from "../../components/Others/TearmsAndCondition";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";


export const router  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:()=>fetch(`http://localhost:5000/news`),
                element:<Home></Home>
            },
            {
                path:'/news/:id',
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`),
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/category/:id',
                loader:({params})=>fetch(`http://localhost:5000/categori/${params.id}`),
                element:<Category></Category>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/terms',
                element:<TearmsAndCondition></TearmsAndCondition>
            },
        ]

    }
])