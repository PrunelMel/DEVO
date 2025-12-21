import React from 'react'

const page = () => {
  return (
    <div>
        <div className="w-full h-screen bg-stone-100 text-gray-600 font-mono">

            <div className="h-10"></div>

            <header className="font-bold text-6xl text-center ">BALANCED BRACKETS</header>

            <article className="mt-32 w-full flex-col p-6 flex justify-center items-center">

            <section className="flex-col w-1/2 ">

                <h1 className="font-bold text-4xl text-center text-[4rem]">Our Mission 💼</h1>
                
                <p className="text-justify m-4 text-3xl"></p>
            
            </section>

            <section className="flex-col w-2/3">
                
                <h2 className="font-bold text-4xl text-center"></h2>

                <p className="text-justify m-4 text-3xl leading-normal">Hey fellow devs! 👋
                This blog is a space where I share the everyday life of a developer — the wins, the losses,
                the bugs, the learning curves, and everything in between. You’ll find articles inspired by real situations, 
                personal project experiences, and practical solutions to the recurring problems we all face at some point. 
                The idea isn’t just to drop answers, but to walk through the thought process, the mistakes, and the technical 
                choices behind them, so we can learn together, save time, and tackle development challenges with more clarity (and a bit more fun).
                </p>

                <section>

                <h3 className="font-bold text-2xl text-center"></h3>

                <p className="leading-normal text-justify m-4 text-3xl"></p>
                        
                </section>
            </section>

            </article>
        </div>

        <div className="w-full h-screen bg-stone-100 text-gray-600 font-mono">

            <article>

            
            
            </article>
            
        
        </div>


    </div>
  )
}

export default page