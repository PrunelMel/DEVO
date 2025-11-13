  import ThemeToggle from "@/components/ThemeToggle";

  export default  function Home() {

    return (
      < >
        <div className="min-h-screen">
          <nav className=" mt-3 fixed w-full">
            
            <div className=" flex w-full">
              
              {/* logo */}
              <div className="font-bold w-1/4">DEVO</div>
            
            
  
              <div className="w-1/2">
                
                  
                <ul className="flex font-bold space-x-16 items-center justify-center">
  
                  <li>
                    <a href="#" className="hover:text-sm transition-all duration-75 " aria-current="page">Home</a>
                  </li>
  
                  <li>
                    <a href="/articles" className="hover:text-sm transition-all duration-75">Articles</a>
                  </li>
  
                  <li>
                    <a href="/articles/aboutus" className="hover:text-sm transition-all duration-75  ">About</a>
                  </li>
  
                </ul>

              </div>
  
              <ThemeToggle/>
  
              {/* suscribe button */}
              <div className="font-bold w-1/4 text-center">
                <a href="#" className="p-1 border-2 text-neutral-200 border-neutral-200 hover:bg-white  hover:text-teal-600  hover:text-sm transition ease-in-out duration-500 rounded-md ">Suscribe</a>
              </div>
            </div>
  
          </nav>
  
          <div className="h-screen">
  
            <section className="flex flex-col h-full">
  
              <div className="h-1/4">
  
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                
                
                <div>
                </div>
  
                <div className="font-bold text-[3em] text-center">
                  
                  LOREM IPSUM DOLOR SIT  RIO INUS COE AMET CONSECTETUR
  
                  <div></div>
  
                  <div className="h-4"></div>
  
                  <span className="text-sm">something about the blog or authors</span>
  
                  <div className="h-8"></div>
                  
  
                  <div>
                    <button className="dark:text-white dark:hover:text-[#1cb9a6]  hover:bg-white hover:text-teal-600 border-2 hover:text-base transition ease-in-out duration-500 border-white text-sm p-2 font-bold  rounded-md">
                      Read More
                    </button>
                  </div>
                
                </div>
  
                <div></div>
  
  
              </div>
  
  
              
            </section>
            <section className="h-full">
  
              <span className="text-2xl font-bold">New Articles...</span>
  
              <div className="flex flex-row h-1/12 border-2 rounded-md">
                  <div className="w-1/4">
                  </div>
              </div>
              <div className="flex flex-row h-1/12 border-2 rounded-md">
                  <div className="w-1/4">
                  </div>
              </div>
  
  
            </section>
          </div>
        </div>

        
      </>


    );
  } 