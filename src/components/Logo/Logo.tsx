import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
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
  );
};

export default Logo;
