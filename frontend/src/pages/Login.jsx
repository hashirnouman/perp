import React, { useState } from "react";
import {
  Input,
  FormControl,
  Center,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Center mt={9} p={5}>
        <Stack direction="column">
          <FormControl>
            <Input
              type="text"
              placeholder="Enter email"
              mb={3}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isRequired
            />
          </FormControl>
          <Button type="submit">login</Button>
        </Stack>
      </Center>
    </form>
  );
};

export default Login;
