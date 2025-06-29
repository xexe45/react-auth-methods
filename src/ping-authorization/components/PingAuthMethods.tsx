import { useContext, useEffect } from "react";
import { AuthContext } from "./PingContainer";
import styles from "../styles/styles.module.css";


export const PingAuthMethods = () => {
   const { rut, startLoadinMethods, methods, selectMethod } = useContext( AuthContext );
  
   useEffect(() => {
    
    startLoadinMethods(rut);
     
   }, [])
   

   return (
    <ul className={styles.list}>
      {
        methods.map( method => (
          <li onClick={() => selectMethod(method)} className={styles.listItem} key={method.id}>
            { method.name }
          </li>
        ) )
      }
    </ul>
  )
}

