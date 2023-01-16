export default {
  name: 'intro',
  type: 'document',
  title: 'Intro',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'profession',
      type: 'string',
      title: 'Profession',
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'reference',
          to: {type: 'socialLink'},
        },
      ],
    },
  ],
}
