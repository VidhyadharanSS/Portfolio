import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vidhyadharan-s-s-336301232', '_blank');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome to my Portfolio
          </h1>
          <p className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            Hi, I am Vidhyadharan S S. I am a pre-final year student at TCE Madurai.
          </p>
          <p className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            I am passionate about working on Java and Android app development. I have experience in building robust and scalable applications using Java and creating user-friendly mobile apps for the Android platform.
          </p>
          <p className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            With my strong problem-solving skills and attention to detail, I strive to deliver high-quality and efficient solutions. I am constantly learning and expanding my knowledge in the field of software development to stay up-to-date with the latest trends and technologies.
          </p>
          <div className="text-center mb-4">
            <Button variant="primary" onClick={handleLinkedInClick}>
              LinkedIn
            </Button>
          </div>
          <p className="text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
            Check my LinkedIn profile for more details.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;