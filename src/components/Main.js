import React, { useEffect, useRef, useState } from 'react'
import { runChat } from '../openai'

function Main({ data }) {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([
        {
            text: 'Hiii......',
            isBot: true
        }
    ])

    const messagesEndRef = useRef(null);

    const handleSend = async () => {
        setInput('')
        // setUserInput(prev => [...prev, input])
        const res = await runChat(input)
        // setMessage(prev => [...prev, res])
        setMessage([...message,
        {
            text: input,
            isBot: false
        },
        {
            text: res,
            isBot: true
        }
        ])
        console.log(message.isBot);


    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("enterrr");
            handleSend();
            event.preventDefault(); // Prevent the default action to avoid form submission if wrapped in a form
        }
    };
 const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [message]);

    // console.log(message);
    // console.log(input);
    const l = message.length - 1

    return (
        <div className='bg-neutral-800 w-full min-h-screen p-3 flex flex-col justify-between '>
            <div className='fixed top-[50%] hidden md:block'>
                <button onClick={() => data(prev => !prev)}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>    </button>
            </div>


            <div>
                <button className='flex px-3 py-2 hover:bg-neutral-700 rounded font-bold'>ChatGPT 3.5 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md text-token-text-tertiary"><path fill="currentColor" fill-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path></svg></button>
            </div>

            <div className='flex  flex-col w-full items-center  max-w-52  overflow-auto  messages-container scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent ' >
                {


                    message.map(i => {
                        return (
                            <div className={i.isBot ? "bot flex w-[75%]" : "flex w-[75%] justify-end"} >
                                {
                                    i.isBot ?
                                        <>
                                            <img src={i.isBot ? "https://i.pinimg.com/564x/33/d5/cb/33d5cbb35f83f09537b33fe52b51ba30.jpg" : "https://www.svgrepo.com/show/63886/avatar.svg"} alt="" className='w-8 h-8 rounded-2xl' />
                                            <div className='bg-gray-800 p-2 m-1 text-white rounded'>{i.text}</div>
                                        </>
                                        :
                                        <>

                                            <div className='bg-gray-800 p-2 m-1 text-white rounded'>{i.text}</div>
                                            <img src={i.isBot ? "https://i.pinimg.com/564x/33/d5/cb/33d5cbb35f83f09537b33fe52b51ba30.jpg" : "https://www.svgrepo.com/show/63886/avatar.svg"} alt="" className='w-8 h-8' />
                                        </>
                                }

                            </div>
                        );
                    })
                }
                
            </div>
            <div className='flex justify-center flex-col items-center ' >
                {/* <div className='flex flex-wrap w-[100%] gap-3 flex-2 justify-center lg:w-[60%]'>
                        <button className='flex w-[40%] ps-3 pe-3 border border-zinc-700 py-4 justify-between  rounded-lg text-start hover:bg-neutral-700 rounded '><p>Test my knowledge</p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black   rounded"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <button className='flex w-[40%] ps-3 pe-3 border border-zinc-700 py-4 justify-between  rounded-lg text-start hover:bg-neutral-700 rounded '><p>Test my knowledge</p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black   rounded"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <button className='flex w-[40%] ps-3 pe-3 border border-zinc-700 py-4 justify-between  rounded-lg text-start hover:bg-neutral-700 rounded '><p>Test my knowledge</p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black   rounded"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <button className='flex w-[40%] ps-3 pe-3 border border-zinc-700 py-4 justify-between  rounded-lg text-start hover:bg-neutral-700 rounded '><p>Test my knowledge</p> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black   rounded"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div> */}
                <div className='rounded border border-gray-700 w-4/5 flex mt-3'>
                    <input type="text" onKeyDown={handleKeyDown} className='w-[97%] bg-transparent outline-none p-3' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className='pe-3 ' onClick={handleSend}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black hover:border rounded"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>

                </div>
                <p className='text-xs mt-2 text-slate-500'>ChatGPT can make mistakes. Check important info.</p>
            </div>

        </div>
    )
}

export default Main