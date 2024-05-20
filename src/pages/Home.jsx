import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
   <>
      <Header insideHome={true}/>
      <div style={{marginTop:'150px'}} className="container-fluid">
      
        <Row className='my-5'>
          <Col className="mb-5 me-2" sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img height={'180px'} variant="top" src="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <div className='text-center mt-3'>
                  <Link to={'/view/4'}>View More...</Link>
                </div>
            
              </Card.Body>
           </Card>
          </Col>
        </Row>
      </div>
   </>
  )
}

export default Home