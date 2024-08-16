import { MetaFunction } from "@remix-run/react";
import { useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import Soundboard from "~/components/Soundboard";

export const meta: MetaFunction = () => {
    return [
        { title: "Soundboard" },
        { name: "Soundboard", content: "TTRPG Soundboard" },
    ];
};

export default function AppPage() {
    return (
        <ClientOnly>
            {() => {
                return (
                    <main className="p-6">
                        <section>
                            <Soundboard />
                        </section>
                    </main>
                );
            }}
        </ClientOnly>
    );
}
