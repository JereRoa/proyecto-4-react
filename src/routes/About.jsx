import "./About.css" 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
    <>

      <div>
        <h2 className="about-heading">Acerca de Nosotros</h2>
        <p className="about-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates unde sequi soluta molestias, exercitationem dignissimos quidem, consequatur praesentium expedita deleniti nam quis officia ullam, perspiciatis eum architecto sit quibusdam vel?</p>
      </div>
      <Row>
      <div>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="src/Media/Borboleta.jpg" />
          <Card.Body>
            <Card.Title>Compromiso</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </div>

      <div>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='src/Media/caption.jpg' />
          <Card.Body>
            <Card.Title>Experiencia</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </div>

      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="src/Media/foto-comida-3.jpg" />
          <Card.Body>
            <Card.Title>Dedicación</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </Row>
    </>
  )
}
