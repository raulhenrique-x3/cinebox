import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <Box
        position={"relative"}
        bottom={"-5rem"}
        p={4}
        bgColor={"transparent"}
        backdropFilter={"blur(8px)"}
        borderTop={"1px solid #d9d9d94e"}
      >
        <Logo />
      </Box>
    </footer>
  );
};

export default Footer;
