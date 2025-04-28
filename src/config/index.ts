export const defaultLanguage: string = "en"

export const common = {
  domain: "https://blog.letterswitchpublishing.com",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.letterswitchpublishing.com",
  },
  googleAnalyticsId: "G-K15D93HYTP",

  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [{}],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: false,
    twikoo: {
      enabled: false,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "",
  meta: {
    ...common.meta,
    title: "",
    slogan: "",
    description: "",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "",
        link: "",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "",
      description: "",
      ogImage: "",
    },
    links: {
      title: "",
      description: "",
      ogImage: "",
    },
    about: {
      title: "",
      description: "",
      ogImage: "",
    },
  },
}

export const en = {
  ...common,
  siteName: "Letterswitch Publishing",
  meta: {
    ...common.meta,
    title: "Letterswitch Publishing",
    slogan: "A micropublisher on Nova Scotia's South Shore",
    description: "",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "",
        link: "",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Letterswitch Publishing's archive",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "",
      description: "",
      ogImage: "",
    },
    about: {
      title: "About Me",
      description: "",
      ogImage: "",
    },
  },
}
