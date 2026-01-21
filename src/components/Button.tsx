import React from 'react'

const Button = ({childNode}:{childNode:string}) => {
  return (
    <button className="border hover:bg-[var(--foreground)] hover:text-[var(--button-hover)] transition-shadow ease-in-out duration-500 border-[var(--foreground)] text-sm p-2 font-bold rounded-md ">
      {childNode}
    </button>
  )
}

export default Button