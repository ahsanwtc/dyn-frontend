import React from "react";
import { Attribute, Header as H, HeaderContent, Logo } from "./styles";

const Header = () => {
  return (
    <H>
      <HeaderContent>
        <Logo>DYN Task </Logo>
        <Attribute
          href={"https://iamahsan.dev"}
          target="_blank"
        >
          iamahsan.dev
        </Attribute>
      </HeaderContent>
    </H>
  );
};

export default Header;