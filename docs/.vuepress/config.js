module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '生活', link: '/life/' },
      { text: 'github', link: 'https://zlbingo.com' },
      {text:'技术',
       ariaLabel: 'tech',
	      items: [{ text: 'git', link: '/git' },
	      { text: 'Python', link: '/python' }
	      ]
      }
    ],
    
    sidebar: [
	    '/'
    ]
  }
}
