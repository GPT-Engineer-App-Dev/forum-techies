import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Tech Forum
        </Link>
        <Flex>
          <Link as={RouterLink} to="/register" color="white" fontWeight="bold" mr={4}>
            Register
          </Link>
          <Link as={RouterLink} to="/login" color="white" fontWeight="bold">
            Login
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;