export default {
  name: 'socialLink',
  type: 'document',
  title: 'Social Links',
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
    {
      name: 'action',
      type: 'string',
      title: 'Action',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon'
    }
  ],
}
