import { Box } from 'components/styleConfig/Box';
import PropTypes from 'prop-types';
// import s from './Notification.module.css';

const Notification = ({ message }) => (
  <Box as="p" fontSize="20px" textAlign="center">
    {message}
  </Box>
);

Notification.propsType = {
  message: PropTypes.string.isRequired,
};

export default Notification;
