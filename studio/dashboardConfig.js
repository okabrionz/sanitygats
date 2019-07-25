export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d396c05328e595304b204ed',
                  title: 'Sanity Studio',
                  name: 'sanitygats-studio',
                  apiId: 'ab650c89-2483-4a49-8579-7b643a85b681'
                },
                {
                  buildHookId: '5d396c05f127e9baccfad826',
                  title: 'Portfolio Website',
                  name: 'sanitygats',
                  apiId: 'd4727ee5-ab77-46a1-a96c-fc2ac4f92a00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/okabrionz/sanitygats',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanitygats.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
