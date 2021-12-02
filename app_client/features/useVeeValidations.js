import { defineRule } from 'vee-validate';

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'This field is required';
  }

  return true;
});

defineRule('email', (value) => {
  if (!value || !value.length) {
    return true;
  }

  const isValid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value);
  if (!isValid) {
    return 'Must be a valid email';
  }

  return true;
});

defineRule('minLength', (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length >= limit) {
    return `This field must be at least ${limit} characters`;
  }

  return true;
});

defineRule('maxLength', (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length <= limit) {
    return `This field must be less than ${limit} characters`;
  }

  return true;
});
