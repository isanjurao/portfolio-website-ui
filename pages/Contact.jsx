
import React, { useState } from 'react'



const Contact = () => {
  const [disable, setDisable] = useState(true)
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (key, val) => {
    const dup_data = data
    dup_data[key] = val
    setData(dup_data)
    if (
      data.name != '' &&
      data.phone != '' &&
      data.email != '' &&
      data.message != ''
    ) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }
  return (
    <>
    
      <div>
      <div className="  mx-auto mt-8 grid max-w-screen-xl gap-8 rounded-lg bg-gray-100 py-8 px-4 text-gray-900 shadow-lg">
        <div className="md:flex">
          <div className="flex-1 py-8 text-center">
            <h1 className="text-3xl font-bold leading-tight">
              Lets talk about everything!
            </h1>
            <img
              src="/logo.png"
              alt=""
              className="my-4 mx-auto h-[146px] w-[146px] rounded-full py-2"
            />
            <h2 className=" text-xl font-medium leading-tight">
              Feel free to ask us anything!
            </h2>
            <h3 className="text-md py-4 px-4 leading-tight">
              Have doubt or suggestion to make? Feel free to ask anything. If
              you have any suggestions, please let me know. Your suggestions are
              highly appreciated. I appreciate your time and try hard to reply
              to every single message posted here! Keep dropping your priceless
              opinions.
            </h3>
          </div>
          <div className="flex-1">
            <form>
              <div>
                <span className="text-sm font-bold uppercase text-gray-600">
                  full name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  onChange={(e) => {
                    handleChange('name', e.target.value)
                  }}
                  className="mt-2 w-full rounded-lg bg-gray-300 p-1 text-gray-900"
                />
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold uppercase text-gray-600">
                  email
                </span>
                <input
                  required
                  type="text"
                  name="email"
                  onChange={(e) => {
                    handleChange('email', e.target.value)
                  }}
                  className="mt-2 w-full rounded-lg bg-gray-300 p-1 text-gray-900"
                />
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold uppercase text-gray-600">
                  phone
                </span>
                <input
                  required
                  type="text"
                  name="phone"
                  onChange={(e) => {
                    handleChange('phone', e.target.value)
                  }}
                  className="mt-2 w-full rounded-lg bg-gray-300 p-1 text-gray-900"
                />
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold uppercase text-gray-600">
                  message
                </span>
                <textarea
                  required
                  onChange={(e) => {
                    handleChange('message', e.target.value)
                  }}
                  name="message"
                  className="mt-2 h-32 w-full rounded-lg bg-gray-300 p-1 text-gray-900"
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  disabled={disable}
                  className=" w-full rounded-lg bg-purple-600 p-3 text-sm font-bold uppercase -tracking-wide text-gray-100  disabled:opacity-50"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
      </div>
    </>
  )
}

export default Contact
