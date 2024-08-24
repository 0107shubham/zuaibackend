import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.blog.delete({
      where: { id },
    });
    res.status(204).send(); // 204 No Content indicates successful deletion
  } catch (error) {
    res.status(400).json({ error: "Blog post could not be deleted" });
  }
};
