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
    <Box bg="green" p={5}>
      <Flex justify="center">
        <Stack direction="row" spaceX={9}>
          {navLink.map((nav) => (
            <NavLink
              to={nav.path}
              key={nav.path}
              style={({ isActive }) => ({
                fontWeight: 'bold',
                color: isActive ? 'white' : 'yellow',
                textDecoration: isActive ? 'underline' : 'none',
              })}
              end // important for "/" route to not match all
            >
              {nav.name}
            </NavLink>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
