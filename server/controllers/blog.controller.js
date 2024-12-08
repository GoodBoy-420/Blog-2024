import { BlogModel } from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const data = req.body;
    await BlogModel.create(data);
    return res.status(201).send({
      status: true,
      message: "blog created successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const showBlogs = async (req, res) => {
  try {
    const blog = await BlogModel.find({}, { versionKey: 0 });
    return res.status(200).send({
      status: true,
      message: "blogs found successfully",
      blog,
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await BlogModel.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).send({
        status: false,
        message: "blog not found ",
      });
    }
    return res.status(200).send({
      status: true,
      message: "blog deleted successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const updateBlog = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      message: "blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    console.log(error.toString());
  }
};
