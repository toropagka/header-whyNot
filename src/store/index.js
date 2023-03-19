import { createStore } from 'vuex';

const store = createStore({
  state: {
    items: [
      { label: ' Преимущества Tele2', url: '/' },
      { label: 'Тарифы', url: '/price' },
      { label: 'Акции и спецпредложения', url: '/suggestions' },
      { label: ' Промотариф Tele2', url: '/promo' },
      { label: 'Технология eSIM', url: '/esim' },
      { label: 'Подключение нового абонента', url: '/new-contact' },
    ],
  },

  getters: {
    getItems: (state) => state.items,
  },
});

export default store;
