import './App.css'
import Header from "./layout/Header.jsx";
import {RouterProvider} from "react-router-dom";
import router from "@/router/router.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'main-container'}>
                <RouterProvider router={router}/>
            </div>
        </div>
    )
}

export default App
