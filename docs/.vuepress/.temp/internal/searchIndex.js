export const searchIndex = [
  {
    "title": "Home",
    "headers": [
      {
        "level": 3,
        "title": "Installation",
        "slug": "installation",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guide",
    "headers": [
      {
        "level": 2,
        "title": "Other Considerations",
        "slug": "other-considerations",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Getting Started",
    "headers": [],
    "path": "/guide/getting-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Installation",
    "headers": [],
    "path": "/guide/installation.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/components/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Button Component",
    "headers": [],
    "path": "/components/button.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Card Component",
    "headers": [],
    "path": "/components/card.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
