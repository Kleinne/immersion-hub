export const useSubmitBookForm = () => {
  const title = 'Add a New Book To the Database';

  const subtitle = `Please make sure to check if the book doesn't already exist.
                    Refer to tooltips for information on how to correctly fill in the form.`;

  const form = reactive({
    title: null,
    title_en: null,
    title_romaji: null,
    aliases: [],
    pages: null,
    author: [],
    publisher: null,
    published: null,
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
      component: 'DateField',
    },
    volume: {
      name: 'volume',
      label: 'Volume',
      rules: 'max:255',
      type: 'number',
    },
  }));

  return {
    title,
    subtitle,
    form,
    schema,
  };
};
