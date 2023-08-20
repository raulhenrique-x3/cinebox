import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <Box
        position={"relative"}
        bottom={"-8rem"}
        p={4}
        bgColor={"transparent"}
        backdropFilter={"blur(8px)"}
        borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
      >
        <Logo />
      </Box>
    </footer>
  );
};

export default Footer;
