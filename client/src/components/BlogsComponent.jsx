import NavComponent from './NavComponent'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function BlogsComponent() {
    const API = "http://localhost:5500/api";

    const [blogs, setBlogs] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API}/blogs`);
            setBlogs(response.data.blogs);
        } catch (err) {
            alert("ดึงข้อมูลไม่สำเร็จ");
        }
    };

    useEffect(() => {
        fetchData()

    }, [])

    const comfirmDelete = (slug) => {
        Swal.fire({
            title: "คุณต้องการลบบทความหรือไม่",
            icon: "warning",
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                deletedBlog(slug)
            }
        })
    }
    const deletedBlog = async (slug) => {
        try {
            const result = await axios.delete(`${API}/blog/${slug}`)
            Swal.fire({
                title: "ลบบทความเรียบร้อย",
                icon: "success"
            })
            fetchData()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='container p-5'  >
            <NavComponent />
            <h1>
                อ่านบทความ
            </h1>
            <hr />
            {blogs.map((blog, index) => (
                <div className='row shadow p-3 mb-5 bg-body rounded' style={{}} key={index} >
                    <div className='col pt-3 pb-2'>
                        <Link to={`/blog/${blog.slug}`} >
                            <h2>{blog.title} </h2>
                        </Link>
                        <p>{blog.content.substring(0, 180)} </p>
                        <p className='text-muted'>ผู้เขียน {blog.author} , {new Date(blog.createdAt).toLocaleString()} </p>
                        {sessionStorage.token && (
                            <>
                                <Link style={{ marginRight: "1rem" }} to={`/blog/edit/${blog.slug}`} className='btn btn-outline-success'>แก้ไขบทความ</Link>
                                <button className='btn btn-danger' onClick={() => confirmDelete(blog.slug)}>ลบบทความ</button>
                            </>
                        )}

                    </div>
                </div>
            ))}


            <a className='' href="/create"></a>
        </div>
    )
}

export default BlogsComponent