import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
   <>
      <Header insideHome={true}/>
      <div style={{marginTop:'150px'}} className="container">
      
      {  
        loading ?
        <div className="mt-5 fw-bolder text-center">
           <Spinner className='me-2' animation="border" variant="info" />Loading...
        </div>

        :

        <Row className='my-5'>
        {
          allProducts.length>0 ?
          allProducts?.map(product=>(
            <Col key={product?.id} className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                <div className='text-center mt-3'>
                  <Link to={`/view/${product?.id}`}>View More...</Link>
                </div>
            
              </Card.Body>
           </Card>
          </Col>
          ))
          :
          <div className="text-center text-danger fw-bolder">
            Product Not Found!!!
          </div>
        }
        </Row>
      }
      </div>
   </>
  )
}

export default Home