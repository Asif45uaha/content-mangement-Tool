import express from 'express'
import { CreatePost, deletePost, getAllBlogs, getEdidtedData, getPosts, getSinglePostDetail, updatePost } from '../controllers/post.js';
import { getAuthorDetails, loginUser, loginUserData, signupUser } from '../controllers/user.js';
const router = express.Router()

//Post Routes
router.post("/createpost", CreatePost)
router.get("/getposts", getPosts)
router.get("/postdetail/:id", getSinglePostDetail)
router.get("/getallblogs", getAllBlogs)
router.get("/edit/:id", getEdidtedData)
router.put("/update/:id", updatePost)
router.delete("/delete/:id", deletePost)

//user Routes
router.post("/signup", signupUser)
router.post("/login", loginUser)
router.get("/user/:id", loginUserData)
router.get("/getauthordetails/:id", getAuthorDetails)
export default router;