import styled from 'styled-components';

import { ButtonAsLink } from '../button/button';

const courses = [
  {
    icon: '/icons/icon-animation.svg',
    title: 'Animation',
    description:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    alt: 'person running',
  },
  {
    icon: '/icons/icon-business.svg',
    title: 'Design',
    description:
      'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    alt: 'design icon',
  },
  {
    icon: '/icons/icon-photography.svg',
    title: 'Photography',
    description:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    alt: 'camera icon',
  },
  {
    icon: '/icons/icon-crypto.svg',
    title: 'Crypto',
    description:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    alt: 'small dots clusters',
  },
  {
    icon: '/icons/icon-business.svg',
    title: 'Business',
    description:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    alt: 'brief case icon',
  },
];

function Courses() {
  return (
    <Wrapper>
      <Container>
        <PopularCourses>
          <h2>Check out our most popular courses!</h2>
        </PopularCourses>
        {courses.map((course) => (
          <CourseList key={course.title}>
            <Img src={course.icon} alt={course.alt} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link>Get Started</Link>
          </CourseList>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding-block-start: 66px;
  padding-block-end: 80px;
  background-image: var(--courses-gradient);
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-inline: 16px;

  @media (min-width: 768px) {
    padding-inline: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

const PopularCourses = styled.div`
  background-image: var(--primary-gradient);
  padding-block-start: 24px;
  padding-block-end: 32px;
  padding-inline: 28px;
  border-radius: 10px;
  margin-block-end: 40px;
  border-radius: 10px;

  h2 {
    max-width: 286px;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 32px;
    color: var(--white-color);
  }
`;

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 46px;
  padding-inline: 28px;
  border-radius: 10px;
  background-color: var(--white-color);

  h3 {
    padding-block-start: 24px;
  }

  p {
    padding-block-start: 16px;
    width: 286px;
  }
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  margin-block-start: -30px;
`;

const Link = styled(ButtonAsLink)`
  align-self: flex-start;
  padding-block-start: 24px;
  padding-block-end: 32px;
`;

export default Courses;
