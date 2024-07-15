import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return <div className={s.place}>{message}</div>;
};

export default Notification;
