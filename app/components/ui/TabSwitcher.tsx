type Props = {
    tabs: Tab[];
};

type Tab = {
    name: string;
};

export default function TabSwitcher({ tabs }: Props) {
    return (
        <section>
            <div>
                {/* tab buttons */}
                {tabs &&
                    tabs.map((item) => {
                        return <Tab tabName={item.name} />;
                    })}
            </div>
        </section>
    );
}

type TabProps = {
    tabName: String;
};

function Tab({ tabName }: TabProps) {
    return (
        <div className="border-t-lg bg-slate-500">
            <button>{tabName}</button>
        </div>
    );
}
