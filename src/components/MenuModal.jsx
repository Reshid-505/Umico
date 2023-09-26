import React, { useContext } from 'react'
import { ProductData } from '../contex'
import { Link } from 'react-router-dom'
import '../Css/menuModal.css'

function MenuModal() {
    const{showModal,setShowModal,menuData} = useContext(ProductData)
  return (
    // <div className={'absolute z-50 w-[100vw] h-[100vh] bg-[#6665] modalMenu' + showModal ? null : "hidden"  } onClick={()=>setShowModal(false)}>
    <div className={showModal ? 'w-[100vw] h-[100vh] bg-[#6665] modalMenu':'hidden'} onClick={()=>setShowModal(false)}>
        <div className='nestedMenu'>
            <ul>
                {menuData?.map((item,index) => <Link to={"category/"+ item.name} key={index}> <li onClick={()=>setShowModal(false)} className='menuElem'> <img src={item.icons.menu_icon} alt="..."/>{item.name}</li></Link>)}                
            </ul>
        </div>
    </div>
  )
}

export default MenuModal
