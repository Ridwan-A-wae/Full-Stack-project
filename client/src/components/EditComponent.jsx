import { useState,useEffect } from "react"
import NavComponent from "./NavComponent"
import axios from "axios"
import Swal from "sweetalert2"
const API = "http://localhost:5500/api";

const EditComponent = () => {

const [state,setState] = useState({
    title:"",
    content:"",
    author:"",
    slug:""
})
const {title,content,author,slug} = state 


const inputValue =name=>event=> {
    setState({...state,[name]:event.target.value})
}

const submitForm = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(`${API}/blog/${blog.slug}`, { title, content, author });
        Swal.fire('แจ้งเตือน','บันทึกข้อมูลบทความเรียบร้อย','success');
    } catch (err) {
        Swal.fire('แจ้งเตือน',err.response.data.err,'error'
        );
    }
};
const API = "http://localhost:5500/api";
const currentUrl = window.location.href;
const parts = currentUrl.split('/');
const lastPart = parts[parts.length - 1];
const [blog, setBlog] = useState('')


const fetchData = async () => {
    try {
        const result = await axios.get(`${API}/blog/${lastPart}`)
        const {title,content,author,slug} = result.data
        setBlog({...blog,title,content,author,slug})
        

        console.log(title)
        console.log(content)
        console.log(author)
    } catch (err) {
        alert(err)
    }
}
useEffect(() => {
    fetchData()
    },[])

const submitContent = (e) => {
    setContent(e)
}

const showUpdate = () => (
    <form onSubmit={submitForm} >
    <div className="form-group">
          <label>ชื่อบทความ</label>
           <input value={title} onChange={inputValue("title")} type="text"  className="form-control w-100" />
    </div>
    <br />
    <div className="form-group">
          <label>รายละเอียด</label>
          <textarea onChange={inputValue("content")} className="form-control" value={content}></textarea>
    </div>
    <br />
    <div className="form-group">
          <label>ผู้เขียน</label>
           <input value={author} onChange={inputValue("author")} type="text" className="form-control" />
    </div>
    <br />
    <input style={{marginRight:"5px"}} type="submit" value="อัพเดท" className="btn btn-primary" />  
    <a style={{marginLeft:"5px",}} className="btn btn-success " href="/">ไปหน้าแรก</a>
</form>
    )


 
 

    return (
        <div className='container p-5'>
            <NavComponent/>
            <h1>แก้ไขบทความ</h1>
            <hr />
            {showUpdate()}

        </div>
    )
}
export default EditComponent