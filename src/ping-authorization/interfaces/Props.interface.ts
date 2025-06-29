import { JSX } from 'react';
export interface Props {
    children: () => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    initialValues: InitialValues;
    onChange?: ( args: AuthMethod ) => void;
}

export interface InitialValues {
    rut: string;
}

export interface AuthContextProps {
    rut: string;
    methods: AuthMethod[];
    startLoadinMethods: (rut: string) => void;
    selected: AuthMethod;
    selectMethod: (method: AuthMethod) => void;
}

export interface AuthMethod  {
    id: string;
    name: string;
}