import { getArticlesBySlug } from "@/lib/Article";

import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    
  const article = getArticlesBySlug(params?.slug)
    
    if (!article) return notFound()
  
    return (
      
      <div>
        <div className="w-full h-screen bg-stone-100 text-gray-600 font-mono">
  
          <div className="h-10"></div>
  
          <header className="font-bold text-6xl text-center ">ABOUT US</header>
  
          <article className="mt-32 w-full border flex-col p-6 flex justify-center items-center">
  
            <section className="flex-col w-1/2 ">
  
              <h1 className="font-bold text-4xl text-center ">{article.data.title1}</h1>
              
              <p className="text-justify m-4 text-3xl">{article.data.section1}</p>
            
            </section>
  
            <section className="flex-col w-1/2">
              
              <h2 className="font-bold text-4xl text-center">{article.data.title2}</h2>
  
              <p className="text-justify m-4 text-3xl">{article.content}</p>
  
  
            </section>
  
          </article>
        </div>

        <div className="w-full h-screen bg-stone-100 text-gray-600 font-mono">
  
          <article>
  
            <section>
  
              <h3 className="font-bold text-2xl text-center">{article.data.title3}</h3>
  
              <p></p>
              
            </section>
          
          </article>
         
          {/* <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
            <p className="text-sm text-gray-500">{article.data.date}</p>
            <div>{article.content}</div>
          </main> */}
        </div>


      </div>
    )
  }