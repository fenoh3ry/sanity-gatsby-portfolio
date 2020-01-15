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
                  buildHookId: '5e1eeb39b38f915a37e6fcc5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-55f8qyo1',
                  apiId: '1bee8ad5-25e7-4e5a-934b-1917ee919755'
                },
                {
                  buildHookId: '5e1eeb399ae4ef62094d2ed6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4nkwmgqr',
                  apiId: 'dfb64300-4d09-4977-b489-57950ad03905'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fenoh3ry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4nkwmgqr.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
