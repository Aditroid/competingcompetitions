"use client"
import Articles from "@/components/Articles";
import CarouselSection from './CarouselSection';
import Trending from '@/components/Trending';
import trendingPosts from "@/data/trendingPosts";
import { challenges, essentials, insights, trends } from "@/data/articles";
export default function Home() {
  return (
    <main className="sm:container sm:mx-auto lg:px-4">
      <div className='lg:flex lg:flex-row flex flex-col items-center gap-5 mt-3'>
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
            {/* <section className="max-w-xl mx-auto py-10 px-4"> */}
            {/* <h2 className="text-2xl font-bold mb-6">Trending</h2> */}
            <Trending posts={trendingPosts} />
          </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
      <div className="mt-5">
        <span className="text-lg font-semibold text-gray-500 ms-1">ESSENTIALS</span>
        <div className='bg-gray-500 h-[1px] mb-2'></div>
        <Articles articles={essentials} />
      </div>
      <div>
        <span className="text-lg font-semibold text-gray-500 ms-1">TRENDS</span>
        <div className='bg-gray-500 h-[1px] mb-2'></div>
        <Articles articles={trends} />
      </div>
      <div>
        <span className="text-lg font-semibold text-gray-500 ms-1">CHALLENGES</span>
        <div className='bg-gray-500 h-[1px] mb-2'></div>
        <Articles articles={challenges} />
      </div>
      <div>
        <span className="text-lg font-semibold text-gray-500 ms-1">INSIGHTS</span>
        <div className='bg-gray-500 h-[1px] mb-2'></div>
        <Articles articles={insights} />
      </div>
      </div>
    </main>
  );
}
