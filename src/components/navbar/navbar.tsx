import styled from 'styled-components';

import { OrangeBtn, PrimaryBtn } from '../button/button';

function Navbar() {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <Logo href="">skilled</Logo>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </Nav>

        <Intro>
          <LeftCol>
            <Mission>Maximize skill, minimize budget</Mission>

            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>

            <OrangeBtn>Get Started</OrangeBtn>
          </LeftCol>

          <AbsolutePositioned>
            <RightCol>
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/image-hero-desktop.webp"
                />

                <source
                  media="(min-width: 768px)"
                  srcSet="/images/image-hero-tablet.webp"
                />

                <source srcSet="/images/image-hero-mobile.webp" />

                <img
                  src="/images/image-hero-mobile.webp"
                  alt="lady drinking coffee with course hours at the bottom left and total members on the top right corner"
                />
              </picture>
            </RightCol>
          </AbsolutePositioned>
        </Intro>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  padding-block-start: 16px;

  @media (min-width: 768px) {
    padding-block-start: 24px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-inline: 16px;

  @media (min-width: 768px) {
    padding-inline: 40px;
  }

  @media (min-width: 1024px) {
    padding-inline: 165px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-block-end: 50px;
  }

  @media (min-width: 1024px) {
    /* padding-block-end: 150px; */
  }
`;

const Logo = styled.a`
  color: var(--dark-blue);
  font-size: 1.75rem;
  font-weight: 800;
`;

const Intro = styled.div`
  padding-block-start: 38px;
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    color: var(--gray-color);
    padding-block-start: 26px;
    padding-block-end: 24px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftCol = styled.div`
  @media (min-width: 768px) {
    p {
      max-width: 398px;
    }
  }
`;

const AbsolutePositioned = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: -200px;
    right: -340px;
  }

  @media (min-width: 1024px) {
    img {
    }
  }
`;

const RightCol = styled.div`
  img {
    background-position: center;
    background-size: cover;
    object-fit: contain;
    margin-inline: auto;
  }
`;

const Mission = styled.h2`
  font-weight: 800;
  color: var(--dark-blue);
  text-align: left;
  max-width: 343px;
`;

export default Navbar;
