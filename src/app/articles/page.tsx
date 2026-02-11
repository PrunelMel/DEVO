import Image from "next/image";
import {opendir} from 'node:fs/promises';
import ArticleView from "@/components/Article";


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

      <div className="w-full h-full flex flex-col items-center space-y-6">

        <div className="h-12"></div>

        <div className="text-4xl text-center">LATEST ARTICLES</div>
        
        {/* <div className="h-30 w-3/4 border border-white border-solid "></div> */}
        <ArticleView></ArticleView>
        {/* <div className="flex-col space-y-8 h-full w-3/4">



          <span className="text-2xl">Come back Later ...</span>
        </div> */}

          
      
      </div>
        
    </div>
  )
}

export default page