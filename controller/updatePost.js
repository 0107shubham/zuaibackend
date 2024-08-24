import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, authorName, heading, description, authorUrl, category } =
    req.body;
  console.log(req.body);

  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        imageUrl,
        authorName,
        heading,
        description,
        authorUrl,
        category,
      },
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: "Blog post could not be updated" });
  }
};
