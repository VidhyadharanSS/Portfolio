import React from 'react';
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';


const Profile = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/VidhyadharanSS', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vidhyadharan-s-s-336301232', '_blank');
  };

  const handleDownloadResume = (format) => {
    const resumeUrl = format === 'pdf' ? '/resume.pdf' : '/resume.docx';
    window.open(resumeUrl, '_blank');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Profile
          </h1>
          <p className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            Dive in deep to explore my profile and learn more about my skills, experience, and projects.
          </p>
          <div className="text-center mb-4 d-flex justify-content-center gap-3">
  <Button variant="custom" onClick={handleGitHubClick}>
    GitHub
  </Button>
  <Button variant="custom" onClick={handleLinkedInClick}>
    LinkedIn
  </Button>
  <Dropdown>
    <Dropdown.Toggle variant="custom" id="dropdown-basic">
      Download Resume
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={() => handleDownloadResume('pdf')}>PDF</Dropdown.Item>
      <Dropdown.Item onClick={() => handleDownloadResume('docx')}>Word</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>
          <p className="text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
            Feel free to connect with me and explore my work!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;