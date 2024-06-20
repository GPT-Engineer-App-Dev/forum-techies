import { useState } from "react";
import { Container, Heading, VStack, Box, Text, Button, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";



const Thread = () => {
  const { threadId } = useParams();
  const threads = JSON.parse(localStorage.getItem("threads")) || [];
  const thread = threads.find(t => t.id === parseInt(threadId));
  const [posts, setPosts] = useState(thread ? thread.posts : []);
  const [newPostContent, setNewPostContent] = useState("");

  const handleReply = () => {
    if (!newPostContent) return;

    const newPost = { author: "CurrentUser", content: newPostContent };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);

    // Update the thread in localStorage (or replace with actual API call)
    const updatedThreads = threads.map(t => t.id === parseInt(threadId) ? { ...t, posts: updatedPosts } : t);
    localStorage.setItem("threads", JSON.stringify(updatedThreads));

    setNewPostContent("");
  };

  if (!thread) {
    return (
      <Container centerContent maxW="container.md" py={10}>
        <Heading as="h1" size="xl">Thread not found</Heading>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">{thread.title}</Heading>
        <Text>{thread.content}</Text>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontWeight="bold">{post.author}</Text>
            <Text>{post.content}</Text>
          </Box>
        ))}
        <Textarea placeholder="Reply to this thread" value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
        <Button colorScheme="teal" onClick={handleReply}>Reply</Button>
      </VStack>
    </Container>
  );
};

export default Thread;