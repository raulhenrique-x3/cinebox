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
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import styles from "./header.module.scss";
import CartMenu from "../cartMenu/CartMenu";
import MobileMenu from "../mobileMenu/MobileMenu";
import Logo from "../Logo/Logo";

const Header = () => {
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();

  const {
    isOpen: isOpenMobileMenu,
    onOpen: onOpenMobileMenu,
    onClose: onCloseMobileMenu,
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
        <Logo />

        <InputGroup w={"30%"} display={{ base: "none", md: "block" }}>
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
          <Icon
            display={{ base: "block", md: "none" }}
            color={"#fff"}
            w={8}
            h={8}
            cursor={"pointer"}
            onClick={onOpenMobileMenu}
            as={BiMenu}
          />
        </ButtonGroup>
      </Box>

      <MobileMenu
        btnRef={btnRef}
        isOpenMobileMenu={isOpenMobileMenu}
        onCloseMobileMenu={onCloseMobileMenu}
        onOpenMobileMenu={onOpenMobileMenu}
      />

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
