import './style.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Antman from '.././assets/images/superhero/antman.jpg'
import Batman from '.././assets/images/superhero/batman.jpg'
import Dune from '.././assets/images/trending/dune.jpg'
import Morbius from '.././assets/images/trending/morbius.jpg'
import Joker from '.././assets/images/trending/joker.jpg'
import Spiderman from '.././assets/images/superhero/spiderman-cover.jpg'


const Conten = () => {
    return (
        <>
            <div className='iwi'>
                <Container className='py-3 text-center'>
                    <h1 className='text-light'>ALL Film</h1>
                    <Row className='my-5'>
                        <Col> <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Antman} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>

                        <Col> <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Batman} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                        <Col> <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Spiderman} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                    <h1 className='text-center text-light'>TRENDING</h1>
                    <Row>
                        <Col><Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={Dune} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" src={Morbius} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" src={Joker} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Conten;