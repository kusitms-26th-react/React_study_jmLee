import React, { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

// <제네릭>(매개변수 타입):리턴 타입

//onChnage 하고 나서 useCallback으로 setValue 해줄 때 코드의 중복이 발생함

const useInput = <T>(initialData: T): ReturnTypes<T> => {

    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as unknown as T);
    }, [value]);

    return [value, handler, setValue];

}

export default useInput;
