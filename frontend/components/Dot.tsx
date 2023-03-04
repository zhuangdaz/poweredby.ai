import styled from "styled-components";

export default function Dot() {
  return <Container>·</Container>;
}

const Container = styled.span`
  margin: 0 6px;
  color: "light_grey";
`;