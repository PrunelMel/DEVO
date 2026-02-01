import React from 'react'

const Article = () => {
  return (
    <div className="h-40 w-3/5 border border-white border-solid flex p-8">
      <div className="w-full h-full flex space-x-5 justify-between">
        <div className="w-25 h-full border border-white rounded-lg"></div>
        <div className="text-3xl flex flex-col space-y-5 w-3/4"><p>Advanced React</p> <span className="text-sm pl-7">from DEVO</span></div>
        <div className="w-16 h-16 border border-white rounded-full self-center justify-self-end"></div>
      </div>
    </div>
  )
}

export default Article