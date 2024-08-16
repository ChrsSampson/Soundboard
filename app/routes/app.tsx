import TabSwitcher from "~/components/ui/TabSwitcher";
import { MetaFunction } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
    return [{ title: "Soundboard" }, { name: "Soundboard", content: "TTRPG Soundboard" }];
};

type TabStruct = {
    name: string;
    path: string;
};

type DataStruct = {
    name: string;
    sounds: TabStruct[];
};

const testTabs: DataStruct[] = [
    {
        name: "Outside",
        sounds: [
            {
                name: "Horse with cart",
                path: "/sounds/horse_with_cart.mp3",
            },
            {
                name: "Rainy Day",
                path: "/sounds/rainy_day",
            },
        ],
    },
];

export default function AppPage() {
    const [tabs, setTabs] = useState(testTabs);

    return (
        <main className="p-6">
            <section>
                <TabSwitcher tabs={tabs} />
            </section>
        </main>
    );
}
