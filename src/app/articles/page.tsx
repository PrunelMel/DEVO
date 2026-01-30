import Image from "next/image";
import {opendir} from 'node:fs/promises';


var files = await opendir('./src/app/articles');
        
var articles:Array<string> = []

for await (const dirent of files){

  if(dirent.isDirectory()){
    articles.push(dirent.name)
  }
}

export function page () {
  return (
    <div className="w-full h-screen">

        <div className="w-full h-1/2 flex items-center justify-center">



          <div className="flex-col ">

              <div className="h-1/12">LATEST ARTICLES</div>

              <div className="h-8/12">
                {articles.map((article) => <div className="">{article}</div>)}
              </div>


              <div className="h-16"></div>

              <span className="text-2xl">Come back Later ...</span>
          </div>

            
        
        </div>
        
    </div>
  )
}

export default page