import React, { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import Image from 'next/image'

const style = {
  tweetBtn: `rounded-3xl  px-6 py-2 font-bold`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
}

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')

  const postTweet = (e) => {
    e.preventDefault()
    console.log('click')
  }
  return (
    <div className="flex flex-row border-b border-[#38444d] pb-5 pt-4">
      <div>
        <Image
          src="/kkt.jpg"
          alt=""
          height="50px"
          width="50px"
          className="rounded-full object-cover"
        />
      </div>

      <div className="ml-2 flex-1">
        <form>
          <textarea
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            className="h-full w-full bg-transparent text-lg outline-none"
          />
          <div className="flex justify-between">
            <div className="flex items-center gap-3 text-[#1d9bf0]">
              <BsCardImage />
              <RiFileGifLine />
              <RiBarChartHorizontalFill />
              <BsEmojiSmile />
              <IoMdCalendar />
              <MdOutlineLocationOn />
            </div>
            <button
              type="submit"
              disabled={!tweetMessage}
              onClick={(e) => postTweet(e)}
              className={`${style.tweetBtn} ${
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
