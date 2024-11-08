"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  

  const handleLogin = async (e) => {
    const router = useRouter();
    e.preventDefault();
    setError(null);

    try {
      // Step 1: Call /track/login with email and password
      const loginResponse = await fetch('http://localhost:4000/api/v1/track/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (!loginResponse.ok) throw new Error('Login failed');
      const loginData = await loginResponse.json();

      // Save the JWT token in localStorage if it exists
      if (loginData.token) {
        localStorage.setItem('jwtToken', loginData.token);
      } else {
        throw new Error('Token missing in response');
      }

      // Step 2: Initialize orders
      await fetchWithAuth('/track/start');

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

  // Helper function to fetch data with JWT token
  const fetchWithAuth = async (endpoint) => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Authorization token is missing');
    }

    const response = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${endpoint}`);
    }
    return response;
  };

  const fetchOrders = async (endpoint) => {
    const response = await fetchWithAuth(endpoint);
    const data = await response.json();
    return data.orders.map((order) => order.id); // Assumes each order has an 'id' property
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>Td</span>
        <h1 className={styles.heading}>Log in</h1>
      </div>
      <p className={styles.subtext}>Millions of users are using Timidly</p>

      <form className={styles.formContainer} onSubmit={handleLogin}>
        <label htmlFor="email" className={styles.label}>Email or OrderId</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
