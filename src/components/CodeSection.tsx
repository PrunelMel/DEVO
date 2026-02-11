
"use client";

import { TabItem, Tabs } from "flowbite-react";

const CodeSection = ({code}:{code:{python:string, java:string, typescript:string}}) => {
    
    return (
        <Tabs aria-label="Tabs with underline" variant="underline" className="">
            <TabItem active title="Python" className="font-bold">
                
                <code className="">
                    <div className="code-section flex justify-end w-full "><button type="button" className="text-sm w-1/12 text-center text-gray-500">Copy</button></div>
                    <pre className="code-section text-gray-600  dark:text-gray-200 text-sm">
                        {code.python}
                    </pre>
                </code>
                
            </TabItem>
            <TabItem title="Java">
                This is Dashboard tab's associated content.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </TabItem>
            <TabItem title="TypeScript">
                This issSettings tab's associated content.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </TabItem>
            {/* <TabItem title="Contacts">
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </TabItem> */}
        </Tabs>
    );
}

export default CodeSection