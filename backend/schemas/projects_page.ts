export default {
  name: 'projects',
  type: 'document',
  title: 'Projects Page',
  fields: [
    {
      name: 'mobileApps',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project',
          },
        },
      ],
    },
    {
      name: 'webApps',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project',
          },
        },
      ],
    },
    {
      name: 'packages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project',
          },
        },
      ],
    },
    {
      name: 'experiments',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'project',
          },
        },
      ],
    },
  ],
}
