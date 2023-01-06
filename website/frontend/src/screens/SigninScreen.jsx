import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

const SigninScreen = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  return (
    <div>
      <Container className="small-container">
        <Helmet>
          <title>Sign In</title>
        </Helmet>

        <Row className="justify-content-md-center">
          <Col lg={6}>
            <h1 className="my-3 ">Sign In</h1>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter password"
                />
              </Form.Group>
              <div className="mb-3">
                <Button type="submit">Sign In</Button>
              </div>
              <div className="mb-3">
                New customer?
                <Link to={`/signup?redirect=${redirect}`}>
                  Create your account
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SigninScreen;
