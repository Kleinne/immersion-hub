export const useContributeForm = () => {
  const form = reactive({
    titleJp: null,
    titleEn: null,
    titleRo: null,
    volume: null,
    pages: null,
    date: null,
    volumeTitleJp: null,
    volumeTitleEn: null,
    volumeTitleRo: null,
    author: null,
    authorEn: null,
    illustrator: null,
    illustratorEn: null,
    publisher: null,
    // type: null,
  });

  const schema = computed(() => ({
    titleJp: {
      name: 'title_jp',
      label: 'Series title in Japanese',
      rules: 'required:min:3|max:255',
    },
    titleEn: {
      name: 'title_en',
      label: 'Series title in English',
      rules: 'required:min:3|max:255',
    },
    titleRo: {
      name: 'title_ro',
      label: 'Series title in romaji',
      rules: 'required:min:3|max:255',
    },
    volume: {
      name: 'volume',
      label: 'Volume',
      rules: 'required:??',
      type: 'number',
    },
    pages: {
      name: 'pages',
      label: 'Pages',
      rules: 'required:??',
      type: 'number',
    },
    date: {
      name: 'date',
      label: 'Published date',
      rules: 'required:??',
      type: 'date',
    },
    volumeTitleJp: {
      name: 'volume_title_jp',
      label: 'Volume title in Japanese',
      rules: 'required:min:3|max:255',
    },
    volumeTitleEn: {
      name: 'volume_title_en',
      label: 'Volume title in English',
      rules: 'required:min:3|max:255',
    },
    volumeTitleRo: {
      name: 'volume_title_ro',
      label: 'Volume title in romaji',
      rules: 'required:min:3|max:255',
    },
    author: {
      name: 'author',
      label: 'Author in Japanese',
      rules: 'required:min:3|max:255',
    },
    authorEn: {
      name: 'author_en',
      label: 'Author in English',
      rules: 'required:min:3|max:255',
    },
    illustrator: {
      name: 'illustrator',
      label: 'Illustrator in Japanese',
      rules: 'required:min:3|max:255',
    },
    illustratorEn: {
      name: 'illustrator_en',
      label: 'Illustrator in English',
      rules: 'required:min:3|max:255',
    },
    publisher: {
      name: 'publisher',
      label: 'Publisher',
      rules: 'required:min:3|max:255',
    },
  }));

  return {
    form,
    schema,
  };
};
