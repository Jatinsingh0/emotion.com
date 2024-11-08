"use client"
import { useRouter } from 'next/router';
import styles from "./orderStatus.module.css"
const OrderStatus = () => {
  const router = useRouter();
  const { pending, completed, progress } = router.query;

  const pendingOrders = pending ? JSON.parse(pending) : [];
  const completedOrders = completed ? JSON.parse(completed) : [];
  const progressOrders = progress ? JSON.parse(progress) : [];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Order Status</h1>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>Pending Orders</h2>
        <ul className={styles.orderList}>
          {pendingOrders.map((order) => (
            <li key={order.id} className={`${styles.orderItem} ${styles.pending}`}>
              Order ID: {order.id}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>Completed Orders</h2>
        <ul className={styles.orderList}>
          {completedOrders.map((order) => (
            <li key={order.id} className={`${styles.orderItem} ${styles.completed}`}>
              Order ID: {order.id}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.orderSection}>
        <h2 className={styles.sectionTitle}>In Progress Orders</h2>
        <ul className={styles.orderList}>
          {progressOrders.map((order) => (
            <li key={order.id} className={`${styles.orderItem} ${styles.inProgress}`}>
              Order ID: {order.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderStatus;
