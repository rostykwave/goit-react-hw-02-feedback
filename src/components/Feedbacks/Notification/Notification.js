import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={s.Notification}>{message}</p>
);

Notification.propsType = {
  message: PropTypes.string.isRequired,
};

export default Notification;
