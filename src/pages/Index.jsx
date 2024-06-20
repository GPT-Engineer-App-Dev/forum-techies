import { Container, Heading, VStack, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  { name: "General Discussion", path: "/category/general" },
  { name: "Tech News", path: "/category/tech-news" },
  { name: "Programming", path: "/category/programming" },
  { name: "Hardware", path: "/category/hardware" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Tech Forum</Heading>
        {categories.map((category) => (
          <Box key={category.name} p={5} shadow="md" borderWidth="1px" width="100%">
            <Link as={RouterLink} to={category.path}>
              {category.name}
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;