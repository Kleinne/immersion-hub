import { useForm } from '@inertiajs/inertia-vue3';

export const useRegisterForm = (props) => {
  provide(
    'formErrors',
    computed(() => props.errors),
  );

  const form = useForm({
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
  });

  const schema = computed(() => ({
    username: {
      name: 'username',
      label: 'Username',
      required: true,
    },
    email: {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
    },
    password_confirmation: {
      name: 'password_confirmation',
      label: 'Password Confirmation',
      type: 'password',
      required: true,
    },
  }));

  return { form, schema };
};
