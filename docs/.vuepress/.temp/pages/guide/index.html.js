export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Guide",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Other Considerations",
      "slug": "other-considerations",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652981497000,
    "contributors": [
      {
        "name": "Rhyan Foo Kune",
        "email": "rfookune@nextekdevelopment.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
