import Blog from '@/components/Blog'
import React from 'react'
import { insights } from "@/data/articles";

const page = () => {
  return (
    <div>
      <Blog articles={insights} />
    </div>
  )
}

export default page