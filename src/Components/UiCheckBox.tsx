import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}

export default function UiCheckBox({ children, checked, onChange }: Props) {
  return (
    <StyledLabel>
      <StyledCheckbox checked={checked} onChange={onChange} />
      <StyledLabelText>{children}</StyledLabelText>
    </StyledLabel>
  );
}

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid var(--text-dark);
  background-color: #fff;
  transition: all 0.15s ease-in-out;

  &:checked {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary-100);
  }

  &:hover {
    border-color: var(--color-primary-100);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledLabelText = styled.span`
  margin-left: 8px;
  font-size: 16px
  font-weight: 400;
`;
