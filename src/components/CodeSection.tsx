
"use client";

import { TabItem, Tabs } from "flowbite-react";

const CodeSection = ({code}:{code:{python:string, java:string, typescript:string}}) => {
    
    return (
        <Tabs aria-label="Tabs with underline" variant="underline" className="">
            <TabItem active title="Python" className="font-bold">
                
                <code className="">
                    <pre className="bg-neutral-800 text-amber-100 text-sm">
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
            <TabItem title="Contacts">
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </TabItem>
        </Tabs>
    );
}

export default CodeSection