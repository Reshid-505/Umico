import React, { useContext, useEffect, useState } from 'react'
import { ProductData } from '../contex'
import { useParams } from 'react-router-dom';
import Card from './Card';
import '../Css/search.css'

function Search() {
    const{allProducts} = useContext(ProductData)
    let{name} = useParams()
    const[prices,setPrices] = useState([])
    const[min,setMin] = useState(0)
    const[max,setMax] = useState(0)
    const[tempMin,setTempMin] = useState(0)
    const[tempMax,setTempMax] = useState(0)
    const[filrt,setFiltr] = useState(false)
    const[searchArr,setSearchArr] = useState([])

    useEffect(() => {
      setPrices(allProducts.filter((item)=>item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())).map(item=>item.retail_price))
    },[allProducts,name])

    useEffect(()=>{
      window.scrollTo(0, 0)
    },[])
    
    useEffect(() => {
      setMax(Math.max(...prices))
      setMin(Math.min(...prices))
      setTempMin(Math.min(...prices))
      setTempMax(Math.max(...prices))
    },[allProducts,prices])

    useEffect(() => {
      setSearchArr(allProducts.filter((item)=>item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) && (item.retail_price <  max) && (item.retail_price > min)))
    },[allProducts,min,max,name])
    
    function changeMin(x){
      setTempMin(x)
    }
    function changeMax(x){
      setTempMax(x)
    }
    function changeMinMax(){
      setMax(tempMax)
      setMin(tempMin)
    }




  return (
    <>
    <div className='px-[10vw] py-3'>
      <h2 className='text-[25px] '><span className='font-bold'>{name}</span> məhsullarının kataloqu</h2>
      <p className='text-[#666]'>Tapılan məhsul: {searchArr.length}</p>
    </div>
    <div className='bggrey searchProds flex center'>

        <div className='flex flex-col filtr  w-[225px] mr-[48px]'> 
          <h2 className='text-[16px] text-[#1e244d]  my-5 border-b-[1px] border-[#333]' onClick={()=>setFiltr(!filrt)} >Filtr</h2>
          <div className={ filrt ? 'priceDetails my-5 border-b-[1px] border-[#333]': 'hidden priceDetails my-5 border-b-[1px] border-[#333]'}>
            <details>
              <summary className='text-[#1e244d] text-[12px] flex gap-[5px]'>Qiymət <i className="fa-solid fa-angle-down"></i></summary>
              <span className='flex inputs justify-between my-4 '>
              <input onInput={(e)=>{changeMin(e.target.value)}} className='w-[72px] text-[10px] py-2 px-1 border-[#999] border-[1px] rounded-sm' defaultValue={min>0 ? min:null} type="number"  min={min} max={max} /><p> - </p><input onInput={(e)=>{changeMax(e.target.value)}} className='w-[72px] text-[10px] py-2 px-1 border-[#999] border-[1px] rounded-sm' defaultValue={max>0 ? max:null} type="number" min={min} max={max} /> <button onClick={changeMinMax} className='rounded-sm px-3 bg-[#BDBFCD]' type="">OK</button>
              </span>
            </details>
            
          </div>
        </div>
        <div className='flex flex-wrap gap-[10px] cards max-w-[1100px]' >
            {searchArr.map((item,index)=> <Card key={index} id={item.id} img={item.img_url_standard} price={item.retail_price} oldPrice={item.old_price} discount={item.discount} title={item.name} seller={item.manufacturer} /> )}
        </div>
      
    </div>
    </>
  )
}

export default Search
