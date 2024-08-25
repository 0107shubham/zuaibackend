import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await prisma.blog.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: `Blog post with ID ${id} has been deleted successfully.`,
      data: deletedPost, // Optionally return the deleted post data
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Blog post with ID ${id} could not be deleted.`,
    });
  }
};
