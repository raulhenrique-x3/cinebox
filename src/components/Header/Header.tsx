import React, { useRef, useState } from "react";
import {
  Box,
  ButtonGroup,
  Input,
  Text,
  Icon,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillSuitHeartFill, BsFillCartFill, BsSearch } from "react-icons/bs";
import Image from "next/image";
import styles from "./header.module.scss";
import CartMenu from "../cartMenu/CartMenu";

const Header = () => {
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <header className={styles.headerContainer}>
      <Box
        p={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box bg="transparent" display={"flex"} alignItems={"center"} gap={4}>
          <Image
            className={styles.logoImage}
            src="/logo.jpeg"
            alt={"Cinebox logo"}
            width={48}
            height={48}
          />
          <Text fontSize="2xl" as={"b"} color={"#fff"}>
            Cinebox
          </Text>
        </Box>
        <InputGroup w={"30%"}>
          <InputRightElement pointerEvents="none">
            <BsSearch color="gray.300" />
          </InputRightElement>
          <Input variant="filled" placeholder="Search..." />
        </InputGroup>
        <ButtonGroup variant="outline" spacing="6">
          <Icon
            color={"#fff"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={BsFillSuitHeartFill}
          />
          <Icon
            color={"#fff"}
            w={8}
            h={8}
            cursor={"pointer"}
            onClick={onOpenCart}
            as={BsFillCartFill}
          />
        </ButtonGroup>
      </Box>

      <CartMenu
        onOpen={onOpenCart}
        isOpenCart={isOpenCart}
        btnRef={btnRef}
        onCloseCart={onCloseCart}
      />
    </header>
  );
};

export default Header;
