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
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [dat, setDat] = useState("");
  let history = useHistory();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .post("http://127.0.0.1:8002/api/login", {
    //     email: email,
    //     password: password,
    //     roles: "admin",
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setDat(res.data);
    //       window.localStorage.setItem("token", dat.token);
    //       history.push("/dashboard");
    //     }
    //   });
    history.push("/dashboard");
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
          <Button type="submit" colorScheme="blue">
            login
          </Button>
        </Stack>
      </Center>
    </form>
  );
};

export default Login;
