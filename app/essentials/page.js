import Blog from '@/components/Blog'
import React from 'react'
import { essentials } from "@/data/articles";

const page = () => {
  return (
    <div>
      <Blog articles={essentials} />
    </div>
  )
}

export default page