import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  const { imageUrl, authorName, heading, description } = req.body;
  try {
    const blog = await prisma.blog.create({
      data: {
        imageUrl,
        authorName,
        heading,
        description,
      },
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: "Blog post could not be created" });
  }
};
