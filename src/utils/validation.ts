export const MIN_PASSWORD_LENGTH = 8;

export const isRequired = (value: string) => value.trim().length > 0;

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const hasMinLength = (value: string, min: number) =>
  value.length >= min;

export interface SignupData {
  name: string;
  nickname: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export const validateSignupField = (
  name: keyof SignupData,
  data: SignupData,
): string => {
  const value = data[name];
  switch (name) {
    case "name":
      return isRequired(value) ? "" : "Name is required";
    case "nickname":
      return isRequired(value) ? "" : "Nickname is required";
    case "email":
      if (!isRequired(value)) return "Email is required";
      return isEmail(value) ? "" : "Enter a valid email";
    case "gender":
      return isRequired(value) ? "" : "Select a gender";
    case "password":
      if (!isRequired(value)) return "Password is required";
      return hasMinLength(value, MIN_PASSWORD_LENGTH)
        ? ""
        : `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
    case "confirmPassword":
      if (!isRequired(value)) return "Confirm your password";
      return value === data.password ? "" : "Passwords do not match";
  }
};

export const validateSignup = (
  data: SignupData,
): Record<keyof SignupData, string> => ({
  name: validateSignupField("name", data),
  nickname: validateSignupField("nickname", data),
  email: validateSignupField("email", data),
  gender: validateSignupField("gender", data),
  password: validateSignupField("password", data),
  confirmPassword: validateSignupField("confirmPassword", data),
});
