const slugify = require('slugify');
const Blogs = require('../models/blogs');

exports.create = async (req,res) => {
    const {title,content,author} = req.body
    const slug = slugify(title)

    switch(true) {
        case !title :
            res.status(400).json({
                err:"กรุณากรอกชื่อบทความ"
            })
        case !content :
            res.status(400).json({
                err:"กรุณากรอกรายละเอียดบทความ"
            })
    }
    try {
        const blog = await Blogs.create({title,content,author,slug});
        res.json(blog)
    }catch(err) {
        res.json(err)
    }
}

exports.getblogs = async (req,res) => {
    try {
        const blogs = await Blogs.find({});
    res.json({blogs})
    }catch (err) {
        res.status(400).json({
            error:"เกิดข้อผิดพลาดในการดึงข้อมูลบทความ"
        })
    }
}

exports.getblog = async (req,res) => {
    const {slug} = req.params
    try {
        const blog = await Blogs.findOne({slug})
        res.json(blog)
    }catch(err) {
        console.log("หาบทความไม่เจอ")
    }
}

exports.deleteblog = async (req,res) => {
    const {slug} = req.params
    try  {
        const response = await Blogs.findOneAndRemove({slug})
        res.json({
            data:"ลบบทความเรียบร้อย"
        })
    }catch(err) {
        res.status(400).json({
            error:err
        })
    }
}

exports.updateblog = async (req, res) => {
    const {slug} = req.params
    const { title,content,author } = req.body
    try {
        const response = await Blogs.findOneAndUpdate({ slug }, {title,content,author});
        res.json({
            data: "อัพเดทบทความเรียบร้อย"
        });
    } catch (err) {
        res.status(400).json({
            error: "อัพเดทข้อมูลไม่สำเร็จ"
        })
    }
}

