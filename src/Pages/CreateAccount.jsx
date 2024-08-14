import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../Css/CreateAccount.css';

import backgroundvid from '../Components/Assets/Videos/cineparadisobg.mp4';

const CreateAccount = () => {
  return (
    <Container className="create-account-page">
      <video className="video-background" autoPlay loop muted>
        <source src={backgroundvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="form-container animate__animated animate__fadeInDown">
        <h2>Create Account</h2>
        <p className="welcome-text">
          Join our community of cinema enthusiasts and film reviewers. Create an account to explore, rate, and share your favorite movies.
        </p>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group controlId="formBasicFavoriteMovies">
            <Form.Label>Favorite Movies</Form.Label>
            <Form.Control type="text" placeholder="Enter favorite movies" />
          </Form.Group>

          <Form.Group controlId="formBasicFavoriteGenres">
            <Form.Label>Favorite Genres</Form.Label>
            <Form.Control type="text" placeholder="Enter favorite genres" />
          </Form.Group>

          <Form.Group controlId="formBasicBio">
            <Form.Label>Short Bio</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tell us a bit about yourself" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
        <div className="mt-3">
          <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
      </div>
    </Container>
  );
};

export default CreateAccount;
