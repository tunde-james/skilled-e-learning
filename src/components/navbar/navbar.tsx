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
          <IntroLeftCol>
            <Mission>Maximize skill, minimize budget</Mission>

            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>

            <OrangeBtn>Get Started</OrangeBtn>
          </IntroLeftCol>

          <div className="introRightCol">
            <picture>
              <source
                // media="(min-width: 1024px)"
                media="(min-width: 76.5625rem)"
                srcSet="/images/image-hero-desktop.webp"
              />

              <source
                // media="(min-width: 768px)"
                media="(min-width: 46.875rem)"
                srcSet="/images/image-hero-tablet.webp"
              />

              <source srcSet="/images/image-hero-mobile.webp" />

              <img
                src="/images/image-hero-mobile.webp"
                alt="lady drinking coffee with course hours at the bottom left and total members on the top right corner"
              />
            </picture>
          </div>
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
    padding-inline: 80px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: var(--dark-blue);
  font-size: 1.75rem;
  font-weight: 800;
`;

const Intro = styled.div`
  padding-block-start: 38px;

  p {
    color: var(--gray-color);
    padding-block-start: 26px;
    padding-block-end: 24px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-block-start: 50px;
  }
`;

const IntroLeftCol = styled.div``;

const Mission = styled.h2`
  font-weight: 800;
  color: var(--dark-blue);
  text-align: left;
  max-width: 343px;
`;

export default Navbar;
