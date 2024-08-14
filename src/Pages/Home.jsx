import React, { useRef } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Css/Home.css';

import user from '../Components/Assets/still_liked/user.png';
import age16 from '../Components/Assets/still_liked/age16.png';
import anbesivam from '../Components/Assets/still_liked/anbesivam.png';
import heyram from '../Components/Assets/still_liked/heyram.png';
import kabali from '../Components/Assets/still_liked/kabali.png';
import katradhutamil from '../Components/Assets/still_liked/katradhutamil.png';
import magamuni from '../Components/Assets/still_liked/magamuni.png';
import mahanadhi from '../Components/Assets/still_liked/mahanadhi.png';
import boat from '../Components/Assets/still_liked/boat.png';
import moopir from '../Components/Assets/still_liked/moopir.png';
import nayagan from '../Components/Assets/still_liked/nayagan.png';
import satya from '../Components/Assets/still_liked/satya.png';
import vanisi from '../Components/Assets/still_liked/vanisi.png';
import vasoolraja from '../Components/Assets/still_liked/vasoolraja.png';


import blog1 from '../Components/Assets/blogs/pic1.png'
import blog2 from '../Components/Assets/blogs/pic2.png'
import blog3 from '../Components/Assets/blogs/pic3.png'
import blog4 from '../Components/Assets/blogs/pic4.png'
import blog5 from '../Components/Assets/blogs/pic5.png'
import blog6 from '../Components/Assets/blogs/pic6.png'

import news1 from '../Components/Assets/news/pic1.png'
import news2 from '../Components/Assets/news/pic2.png'
import news3 from '../Components/Assets/news/pic3.png'

import filmpic from '../Components/Assets/popularmovies/longlegs.jpg';
import filmpic2 from '../Components/Assets/popularmovies/twisters.jpg';
import storypic1 from '../Components/Assets/popularmovies/goatlife.jpg';
import storypic2 from '../Components/Assets/popularmovies/goatlife.jpg';
import storypic3 from '../Components/Assets/popularmovies/goatlife.jpg';
import storypic4 from '../Components/Assets/popularmovies/goatlife.jpg';
import storypic5 from '../Components/Assets/popularmovies/goatlife.jpg';
import storypic6 from '../Components/Assets/popularmovies/goatlife.jpg';
import newstop1 from '../Components/Assets/popularmovies/goatlife.jpg'; // Add images for the top news section
import newstop2 from '../Components/Assets/popularmovies/goatlife.jpg';
import newstop3 from '../Components/Assets/popularmovies/goatlife.jpg';

