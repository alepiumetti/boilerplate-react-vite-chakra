import { Box, VStack, Image, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LogOut from "../logout/LogOut";

const Layout = () => {
  return (
    <>
      <VStack w="100vw" h="100vh">
        <HStack w="100%" justifyContent="space-between">
          <Box>
            <Image p={3} objectFit="contain" m="auto" />
          </Box>
          <Box p={2} pr={5}>
            <LogOut />
          </Box>
        </HStack>
        <Box w="100%" h="100%" overflowX="clip" overflowY="scroll" bg="#D3D1D1">
          <Outlet />
        </Box>
      </VStack>
    </>
  );
};

export default Layout;
