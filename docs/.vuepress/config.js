/** @type {import('vuepress').AppConfig} */
module.exports = {
	title: 'DePowered Billing',
	description: 'Документация биллинг-системы DePowered Billing',
	base: '/billing/',
	head: [
		['link', { rel: 'icon', href: '/billing/favicon.ico' }]
	],

	theme: '@vuepress/theme-default',
	themeConfig: {
		search: true,
		logo: '/logo.svg',
		sidebar: [
			'/',
			{
				text: 'Администрирование',
				children: [
					'/admin/service-types'
				]
			}
		],

		repo: 'DePowered-LLC/billing-docs',
		editLinkText: 'Редактировать страницу на GitHub',
		lastUpdatedText: 'Изменено',
		contributors: false,
		notFound: ['Запрошенная страница не найдена']
	},
	port: 8084
}