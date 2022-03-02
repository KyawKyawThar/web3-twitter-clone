import React from 'react'
import { BsStars } from 'react-icons/bs'
import { TweetBox } from './TweetBox'

export const Feed = () => {
  return (
    <div className="flex-[2] border-r border-l border-[#38444d] p-4">
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between bg-[#15202b] ">
        <h1 className="cursor-pointer font-bold">Home</h1>
        <BsStars />
      </div>
      <TweetBox />
    </div>
  )
}
