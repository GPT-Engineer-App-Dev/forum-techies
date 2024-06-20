import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    try {
      // Simulate API call to create a new thread
      const newThread = { id: Date.now(), title, content, posts: [] };
      // Save the new thread to localStorage (or replace with actual API call)
      const threads = JSON.parse(localStorage.getItem("threads")) || [];
      threads.push(newThread);
      localStorage.setItem("threads", JSON.stringify(threads));

      // Navigate to the new thread page
      navigate(`/thread/${newThread.id}`);
    } catch (err) {
      setError("Failed to create new thread");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Create New Thread</Heading>
        <Input placeholder="Thread Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Thread Content" value={content} onChange={(e) => setContent(e.target.value)} />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewThread;