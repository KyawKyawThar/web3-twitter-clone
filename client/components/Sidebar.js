import { SideBarOption } from './SidebarOption'

import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'

import { VscTwitter } from 'react-icons/vsc'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

export const SideBar = () => {
  const [selected, setSelected] = useState('Home')
  return (
    <div className="flex flex-[0.7] flex-col items-start px-8">
      <div className="m-4 cursor-pointer text-3xl">
        <VscTwitter />
      </div>

      <SideBarOption
        text="Home"
        Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
        setActive={Boolean(selected === 'Home')}
        setSelected={setSelected}
      />
      <SideBarOption
        text="Explore"
        Icon={selected === 'Explore' ? FaHashtag : BiHash}
        setActive={selected === 'Explore'}
        setSelected={setSelected}
      />
      <SideBarOption
        text="Notifications"
        Icon={selected === 'Notifications' ? FaBell : FiBell}
        setActive={selected === 'Notifications'}
        setSelected={setSelected}
      />
      <SideBarOption
        text="Messages"
        Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
        setActive={selected === 'Messages'}
        setSelected={setSelected}
      />
      <SideBarOption
        text="Bookmarks"
        Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
        setActive={selected === 'Bookmarks'}
        setSelected={setSelected}
      />
      <SideBarOption
        text="List"
        Icon={selected === 'List' ? RiFileList2Fill : FaRegListAlt}
        setActive={selected === 'List'}
        setSelected={setSelected}
      />
      <SideBarOption
        text="Profile"
        Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
        setActive={selected === 'Profile'}
        setSelected={setSelected}
      />
      <SideBarOption text="More" Icon={CgMoreO} setSelected={setSelected} />

      <button className="mt-[20px] cursor-pointer rounded-lg bg-[#1d9bf0] px-14 py-1 font-bold outline-none hover:bg-[#1b8cd8]">
        Mint
      </button>
    </div>
  )
}
