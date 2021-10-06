import React, { useEffect, useContext } from "react";
import { getUserPosts, getUsersById } from "../services/Api";
import Image from "../images/iStock-476085198.jpg";
import "../App.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../store/Context";
import { Container, Row, Col } from "react-grid-system";

const Posts = ({ match }) => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const { user, posts } = state;

  const getUserInfo = () => {
    getUserPosts(match.params.id).then((res) => {
      dispatch({ type: "POST", payload: res.data });
    });
    getUsersById(match.params.id).then((res) => {
      dispatch({ type: "USER", payload: res.data });
    });
  };
  const onPostClick = (postInfo) => {
    localStorage.setItem("post", JSON.stringify(postInfo));
    history.push(`/post/comments/${postInfo.id}`);
  };
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardImg className="cardImage" src={Image} alt="Card image cap" />
          <CardTitle tag="h5">{user && user.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {user && user.email}
            <br />
            {user && user.phone}
          </CardSubtitle>
          <CardText>
            {user && user.address?.city}
            {user && user.address?.street}
            {user && user.address?.suite}
            <br />
            {user && user.address?.zipcode}
          </CardText>
        </CardBody>
      </Card>
      <Container fluid>
        <Row>
          {posts.map((post) => (
            <Col
              xs={12}
              md={3}
              justify="around"
              onClick={() => onPostClick(post)}
            >
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  <CardText>{post.body}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
