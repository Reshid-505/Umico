import React, { useContext, useState } from 'react'
import "../Css/card.css"
import { Link } from 'react-router-dom';
import { ProductData } from '../contex';

function Card(props) {
    const { buy } = useContext(ProductData)
    const {img,price,title,seller,id,oldPrice,discount} = props;
    const [liked,SetLiked] =useState(false)
    
    function ChangeLike(){
        SetLiked(!liked)
    }


  return (
    <>
            <div className='productCard'>
                <div className='topCard'>
                    <Link to={'/product/' + id }>
                    <img src={img} alt="" />
                    </Link>
                    <span className='buttons'>
                        <button onClick={ChangeLike}  type="like">{liked ? <i className="fas fa-heart color-[#FF4B81] background-color-[#fff]" style={{color : "#FF4B81"}}></i> : <i className="far fa-heart"></i>}</button>
                        <button type="comparison "><i className="fa-solid fa-scale-balanced"></i></button>
                    </span>
                </div>
                <Link to={'/product/' + id }>
                    <div className='bottomCard'>
                        <h3 className='price'>{discount > 0 ? <><span className="discount">{price} ₼</span> <span className='line-through'>{oldPrice} ₼</span> </> : `${price}₼`}</h3>
                        <h3 className='bg-[#FFD740] font-[16px] rounded-sm font-bold inline py-1 px-2'>{(price / 18).toFixed(2)} ₼ x 18 ay</h3>
                        <h3 className='title'>{title}</h3>
                        <h4 className='seller'>satıcı:<span>{seller}</span></h4>
                    </div>

                </Link>
                    <div className='addCartButton' onClick={()=>{buy(id)}} >
                        <button type="addCart"><i className="fas fa-shopping-cart"></i>SƏBƏTƏ AT</button>
                    </div>
            </div>
    </>
  )
}

export default Card
