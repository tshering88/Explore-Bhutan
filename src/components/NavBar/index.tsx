import { Box, Flex, Stack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navLink = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Culture & Festival", path: "/culturalfestival" },
  { name: "Travel Info", path: "/travelinfo" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  return (
    <Box bg={'green.500'} p="5">
      <Flex justify="center">
        <Stack direction="row" spaceX={9}>
          {navLink.map((nav) => (
            <Link
              as={NavLink}
              to={nav.path}
              color={'white'}
              fontWeight={'bold'}
              _hover={{
                color: "yellow",
                textDecoration: "underline",

              }}
              _activeLink={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "yellow.200",
              }}
              key={nav.path}
            >
              {nav.name}
            </Link>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
