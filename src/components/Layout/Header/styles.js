import styled from "styled-components";

import { v } from "../../../styles/variables";

export const Header = styled.div`
  background: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
`;

export const HeaderContent = styled.div`
  height: ${v.headerHeight};
  max-width: 1920px;
  display: flex;
  align-items: center;
  padding: 0 ${v.mdSpacing};
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const Attribute = styled.a`
  color: ${({ theme }) => theme.primary};
`;