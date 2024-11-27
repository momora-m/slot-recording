import { createBrowserRouter } from "react-router-dom";
import Base from '../pages/template/Base';
import Home from '../pages/Home';
import ModelList from "../pages/models/ModelList";
import ModelLayout from "../pages/template/ModelLayout";
import ModelDetail from "../pages/models/ModelDetail";
 

const router = createBrowserRouter([
    {        
        path: "/",
        element: <Base />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/model',
                element: <ModelLayout />,
                children: [
                    {
                        index: true,
                        element: <ModelList />,
                    },
                    {
                        path: ':modelId',
                        element: <ModelDetail />,
                    }
                ]
            }
        ]
    }
])

export default router;