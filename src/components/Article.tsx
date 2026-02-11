import React from 'react'

const ArticleView = () => {
  return (
    <div className="h-40 w-4/5 border border-white border-solid flex p-8 rounded-2xl">
      <div className="w-full h-full flex justify-between">
        <div className="w-25 h-full border border-gray-700 rounded-lg overflow-hidden">
          <img src="/hackerRank/hackerRank.jpg" alt="" className="w-full h-full object-fill"/>
        </div>
        <div className="text-3xl flex flex-col space-y-5 items-start "><p className="font-bold">Advanced Machine Learning Architectures</p> <span className="text-sm pl-7 text-gray-700">from DEVO</span></div>
        <div className="w-1/8 h-1/3 bg-red-800 border border-transparent rounded-full self-center justify-self-end flex items-center">
          <div className="w-2 h-2 bg-white ml-3 rounded-full animate-pulse"></div>
          <div className="text-sm text-center pl-5 font-bold">Hard</div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView;