export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3925aa98faa3455c585126',
                  title: 'Sanity Studio',
                  name: 'sanity-rancho-chess-studio',
                  apiId: '17c4bab5-f3af-4812-8de4-6c8690c42a58'
                },
                {
                  buildHookId: '5f3925aa469979a3a913533f',
                  title: 'Blog Website',
                  name: 'sanity-rancho-chess',
                  apiId: '14b54e13-c797-4739-a00a-7fc73e8797c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/metalheadani/sanity-rancho-chess',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-rancho-chess.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
