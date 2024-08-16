import { ClientOnly } from "remix-utils/client-only";
import ClientPlayer from "./ClientPlayer";

export default function Player({ name, audio }: { name: string; audio: any }) {
    return (
        <section className="flex flex-col">
            <ClientOnly fallback={<span className="text-lg">Loading...</span>}>
                {() => <ClientPlayer name={name} audio={audio} />}
            </ClientOnly>
        </section>
    );
}
