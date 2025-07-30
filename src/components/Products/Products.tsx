import React from 'react'
import { ProductItem  } from "../../../types/products"
import Image from "../../assets/women.png"
import Image1 from "../../assets/women1.png"
import Image2 from "../../assets/women2.png"
import Image3 from "../../assets/women3.png"
import Image4 from "../../assets/shopping.png"
import { FaStar as StarIcon } from 'react-icons/fa6'

const FaStar = StarIcon as React.FC<React.SVGProps<SVGSVGElement>>;

const ProductsData : ProductItem[]= [
    {
        id: 1,
        img: Image,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Image1,
        title: "Women western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Image2,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Image3,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: Image4,
        title: "Fashion T-Shirt",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800"
    }
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Sit asperiores modi</p>
            </div>

            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {
                        ProductsData.map((item) => (
                            <div 
                                data-aos="fade-up"
                                data-aos-delay={item.aosDelay}
                                key={item.id} 
                                className='space-y-3'>
                                <img src={item.img} 
                                    alt=''
                                    className='h-[220px] w-[150px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{ item.title }</h3>
                                    <p className='text-sm text-gray-600'>{ item.color }</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{ item.rating }</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* View all products */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                        View All products
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products