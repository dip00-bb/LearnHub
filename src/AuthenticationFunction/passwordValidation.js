  export const validatePassword = (password,errorSetter) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;


    if (password.length < 8) {
      errorSetter('Password must be at least 8 characters long');
      return false;
    }

    if (!specialCharRegex.test(password)) {
      errorSetter('Password must contain at least one special character');
      return false;
    }


    if (!numberRegex.test(password)) {
      errorSetter('Password must contain at least one number');
      return false;
    }

    errorSetter(null);
    return true;
  };