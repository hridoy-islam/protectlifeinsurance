"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import whitelogo from "../public/whitelogo.png";

export default function Header() {
  const menuItems = [
    { name: "Insurance", path: "insurance" },
    { name: "Investing & Saving", path: "investing" },
    { name: "Retirement", path: "retirement" },
    { name: "Mortgages", path: "mortgages" },
    { name: "Business Solutions", path: "businesssolutions" },
    { name: "Halal Investment", path: "halalinvestment" },
    { name: "Mutual Funds", path: "mutualfunds" },
    { name: "Creditor Insurance", path: "creditorinsurance" },
  ];
  return (
    <Navbar
      className="py-2 container mx-auto"
      maxWidth="full"
      position="static"
      isBlurred={false}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={<Icon icon="material-symbols:menu" color="black" width={24} />}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href={"/"}>
            {/* <Image src={whitelogo} alt="robofx" className="w-full h-auto" /> */}
            <h2>Protcet</h2>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="text-black text-right">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/">Home</Link>
        </NavbarItem> */}
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="hidden lg:flex">
            <Link href={`/${item.path}`}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/getstarted"
            variant="flat"
            className="btn-basic"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.path.toLowerCase()}`}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
