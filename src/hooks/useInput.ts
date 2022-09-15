import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

// <제네릭>(매개변수 타입):리턴 타입

const useInput = <T>(initialData: T): ReturnTypes<T> => {

    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as unknown as T);
    }, []);

    return [value, handler, setValue];

}

export default useInput;

