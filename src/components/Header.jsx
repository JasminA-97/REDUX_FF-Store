import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = ({insideHome}) => {
console.log(insideHome);
  return (
   
    <Navbar expand="lg" style={{zIndex:'10'}} className="bg-info w-100 position-fixed top-0 ">
      <Container>
        <Navbar.Brand><Link to={'/'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}> <i class="fa-solid fa-truck-fast"></i> FF Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                insideHome &&
                <Nav.Link><input type='text' placeholder='Search products Here!!!' style={{width:'500px'}} className=' rounded p-1'></input></Nav.Link>
            }
            <Nav.Link ><Link to={'/wishlist'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-heart text-danger"></i>Wishlist<Badge>5</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-cart-plus text-success"></i>Cart<Badge>5</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header