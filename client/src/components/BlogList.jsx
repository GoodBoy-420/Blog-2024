import React, { useEffect, useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Col, Row, Card } from "react-bootstrap";

const BlogList = () => {
  const { datas, error, isLoading } = UseFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/blogs`
  );
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (datas) {
      const sortedBlogs = datas.blog
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
      setBlogs(sortedBlogs);
    }
  }, [datas]);

  return (
    <div>
      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}
      <Row>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Col key={blog._id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    By {blog.owner}
                  </Card.Subtitle>
                  <Card.Text>
                    {blog.article.length > 100
                      ? `${blog.article.substring(0, 100)}...`
                      : blog.article}
                  </Card.Text>
                  <Card.Text className="text-muted"></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No blogs found.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default BlogList;
