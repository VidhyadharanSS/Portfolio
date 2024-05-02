import React from 'react';
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      name: 'Cryptoswaps',
      description: 'Enabling decentralised exchange using atomic swaps procedure with less gas fees',
      link: 'https://github.com/VidhyadharanSS/CryptoDEX'
    },
    {
      name: 'Resume Maker',
      description: 'Creating resumes based on user requirements',
      link: 'https://github.com/VidhyadharanSS/ResumeMaker'
    },
    // Add more projects here
  ];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            My Projects
          </h1>
          <Card>
            <ListGroup variant="flush">
              {projects.map((project, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 style={{ fontFamily: 'Arial, sans-serif' }}>{project.name}</h5>
                      <p style={{ fontFamily: 'Arial, sans-serif' }}>{project.description}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on GitHub
                    </a>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;