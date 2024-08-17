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
        name: "Setup Sounds",
        sounds: [
            {
                name: "Strange Begining",
                path: "/sounds/strange.mp3",
            },
        ],
    },
    {
        name: "On the Road",
        sounds: [
            {
                name: "Horse with cart",
                path: "/sounds/horse_with_cart.mp3",
            },
            {
                name: "Rain",
                path: "/sounds/rain.mp3",
            },
            {
                name: "Thunder",
                path: "/sounds/thunder.mp3",
            },
            {
                name: "Neigh",
                path: "/sounds/horse-neigh.mp3",
            },
        ],
    },
    {
        name: "Manor",
        sounds: [
            {
                name: "Gloom",
                path: "/sounds/gloomy.mp3",
            },
            {
                name: "Spooky Time",
                path: "/sounds/tense.mp3",
            },
            {
                name: "Creeking",
                path: "/sounds/creeking.mp3",
            },
        ],
    },
    {
        name: "Real Spooky",
        sounds: [
            {
                name: "Tense",
                path: "/sounds/tense.mp3",
            },
            {
                name: "Ghosts Enter",
                path: "/sounds/ghosts.mp3",
            },
        ],
    },
];

export default function Soundboard() {
    const [tabs, setTabs] = useLocalStorage("tabs", testTabs);

    return (
        <section>
            <div>
                <TabSwitcher pages={tabs} />
            </div>
        </section>
    );
}
