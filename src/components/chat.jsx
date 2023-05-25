import React, { useState, useRef, useEffect } from 'react'
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

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [message]);

  return (
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div ref={chatContainerRef} class="font-Serif font-bold w-[90%] h-[90%] overflow-y-scroll py-6">
        { message.map ((msg, index) => (

          <div className={`${msg.name === '' ? "chat chat-end" : "chat chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={msg.name === '' ? OldMan : msg.name === '管理員' ? Guard : Miss} />
              </div>
            </div>
            <div className="chat-header">
              { msg.name }
              <time className="text-xs opacity-50 ml-2">{index < 7 ? "2 小時前" : "剛剛"}</time>
            </div>
            <div className={`${msg.name === '' ? "chat-bubble chat-bubble-success" : "chat-bubble"}`}>{ msg.message }</div>
            <div className="chat-footer opacity-50">
              { msg.name === '' ? "已讀" : "" }
            </div>
          </div>
        )
        )}    
    </div>
      <p class="h-[10%] w-[100%] bg-[#4C8E82] flex items-center justify-center">
        <input type="text" placeholder="輸入文字..." onChange={(e)=>{ setCurrentText(e.target.value)}}  class="mx-2 h-[70%] max-h-[2rem] w-[60%] rounded-2xl input focus:outline-0" />
        <button onClick={() => { handleMessage(currentText) }} class="h-[70%] max-h-[2rem] w-[30%] rounded-lg bg-gray-800 text-white hover:bg-white hover:text-black mx-2">發送</button>
      </p>
    </div>
  )
}

export default Chat