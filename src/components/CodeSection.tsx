
"use client";

import { TabItem, Tabs } from "flowbite-react";

const CodeSection = () => {
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
        <TabItem active title="Profile">
            This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </TabItem>
        <TabItem title="Dashboard">
            This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </TabItem>
        <TabItem title="Settings">
            This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </TabItem>
        <TabItem title="Contacts">
            This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </TabItem>
        <TabItem disabled title="Disabled">
            Disabled content
        </TabItem>
    </Tabs>
  );
}

export default CodeSection