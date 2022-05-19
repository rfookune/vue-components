import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"Guide"},["/guide/index.html","/guide/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"Getting Started"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-d7be191a","/guide/installation.html",{"title":"Installation"},["/guide/installation","/guide/installation.md"]],
  ["v-1020f180","/components/",{"title":""},["/components/index.html","/components/README.md"]],
  ["v-3bb939a7","/components/button.html",{"title":"Button Component"},["/components/button","/components/button.md"]],
  ["v-40a1d089","/components/card.html",{"title":"Card Component"},["/components/card","/components/card.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
