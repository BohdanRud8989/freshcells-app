export type FormValues = {
  email: string;
  password: string;
};

export type InputRef = {
  isValid: boolean;
  value?: string;
};

export type ExtractRef<C> =
  C extends React.ForwardRefExoticComponent<infer P>
    ? P extends React.RefAttributes<infer T>
      ? T
      : never
    : never;

export type PasswordValidationDescription = {
  valid: boolean;
  details?: {
    exceedsMinLength: boolean;
    containsUpperCase: boolean;
    containsLowerCase: boolean;
    containsSpecialChar: boolean;
    containsDigit: boolean;
  };
};
