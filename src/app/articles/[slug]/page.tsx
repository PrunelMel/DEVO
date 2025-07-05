import { getArticlesBySlug } from "@/lib/Article";

import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { slug: string } }) {
    
  const article = getArticlesBySlug(params?.slug)
    
    if (!article) return notFound()
  
    return (
      
      <div>
        <div className="w-full h-screen bg-stone-100 text-gray-600 font-mono">
  
          <div className="h-10"></div>
  
          <header className="font-bold text-6xl text-center">ABOUT US</header>
  
          <article className="grid grid-cols-2 p-8 gap-x-8 m-5">
  
            <section className="flex-col w-3/4">
  
  
              <h1 className="font-bold text-2xl text-center">{article.data.title1}</h1>
              
              <p className="text-justify m-4">{article.data.section1}</p>
            
            </section>
  
            <section className="flex-col w-3/4">
              
              <h2 className="font-bold text-2xl text-center">{article.data.title2}</h2>
  
              <p className="text-justify m-4">{article.content.slice(0, -300)}</p>
  
  
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