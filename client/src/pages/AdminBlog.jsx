import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Table, Button } from "react-bootstrap";

const AdminBlog = () => {
  const navigate = useNavigate();
  const { datas, error, isLoading } = UseFetch("/api/v1/blogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (datas) {
      setBlogs(datas.blog);
    }
  }, [datas]);

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Button
        variant="primary"
        className="position-absolute"
        style={{ top: "10px", right: "10px" }}
        onClick={handleGoToDashboard}
      >
        Go to Admin Dashboard
      </Button>

      {/* Header */}
      <h2 className="mt-5">All Blogs</h2>

      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}

      <div className="table-responsive mt-4">
        {blogs && blogs.length > 0 ? (
          <Table
            striped
            bordered
            hover
            responsive
            size="sm"
            className="table-sm"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.owner}</td>
                  <td>
                    {blog.article.length > 100
                      ? `${blog.article.substring(0, 100)}...`
                      : blog.article}
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
