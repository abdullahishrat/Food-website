import React from 'react'
import Image from 'next/image';
interface propsType {
    img: string;
    title: string;
    desc: string;
    price: number;
}



const MenuCard:React.FC<propsType> = ({img, title, desc, price }) => {
 
  return (
    <div className='flex gap-2'>
           <Image className="w-[80px] h-[80px]"
       src={img} 
       width={100}
        height={100}
        alt="Dish"
          />
          <div className='space-y-2'>
            <div>
                <h2>{title}</h2>
                <p className='text-[14px] text-gray-600 pt-1'>{desc}</p>
            </div>
           
            <div className='text-yellow-500'>   ${price.toFixed(2)}</div>
          </div>
    </div>
  )
}

export default MenuCard