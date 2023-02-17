import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary"
  size?: "large" | "md" | "s";
  type?: "submit" | "button";
  textCasing?: "uppercase" | "lowercase" | "capitalize";
  /** This prop decides if we want the button to fit the content or be full width */
  isFullWidth?: boolean;
  onClick?: () => void;
}

export default function UiButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  type = "submit",
  textCasing = "uppercase",
  size = "large",
  isFullWidth = false,
}: Props) {
  return (
    <ButtonContainer
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      textCasing={textCasing}
      size={size}
      isFullWidth={isFullWidth}
    >
      {loading ? <span>Loading...</span> : children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<Props>`
  padding: 10px 25px;
  border: 1px solid var(--color-primary);
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size:13px;
  letter-spacing: 0.4px;
  line-height: 1.45;
  text-align: center;
  text-transform: uppercase;
  border-radius: 15px;
  font-weight: 900;
  text-transform: ${({ textCasing }) => textCasing};
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  white-space: nowrap;
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  transition:0.5s;

  &.primary {
    background-color: var(--color-primary);
    color: var(--text-light-100);

    &:hover {
      background-color: var(--text-light-100);
      color: var( --text-dark)
      transition:0.5s;
    }
  }
`;
