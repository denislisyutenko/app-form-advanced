export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Возраст',
  site: 'Сайт',
  role: 'Роль'
};

export const FORM_PLACEHOLDERS = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Укажите адресс электронной почты...',
  age: 'Установите возраст...',
  site: 'Введите адресс сайта...',
  role: 'Выберите роль из списка...'
};


export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  site: 'Принято!',
  role: 'Принято!'
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно.',
    minLength: 'Имя должно содержать не менее 4 символов.',
    maxLength: 'Имя должно содержать не более 15 символов.'
  },
  password: {
    required: 'Пароль обязателен.',
    minLength: 'Пароль должнен содержать не менее 8 символов.',
    maxLength: 'Пароль должнен содержать не более 25 символов.'
  },
  email: {
    required: 'Email обязателен.',
    emailValidator: 'Неправильный формат email адреса.'
  },
  age: {
    required: 'Возраст обязателен.',
    rangeValidator: 'Значение должно быть числом в диапазоне 1...99.',
    minRange: 'Значение должно быть больше 1.',
    maxRange: 'Значение должно быть меньше 99.'
  },
  site: {
    required: 'Сайт обязателен.',
    urlNotAllowed: 'Нейправильный формат адресса сайта.',
    pending: 'Выполняется проверка...'
  },
  role: {
    required: 'Роль обязателена.',
  }
};

export const FORM_ROLES = ['Гость', 'Модератор', 'Администратор'];
