import axios from "axios"
import { FC, useState } from "react"
import { When } from "react-if"
import Router from 'next/router';

export interface Iprop {
    onShowPopupForgotPasswork?: any
    isShow?: any
}

const PopupForgotPassWord: FC<Iprop> = ({ onShowPopupForgotPasswork, isShow }) => {
    const [email, setEmail] = useState('');

    const baseURL = 'http://localhost:5000/api/register'

    const handleForgotPassWord = async () => {
        const object = {
            'email': email,
        }
        // TODO REACT HANDLE FORGOT PASSWORK
        // const data: any = axios.post(baseURL, object).then((response) => {
        // });
        // if (data?.status === 200) {
        // 	Router.push('/')
        // }
        // console.log(data?.status)
    }
    return (
        <When condition={isShow}>
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-flex align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">

                        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center from-cyan-500 to-blue-500 bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
                            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                            <div className="w-full px-24 z-10 hover:animate-bounce">
                                <p className="text-1xl font-bold text-left tracking-wide">University Smart System</p>
                                <p className="text-1xl my-4">Keep it special, capture your personal memory in unique way, anywhere.</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white">
                            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                            </div>
                            <div className="w-full py-6 z-20">
                                {/* <div className='flex absolute top-0 right-0 pd-6'>
                                    <div className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    </div>

                                    <div className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w- stroke-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <h3 className="text-lg leading-6 mb-8 font-medium text-gray-900" id="modal-title">Forgot Password Form</h3>

                                <form action="" className="px-4 lg:px-0 mx-auto w-full">

                                    <div className="pb-2 pt-4">
                                        <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" className="text-gray-800 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      						        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                    </div>


                                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button onClick={handleForgotPassWord} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 sm:ml-3 sm:w-auto sm:text-sm">Send</button>
                                        <button onClick={onShowPopupForgotPasswork} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </When>
    )

}

export default PopupForgotPassWord
