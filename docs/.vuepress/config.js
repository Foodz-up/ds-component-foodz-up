module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Component Library 🥂',
            description: 'Documentation site for the Vue component library plugin'
        }
    },
    themeConfig: {
        repoLabel: 'Contribute!',
        // git repo here... gitlab, github
        repo: 'https://github.com/Foodz-up/ds-component-foodz-up',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'master',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'Components', link: '/components/' },
                    // external link to git repo...again
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Foodz-up/ds-component-foodz-up'
                    }
                ],
                sidebar: {
                    '/components/': [
                        {
                            title: 'Components',
                            collapsable: false,
                            children: ['ButtonAddToCart', 'test-d-d-sample', 'ds-component-foodz-up-sample', 'ds-component-foodz-up-sample-2']
                        }
                    ]
                }
            }
        }
    }
}
