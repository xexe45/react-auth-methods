import { useState } from "react";
import { AuthMethod } from "../interfaces/Props.interface";

interface useAuthMethodsArgs {
  onChange?: (args: AuthMethod) => void;
}

export const useAuthMethods = ({ onChange }: useAuthMethodsArgs) => {
  const [methods, setMethods] = useState<AuthMethod[]>([]);
  const [selected, setSelected] = useState<AuthMethod>({} as AuthMethod);
  const startLoadinMethods = (rut: string) => {
    setMethods([
      {
        id: "1",
        name: "One Time PassCode",
      },
      {
        id: "2",
        name: "Push Notification",
      },
      {
        id: "3",
        name: "FingerPrint",
      },
    ]);
  };

  const selectMethod = (method: AuthMethod) => {
    setSelected(method);
    onChange && onChange(method)
  }

  return {
    methods,
    selected,
    startLoadinMethods,
    selectMethod
  };
};
