import styles from "../styles/styles.module.css";
export interface PropsTitle {
  title?: string;
  className?: string
  style?: React.CSSProperties;
}
export const PingContainerTitle = ({title = '', className, style}: PropsTitle) => {
    return (
        <h3 style={style} className={`${ styles.textDark } ${className} `}>
            {title}
        </h3>
    )
}