import { Container, Heading, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const NewThread = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Create New Thread</Heading>
        <Input placeholder="Thread Title" />
        <Textarea placeholder="Thread Content" />
        <Button colorScheme="teal">Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewThread;