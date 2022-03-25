import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { fb } from '../../shared/service/firebase';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [verifypw, setverifyPW] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      email && emailRegex.test(email) && pw && verifypw && pw === verifypw,
    );
  }, [email, pw, verifypw]);

  const signup = () => {
    if (valid) {
      fb.auth
        .createUserWithEmailAndPassword(email, pw)
        .then(() => console.log('Sign Up Success!'));
    }
  };

  return (
    <div className={styles.main}>
      <h1>Sign Up</h1>
      <input
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={pw}
        placeholder="Provide Password"
        onChange={(e) => setPW(e.target.value)}
      />

      <input
        type="password"
        value={verifypw}
        placeholder="Verify Your Password"
        onChange={(e) => setverifyPW(e.target.value)}
      />

      <button onClick={signup} disabled={!valid}>
        Sign Up
      </button>
    </div>
  );
};
