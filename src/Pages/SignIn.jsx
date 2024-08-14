import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faImdb } from '@fortawesome/free-brands-svg-icons';
import '../Css/SignIn.css';

import backgroundvid from '../Components/Assets/Videos/cinemaparadisocroped.mp4';

const SignIn = () => {
  const handleGoogleLogin = () => {
    // Add Google login logic here
    alert('Login with Google');
  };

  const handleImdbLogin = () => {
    // Add IMDb login logic here
    alert('Login with IMDb');
  };

  return (
    <Container className="signin-page">
      <video className="video-background" autoPlay loop muted>
        <source src={backgroundvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="form-container animate__animated animate__fadeInDown">
        <h2 className="animate__animated animate__fadeInDown">Welcome to Flic!</h2>
        <p className="welcome-text animate__animated animate__fadeInDown">
          Join our community of cinema enthusiasts and film reviewers. Sign in to explore, rate, and share your favorite movies.
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email/Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="animate__animated animate__fadeInLeft" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="animate__animated animate__fadeInLeft" />
          </Form.Group>

          <Button variant="primary" type="submit" className="animate__animated animate__fadeInUp">
            Sign In
          </Button>
        </Form>
        <div className="mt-3 animate__animated animate__fadeInUp">
          <p>Don't have an account? <a href="/create-account">Create one</a></p>
        </div>

        <div className="social-login-buttons mt-4">
          <Button
            variant="outline-primary"
            className="social-login-button animate__animated animate__fadeInRight"
            onClick={handleGoogleLogin}
          >
            <FontAwesomeIcon icon={faGoogle} /> Login with Google
          </Button>
          <Button
            variant="outline-primary"
            className="social-login-button mt-2 animate__animated animate__fadeInRight"
            onClick={handleImdbLogin}
          >
            <FontAwesomeIcon icon={faImdb} /> Login with IMDb
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
