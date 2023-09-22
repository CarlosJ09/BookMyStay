import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Theme from "../Theme/Theme";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { currentUser, UserButton } from "@clerk/nextjs";

export default async function NavBar(): Promise<JSX.Element> {
  const user = await currentUser();

  return (
    <Navbar isBordered maxWidth="full" position="sticky">
      <NavbarBrand>
        <p className="font-bold text-inherit">Book My Stay</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/reservation">
            Reservations
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Hotels
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>
      {!user ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Theme />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href="/sign-in">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem>
            <Theme />
          </NavbarItem>

          <NavbarItem>
            <UserButton afterSignOutUrl="/" />
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}