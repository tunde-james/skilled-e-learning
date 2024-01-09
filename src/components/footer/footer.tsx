import styled from 'styled-components';
import { PurpleBtn } from '../button/button';

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo href="#">skilled</Logo>
        <PurpleBtn>Get Start</PurpleBtn>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--dark-blue);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 36px;
  padding-inline: 16px;

  @media (min-width: 768px) {
    padding-inline: 40px;
  }

  @media (min-width: 1024px) {
    padding-block: 32px;
    padding-inline: 80px;
  }
`;

const Logo = styled.a`
  color: var(--white-color);
  font-size: ${28 / 16}rem;
  font-weight: 800;
`;

export default Footer;
