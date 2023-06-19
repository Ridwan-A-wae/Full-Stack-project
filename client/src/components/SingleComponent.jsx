import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavComponent from './NavComponent';

function SingleComponent(props) {

    const API = "http://localhost:5500/api";
    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const lastPart = parts[parts.length - 1];
    const [blog, setBlog] = useState('')


    const fetchData = async () => {
        try {
            const result = await axios.get(`${API}/blog/${lastPart}`)
            setBlog(result.data)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
     fetchData()
     },[])
    return (
        <div className='container p-5'>
            <NavComponent/>
            <h1>{blog.title} </h1>
            <p>{blog.content} </p>
            <p className='text-muted'>ผู้เขียน {blog.author} , {new Date(blog.createdAt).toLocaleString()} </p>

        </div>
    )
}

export default SingleComponent