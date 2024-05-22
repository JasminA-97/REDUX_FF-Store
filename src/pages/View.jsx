import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoWishlist } from '../redux/slices/wishlistSlice'

const View = () => {
    const [product,setProduct]=useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    const userWishlist = useSelector(state=>state.wishlistReducer)
    console.log(`userWishlist=`,userWishlist);
    // console.log(id);
    // console.log(product);


    useEffect(()=>{
        if(localStorage.getItem("allProducts")){
            const allProducts = JSON.parse(localStorage.getItem("allProducts"))
            setProduct(allProducts.find(item=>item.id==id))
        }
    },[])

    const handleWishlist = () =>{
        if(userWishlist?.includes(product)){
            alert('item already in your wishlist!!!')
        }else{
            dispatch(addtoWishlist(product))
        }
    }

  return (
    <>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}} className="container d-flex align-items-center w-100">
        <div className="row align-items-center mb-5 w-100">
            <div className="col-lg-5">
                <img src={product?.thumbnail} height={'400vh'} alt="product image" className="w-100" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
                <h5>PID:{product?.id}</h5>
                <h1>{product?.title}</h1>
                <h3 className='fw-bolder text-danger'>${product?.price}</h3>
                <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>{product?.description}</p>
                <div className="d-flex justify-content-between mt-3">
                    <button onClick={handleWishlist} className='btn btn-outline-dark'><i class="fa-solid fa-heart text-danger"></i>Add to Wishlist</button>
                    <button className='btn btn-outline-dark'><i class="fa-solid fa-cart-plus text-success"></i>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default View