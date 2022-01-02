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

  const formatOptions = [
    { name: 'Paperback', value: 'paperback' },
    { name: 'Audiobook', value: 'audiobook' },
    { name: 'eBook', value: 'ebook' },
  ];

  const form = useForm({
    title: null,
    title_en: null,
    title_romaji: null,
    aliases: null,
    pages: null,
    author: [],
    publisher: null,
    isbn: null,
    format: formatOptions[0],
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
      rows: 3,
      component: 'FormTextareaField',
      tooltip:
        'Aliases, abbreviations or whatever floats the Internet goes here. Enter one per line.',
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
    format: {
      name: 'format',
      label: 'Format',
      rules: 'required',
      required: true,
      options: formatOptions,
      component: 'FormSelectField',
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
