import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import Input from "./ui/Input";

type Props = {
    audio: string;
    name?: string;
};

export default function ClientPlayer({ audio, name }: Props) {
    const ref = useRef(new Audio(audio));
    const [play, setPlay] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);
    const [loop, setLoop] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [time, setTime] = useState<number>(ref.current.currentTime);

    function handlePlay() {
        ref.current.play();
        setPlay(true);
    }

    function handlePause() {
        ref.current.pause();
        setPlay(false);
    }

    function handleVolume(value: number) {
        const min = 0;
        const max = 100;
        if ((value && value < min) || value > max) {
            return;
        }

        const vol = value / 100;

        ref.current.volume = vol;
        setVolume(value);
    }

    function handleLoop() {
        setLoop(!loop);
        ref.current.loop = !loop;
    }

    function formatDuration() {
        const mins = ref.current.duration / 60;

        setDuration(Number(mins.toFixed(2)));
    }

    return (
        <section className="bg-gray-300 p-4 rounded flex flex-col place-items-center gap-4">
            <h1 className="text-2xl">{name}</h1>
            <sub>
                Duration: {duration} {duration > 1 ? "minutes" : "seconds"}
            </sub>
            <audio
                ref={ref}
                preload="metadata"
                onEnded={() => setPlay(false)}
                onCanPlay={() => formatDuration()}
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            >
                <source type="audio/mp3" src={audio} />
            </audio>
            <div className="flex gap-3 justify-between place-items-center">
                <Button
                    onClick={() => {
                        if (play) {
                            handlePause();
                        } else {
                            handlePlay();
                        }
                    }}
                    variant={play ? "danger" : "button"}
                >
                    {play ? "Stop" : "Play"}
                </Button>
                <div className="flex gap-2 place-items-center">
                    <label>Loop</label>
                    <Input
                        className="size-8"
                        type="checkbox"
                        checked={loop}
                        value={loop}
                        onChange={handleLoop}
                    />
                </div>
            </div>
            <Slider label="volume" value={volume} onChange={handleVolume} />
            <Slider disabled={true} value={time} onChange={() => {}} max={ref.current.duration} />
        </section>
    );
}

type SliderProps = {
    value: number;
    onChange: (e: any) => void;
    label?: string;
    max?: number;
    disabled?: boolean;
};

function Slider({ value, onChange, max = 100, disabled }: SliderProps) {
    return (
        <Input
            type="range"
            value={value}
            step={1}
            min={0}
            max={max}
            onChange={onChange}
            disable={disabled}
        />
    );
}