const Home = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Container fluid className="home-page">
      <Row className="hero-section justify-content-center align-items-center">
        <Col md={8} className="d-flex flex-column justify-content-center text-center">
          <h1 className="hero-title">Cinema</h1>
          <p className="hero-description">
            Discover, track, and review your favorite movies. Dive into a world of cinema with personalized recommendations and screenplay enhancements.
          </p>
          <Button variant="primary" href="/films" className="hero-button">
            Explore Films
          </Button>
        </Col>
      </Row>
      <Row className="features-section text-center justify-content-center">
        <Col md={3} className="feature-card">
          <h2>Track Your Favorites</h2>
          <p>Keep a record of the films you’ve watched and those you want to see.</p>
        </Col>
        <Col md={3} className="feature-card">
          <h2>Personalized Recommendations</h2>
          <p>Get movie suggestions based on your tastes and screenplay interests.</p>
        </Col>
        <Col md={3} className="feature-card">
          <h2>Enhance Your Screenplay Skills</h2>
          <p>Utilize our tools to refine your screenplay writing abilities and get feedback.</p>
        </Col>
      </Row>
      <Row className="movie-cards-section">
        <h2 className="movie-cards-title">Still Loved by Flic'ers!</h2>
        <div className="scroll-buttons">
          <Button variant="light" onClick={scrollLeft} className="scroll-button">{'<'}</Button>
          <Button variant="light" onClick={scrollRight} className="scroll-button">{'>'}</Button>
        </div>
        <div className="movie-cards-wrapper">
          <div className="movie-cards" ref={scrollRef}>
            <div className="movie-card">
              <img src={user} alt="Longlegs" />
              <h3>Aaranya Kaandam</h3>
              <p>A day in the lives of six characters in a gritty, crime-ridden underworld.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={age16} alt="Longlegs" />
              <h3>16 Vayathinilae</h3>
              <p>A young girl's life changes after an encounter with a village outcast.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={anbesivam} alt="Longlegs" />
              <h3>Anbe Sivam</h3>
              <p>An unexpected journey unites a cynical ad filmmaker and a communist revolutionary.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={heyram} alt="Longlegs" />
              <h3>Hey Ram</h3>
              <p>A man's quest for vengeance intertwines with historical events leading to Mahatma Gandhi's assassination.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={kabali} alt="Longlegs" />
              <h3>Kabali</h3>
              <p>An aged gangster seeks revenge and reunites with his lost family in Malaysia.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={katradhutamil} alt="Longlegs" />
              <h3>Katradhu Tamizh</h3>
              <p>A Tamil teacher's descent into madness and violence due to societal neglect and personal tragedy.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={magamuni} alt="Longlegs" />
              <h3>Maga Muni</h3>
              <p>Twin brothers' lives intersect amidst crime, vengeance, and political intrigue.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={mahanadhi} alt="Longlegs" />
              <h3>Mahanadhi</h3>
              <p>A man's tragic journey to rescue his family, destroyed by fraud and exploitation.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
            <img src={boat} alt="Longlegs" />
            <h3>boat</h3>
            <p>BOAT Based On A True Incident என டைட்டில் கார்டில் போட்ட இடத்திலேயே சிம்புதேவன் கம்பேக் என்பதை நிரூபித்துள்ளார்.</p>
            <Button variant="primary" className="watch-now-button">Watch Now</Button>
          </div>
            <div className="movie-card">
              <img src={moopir} alt="Longlegs" />
              <h3>Moondram Pirai</h3>
              <p>A teacher cares for an amnesiac woman, forming an unusual, poignant bond.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={nayagan} alt="Longlegs" />
              <h3>Nayakan</h3>
              <p>A man rises from the slums to become a revered and feared underworld don.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={satya} alt="Longlegs" />
              <h3>Sathya</h3>
              <p>A man's quest for truth and justice leads him to confront corruption and crime.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={vanisi} alt="Longlegs" />
              <h3>Varumayin Niram Sigappu</h3>
              <p>Unemployed graduates struggle to find meaning and survival in a ruthless city.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            <div className="movie-card">
              <img src={vasoolraja} alt="Longlegs" />
              <h3>Vasool Raja MBBS</h3>
              <p>A gangster enrolls in medical college to fulfill his father's dream, causing comedic chaos.</p>
              <Button variant="primary" className="watch-now-button">Watch Now</Button>
            </div>
            {/* Add more movie cards as needed */}
          </div>
        </div>
      </Row>
      <Row className="reviews-section">
        <h2 className="reviews-title">User Reviews</h2>
        <div className="review-card">
          <h3>Deadpool & Wolverine (2024)</h3>
          <p>"some fellas here be bitching and crying over a movie who doesn't care if makes a lot of sense or not. Just appreciate the good things about this movie and move on."</p>
          <div className="stars">
            ★★★★☆
          </div>
        </div>
        <div className="review-card">
          <h3>The Goat Life (2024)</h3>
          <p>"It has been so long that I have treat my eyes with a good cinematography that captures the idiomatic of an landscape."</p>
          <div className="stars">
            ★★★★☆
          </div>
        </div>
        <div className="review-card">
          <h3>Raayan (2024)</h3>
          <p>"Keeping aside an underwhelming second act, the action drama delivers big with its first and third acts backed by a scintillating soundtrack and strong performances."</p>
          <div className="stars">
            ★★★☆☆
          </div>
        </div>
      </Row>
      <Row className="recent-stories-section">
        <h2 className="recent-stories-title">Recent Blogs</h2>
        <div className="recent-stories-grid">
          <div className="recent-story-card">
            <img src={blog1} alt="Story 1" />
            <div className="story-content">
              <h3>Spotlight on India 2024</h3>
              <p>A record seven Indian productions made it into our midyear top 25—but let’s not stop there. Siddhant Adlakha recommends eight more 2024 ﬁlms coming down the pipe, in Hindi, Malayalam, Garo, Tamil, Marathi and more.</p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          <div className="recent-story-card">
            <img src={blog2} alt="Story 2" />
            <div className="story-content">
              <h3>Scorsese’s Screening Room</h3>
              <p>From Montgomery Clift morality plays to Kubrick masterpieces, Martin Scorsese and Leonardo DiCaprio recall the hard-boiled noir and fast-talkin’ ﬁlm inﬂuences that have fed the six features they’ve made together so far. Plus: Leo introduces Marty to Miyazaki.</p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          <div className="recent-story-card">
            <img src={blog3} alt="Story 2" />
            <div className="story-content">
              <h3>Phones Off, Lamps On!</h3>
              <p>As our new showtimes feature goes wide, the Letterboxd crew share our favorite 2023 cinema experiences—from a no-seats Stop Making Sense dance party to a raucous Angus, Thongs and Perfect Snogging rep screening to a near-religious John Wick 4 multiplex return. </p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          <div className="recent-story-card">
            <img src={blog4} alt="Story 2" />
            <div className="story-content">
              <h3>Eye of the Storm</h3>
              <p>As Twisters swirls its way into theaters, Matt Goldberg explores three diﬀerent eras of disaster movies and why the 1990s hit the sweet spot between the star-studded mayhem of the 1970s and the CGI-drenched chaos of the post-2000s.</p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          <div className="recent-story-card">
            <img src={blog5} alt="Story 2" />
            <div className="story-content">
              <h3>Watchlist This!</h3>
              <p>FEATURING: MOTHER, COUCH!, THE CONVERT, FANCY DANCE, NATIONAL ANTHEM, CHRONICLES OF A WANDERING SAINT, BIG BOYS, ORLANDO, MY POLITICAL BIOGRAPHY.</p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          <div className="recent-story-card">
            <img src={blog6} alt="Story 2" />
            <div className="story-content">
              <h3>Oppenheimer stars Cillian Murphy</h3>
              <p>This story was written during the 2023 SAG-AFTRA strike. Without the labor of the actors currently on strike, many of the films covered on Journal wouldn’t exist.</p>
              <Button variant="primary" className="read-more-button">Read More</Button>
            </div>
          </div>
          {/* Add more recent story cards as needed */}
        </div>
      </Row>
      <Row className="top-news-section">
        <h2 className="top-news-title">Top News</h2>
        <div className="top-news-grid">
          <div className="top-news-card">
            <img src={news1} alt="News 1" />
            <div className="news-content">
              <h3>Robert Downey Jr. Announced as Marvel’s Doctor Doom</h3>
              <p>Jul 28  IMDb News</p>
            </div>
          </div>
          <div className="top-news-card">
            <img src={news2} alt="News 2" />
            <div className="news-content">
              <h3>‘Deadpool & Wolverine’ Obliterates R-Rated Record With $205 Million Opening Weekend, Eighth-Biggest in Box Office History</h3>
              <p>Jul 28  Consequence - Film News</p>
            </div>
          </div>
          <div className="top-news-card">
            <img src={news3} alt="News 3" />
            <div className="news-content">
              <h3>‘Thunderbolts’ First Footage Wows Comic Con as Florence Pugh and David Harbour Kick Ass in Marvel’s Villain Team Up</h3>
              <p>Jul 28  Variety Film + TV</p>
            </div>
          </div>
        </div>
      </Row>
       {/* Footer Section */}
       <footer className="footer-section">
        <Container>
          <Row>
            <Col md={3}>
              <h5>About Us</h5>
              <p>Learn more about flic and our mission to bring you the best in cinema.</p>
            </Col>
            <Col md={3}>
              <h5>Contact</h5>
              <p>Have questions? Reach out to us at contact@flic.com.</p>
            </Col>
            <Col md={3}>
              <h5>Newsletter</h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <FormControl type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </Col>
            <Col md={3}>
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 flic. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Home;
