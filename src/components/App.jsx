import { Box } from './Box';
import Feedbacks from './Feedbacks';

export const App = () => {
  return (
    <Box
      width={[1, 2 / 3, 1 / 2, 1 / 3]}
      mr="auto"
      ml="auto"
      bg="background"
      boxShadow="medium"
    >
      <Feedbacks />
    </Box>
  );
};
