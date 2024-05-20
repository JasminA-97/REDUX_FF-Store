import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
<>
    <Header/>
    <div style={{marginTop:'150px'}} className="container-fluid">
      <h3 className="text-danger">Your Wishlist</h3>
      <Row className='my-5'>
        <Col className="mb-5 me-2" sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
            <Card.Img height={'180px'} variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex justify-content-around mt-3">
                <button className='btn'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                <button className='btn'><i className="fa-solid fa-cart-plus text-success"></i></button>
              </div>
                    
            </Card.Body>
         </Card>
        </Col>
      </Row>
    </div>
</>
  )
}

export default Wishlist