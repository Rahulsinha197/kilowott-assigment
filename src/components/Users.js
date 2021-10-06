import React, { useState, useEffect, useContext } from "react";
import { getUsers } from "../services/Api";
import { Card, CardText, CardBody, Button } from "reactstrap";
import { Container, Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { Context } from "../store/Context";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getUsers().then((res) => dispatch({ type: "USERS", payload: res.data }));
  }, []);

  const handleViewUsers = (record) => {
    console.log(record);

    history.push(`/post/${record}`);
  };

  return (
    <div>
      {state.users.map((user) => (
        <Card>
          <CardBody>
            <CardText>
              <Container>
                <Row>
                  <Col sm={3}>{user.id}</Col>
                  <Col sm={3}>{user.username}</Col>
                  <Col sm={3}>{user.name}</Col>
                  <Col sm={3}>
                    {" "}
                    <Button onClick={() => handleViewUsers(user.id)}>
                      Details
                    </Button>
                  </Col>
                </Row>
              </Container>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Users;
