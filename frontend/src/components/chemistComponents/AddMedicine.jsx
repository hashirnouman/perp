import React, { useState } from "react";
import { Stack, FormControl, Input, Button } from "@chakra-ui/react";
const AddMedicine = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ task: input });
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack direction="row">
          <FormControl>
            <Input
              placeholder="Enter medicine"
              bg="white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </FormControl>
          <Button variant="solid" type="submit" colorScheme="blue">
            Add Medicine
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddMedicine;
