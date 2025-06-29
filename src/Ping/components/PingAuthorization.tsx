import React, { useEffect, useMemo } from "react";
import styles from "../styles/styles.module.css";
import { useAuthenticationMethods } from "../hooks/useAuthenticationMethos";
import { onChangeArgs } from "../interfaces/AuthMethod.interface";
import { PingAuthMethod } from "./PingAuthMethod";
import PingQr from "./PingQr";
interface Props {
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const PingAuthorization = ({ className, style, onChange }: Props) => {
  const { isLoading, methods, selected, userMethods, setSelectedMethod, code, senCode } =
    useAuthenticationMethods({ onChange });
  const flexClass: string = useMemo(
    () => `${className} ${styles.contenedor} ${styles.flex} ${styles.flexCol}`,
    [className]
  );

  useEffect(() => {
    userMethods();
  }, []);

  useEffect(() => {
    if(code){
       senCode(code);
    }
  }, [code]);

  return (
    <div style={style} className={flexClass}>
      {!selected && (
        <>
          {methods.map((method) => (
            <PingAuthMethod
              key={method.id}
              method={method}
              handleMethod={setSelectedMethod}
            />
          ))}
        </>
      )}
      {
        selected && (selected.id === '1') && (
            <PingQr />
        )
      }
    </div>
  );
};
