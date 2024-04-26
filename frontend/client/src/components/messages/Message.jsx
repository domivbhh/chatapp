import React from 'react'

const Message = () => {
  return (
    <div>
      <div >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src='' />
          </div>
        </div>
        <div
          className={`chat-bubble text-white pb-2`}>
        
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        
        </div>
      </div>
    </div>
  );
}

export default Message