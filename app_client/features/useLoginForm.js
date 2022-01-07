import { useForm } from '@inertiajs/inertia-vue3';

export const useLoginForm = (props) => {
  provide(
    'formErrors',
    computed(() => props.errors),
  );

  const form = useForm({
    email: null,
    password: null,
    remember: false,
  });

  const schema = computed(() => ({
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
  }));

  return { form, schema };
};
