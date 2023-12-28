import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  variant: string;
}

function Button({ children, variant }: Props) {
  let Component;
  if (variant === 'primary') {
    Component = PrimaryBtn;
  } else if (variant === 'secondary') {
    Component = OrangeBtn;
  } else if (variant === 'tertiary') {
    Component = PurpleBtn;
  } else if (variant === 'link') {
    Component = ButtonAsLink;
  } else {
    return `Unrecognized Button variant: ${variant}`;
  }

  return <Component>{children}</Component>;
}

const ButtonBase = styled.button`
  color: var(--white-color);
  font-size: 1rem;
  font-weight: 700;
  line-height: 28px;
  border: none;
`;

const FillButton = styled(ButtonBase)`
  padding-block: 9px;
  padding-inline: 24px;
  border-radius: 28px;
`;

export const PrimaryBtn = styled(FillButton)`
  background-color: var(--dark-blue);

  &:hover {
    background-color: var(--pale-purple);
  }
`;

export const OrangeBtn = styled(FillButton)`
  background-image: var(--primary-gradient);

  &:hover {
    opacity: 0.7;
  }
`;

export const PurpleBtn = styled(FillButton)`
  background-image: var(--secondary-gradient);

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonAsLink = styled(ButtonBase)`
  background-color: transparent;
  color: var(--bright-pink);
  font-size: 1.125rem;
`;

export default Button;
