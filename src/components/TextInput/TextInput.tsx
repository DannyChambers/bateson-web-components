import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import styles from "./TextInput.module.css";

import { Layout } from "../Layout";
import { Text } from "../Text";

export interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  className?: string;
  disabled?: boolean;
  message?: string;
  invalid?: boolean;
  appearance?: "body-1" | "body-2" | "body-3";
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className,
  disabled = false,
  message,
  invalid = false,
  appearance = "body-2",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const inputClasses = clsx(
    className,
    styles["text-input"],
    styles[`text-input--${appearance}`],
    {
      [styles["text-input--disabled"]]: disabled,
      [styles["text-input--error"]]: invalid,
    },
  );

  return (
    <div data-component="TextInput" className={styles["text-input-wrapper"]}>
      <div className={styles["input--icon"]}>
        <input
          className={inputClasses}
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles["input__password-button"]}
            onClick={toggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <Layout topGutter="sm">
        {message && <Text appearance="body-3">{message}</Text>}
      </Layout>
    </div>
  );
};

export default TextInput;
