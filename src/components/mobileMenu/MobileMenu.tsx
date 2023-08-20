import React from "react";
import { useCart } from "@/hooks/useCart";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  TableContainer,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

interface IMobileMenu {
  isOpenMobileMenu: boolean;
  onCloseMobileMenu: () => void;
  onOpenMobileMenu: () => void;
  btnRef: any;
}

const MobileMenu: React.FC<IMobileMenu> = ({
  isOpenMobileMenu,
  onCloseMobileMenu,
  onOpenMobileMenu,
  btnRef,
}) => {
  return (
    <Drawer
      isOpen={isOpenMobileMenu}
      placement="right"
      onClose={onCloseMobileMenu}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text fontSize="2xl" as={"b"} color={"#000"}>
            Cinebox
          </Text>
          <InputGroup w={"100%"}>
            <InputRightElement pointerEvents="none">
              <BsSearch color="gray.300" />
            </InputRightElement>
            <Input variant="filled" placeholder="Search..." />
          </InputGroup>{" "}
        </DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onCloseMobileMenu}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
