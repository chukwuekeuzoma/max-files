import React from "react";
import styled from "styled-components";

interface Props {
  error?: string;
  children: React.ReactNode;
}

export default function UiField({ error, children }: Props) {
  return (
    <div>
      {children}
      <Message>{error}</Message>
    </div>
  );
}

const Message = styled.div`
  color: var(--color-danger);
  font-size: 12px;
`;
