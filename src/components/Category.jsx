import React, { useContext, useEffect, useState } from 'react'
import { ProductData } from '../contex'
import { useParams } from 'react-router-dom'
import Card from './Card'
import '../Css/category.css'


function Category() {
    const{mainData} = useContext(ProductData)
    const {cat} = useParams()
    const[prices,setPrices] = useState([])
    const[min,setMin] = useState(0)
    const[max,setMax] = useState(0)
    const[tempMin,setTempMin] = useState(0)
    const[tempMax,setTempMax] = useState(0)
    const[filrt,setFiltr] = useState(false)
    const[categoryArr,setCategoryArr] = useState([])


    useEffect(() => {
      setPrices(mainData.filter((item)=>item.category_name.toLocaleLowerCase().includes(cat.toLocaleLowerCase()))[0]?.products.map(item=>item.retail_price))
    },[mainData,cat])

    useEffect(()=>{
      window.scrollTo(0, 0)
    },[])



    
    useEffect(() => {
      if (prices?.length>0) {
        setMax(Math.max(...prices))
        setMin(Math.min(...prices))
        setTempMin(Math.min(...prices))
        setTempMax(Math.max(...prices))
      }
    },[mainData,prices])


    useEffect(() => {
      setCategoryArr(mainData.filter((item)=>item.category_name.toLocaleLowerCase().includes(cat.toLocaleLowerCase()))[0]?.products.filter(item => (item.retail_price <  max) && (item.retail_price > min)))
    },[mainData,min,max,cat])
    
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
        <h2 className='text-[25px] font-bold'>{cat}</h2>
      </div>

      <div className='bggrey categoryProds flex center'>

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

        <span className='flex flex-wrap gap-[10px] cards max-w-[1100px]' >
        {categoryArr?.map((item,index)=><Card key={index} id={item.id} img={item.img_url_standard} price={item.retail_price} oldPrice={item.old_price} discount={item.discount} title={item.name} seller={item.manufacturer} />)}
        </span>
    </div>
    </>
  )
}

export default Category
