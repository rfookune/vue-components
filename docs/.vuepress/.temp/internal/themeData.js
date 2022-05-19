export const themeData = {
  "repo": "rfookune/vue-components",
  "logo": "/images/nextek-logo-small.svg",
  "logoDark": "/images/nextek-logo-small-light.svg",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Guide",
      "link": "/guide"
    },
    {
      "text": "NPM Package",
      "link": "https://www.npmjs.com/package/nextek-ui--vue"
    }
  ],
  "sidebar": [
    {
      "text": "Guide",
      "link": "/guide/",
      "children": [
        {
          "text": "Getting Started",
          "link": "/guide/getting-started.md"
        },
        {
          "text": "Installation",
          "link": "/guide/installation.md"
        }
      ]
    },
    {
      "text": "Components",
      "link": "/components/",
      "children": [
        {
          "text": "Button",
          "link": "/components/button.md"
        },
        {
          "text": "Card",
          "link": "/components/card.md"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
