import React, { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const Pagination = () => {
  const [active,setActive] = useState(false)
  return (
    <div className="flex row">
    <button
      className="relative bg-subMain  h-10 max-h-[40px] w-10 max-w-[40px]  text-center align-middle fuppercase transition-all"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <AiOutlineArrowLeft />
      </span>
    </button>
    <button
      className={`relative ${active ? " bg-subMain" : "bg-gray"}  h-10 max-h-[40px] w-10 max-w-[40px]  text-center align-middle fuppercase transition-all`}
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
     2
      </span>
    </button>
    <button
      className="relative bg-subMain  h-10 max-h-[40px] w-10 max-w-[40px]  text-center align-middle fuppercase transition-all"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <AiOutlineArrowRight />
      </span>
    </button>
  </div>
  )
}

export default Pagination
