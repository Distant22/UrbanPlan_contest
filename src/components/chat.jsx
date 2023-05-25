import React, { useState } from 'react'
import OldMan from '../oldman.jpg'
import Guard from '../guard.png'
import Miss from '../miss.png'

function Chat() {

  const [currentText, setCurrentText] = useState("")
  const [message, setMessage] = useState([
    {
      name: '管理員',
      message: '王先生您好，提醒您參加今晚的住戶團康活動。',
    },
    {
      name: '',
      message: '瞭解，今晚我會準時出席。',
    },
    {
      name: '管理員',
      message: '近日天氣寒冷，記得攜帶外套。',
    },
    {
      name: '',
      message: '沒問題！',
    },
    {
      name: '',
      message: '不好意思，想詢問一下下週住戶會議的時間。',
    },
    {
      name: '蔡小姐',
      message: '王先生您好：會議預計於下禮拜三的晚上七點準時舉行！',
    },
    {
      name: '',
      message: '收到。謝謝！',
    },
  ])

  const handleMessage = (msg) => {
    setMessage([...message, {
      name: '',
      message: msg,
    }]);
    console.log("這時便成了",message)
    lateMessage()
  }

  const lateMessage = () => {
    setTimeout(() => {
      setMessage(prevMsg => [...prevMsg, { name: '蔡小姐', message: '王先生您好！祝你有個開心的一天。', }]);
    }, 1000);
  }

  return (
    <div class="w-full h-full flex justify-center">
    <div class="font-Serif font-bold w-[90%] h-full overflow-y-scroll pb-24 pt-6">
        { message.map ((msg, index) => (

          <div className={`${msg.name === '' ? "chat chat-end" : "chat chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={msg.name === '' ? OldMan : msg.name === '管理員' ? Guard : Miss} />
              </div>
            </div>
            <div className="chat-header">
              { msg.name }
              <time className="text-xs opacity-50 ml-2">2 小時前</time>
            </div>
            <div className={`${msg.name === '' ? "chat-bubble chat-bubble-success" : "chat-bubble"}`}>{ msg.message }</div>
            <div className="chat-footer opacity-50">
              { msg.name === '' ? "已讀" : "" }
            </div>
          </div>
        )
        )}    
    </div>
    <p class="absolute h-[4rem] w-full bottom-0 -translate-y-[4rem] bg-[#4C8E82]"></p>
      <input type="text" placeholder="輸入文字..." onChange={(e)=>{ setCurrentText(e.target.value)}}  class="absolute h-[2rem] w-[60%] rounded-2xl w-full bottom-0 left-1/2 -translate-x-[66%] -translate-y-[5rem] input focus:outline-0" />
      <button onClick={() => { handleMessage(currentText) }} class="absolute h-[2rem] w-[12%] rounded-lg bg-gray-800 text-white bottom-0 right-0 -translate-x-[25%] -translate-y-[5rem] hover:bg-white hover:text-black">發送</button>
    </div>
  )
}

export default Chat