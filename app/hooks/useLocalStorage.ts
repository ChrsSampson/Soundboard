import { useState } from "react";

export default function useLocalStorage(key: string, intialValue: any) {
    const [value, setValue] = useState(() => {
        const exists = localStorage.getItem(key);

        return exists ? JSON.parse(exists) : intialValue;
    });

    function handleUpdate(value: any) {
        const cerial = JSON.stringify(value);

        localStorage.setItem(key, cerial);
        setValue(value);
    }

    return [value, handleUpdate];
}
