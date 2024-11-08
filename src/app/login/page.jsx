"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';

const Login = () => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  

  const handleLogin = async (e) => {
    const router = useRouter();
    e.preventDefault();
    setError(null);

    try {
      // Step 1: Call /track/login with credential and password
      const loginResponse = await fetch('http://localhost:4000/api/v1/track/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential, password }),
      });
      if (!loginResponse.ok) throw new Error('Login failed');

      // Step 2: Call /track/start after successful login
      const startResponse = await fetch('http://localhost:4000/api/v1/track/start');
      if (!startResponse.ok) throw new Error('Failed to initialize orders');

      // Step 3: Fetch orders in each stage
      const pendingOrders = await fetchOrders('/track/pending');
      const completedOrders = await fetchOrders('/track/completed');
      const progressOrders = await fetchOrders('/track/progress');

      // Step 4: Navigate to OrderStatus page with fetched orders
      router.push({
        pathname: '/order-status',
        query: {
          pending: JSON.stringify(pendingOrders),
          completed: JSON.stringify(completedOrders),
          progress: JSON.stringify(progressOrders),
        },
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchOrders = async (endpoint) => {
    const response = await fetch(`http://localhost:4000/api/v1${endpoint}`);
    if (!response.ok) throw new Error(`Failed to fetch ${endpoint} orders`);
    const data = await response.json();
    return data.map((order) => order.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>Td</span>
        <h1 className={styles.heading}>Log in</h1>
      </div>
      <p className={styles.subtext}>Millions of users are using timidly</p>

      <form className={styles.formContainer} onSubmit={handleLogin}>
        <label htmlFor="credential" className={styles.label}>credential or OrderId</label>
        <input
          type="text"
          id="credential"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder="joe@gmail.com or 1234678"
          className={styles.inputField}
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputField}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.loginButton}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
