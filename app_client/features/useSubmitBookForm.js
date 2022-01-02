import { useForm } from '@inertiajs/inertia-vue3';

export const useSubmitBookForm = () => {
  const title = 'Add a New Book To the Database';

  const subtitle = `Please make sure to check if the book doesn't already exist.
                    Refer to tooltips for information on how to correctly fill in the form.`;

  const months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  const form = useForm({
    title: null,
    title_en: null,
    title_romaji: null,
    aliases: [],
    pages: null,
    author: [],
    publisher: null,
    isbn: null,
    published: {
      year: null,
      month: months[0],
      day: null,
    },
  });

  // TODO move english title to aliases
  const schema = computed(() => ({
    title: {
      name: 'title',
      label: 'Original title',
      rules: 'required|max:255',
      required: true,
    },
    title_en: {
      name: 'title_en',
      label: 'English title',
      rules: 'max:255',
      tooltip:
        'If the book has an official translation, please enter its title here.',
    },
    title_romaji: {
      name: 'title_romaji',
      label: 'Title in romaji',
      rules: 'max:255',
    },
    aliases: {
      name: 'aliases',
      label: 'Aliases',
      rules: 'max:512',
      component: 'FormTextareaField',
    },
    pages: {
      name: 'pages',
      label: 'Pages',
      rules: 'max:255',
      type: 'number',
    },
    isbn: {
      name: 'isbn',
      label: 'ISBN',
      rules: 'max:255',
      type: 'number',
    },
    author: {
      name: 'author',
      label: 'Author',
      rules: 'required|min:2|max:255',
      component: 'FormInputDynamic',
      required: true,
    },
    publisher: {
      name: 'publisher',
      label: 'Publisher',
      rules: 'min:2|max:255',
    },
    published: {
      name: 'published',
      label: 'Published',
      component: 'FormBookDateField',
      months,
    },
    volume: {
      name: 'volume',
      label: 'Volume',
      rules: 'max:255',
      type: 'number',
    },
  }));

  const onSubmit = () => {
    form.post('new');
  };

  return {
    title,
    subtitle,
    form,
    schema,
    onSubmit,
  };
};
