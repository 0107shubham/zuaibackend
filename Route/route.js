import express from "express";
const route = express.Router();

import { createPost } from "../controller/createPost.js";
import { deletePost } from "../controller/delete.js";
import { getAllPosts } from "../controller/getPost.js";
import { getPostById } from "../controller/getPostById.js";
import { updatePost } from "../controller/updatePost.js";

route.post("/blog", createPost);
route.put("/posts/:id", updatePost);
route.delete("/posts/:id", deletePost);
route.get("/posts/:id", getPostById);
route.get("/posts", getAllPosts);

export default route;
