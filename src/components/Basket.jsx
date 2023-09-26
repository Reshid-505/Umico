import React, { useEffect, useState } from 'react'
import { ProductData } from '../contex'
import { useContext } from 'react'
import BasketElem from './BasketElem'

function Basket() {
  const { allProducts, basket } = useContext(ProductData)
  const [totalPirce, setTotalPrice] = useState(0)

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  useEffect(() => {
    let total = 0
    basket.map(item => {
      let prod = allProducts.find(i => i.id === item.id);
      total += prod.retail_price * item.piece
    })
    setTotalPrice(total)
  }, [basket])


  return (
    <>
      <div className='basket center bggrey p-5'>
        <ul className='w-[1280px] bg-[#fff]'>
          {basket.length === 0 ? <div className=' flex h-[255px] justify-center items-center'> <h2>Mehsul yoxdur</h2></div> :
            <>
              {basket.map((item) => {
                let prod = allProducts.find(i => i.id === item.id);
                return (<BasketElem key={item.id} name={prod.name} img={prod.img_url_standard} price={prod.retail_price} id={item.id} prodPiece={item.piece} />)
              }
              )}
              <li className='text-right p-3'>{totalPirce}₼</li>
            </>
          }
        </ul>
      </div>
    </>
  )
}

export default Basket
