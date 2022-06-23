import { LETTER_VALIDATION } from "../constants/letterValidation";

export const validateInput = ({ letters, size, direction, setErrors }) => {
  let hasError = false;

  if (!letters.length) {
    hasError = true;
    setErrors((prev) => ({
      ...prev,
      ["letters"]: "This field is required!",
    }));
  }

  if (!size.length) {
    hasError = true;
    setErrors((prev) => ({
      ...prev,
      ["size"]: "This field is required!",
    }));
  }

  if (!direction.length) {
    hasError = true;
    setErrors((prev) => ({
      ...prev,
      ["direction"]: "This field is required!",
    }));
  }

  if (!LETTER_VALIDATION.test(letters)) {
    hasError = true;

    setErrors((prev) => ({
      ...prev,
      ["letters"]: "Must only (XYZ) Characters only.",
    }));
  }

  if (size % 2 !== 1) {
    hasError = true;

    setErrors((prev) => ({
      ...prev,
      ["size"]: "Must be an ODD number.",
    }));
  }

  if (isNaN(size)) {
    hasError = true;
    setErrors((prev) => ({
      ...prev,
      ["size"]: "Must be a number.",
    }));
  }

  if (size > 20) {
    hasError = true;

    setErrors((prev) => ({
      ...prev,
      ["size"]: "Limited to less than 20",
    }));
  }

  if (
    direction.length &&
    !["horizontal", "vertical"].includes(direction.toLowerCase())
  ) {
    hasError = true;

    setErrors((prev) => ({
      ...prev,
      ["direction"]: "Input between HORIZONTAL or VERTICAL.",
    }));
  }

  return hasError;
};
