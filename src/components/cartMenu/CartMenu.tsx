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
} from "@chakra-ui/react";
import Image from "next/image";
import { BsFillCartXFill } from "react-icons/bs";

interface ICartMenu {
  isOpenCart: boolean;
  onCloseCart: () => void;
  onOpen: () => void;
  btnRef: any;
}

const CartMenu: React.FC<ICartMenu> = ({
  isOpenCart,
  onCloseCart,
  onOpen,
  btnRef,
}) => {
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
      finalFocusRef={btnRef}
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
                    <Td display={"flex"} alignItems={"center"}>
                      <Image width={32} height={32} src={movie.img} alt={""} />
                      <Td>{movie.title.slice(0, 16)}...</Td>
                      <Td>${movie.price}</Td>
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
