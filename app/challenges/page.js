import Blog from '@/components/Blog'
import React from 'react'
import { challenges } from "@/data/articles";

const page = () => {
  return (
    <div>
      <Blog articles={challenges} />
    </div>
  )
}

export default page
