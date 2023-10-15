import mongoose from "mongoose";
import postModel from "../models/post.js";

export const CreatePost = async (req, res) => {
    try {
        const { BlogName, AuthorName, PostDate, thumbnail, content } = req.body;
        const post = await postModel.create({
            BlogName, AuthorName, PostDate, thumbnail, content
        })
        res.status(201).json({ "success": "ok", data: post })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const getPosts = async (req, res) => {
    try {
        const allPosts = await postModel.find({})
        res.status(200).json(allPosts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const getSinglePostDetail = async (req, res) => {
    try {
        const { id } = req.params
        const singlePost = await postModel.findById(id)
        // console.log(singlePost);
        res.status(200).json(singlePost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const posts = await postModel.find({})
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const getEdidtedData = async (req, res) => {
    try {
        const { id } = req.params
        const user = await postModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await postModel.findByIdAndUpdate(id, req.body)
        return res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await postModel.findByIdAndDelete(id)
        res.status(200).json(deletedPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.msg })
    }
}