import Blog from '@/components/Blog'
import React from 'react'
import { trends } from "@/data/articles";

const page = () => {
  return (
    <div>
      <Blog articles={trends} />
    </div>
  )
}

export default page