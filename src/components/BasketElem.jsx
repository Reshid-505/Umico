import React, { useContext, useState } from 'react'
import { ProductData } from '../contex'
import '../Css/basketElem.css'

function BasketElem(props) {
    const{basket,setBasket}=useContext(ProductData)
    let {name,img,price,prodPiece,id} = props
    const [piece,setPiece]=useState(prodPiece)
    const [prod]=useState(basket.find(item=>item.id===id))


    function ChangePiece(x){
        setPiece(piece+x)
        x>0?prod.piece=piece+1:prod.piece=piece-1;
        setBasket([...basket])
    }

    function del(){
        setBasket(basket.filter(item=> item.id!==id))
      }

  return (
    <li className='basketElem flex justify-between p-4 w-[100%] relative'>
      <div className='flex gap-[40px]'>
        <img className='w-[5vw] object-contain' src={img} alt="..." />

        <div className='flex flex-col items-start gap-[5px]'>
          <span className='border border-[#FFAB40] rounded-[5px] p-1 text-[12px] text-[#FFAB40]'><i className="fas fa-shipping-fast"></i>Ekspress</span>
          <h2>{name}</h2>
          <h3>{price}₼</h3>
        </div>
      </div>

      <div className='pieceInp flex gap-[40px]'>
        <div className='flex flex-col justify-evenly h-[100%] '>
          <span className='flex'>
              <button onClick={()=>piece>1 ? ChangePiece(-1) : null} className='w-[30px] h-[30px] border-[1px]'>-</button>
              <input className='w-[30px] px-2 h-[30px] border-[1px]' type="text"  defaultValue={piece} value={piece} />
              <button onClick={()=>{ChangePiece(1)}} className='w-[30px] h-[30px] border-[1px]'>+</button>
          </span>
          <h3>{(price*piece).toFixed(2)}₼</h3>
        </div>

        <div onClick={()=>del()} className='flex items-center'>
        <i className="fa-solid fa-x" style={{color: "#000000"}}></i>
        </div>
      </div>

    </li>
  )
}

export default BasketElem
