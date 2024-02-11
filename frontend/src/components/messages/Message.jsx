import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                alt="Tailwind CSS chat bubble component" 
                src={"https://cdn4.iconfinder.com/data/icons/office-thick-outline/36/office-14-256.png" 
                  }
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! How are you doing?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  );
};

export default Message;