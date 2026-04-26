export type Language = "en" | "ru" | "it";

export const translations = {
  en: {
    // Navbar
    nav: {
      features: "Features",
      screenshots: "Screenshots",
      howItWorks: "How it works",
      tech: "Tech",
      gitHub: "GitHub",
      discord: "Discord",
    },
    // Hero
    hero: {
      badge: "Unofficial app for Modrinth",
      title: "Modrinth in",
      titleGradient: "your pocket.",
      description:
        "Rinthy lets Modrinth developers manage projects, track analytics, and handle versions — all from their phone. No desktop required.",
      downloadApk: "Download APK",
      exploreFeatures: "Explore features",
      stats: {
        fast: "Lightning fast",
        secure: "Secure OAuth",
        native: "Native feel",
      },
    },
    // Features
    features: {
      badge: "Features",
      title: "Everything you need.",
      subtitle: "A full toolkit for Modrinth developers, redesigned for mobile.",
      items: [
        {
          title: "Projects Dashboard",
          desc: "Browse and manage all your Modrinth projects in one clean list.",
        },
        {
          title: "Analytics",
          desc: "Track downloads, follows, and engagement trends in real time.",
        },
        {
          title: "Version Management",
          desc: "View, create, and edit project versions from your phone.",
        },
        {
          title: "Team Control",
          desc: "Add, remove, and manage project team members on the go.",
        },
        {
          title: "Notifications",
          desc: "Stay on top of unread alerts without opening a browser.",
        },
        {
          title: "Profile Editing",
          desc: "Update username, bio, and avatar directly in the app.",
        },
        {
          title: "Appearance",
          desc: "Switch themes and pick your accent color for a personal touch.",
        },
        {
          title: "Balance View",
          desc: "Check your Modrinth earnings and payout status instantly.",
        },
        {
          title: "RU / EN",
          desc: "Full Russian and English language support baked in.",
        },
      ],
    },
    // Screenshots
    screenshots: {
      badge: "Screenshots",
      title: "See it in action.",
      subtitle: "Clean, fast, and purpose-built for mobile.",
      labels: {
        login: "Login",
        dashboard: "Dashboard",
        analytics: "Analytics",
      },
    },
    // Steps
    steps: {
      badge: "How it works",
      title: "Three steps to power.",
      subtitle: "No complicated setup. Just install, log in, and go.",
      items: [
        {
          step: "01",
          title: "Get the app",
          desc: "Grab the latest APK from GitHub Releases or build from source. It's open source and free forever.",
        },
        {
          step: "02",
          title: "Sign in",
          desc: "Use Modrinth OAuth for a seamless login, or fall back to a Personal Access Token if you prefer.",
        },
        {
          step: "03",
          title: "Take control",
          desc: "Manage projects, check analytics, edit versions, and handle your team — all from your phone.",
        },
      ],
    },
    // TechStack
    techStack: {
      badge: "Tech Stack",
      title: "Built with modern tools.",
      subtitle:
        "A lightweight, type-safe stack designed for performance and maintainability.",
    },
    // Footer
    footer: {
      tagline: "Unofficial Modrinth app",
      madeWith: "Made with",
      madeBy: "by EmanuelPlays, Rinthy is not owned by EmanuelPlays",
      disclaimer: "Not affiliated with or endorsed by Modrinth.",

      viewOnGitHub: "View on GitHub",
      joinDiscord: "Join Discord",
    },
  },
  ru: {
    nav: {
      features: "Функции",
      screenshots: "Скриншоты",
      howItWorks: "Как это работает",
      tech: "Технологии",
      gitHub: "GitHub",
      discord: "Discord",
    },
    hero: {
      badge: "Неофициальное приложение для Modrinth",
      title: "Modrinth",
      titleGradient: "в кармане.",
      description:
        "Rinthy позволяет разработчикам Modrinth управлять проектами, отслеживать аналитику и обрабатывать версии — всё с телефона. Компьютер не нужен.",
      downloadApk: "Скачать APK",
      exploreFeatures: "Изучить функции",
      stats: {
        fast: "Молниеносно быстро",
        secure: "Безопасный OAuth",
        native: "Нативный интерфейс",
      },
    },
    features: {
      badge: "Функции",
      title: "Всё что нужно.",
      subtitle:
        "Полный набор инструментов для разработчиков Modrinth, переработанный для мобильных устройств.",
      items: [
        {
          title: "Панель проектов",
          desc: "Просматривайте и управляйте всеми своими проектами Modrinth в одном списке.",
        },
        {
          title: "Аналитика",
          desc: "Отслеживайте загрузки, подписки и тенденции вовлечённости в реальном времени.",
        },
        {
          title: "Управление версиями",
          desc: "Просматривайте, создавайте и редактируйте версии проектов прямо с телефона.",
        },
        {
          title: "Управление командой",
          desc: "Добавляйте, удаляйте и управляйте членами команды проекта на ходу.",
        },
        {
          title: "Уведомления",
          desc: "Будьте в курсе непрочитанных уведомлений, не открывая браузер.",
        },
        {
          title: "Редактирование профиля",
          desc: "Обновляйте имя пользователя, биографию и аватар прямо в приложении.",
        },
        {
          title: "Внешний вид",
          desc: "Переключайте темы и выбирайте акцентный цвет для персонализации.",
        },
        {
          title: "Баланс",
          desc: "Проверяйте свои заработки на Modrinth и статус выплат мгновенно.",
        },
        {
          title: "RU / EN",
          desc: "Полная поддержка русского и английского языков из коробки.",
        },
      ],
    },
    screenshots: {
      badge: "Скриншоты",
      title: "Увидеть в действии.",
      subtitle: "Чистый, быстрый и созданный специально для мобильных устройств.",
      labels: {
        login: "Вход",
        dashboard: "Панель",
        analytics: "Аналитика",
      },
    },
    steps: {
      badge: "Как это работает",
      title: "Три шага к мощи.",
      subtitle: "Никакой сложной настройки. Просто установите, войдите и вперёд.",
      items: [
        {
          step: "01",
          title: "Получить приложение",
          desc: "Загрузите последний APK из релизов GitHub или соберите из исходников. Оно бесплатное и с открытым кодом навсегда.",
        },
        {
          step: "02",
          title: "Войти",
          desc: "Используйте Modrinth OAuth для плавного входа или резервный токен доступа, если хотите.",
        },
        {
          step: "03",
          title: "Взять под контроль",
          desc: "Управляйте проектами, проверяйте аналитику, редактируйте версии и управляйте командой — всё с вашего телефона.",
        },
      ],
    },
    techStack: {
      badge: "Технологии",
      title: "Современные технологии.",
      subtitle:
        "Лёгкий, безопасный по типам стек, созданный для производительности и поддерживаемости.",
    },
    footer: {
      tagline: "Неофициальное приложение Modrinth",
      madeWith: "Сделано",
      madeBy: "EmanuelPlays, Rinthy не принадлежит EmanuelPlays",
      disclaimer: "Не связано с Modrinth и не одобрено Modrinth.",

      viewOnGitHub: "GitHub",
      joinDiscord: "Discord",
    },
  },
  it: {
    nav: {
      features: "Funzioni",
      screenshots: "Screenshot",
      howItWorks: "Come funziona",
      tech: "Tech",
      gitHub: "GitHub",
      discord: "Discord",
    },
    hero: {
      badge: "App non ufficiale per Modrinth",
      title: "Modrinth",
      titleGradient: "in tasca.",
      description:
        "Rinthy consente agli sviluppatori Modrinth di gestire progetti, tracciare analisi e gestire versioni — tutto dal telefono. Nessun desktop richiesto.",
      downloadApk: "Scarica APK",
      exploreFeatures: "Esplora funzioni",
      stats: {
        fast: "Ultrarapido",
        secure: "OAuth sicuro",
        native: "Interfaccia nativa",
      },
    },
    features: {
      badge: "Funzioni",
      title: "Tutto ciò che serve.",
      subtitle:
        "Una suite completa per sviluppatori Modrinth, ridisegnata per mobile.",
      items: [
        {
          title: "Dashboard Progetti",
          desc: "Sfoglia e gestisci tutti i tuoi progetti Modrinth in un'unica lista pulita.",
        },
        {
          title: "Analitiche",
          desc: "Traccia download, follower e tendenze di coinvolgimento in tempo reale.",
        },
        {
          title: "Gestione Versioni",
          desc: "Visualizza, crea e modifica le versioni del progetto dal tuo telefono.",
        },
        {
          title: "Controllo Team",
          desc: "Aggiungi, rimuovi e gestisci i membri del team dei progetti in movimento.",
        },
        {
          title: "Notifiche",
          desc: "Tieni d'occhio gli avvisi non letti senza aprire un browser.",
        },
        {
          title: "Modifica Profilo",
          desc: "Aggiorna username, bio e avatar direttamente nell'app.",
        },
        {
          title: "Aspetto",
          desc: "Cambia tema e scegli il tuo colore preferito per un tocco personale.",
        },
        {
          title: "Visualizza Saldo",
          desc: "Controlla i tuoi guadagni Modrinth e lo stato dei pagamenti istantaneamente.",
        },
        {
          title: "RU / EN",
          desc: "Supporto completo per russo e inglese integrato.",
        },
      ],
    },
    screenshots: {
      badge: "Screenshot",
      title: "Guardalo in azione.",
      subtitle: "Pulito, veloce e progettato per il mobile.",
      labels: {
        login: "Accesso",
        dashboard: "Pannello",
        analytics: "Analitiche",
      },
    },
    steps: {
      badge: "Come funziona",
      title: "Tre passi per la potenza.",
      subtitle: "Nessuna configurazione complicata. Installa, accedi e vai.",
      items: [
        {
          step: "01",
          title: "Ottieni l'app",
          desc: "Scarica l'ultimo APK dalle release GitHub o compila dai sorgenti. È open source e gratuito per sempre.",
        },
        {
          step: "02",
          title: "Accedi",
          desc: "Usa Modrinth OAuth per un accesso senza soluzione di continuità, oppure un token di accesso personale se preferisci.",
        },
        {
          step: "03",
          title: "Prendi il controllo",
          desc: "Gestisci progetti, controlla analitiche, modifica versioni e gestisci il tuo team — tutto dal tuo telefono.",
        },
      ],
    },
    techStack: {
      badge: "Tech Stack",
      title: "Costruito con strumenti moderni.",
      subtitle:
        "Uno stack leggero e type-safe progettato per prestazioni e manutenibilità.",
    },
    footer: {
      tagline: "App non ufficiale Modrinth",
      madeWith: "Fatto con",
      madeBy: "da EmanuelPlays, Rinthy non è di proprietà di EmanuelPlays",
      disclaimer: "Non affiliato con Modrinth né approvato da Modrinth.",

      viewOnGitHub: "GitHub",
      joinDiscord: "Discord",
    },
  },
} as const;

export type Translations = typeof translations.en;
