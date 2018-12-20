export const emailValidator = (val) => {
  const isValid = /.+@.+\..+/i
          .test(val);
  const isEmpty = !minLengthValidator(val, 1);

  if (isEmpty) {
    return "Email is required.";
  } 
  if (!isValid && !isEmpty) {
    return "Not a valid Email.";
  }
  return null;
};

export const firstNameValidator = (firstName) => {
  const isEmpty = !minLengthValidator(firstName, 1);
  return isEmpty ? "First Name is required." : null;
};

export const lastNameValidator = (lastName) => {
  const isEmpty = !minLengthValidator(lastName, 1);
  return isEmpty ? "Last Name is required." : null;
};

export const minLengthValidator = (val, minLength = 1) => {
  return val.length >= minLength;
};

export const trimFormValues = (formFields) => {
  let trimmed = {};

  for (const field in formFields) {
    trimmed = {
      ...trimmed,
      [field]: formFields[field].value.trim()
    };
  }
  return trimmed;
};

export const validateFields = (fields, validators) => {
  let isValid = true;
  let validationErrors = {};

  for (const field in fields) {
    const val = fields[field];
    const error = validators[field](val);
    
    isValid = isValid && !error;
    validationErrors = {
      ...validationErrors,
      [field]: error ? error : ''
    }
  };

  if(!isValid) {
    return {
      isValid,
      validationErrors
    }; 
  }
  return { isValid };
};

