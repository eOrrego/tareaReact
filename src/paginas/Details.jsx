import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const Details = () => {

  const { id } = useParams();
  const [dato, setDato] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setDato(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [id]);

  return (
    <Container className='animate__animated animate__backInUp'>
      <Row className="justify-content-md-center my-4">
        <Col xs lg="6">
          <Card className="text-center">
            <Card.Body>
              <Card.Img variant="top" src={dato.image} />
              <Card.Title>{dato.name}</Card.Title>
              <Card.Text>
                Genero:
                {dato.gender}
              </Card.Text>
              <Card.Text>
                Especie:
                {dato.species}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{dato.status}</Card.Footer>
          </Card>
        </Col>
      </Row>
      {console.log(error)}
    </Container>


  )
}

export default Details