import React, { useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import parisImage from '../images/paris.jpg';
import baliImage from '../images/bali.jpg';
import romeImage from '../images/rome.jpg';
import tokyoImage from '../images/tokyo.jpg';
import capetownImage from '../images/capetown.jpg';
import dubaiImage from '../images/dubai.jpg';
import machuImage from '../images/machupicchu.jpg';
import sydneyImage from '../images/sydney.jpg';
import santoriniImage from '../images/santorini.jpg';
import nycImage from '../images/nyc.jpg';

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: parisImage,
    description: "Experience the romance of Paris with its iconic landmarks like the Eiffel Tower and Louvre Museum.",
    price: "$1000"
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: baliImage,
    description: "Relax on stunning beaches, explore ancient temples, and indulge in delicious cuisine in Bali.",
    price: "$800"
  },
  {
    id: 3,
    name: "Rome, Italy",
    image: romeImage,
    description: "Discover the ancient history of Rome, home to iconic sites like the Colosseum, Vatican City, and Trevi Fountain.",
    price: "$1200"
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image: tokyoImage,
    description: "Experience the bustling metropolis of Tokyo with its vibrant neighborhoods, delicious street food, and cutting-edge technology.",
    price: "$1500"
  },
  {
    id: 5,
    name: "New York City, USA",
    image: nycImage,
    description: "Explore the Big Apple, known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
    price: "$1800"
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    image: capetownImage,
    description: "Visit the vibrant city of Cape Town, surrounded by natural beauty including Table Mountain and stunning beaches.",
    price: "$900"
  },
  {
    id: 7,
    name: "Sydney, Australia",
    image: sydneyImage,
    description: "Experience the laid-back charm of Sydney, home to the iconic Sydney Opera House, beautiful beaches, and vibrant culture.",
    price: "$1400"
  },
  {
    id: 8,
    name: "Machu Picchu, Peru",
    image: machuImage,
    description: "Embark on a journey to the ancient Incan city of Machu Picchu, nestled high in the Andes Mountains.",
    price: "$1600"
  },
  {
    id: 9,
    name: "Santorini, Greece",
    image: santoriniImage,
    description: "Relax on the stunning beaches of Santorini and admire its iconic whitewashed buildings against the backdrop of the Aegean Sea.",
    price: "$1100"
  },
  {
    id: 10,
    name: "Dubai, UAE",
    image: dubaiImage,
    description: "Experience the glitz and glamour of Dubai, known for its towering skyscrapers, luxury shopping, and desert adventures.",
    price: "$2000"
  }
];

const DestinationsSection = () => {
    const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  
    const handleDestinationClick = (destination) => {
      setSelectedDestination(destination);
    };
  
    return (
      <section id="destinations" className="destinations py-4">
        <Container>
          <h2 className="text-center mb-4" id='popular-destination'>Popular Destinations</h2>
          <Row>
            <Col md={4}>
              <Card
                onClick={() => handleDestinationClick(selectedDestination)}
                style={{ cursor: 'pointer' }}
                className="position-relative"
              >
                <Card.Img
                  variant="top"
                  src={selectedDestination.image}
                  className="img-fluid"
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                </div>
                <Card.Body>
                  <Card.Title>{selectedDestination.name}</Card.Title>
                  <Card.Text>{selectedDestination.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>{selectedDestination.price}</div>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <ListGroup>
                {destinations.map(destination => (
                  <ListGroup.Item
                    key={destination.id}
                    action
                    active={selectedDestination.id === destination.id}
                    onClick={() => handleDestinationClick(destination)}
                  >
                    {destination.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
  export default DestinationsSection;