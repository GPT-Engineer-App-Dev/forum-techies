import { useState } from "react";
import { Container, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Register</Heading>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="teal" onClick={handleRegister}>Register</Button>
      </VStack>
    </Container>
  );
};

export default Register;