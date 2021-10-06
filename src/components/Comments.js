import React, { useState, useEffect, useContext } from "react";
import { getUserComments } from "../services/Api";
import "../App.scss";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Context } from "../store/Context";
import { Container, Row, Col } from "react-grid-system";

const Comments = ({ match }) => {
  const [state, dispatch] = useContext(Context);
  const [post, setPost] = useState({});
  const { comments } = state;

  const getUserPostComment = () => {
    getUserComments(match.params.id).then((res) => {
      dispatch({ type: "COMMENTS", payload: res.data });
    });
  };
  useEffect(() => {
    setPost(JSON.parse(localStorage.getItem("post")));
    getUserPostComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardBody>
            <CardTitle tag="h3">Post</CardTitle>
            <CardTitle tag="h6">{post && post.title}</CardTitle>
            <CardText>{post && post.body}</CardText>
          </CardBody>
        </CardBody>
      </Card>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h4>Comments</h4>
      </div>
      <Container fluid>
        <Row>
          {comments.map((comment) => (
            <Col xs={12} md={12} justify="around">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{comment.body}</CardTitle>
                  <CardText>
                    {comment.name}: {comment.email}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
