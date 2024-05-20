import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}} className="container d-flex align-items-center w-100">
        <div className="row align-items-center mb-5 w-100">
            <div className="col-lg-5">
                <img src="" alt="product image" className="w-100" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
                <h5>PID:4</h5>
                <h1>Title</h1>
                <h3 className='fw-bolder text-danger'>$450</h3>
                <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore qui aut, quam accusantium provident enim voluptatum quos beatae quidem veritatis similique! Incidunt obcaecati quis repellendus, impedit quidem esse corporis exercitationem.</p>
                <div className="d-flex justify-content-between mt-3">
                    <button className='btn btn-outline-dark'><i class="fa-solid fa-heart text-danger"></i>Add to Wishlist</button>
                    <button className='btn btn-outline-dark'><i class="fa-solid fa-cart-plus text-success"></i>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default View