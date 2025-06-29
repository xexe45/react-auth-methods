import styles from "../styles/styles.module.css";
export interface PropsSubTitle {
  subTitle?: string;
  className?: string
  style?: React.CSSProperties;
}

export const PingContainerSubTitle = ({subTitle = '', className, style}: PropsSubTitle) => {
  return (
    <p style={style} className={`${ styles.subTitle } ${className} `}>
        {subTitle}
    </p>
  )
}


