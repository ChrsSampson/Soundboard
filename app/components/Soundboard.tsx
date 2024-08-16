// This is client side of soundboard

import TabSwitcher from "~/components/ui/TabSwitcher";
import useLocalStorage from "~/hooks/useLocalStorage";

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
        name: "On the Road",
        sounds: [
            {
                name: "Horse with cart",
                path: "/sounds/horse_with_cart.mp3",
            },
            {
                name: "Neigh",
                path: "/sounds/horse-neigh.mp3",
            },
        ],
    },
    {
        name: "Manor",
        sounds: [],
    },
];

export default function Soundboard() {
    const [tabs, setTabs] = useLocalStorage("tabs", testTabs);

    return (
        <section>
            <h1>Soundboard</h1>
            <div>
                <TabSwitcher pages={tabs} />
            </div>
        </section>
    );
}
