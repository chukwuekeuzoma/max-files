import React, { useState } from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import UiIcon from "./UiIcon";
import UiField from "./UiField";

interface Props {
  name: string;
  type?: "text" | "number" | "password" | "phone" | "date";
  value: string | null | number;
  error?: string;
  placeHolder?: string;
  onChange: (event: { name: string; value: null | string }) => void;
}

export default function UiInput({
  onChange,
  value,
  type = "text",
  error,
  name,
  placeHolder,
}: Props) {
  const [inputType, setInputType] = useState(type);

  function handlePasswordTypeToText() {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  }

  function sendPhone(value: string | null | undefined) {
    onChange({ name, value: value || null });
  }

  function sendValue(e: { target: { name: string; value: string } }) {
    onChange({ name: e.target.name, value: e.target.value });
  }

  return (
    <UiField error={error}>
      <InputContainer>
        {inputType === "phone" ? (
          <PhoneInput
            value={`${value}` || ""}
            defaultCountry="NG"
            className={"global-input"}
            placeholder="e.g: 08034283438"
            onChange={(e) => sendPhone(e)}
          />
        ) : (
          <Input
            type={inputType}
            value={value || ""}
            name={name}
            hasError={!!error}
            placeholder={placeHolder}
            onChange={sendValue}
          />
        )}

        {type === "password" && (
          <IconButton onClick={handlePasswordTypeToText}>
            <UiIcon icon={inputType === "password" ? "Eye" : "EyeSlash"} />
          </IconButton>
        )}
      </InputContainer>
    </UiField>
  );
}

const Input = styled.input`
  padding: 10px;
  height: var(--input-base-height);
  gap: 2;
  width: 100%;
  font-size: 12px;
  border: 1px solid var(--input-border);
  border-color: ${({ hasError }: { hasError: boolean }) =>
    hasError ? "var(--color-danger)" : "var(--color-gray)"};
  background: var(--input-background);
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  &:focus {
    border-color: var(--color-primary);
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const IconButton = styled.div`
  position: absolute;
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  cursor: pointer;
`;
