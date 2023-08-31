import { Col, Card } from 'react-bootstrap'

export const ProductCard = ({ item, onClick }) => (
    <Col xl={3} className="products">
        <Card className="card" border="white" onClick={onClick}>
            <Card.Img className="product-img" variant="top" src={item.image} />
            <Card.Body className="product-body">
                <Card.Title>{item.name}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
)
