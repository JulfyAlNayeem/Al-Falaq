import React from 'react'
import { BiSolidSearchAlt2 } from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import { chatInputBg } from '../../constant'
import { useChatContext } from '../../context-reducer/ChatContext'

export default function SearchBox() {
  const{themeIndex} = useChatContext()
  return (
    <div className={`${chatInputBg[themeIndex.value]}  flex items-center px-1.5 py-4 text-slate-700 text-3xl gap-1 h-9  rounded-full mb-3`}>
    <BiSolidSearchAlt2 />
    <input
      type="text"
      className={` w-full bg-tran outline-none bg-transparent text-base font-semibold group`}
    />
    <TiDeleteOutline  className="  group-focus:block "/>
  </div>
  )
}
