import { useState } from "react"
import NavComponent from "./NavComponent"
import axios from "axios"
import Swal from "sweetalert2"


const FormComponent = () => {
    const API = "http://localhost:5500/api";

    const [state,setState] = useState({
        title:"",
        content:"",
        author:"",
        slug:""
    })
const {title,content,author} = state 



const inputValue =name=>event=> {
    setState({...state,[name]:event.target.value})
}


const submitForm = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${API}/create`, { title, content, author });
        Swal.fire('แจ้งเตือน','บันทึกข้อมูลบทความเรียบร้อย','success');
        setState({...state,content:"",title:"",author:""})
    } catch (err) {
        Swal.fire('แจ้งเตือน',err.response.data.err,'error'
        );
    }
};

    return (
        <div className='container p-5'>
            <NavComponent/>
            <h1>เขียนบทความ</h1>
            <hr />
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
                <input style={{marginRight:"5px"}} type="submit" value="บันทึก" className="btn btn-primary" />  
                <a style={{marginLeft:"5px",}} className="btn btn-success " href="/">ไปหน้าแรก</a>
            </form>
        </div>
    )
}
export default FormComponent