import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './CardList.css'; // Optional: For custom styles

// Sample data for the cards
const cardData = [
  { id: 1, title: "Card 1", description: "This is the first card", imageUrl: "https://www.google.com/imgres?q=image%20pantalon&imgurl=https%3A%2F%2Fwww.molinel.com%2F14810-thickbox_default%2Fpantalon-homme-slack-coupe-chino.jpg&imgrefurl=https%3A%2F%2Fwww.molinel.com%2F1105-pantalon-homme-slack-coupe-chino.html&docid=KusMZ1B0iFj_oM&tbnid=A_gzHGrP75e0vM&vet=12ahUKEwj3tty34o-KAxU4XUEAHWVKJLMQM3oECBgQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwj3tty34o-KAxU4XUEAHWVKJLMQM3oECBgQAA", price: "$10.00" },
  { id: 2, title: "Card 2", description: "This is the second card", imageUrl: "https://via.placeholder.com/150", price: "$20.00" },
  { id: 3, title: "Card 3", description: "This is the third card", imageUrl: "https://via.placeholder.com/150", price: "$30.00" },
  { id: 4, title: "Card 4", description: "This is the fourth card", imageUrl: "https://via.placeholder.com/150", price: "$40.00" },
];

function CardList() {
  return (
    <div className="card-list-container">
      <h2 className="card-list-title">Our Cards</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card className="card-item">
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <div className="card-footer">
                  <span className="card-price">{card.price}</span>
                  <Button variant="primary">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;
