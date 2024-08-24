import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: Number(id) },
    });
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ error: "Blog post not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Could not retrieve the blog post" });
  }
};
