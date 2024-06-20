import { Container, Heading, VStack, Box, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const posts = [
  { author: "User1", content: "Welcome to the forum!" },
  { author: "User2", content: "Thanks! Glad to be here." },
];

const Thread = () => {
  const { threadId } = useParams();

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Thread {threadId}</Heading>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontWeight="bold">{post.author}</Text>
            <Text>{post.content}</Text>
          </Box>
        ))}
        <Button colorScheme="teal">Reply</Button>
      </VStack>
    </Container>
  );
};

export default Thread;