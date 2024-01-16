import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'ikonw',

	lastUpdated: true,
	cleanUrls: true,

	/* prettier-ignore */
	head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'ikonw' }],
    ['meta', { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
  ],

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '栗子', link: '/example/markdown' },
		],

		sidebar: [
			{
				text: '栗子',
				items: [
					{ text: 'Markdown', link: '/example/markdown' },
					{ text: 'Runtime API', link: '/example/api' },
				],
			},
		],

		logo: { src: '/logo-mini.svg', width: 24, height: 24 },

		search: {
			provider: 'local',
		},

		editLink: {
			pattern:
				'http://code.delib2b.com:6001/frontend/docs/ikonw/edit/master/:path',
			text: '在 GitLab 上编辑此页面',
		},

		socialLinks: [
			{
				icon: 'github',
				link: 'http://code.delib2b.com:6001/frontend/docs/ikonw',
			},
		],
	},
});
