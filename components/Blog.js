"use client"
import React from 'react'
import CarouselSection from '@/app/CarouselSection';
import Trending from '@/components/Trending';
import trendingPosts from "@/data/trendingPosts";
import { usePathname } from 'next/navigation';

const Blog = ({articles}) => {
  const pathname = usePathname();
  const routeSegment = pathname.split("/").filter(Boolean).pop();
  const heading = routeSegment.toUpperCase();
  return (
    <>
      <div className='lg:flex lg:flex-row flex flex-col items-center gap-5 mt-3 sm:container sm:mx-auto'>
        <div className='lg:w-3/4'>
          <h1 className='text-lg font-semibold text-gray-500 flex items-center gap-1 mb-2 ms-1'>
            <span>FEATURED</span>
            <img src="featured.gif" alt="Trending" className='w-7 inline' />
          </h1>
          <div className='bg-gray-500 h-[1px] mb-3'></div>
          <CarouselSection />
        </div>
        <div className=' lg:w-1/4'>
          <h1 className='text-lg font-semibold text-gray-500 flex items-center gap-1 mb-3 ms-1'>
            <span>TRENDING POSTS</span>
            <img src="trending.gif" alt="Trending" className='w-7 inline' />
          </h1>
          <div className='bg-gray-500 h-[1px] mb-2'></div>
          <div className="w-full">
            <section className=' py-5 ps-5 pe-3 overflow-auto lg:max-h-127 max-h-85 custom-scrollbar'>
              <Trending posts={trendingPosts} />
            </section>
          </div>
        </div>

      </div>
      <div className='container mx-auto mt-2'>
      <span className="text-lg font-semibold text-gray-500 ms-1">{heading}</span>
      <div className='bg-gray-500 h-[1px] mb-2'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto'>

        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100/25 p-4 min-w-[280px] hover:scale-105 transition duration-300 hover:cursor-pointer">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <h3 className="text-md font-semibold line-clamp-2 mt-3">{article.title}</h3>
            <p className="text-xs text-gray-600 mt-1 italic">
              {article.authors?.join(", ")}
            </p>
            <p className="text-xs text-gray-400">{article.date}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog