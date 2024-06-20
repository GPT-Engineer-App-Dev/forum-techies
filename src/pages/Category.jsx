import { Container, Heading, VStack, Box, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";

const threads = [
  { title: "Welcome to the forum!", path: "/thread/1" },
  { title: "Latest Tech News", path: "/thread/2" },
  { title: "Programming Tips", path: "/thread/3" },
];

const Category = () => {
  const { categoryName } = useParams();

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">{categoryName}</Heading>
        {threads.map((thread) => (
          <Box key={thread.title} p={5} shadow="md" borderWidth="1px" width="100%">
            <Link as={RouterLink} to={thread.path}>
              {thread.title}
            </Link>
          </Box>
        ))}
        <Button as={RouterLink} to="/new-thread" colorScheme="teal">Create New Thread</Button>
      </VStack>
    </Container>
  );
};

export default Category;