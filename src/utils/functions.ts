import { PasswordValidationDescription } from "../types";

/**
 * Validates password by different criteria
 * @param {string} value - password to validate
 * @param {boolean} analyze - mode of validation, by default will analyze on united pattern
 * @example
 * // returns {valid: true,
 * // details: {exceedsMinLength: true, containsUpperCase: true, containsDigit: true, containsSpecialChar: false}
 * //}
 * validatePassword('aaaaaaaA1', true);
 * @returns {{
        valid: boolean,
        details: {
      exceedsMinLength: boolean,
      containsUpperCase: boolean,
      containsLowerCase: boolean,
      containsSpecialChar: boolean,
      containsDigit: boolean
    }
    }}
 */
export const validatePassword = (
  value: string,
  analyze = false,
): PasswordValidationDescription => {
  const exceedsMaxLength = value.length > 255;
  const exceedsMinLength = value.length >= 8;
  const containsNonASCII = /[^\x20-\x7F]/.test(value);
  if (!analyze) {
    const unitedPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@#$%^&(){}:;,.?~_=|<>/[\]+\-\\])(?!.*\s).*$/;
    return {
      valid:
        !containsNonASCII && exceedsMinLength && !exceedsMaxLength
          ? unitedPattern.test(value)
          : false,
    };
  }
  const containsWhitespace = /\s/.test(value);
  const containsUpperCase = /[A-Z]/.test(value);
  const containsLowerCase = /[a-z]/.test(value);
  const containsSpecialChar = /[*.!@#$%^&(){}[\]:;<>,?/~_+\-=|\\]/.test(value);
  const containsDigit = /\d/.test(value);

  return {
    valid:
      !containsNonASCII &&
      exceedsMinLength &&
      containsUpperCase &&
      containsDigit,
    details: {
      exceedsMinLength: exceedsMinLength && !exceedsMaxLength,
      containsUpperCase: containsUpperCase && !containsNonASCII,
      containsLowerCase: containsLowerCase && !containsNonASCII,
      containsSpecialChar: containsSpecialChar && !containsWhitespace,
      containsDigit,
    },
  };
};
