export const menus = [
    {
        icon: 'dashboard',
        label: 'Панель управления',
        title: 'Панель управления',
        path: '/',
    },
    {
        divider: true,
    },
    {
        icon: 'form',
        label: 'Все статьи',
        title: 'Все статьи',
        path: '/article',
    },
    {
        label: 'Новая статья',
        path: '/article/editor',
        ignore: true,
    },
    {
        label: 'Редактировать статью',
        path: '/article/editor/[id]',
        ignore: true,
    },
    {
        icon: 'copy',
        label: 'Категории',
        title: 'Категории',
        path: '/article/category',
    },
    {
        icon: 'tag',
        label: 'Теги',
        title: 'Теги',
        path: '/article/tags',
    },
    {
        divider: true,
    },
    {
        icon: 'snippets',
        label: 'Все страницы',
        title: 'Все страницы',
        path: '/page',
    },
    {
        label: 'Новая страница',
        path: '/page/editor',
        ignore: true,
    },
    {
        label: 'Редактировать страницу',
        path: '/page/editor/[id]',
        ignore: true,
    },
    {
        divider: true,
    },
    {
        icon: 'message',
        label: 'Комментарии',
        title: 'Комментарии',
        path: '/comment',
    },
    {
        icon: 'mail',
        label: 'Почта',
        title: 'Почта',
        path: '/mail',
    },
    {
        icon: 'folder-open',
        label: 'Файлы',
        title: 'Файлы',
        path: '/file',
    },
    {
        divider: true,
    },
    {
        icon: 'search',
        label: 'Поиск',
        title: 'Поиск',
        path: '/search',
    },

    {
        icon: 'project',
        label: 'Статистика',
        title: 'Статистика',
        path: '/view',
    },
    {
        divider: true,
    },
    {
        label: 'Мой кабинет',
        title: 'Мой кабинет',
        icon: 'user',
        path: '/ownspace',
        ignore: true,
    },
    {
        icon: 'user',
        label: 'Пользователи',
        title: 'Пользователи',
        path: '/user',
    },

    {
        icon: 'setting',
        label: 'Настройки',
        title: 'Настройки',
        path: '/setting',
    },
];