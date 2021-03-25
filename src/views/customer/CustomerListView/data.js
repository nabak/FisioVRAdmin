import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'Brasil',
      state: 'Minas Gerais',
      city: 'Juiz de Fora',
      street: ''
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 0,
    email: 'xxxx.xxxx@xxxxx.com',
    name: 'Paciente número um',
    phone: 'xxxx-xxxx'
  }
];
