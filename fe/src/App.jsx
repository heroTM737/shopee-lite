import "./App.css"
import Header from "./layout/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "@/router/routes.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className={"main-container"}>
                    <Routes>
                        {routes.map(item => (
                            <Route path={item.path} element={item.element} key={item.path} />
                        ))}
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default App
