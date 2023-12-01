import Button from '../button/button';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="" className={styles.logo}>
        skilled
      </a>
      <Button type="btn-primary">Get Started</Button>
    </nav>
  );
}

export default Navbar;
