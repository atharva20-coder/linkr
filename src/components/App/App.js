import styles from './styles.module.css';
import { Login } from '../Login';
import { Signup } from '../Signup';

export const App = () => {
  return (
    <div className={styles.main}>
      <Login />
      <Signup />
    </div>
  );
};
