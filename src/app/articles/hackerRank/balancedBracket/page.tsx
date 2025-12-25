import React from 'react';
import CharLighter from '@/components/CharLighter';
export default function page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-semibold text-gray-800">CodeBlog</span>
          </div>
          <nav className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-800">Proba Sredit ▼</button>
            <button className="text-gray-600 hover:text-gray-800">Enclinat coduckcit ▼</button>
            <button className="text-gray-600 hover:text-gray-800">🔔 Liga</button>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Balanced Bracket</h1>
            <p className="text-gray-500 mb-12">December 15, 2025 | by DEVO</p>

            {/* Problem Statement */}
            <section className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem Statement</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    A bracket can be any of the following characters: <CharLighter char="("/>,<CharLighter char=")"/>,<CharLighter char='{'/>,<CharLighter char="}"/>,<CharLighter char="["/>, or <CharLighter char="]"/>.
                    A sequence of brackets is considered balanced if:
                </p>
                <ul className="list-disc list-inside space-y-4 pl-7 mt-4 text-gray-700">
                    <li className="leading-relaxed">It contains no unmatched brackets</li>
                    <li>Each opening bracket has a corresponding closing bracket of the same type</li>
                    <li>The brackets are properly nested</li>
                </ul>
                <p className="text-gray-700 leading-relaxed space-y-9 mt-4">
                    For example :
                    <ul className="list-disc list-inside space-y-4 pl-7 text-gray-700">
                        <li className="leading-relaxed"><CharLighter char='{ ( ( ) ) }'/> is balanced ✅</li>
                        <li className="leading-relaxed"><CharLighter char='{ [ ( ] ) }'/> is not balanced ❌</li>
                        <li className="leading-relaxed"><CharLighter char='{ [ } ]'/> is not balanced ❌ </li>
                    </ul>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    <span className='font-bold'>Objective</span>: Determine if a string containing brackets is balanced. Return YES if balanced, NO otherwise.
                    Check the official <a href="https://www.hackerrank.com/challenges/balanced-brackets/problem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">problem statement</a> for more details.
                </p>
            </section>

            {/* <section className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem Statement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A bracket is considered to be "balanced" if the following condition met: It has no unmatched brackets. It a net brackets are properly nested.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For example <span className="font-mono bg-white px-2 py-1 rounded">{'{(())}'}</span> is balanced, not. The problem requires if a a string of brackets is balanced.
              </p>
            </section> */}

            {/* Principle and Concept */}
            <section className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Principle and Concept</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A string is balanced if for every opening bracket we encounter, we find the corresponding closing bracket.
                The idea will be to iterate through the string and store each opening parenthesis.
                When we encounter a closing bracket, we check if the corresponding opening bracket is present.

              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
              </p>
              {/* <ul className="space-y-4 text-gray-700">
                <li className="leading-relaxed">
                  • If we see opening string Whre string {'('} we stack ']' We its tach rack. I. If we stac If we ppp the stack empty or the the top the stach ied nott masl a ompaning unblanced.
                </li>
                <li className="leading-relaxed">
                  • Otherwise
                </li>
                <li className="leading-relaxed">
                  • After processing be entire string, if the stack elore emity, Othr else not sequence is as ungs true comes can is lessed.
                </li>
              </ul> */}
            </section>

            {/* Coding Section */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Coding Section</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <span>Step 1: Iterating through the string and looking for opening brackets</span> 

              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
              </p>
              {/* <ul className="space-y-4 text-gray-700">
                <li className="leading-relaxed">
                  • If we see opening string Whre string {'('} we stack ']' We its tach rack. I. If we stac If we ppp the stack empty or the the top the stach ied nott masl a ompaning unblanced.
                </li>
                <li className="leading-relaxed">
                  • Otherwise
                </li>
                <li className="leading-relaxed">
                  • After processing be entire string, if the stack elore emity, Othr else not sequence is as ungs true comes can is lessed.
                </li>
              </ul> */}
            </section>
          </div>
          

          {/* Sidebar - Related Posts */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Related Posts</h3>
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 h-48"></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Stack Data Structure Explained About Credit</h4>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-rose-300 to-rose-500 h-48"></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Stack Data Structure Explained Bosinca</h4>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-teal-300 to-teal-500 h-48"></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Hackorthm Efficiency</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}