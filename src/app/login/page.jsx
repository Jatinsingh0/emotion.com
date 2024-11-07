// pages/Login.js

import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>Td</span>
        <h1 className={styles.heading}>Log in</h1>
      </div>
      <p className={styles.subtext}>Millions of users are using timidly</p>
      <form className={styles.formContainer}>
        <label htmlFor="email" className={styles.label}>Email or OrderId</label>
        <input
          type="email"
          id="email"
          placeholder="johnsmith@gmail.com"
          className={styles.inputField}
        />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={styles.inputField}
        />
        <div className={styles.links}>
          <a href="/forgot-password" className={styles.forgotPassword}>Forgot password?</a>
          <a href="/sign-up" className={styles.createAccount}>Create a new account</a>
        </div>
        <button type="submit" className={styles.loginButton}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
