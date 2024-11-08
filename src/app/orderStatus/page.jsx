"use client";
import { useEffect, useState } from 'react';
import styles from './orderStatus.module.css';

const OrderStatus = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [progressOrders, setProgressOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);

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
            throw new Error(`Failed to fetch ${endpoint}`);
          }
          return response.json();
        };

        // Fetch orders in each stage
        const pendingData = await fetchWithAuth('/track/pending');
        const completedData = await fetchWithAuth('/track/completed');
        const progressData = await fetchWithAuth('/track/progress');

        setPendingOrders(pendingData.orders.map((order) => order.id));
        setCompletedOrders(completedData.orders.map((order) => order.id));
        setProgressOrders(progressData.orders.map((order) => order.id));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Order Status</h1>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>Pending Orders</h2>
        <ul className={styles.orderList}>
          {pendingOrders.map((id) => (
            <li key={id} className={`${styles.orderItem} ${styles.pending}`}>
              Order ID: {id}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>Completed Orders</h2>
        <ul className={styles.orderList}>
          {completedOrders.map((id) => (
            <li key={id} className={`${styles.orderItem} ${styles.completed}`}>
              Order ID: {id}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>In Progress Orders</h2>
        <ul className={styles.orderList}>
          {progressOrders.map((id) => (
            <li key={id} className={`${styles.orderItem} ${styles.inProgress}`}>
              Order ID: {id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderStatus;
