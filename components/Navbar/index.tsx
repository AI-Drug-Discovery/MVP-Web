"use client";
import { Button, Group, Menu, Text } from "@mantine/core";

function Navbar() {
  return (
    <Group justify="space-between" w="100%" pt={0} mt={88} px="89px">
      <Group justify="space-around" gap="40px">
        <a href="/">
          <Text>Home</Text>
        </a>
        <Menu openDelay={100} closeDelay={400}>
          <Menu.Target>
            <a href="/solutions"><Text>Solutions</Text></a>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Hello there !!</Menu.Label>
          </Menu.Dropdown>
        </Menu>
        <Text>About Us</Text>
        <Text>Contact Us</Text>
        <Text>Blog</Text>
      </Group>
      <Group>
        <Button>Login In</Button>
        <Button>Free Trial</Button>
      </Group>
    </Group>
  );
}

export default Navbar;
