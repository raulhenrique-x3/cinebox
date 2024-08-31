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
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { BsSearch, BsHeart } from "react-icons/bs";
import { BiHome, BiMovie, BiUserCircle } from "react-icons/bi";
import { PiTelevisionThin } from "react-icons/pi";
import styles from "./mobileMenu.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
interface IMobileMenu {
  isOpenMobileMenu: boolean;
  onCloseMobileMenu: () => void;
  onOpenMobileMenu: () => void;
  btnRef: React.RefObject<HTMLButtonElement | null>;
}

const mobileMenuItems = [
  { name: "Home", href: "/", id: 1, icon: BiHome },
  { name: "Movies", href: "/movies", id: 2, icon: BiMovie },
  { name: "TV Shows", href: "/tv-shows", id: 3, icon: PiTelevisionThin },
  { name: "My favorites", href: "/my-favorites", id: 4, icon: BsHeart },
  { name: "My account", href: "/my-account", id: 5, icon: BiUserCircle },
];

const MobileMenu: React.FC<IMobileMenu> = ({
  isOpenMobileMenu,
  onCloseMobileMenu,
  btnRef,
}) => {
  return (
    <Drawer
      isOpen={isOpenMobileMenu}
      placement="right"
      onClose={onCloseMobileMenu}
      finalFocusRef={
        btnRef.current
          ? (btnRef as React.RefObject<HTMLButtonElement>)
          : undefined
      }
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
                  <span>
                    <item.icon></item.icon>
                    {item.name}
                  </span>

                  <MdOutlineKeyboardArrowRight />
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
