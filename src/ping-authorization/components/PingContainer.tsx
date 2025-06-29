import { createContext } from "react";
import {
  Props,
  InitialValues,
  AuthContextProps,
} from "../interfaces/Props.interface";
import styles from "../styles/styles.module.css";
import { useAuthMethods } from '../hooks/useAuthMethods';

export const AuthContext = createContext({} as AuthContextProps);
const { Provider } = AuthContext;


export const PingContainer = ({
  children,
  className,
  style,
  initialValues,
  onChange
}: Props) => {
    const {  methods, selected, startLoadinMethods, selectMethod } = useAuthMethods({onChange});

  return (
    <Provider value={{
        rut: initialValues.rut,
        startLoadinMethods,
        methods,
        selected,
        selectMethod
    }}>
      <div style={style} className={styles.card}>{children()}</div>
    </Provider>
  );
};
