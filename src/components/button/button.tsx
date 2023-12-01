import styles from './button.module.css';

interface Props {
  children: React.ReactNode;
  type: string;
}

function Button({ children, type }: Props) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Button;
