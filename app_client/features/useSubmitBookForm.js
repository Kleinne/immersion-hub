export const useSubmitBookForm = (props) => {
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

  // TODO move english title to aliases
  const schema = computed(() => ({
    title: {
      name: 'title',
      label: 'Original title',
      required: true,
    },
    title_en: {
      name: 'title_en',
      label: 'English title',
      tooltip:
        'If the book has an official translation, please enter its title here.',
    },
    title_romaji: {
      name: 'title_romaji',
      label: 'Title in romaji',
    },
    aliases: {
      name: 'aliases',
      label: 'Aliases',
      maxlength: 512,
      rows: 3,
      component: 'FormTextareaField',
      tooltip:
        'Aliases, abbreviations or whatever floats the Internet goes here. Enter one per line.',
    },
    pages: {
      name: 'pages',
      label: 'Pages',
      type: 'number',
      required: true,
    },
    isbn: {
      name: 'isbn',
      label: 'ISBN',
      type: 'number',
    },
    author: {
      name: 'author',
      label: 'Author',
      component: 'FormInputDynamic',
      required: true,
    },
    publisher: {
      name: 'publisher',
      label: 'Publisher',
    },
    format: {
      name: 'format',
      label: 'Format',
      required: true,
      options: props.formatOptions,
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
      type: 'number',
    },
    description: {
      name: 'description',
      label: 'Description',
      maxlength: 2000,
      component: 'FormTextareaField',
      rows: 5,
    },
  }));

  return {
    title,
    subtitle,
    schema,
  };
};
