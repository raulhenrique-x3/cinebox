import React from "react";
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
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { BiHome, BiSolidMoviePlay, BiSolidUserCircle } from "react-icons/bi";
import { IoTvSharp } from "react-icons/io5";
import styles from "./mobileMenu.module.scss";

interface IMobileMenu {
  isOpenMobileMenu: boolean;
  onCloseMobileMenu: () => void;
  onOpenMobileMenu: () => void;
  btnRef: any;
}

const mobileMenuItems = [
  { name: "Home", href: "/", id: 1, icon: BiHome },
  { name: "Movies", href: "/movies", id: 2, icon: BiSolidMoviePlay },
  { name: "TV Shows", href: "/tv-shows", id: 3, icon: IoTvSharp },
  { name: "My favorites", href: "/my-favorites", id: 4, icon: BsFillHeartFill },
  { name: "My account", href: "/my-account", id: 5, icon: BiSolidUserCircle },
];

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
          <form>
            <InputGroup w={"100%"}>
              <InputRightElement pointerEvents="none">
                <BsSearch color="gray.300" />
              </InputRightElement>
              <Input variant="filled" placeholder="Search..." />
            </InputGroup>
          </form>{" "}
        </DrawerHeader>

        <DrawerBody>
          <nav>
            <ul className={styles.mobileMenuUl}>
              {mobileMenuItems.map((item) => (
                <li key={item.id}>
                  <item.icon></item.icon>
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerBody>

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
