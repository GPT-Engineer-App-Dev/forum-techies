import { useState } from "react";
import { Container, Heading, VStack, Input, Button, Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Login</Heading>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;