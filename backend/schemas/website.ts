export default {
  name: 'website',
  type: 'document',
  title: 'Website meta',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Property', value: 'property'},
          {title: 'Name', value: 'name'},
        ],
      },
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
  ],
}
