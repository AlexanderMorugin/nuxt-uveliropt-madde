export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      title: 'О коллекции',
      route: '/collections',
      target: 'about',
    },
    {
      id: 2,
      title: 'Каталог',
      route: '/collections',
      target: 'catalog',
    },
    {
      id: 3,
      title: 'О цирконии',
      route: '/collections',
      target: 'zirconium',
    },
    {
      id: 4,
      title: 'Сторис',
      route: '/collections',
      target: 'stories',
    },
    {
      id: 5,
      title: 'Контакты',
      route: '/collections',
      target: 'contacts',
    },
  ];
});