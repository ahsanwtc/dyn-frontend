import styled from "styled-components";

export const ErrorMessage = styled.div`
  border: 1px solid transparent;
  border-radius: .25rem;
  border-color: #f5c2c7;
  margin: 5px 0px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  color: #842029;
  background-color: #FFBABA;
  display: flex;
  flex-direction: column;
  font-size: small;
`;

export const SuccessMessage = styled.div`
  border: 1px solid transparent;
  border-radius: .25rem;
  border-color: #badbcc;
  margin: 5px 0px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  color: #0f5132;
  background-color: #d1e7dd;
  display: flex;
  flex-direction: column;
  font-size: small;
`;