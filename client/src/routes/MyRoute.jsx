import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "../App"
import FormComponent from "../components/FormComponent"
import BlogsComponent from "../components/BlogsComponent"
import SingleComponent from "../components/SingleComponent"
import EditComponent from "../components/EditComponent"
import LoginComponent from "../components/LoginComponent"

const MyRoute =() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/create" element={<FormComponent/>} />
                <Route path="/blogs" element={<BlogsComponent/>} />
                <Route path="/blog/:slug" element={<SingleComponent/>} />
                <Route path="/blog/edit/:slug" element={<EditComponent/>} />
                <Route path="/login" element={<LoginComponent/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoute