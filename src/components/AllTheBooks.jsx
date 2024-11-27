import {Card, Row, Col} from "react-bootstrap"
import fantasy from "../data/fantasy.json"

const AllTheBooks = () => {
    return(
     <Row>
       {fantasy.map((book) => {
          return (
            <Col  sm={12} md={6} lg={3} xll={2} key={book.asin}>
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}€</Card.Text>
                </Card.Body>
              </Card>
            </Col>
           )
        })}
     </Row>
    )
}

export default AllTheBooks