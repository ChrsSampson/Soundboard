import Player from "../Player";
import { useState } from "react";

type TabStruct = {
    name: string;
    path: string;
};

type DataStruct = {
    name: string;
    sounds: TabStruct[];
};

export default function TabSwitcher({ pages }: { pages: any }) {
    const [index, setIndex] = useState<number>(0);

    const currentItems = pages[index];

    return (
        <section>
            <div className="flex ">
                {/* tab buttons */}
                {pages &&
                    pages.map((item, i) => {
                        return (
                            <Tab
                                active={index == i ? true : false}
                                onClick={() => setIndex(i)}
                                key={item.name + i}
                                tabName={item.name}
                            />
                        );
                    })}
            </div>
            {/* sounds */}
            <div className="bg-slate-700 p-5 rounded-b-lg rounded-tr-lg">
                <TabPage items={currentItems.sounds} />
            </div>
        </section>
    );
}

type TabProps = {
    tabName: String;
    onClick: (e: any) => void;
    active: boolean;
};

function Tab({ tabName, onClick, active }: TabProps) {
    const base = "border-t-lg text-black py-5 px-10 rounded-t-lg bg-slate-400";

    const activeStyle =
        "border-t-lg text-white py-5 px-10 rounded-t-lg bg-slate-700";

    return (
        <button onClick={onClick} className={active ? activeStyle : base}>
            {tabName}
        </button>
    );
}

function TabPage({ items }: PageProps) {
    console.log(items);

    if (!items || !items.length) {
        return (
            <span className="text-lg text-center text-gray-400">
                There is nothing here ☹️
            </span>
        );
    }

    return (
        <section className="grid grid-cols-2 bg-slate-700 gap-4  auto-rows-auto">
            {items &&
                items.map((thing) => {
                    return <Player name={thing.name} audio={thing.path} />;
                })}
        </section>
    );
}
