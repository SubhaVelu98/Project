import validation from "../constants/validation";

export const validateRequire = (name, value, type) => {
  return value === ""
    ? `Please enter ${type === "email" ? "an " : ""}${name}.`
    : null;
};

export const validateName = (name, value) => {
  const isRequire = validateRequire(name, value);
  if (isRequire === null) {
    return validation.name.test(value) ? null : `Please enter alphabets only.`;
  } else {
    return isRequire;
  }
};

export const validateEmail = (name, value) => {
  const isRequire = validateRequire(name, value, "email");
  if (isRequire === null) {
    return validation.email.test(value)
      ? null
      : `Please enter a valid ${name}.`;
  } else {
    return isRequire;
  }
};

export const validateMobile = (name, value) => {
  const isRequire = validateRequire(name, value);

  if (isRequire === null) {
    return value.length === 10 ? null : `Please enter valid ${name}.`;
  } else {
    return isRequire;
  }
};

export const validateZipCode = (name, value) => {
  const isRequire = validateRequire(name, value);

  if (isRequire === null) {
    return value.length < 5 ? `Please enter valid ${name}.` : null;
  } else {
    return isRequire;
  }
};

export const validatePassword = (name, value) => {
  const isRequire = validateRequire(name, value);
  if (isRequire === null) {
    return validation.password.test(value)
      ? null
      : `${name} Must have atleast 1 uppercase, 1 lowercase letter, 1 number and minimum 8 character . `;
  } else {
    return isRequire;
  }
};
