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

export default async function NavBar(props: any): Promise<JSX.Element> {
  const { isActive } = props;
  const user = await currentUser();

  return (
    <Navbar isBordered maxWidth="full" position="sticky">
      <NavbarBrand>
        <p className="font-bold text-inherit">Book My Stay</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className={`${
              isActive == "reservacion" ? "font-bold text-blue-800" : ""
            }`}
            href="/reservation"
          >
            Reservaciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className={`${
              isActive == "hotel" ? "font-bold text-blue-800" : ""
            }`}
            href="/"
          >
            Propiedades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className={`${
              isActive == "about" ? "font-bold text-blue-800" : ""
            }`}
            href="/about"
          >
            Sobre Nosotros
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            color="foreground"
            className={`${
              isActive == "propietario"
                ? "font-bold text-purple-800"
                : "bg-purple-600 rounded-lg px-4 py-1"
            }`}
            href="/propietario"
          >
            Propietario
          </Link>
        </NavbarItem> */}
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
