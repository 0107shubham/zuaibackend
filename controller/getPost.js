import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: "Could not retrieve blog posts" });
  }
};
