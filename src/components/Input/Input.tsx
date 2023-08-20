import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface IInputComponent extends InputProps {
  children?: React.ReactNode;
}

const InputComponent: React.FC<IInputComponent> = (w) => {
  return (
    <InputGroup w={"30%"}>
      <InputRightElement pointerEvents="none">
        <BsSearch color="gray.300" />
      </InputRightElement>
      <Input variant="filled" placeholder="Search..." />
    </InputGroup>
  );
};

export default InputComponent;
