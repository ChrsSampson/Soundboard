import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Button from "~/components/ui/Button";

export const meta: MetaFunction = () => {
    return [{ title: "Soundboard" }, { name: "Soundboard", content: "TTRPG Soundboard" }];
};

export function loader() {
    return null;
}

export default function Index() {
    return (
        <div className="p-4 grid place-items-center  min-h-screen">
            <section className="flex flex-col gap-4 place-items-center border rounded-lg p-6 bg-slate-500">
                <h1 className="text-xl">No Bullshit Soundboard for TTRPG, OVBRPG, and VTTs</h1>
                <Link to="/app">
                    <Button variant="submit">Begin</Button>
                </Link>
            </section>
        </div>
    );
}
