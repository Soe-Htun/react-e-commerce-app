import React from 'react'
import Image1 from "../../assets/shirt.png"
import Image2 from "../../assets/shirt2.png"
import Image3 from "../../assets/shirt3.png"
import { TopProductsItem  } from "../../../types/products"
import { FaStar as StarIcon } from 'react-icons/fa6'

const FaStar = StarIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const ProductsData : TopProductsItem[]= [
    {
    id: 1,
    img: Image1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            <div className='text-left mb-24'>
                <p 
                    data-aos="fade-up"
                    className='text-sm text-primary'>Top Rated Products for you
                </p>
                <h1
                    data-aos="fade-up" className='text-3xl font-bold'
                >
                    Best Products
                </h1>
                <p
                    data-aos="fade-up" className='text-xs text-gray-400'
                >
                    Lorem ipsum dolor sit amet consectetur, adipiscing elit. Sit asperiores modi Sit asperiores modi
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((item) => (
                        <div data-aos="zoom-in"
                            className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={item.img} alt=""
                                    className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold'>{ item.title }</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{ item.description }</p>
                                <button 
                                    // onClick={handleOrderPopup}
                                    className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts