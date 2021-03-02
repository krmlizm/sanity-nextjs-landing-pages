export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '603e4003bd927c07973682e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-edqpbsi6',
                  apiId: 'cdd7c61e-dd9d-4c35-bb5f-9e3e6420f1da'
                },
                {
                  buildHookId: '603e4003fd95ff00843f1c46',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zoqzaog4',
                  apiId: 'c545143a-e286-4116-a6e2-4b523230dfc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krmlizm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zoqzaog4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
