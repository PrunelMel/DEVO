import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";

export default function Home() {

  // return (
  //   < >
  //     <div classNameName="min-h-screen">

  //       <div classNameName="h-screen">

  //         <section classNameName="flex flex-col h-full">

  //           <div classNameName="h-1/4">

  //           </div>

  //           <div classNameName="grid grid-cols-3 gap-2">


  //             <div>
  //             </div>

  //             <div classNameName="font-bold text-[3em] text-center">

  //               LOREM IPSUM DOLOR SIT  RIO INUS COE AMET CONSECTETUR

  //               <div></div>

  //               <div classNameName="h-4"></div>

  //               <span classNameName="text-sm">something about the blog or authors</span>

  //               <div classNameName="h-8"></div>


  //               <div>
  //                 <Button childNode="Read More" />
  //               </div>

  //             </div>

  //             <div></div>


  //           </div>



  //         </section>
  //         <section classNameName="h-full">

  //           <span classNameName="text-2xl font-bold">New Articles...</span>

  //           <div classNameName="flex flex-row h-1/12 border-2 rounded-md">
  //               <div classNameName="w-1/4">
  //               </div>
  //           </div>
  //           <div classNameName="flex flex-row h-1/12 border-2 rounded-md">
  //               <div classNameName="w-1/4">
  //               </div>
  //           </div>


  //         </section>
  //       </div>
  //     </div>


  //   </>


  // );

  return (
    <div className="">
      <main className="relative flex items-center justify-center min-h-screen z-10">
        <div className="text-center animate-fade-up">
          <h1 className="font-syne text-6xl md:text-4xl sm:text-3xl font-extrabold text-brand-dark leading-tight tracking-tight uppercase mb-8">
            <span className="block">LOREM IPSUM</span>
            <span className="block">DOLOR SIT RIO</span>
            <span className="block">INUS COE AMET</span>
            <span className="block">CONSECTETUR</span>
          </h1>
          <p className="text-xl text-brand-text font-medium tracking-wider">
            something about the blog or authors
          </p>
        </div>
      </main>

      {/* <!-- Floating Icons - Très dispersés sur l'écran --> */}
      <div className="fixed inset-0 z-[5]">

        {/* <!-- Coin supérieur gauche - HackerRank --> */}
        <div className="absolute top-20 left-8 animate-bounce ">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#00EA64" className="md:w-[30px] md:h-[30px]">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.22 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704v4.035c0 .145.113.26.255.26h4.332c.142 0 .256-.115.256-.26V7.057c0-.143-.114-.258-.255-.258h-.552zm-2.29 5.975c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.18zm1.078 0c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.1 0 .186-.112.186-.258v-1.756c0-.147-.084-.258-.186-.258h-.18zm1.08 0c-.102 0-.188.111-.188.258v1.756c0 .146.086.258.188.258h.178c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.178z" />
            </svg>
          </div>
        </div>

        {/* <!-- Coin supérieur droit - LeetCode --> */}
        <div className="absolute top-24 right-6 animate-float-delayed pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#FFA116" className="md:w-[30px] md:h-[30px]">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
        </div>

        {/* <!-- Gauche haut - Codeforces --> */}
        <div className="absolute top-[35%] left-4 animate-float-delayed-2 pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#1F8ACB" className="md:w-[30px] md:h-[30px]">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
          </div>
        </div>

        {/* <!-- Droite haut - HackerRank --> */}
        <div className="absolute top-[40%] right-4 animate-float pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#00EA64" className="md:w-[30px] md:h-[30px]">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.22 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704v4.035c0 .145.113.26.255.26h4.332c.142 0 .256-.115.256-.26V7.057c0-.143-.114-.258-.255-.258h-.552zm-2.29 5.975c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.18zm1.078 0c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.1 0 .186-.112.186-.258v-1.756c0-.147-.084-.258-.186-.258h-.18zm1.08 0c-.102 0-.188.111-.188.258v1.756c0 .146.086.258.188.258h.178c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.178z" />
            </svg>
          </div>
        </div>

        {/* <!-- Gauche bas - LeetCode --> */}
        <div className="absolute bottom-[35%] left-6 animate-float-delayed pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#FFA116" className="md:w-[30px] md:h-[30px]">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
        </div>

        {/* <!-- Droite bas - Codeforces --> */}
        <div className="absolute bottom-[30%] right-8 animate-float-delayed-2 pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#1F8ACB" className="md:w-[30px] md:h-[30px]">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
          </div>
        </div>

        {/* <!-- Coin inférieur gauche - HackerRank --> */}
        <div className="absolute bottom-16 left-12 animate-float pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#00EA64" className="md:w-[30px] md:h-[30px]">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.22 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704v4.035c0 .145.113.26.255.26h4.332c.142 0 .256-.115.256-.26V7.057c0-.143-.114-.258-.255-.258h-.552zm-2.29 5.975c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.18zm1.078 0c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.1 0 .186-.112.186-.258v-1.756c0-.147-.084-.258-.186-.258h-.18zm1.08 0c-.102 0-.188.111-.188.258v1.756c0 .146.086.258.188.258h.178c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.178z" />
            </svg>
          </div>
        </div>

        {/* <!-- Coin inférieur droit - LeetCode --> */}
        <div className="absolute bottom-20 right-10 animate-float-delayed-2 pointer-events-auto">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg md:w-14 md:h-14">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#FFA116" className="md:w-[30px] md:h-[30px]">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
        </div>

        {/* <!-- Icônes additionnelles pour grands écrans --> */}

        {/* <!-- Haut gauche intermédiaire - Codeforces --> */}
        <div className="absolute top-[18%] left-[15%] animate-float-delayed pointer-events-auto hidden lg:block">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#1F8ACB">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
          </div>
        </div>

        {/* <!-- Haut droit intermédiaire - HackerRank --> */}
        <div className="absolute top-[22%] right-[12%] animate-float pointer-events-auto hidden lg:block">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#00EA64">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.22 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704v4.035c0 .145.113.26.255.26h4.332c.142 0 .256-.115.256-.26V7.057c0-.143-.114-.258-.255-.258h-.552zm-2.29 5.975c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.18zm1.078 0c-.1 0-.186.111-.186.258v1.756c0 .146.084.258.186.258h.18c.1 0 .186-.112.186-.258v-1.756c0-.147-.084-.258-.186-.258h-.18zm1.08 0c-.102 0-.188.111-.188.258v1.756c0 .146.086.258.188.258h.178c.102 0 .188-.112.188-.258v-1.756c0-.147-.086-.258-.188-.258h-.178z" />
            </svg>
          </div>
        </div>

        {/* <!-- Bas gauche intermédiaire - LeetCode --> */}
        <div className="absolute bottom-[18%] left-[18%] animate-float-delayed-2 pointer-events-auto hidden lg:block">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#FFA116">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
        </div>

        {/* <!-- Bas droit intermédiaire - Codeforces --> */}
        <div className="absolute bottom-[22%] right-[15%] float-delayed pointer-events-auto hidden lg:block">
          <div className="icon-box w-16 h-16 bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-xl flex items-center justify-center -rotate-[15deg] shadow-lg">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="#1F8ACB">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
} 