import React, { memo } from 'react'

const ChatEmojiCard = ({Emoji}) => {
  return (
    <div>
      <img className='mb-1' src={Emoji} alt="Emoji" />
    </div>
  )
}

export default memo(ChatEmojiCard)
