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
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsFillCartXFill } from "react-icons/bs";

interface ICartMenu {
  isOpenCart: boolean;
  onCloseCart: () => void;
  btnRef: React.RefObject<HTMLButtonElement | null>;
}

const CartMenu: React.FC<ICartMenu> = ({ isOpenCart, onCloseCart, btnRef }) => {
  const { cart, clearCart, removeFromCart } = useCart();
  const handleClearCart = () => {
    clearCart();
  };

  const removeItemFromCart = (id: string) => {
    removeFromCart(id);
  };

  return (
    <Drawer
      isOpen={isOpenCart}
      placement="right"
      onClose={onCloseCart}
      finalFocusRef={
        btnRef.current
          ? (btnRef as React.RefObject<HTMLButtonElement>)
          : undefined
      }
      size={"lg"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text>Your cart</Text>
        </DrawerHeader>

        <DrawerBody>
          {cart.map((movie) => (
            <TableContainer key={movie.id}>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Box display={"flex"} alignItems={"center"} gap={"12px"}>
                        <Image
                          width={32}
                          height={32}
                          src={movie.img}
                          alt={movie.title}
                        />
                        <Text>{movie.title}</Text>
                      </Box>
                      <Box display={"flex"} alignItems={"center"} gap={"12px"}>
                        <Text>${movie.price}</Text>
                        <Button
                          background={"none"}
                          onClick={() => removeItemFromCart(movie.id)}
                        >
                          <Text color={"red.500"}>X</Text>
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          ))}
        </DrawerBody>

        <DrawerFooter
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Button
            leftIcon={<BsFillCartXFill />}
            colorScheme="red"
            variant="solid"
            onClick={handleClearCart}
          >
            Clear cart
          </Button>

          <Button colorScheme="blue">Finish</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartMenu;
