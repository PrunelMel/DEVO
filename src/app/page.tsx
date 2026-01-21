import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";

  export default  function Home() {

    return (
      < >
        <div className="min-h-screen">
    
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
                    <Button childNode="Read More" />
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