import "server-only"

export type Dictionary = {
  navigation: {
    home: string
    about: string
    services: string
    portfolio: string
    blog: string
    contact: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    features: {
      title: string
      items: {
        title: string
        description: string
      }[]
    }
    stats: {
      projects: string
      clients: string
      years: string
      awards: string
    }
  }
  about: {
    title: string
    subtitle: string
    description: string
    team: {
      title: string
      members: {
        name: string
        role: string
        bio: string
      }[]
    }
  }
  services: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
      features: string[]
    }[]
  }
  portfolio: {
    title: string
    subtitle: string
    categories: string[]
  }
  blog: {
    title: string
    subtitle: string
    readMore: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      subject: string
      message: string
      submit: string
    }
    info: {
      address: string
      phone: string
      email: string
    }
  }
  common: {
    learnMore: string
    getStarted: string
    viewAll: string
    backToHome: string
  }
}

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default as Dictionary),
  th: () => import("./dictionaries/th.json").then((module) => module.default as Dictionary),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default as Dictionary),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return (dictionaries[locale] || dictionaries.en)()
}
