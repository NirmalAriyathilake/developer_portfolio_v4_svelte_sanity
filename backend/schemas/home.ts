export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
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
              to: {
                type: 'socialLink',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'document',
      title: 'About',
      fields: [
        {
          name: 'message',
          type: 'string',
          title: 'Message',
        },
        {
          name: 'infoCards',
          type: 'array',
          title: 'Info Cards',
          of: [
            {
              type: 'reference',
              to: {
                type: 'socialLink',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
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
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'seeMorePath',
              type: 'string',
              title: 'See More Path',
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              // options: {
              //   metadata: [
              //     'blurhash', // Default: included
              //   ],
              // },
            },
          ],
        },
      ],
    },
    {
      name: 'featuredProjects',
      type: 'array',
      title: 'Featured Projects',
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
      name: 'contacts',
      type: 'array',
      title: 'Contacts',
      of: [
        {
          type: 'reference',
          to: {
            type: 'socialLink',
          },
        },
      ],
    },
  ],
}
