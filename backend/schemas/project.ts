export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
    },
    {
      name: 'points',
      type: 'array',
      title: 'Points',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value',
            },
          ],
        },
      ],
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
            },
          ],
        },
      ],
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
  ],
}