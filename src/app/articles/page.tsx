import Image from "next/image";

export function page () {
  return (
    <div className="w-full h-screen">

        <div className="w-full h-1/2 flex items-center justify-center">



          <div className="flex-col ">

              <div className="h-8"></div>

              <Image className="border-2  border-neutral-400 rounded-full" src={'/bored.gif'} width={150 } height={150} alt="Nothing Yet"/>

              <div className="h-16"></div>

              <span className="text-2xl">Come back Later ...</span>
          </div>

            
        
        </div>
        
    </div>
  )
}

export default page