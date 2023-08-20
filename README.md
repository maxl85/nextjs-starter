# NextJS Starter

Тестовая работа по front-end от компании [Вебпрактик](https://webpractik.ru/)

На базе шаблона [NextJS Starter](https://github.com/webpractik/nextjs-starter/)


## Реализовано:
- Адаптивная верстка до 320px
- Анимации фильтра, карточек и кнопок
- Фильтр и корзина
- Оформление заказа

## 🚀 Как развернуть проект

```bash
git clone https://github.com/maxl85/nextjs-starter.git
cd nextjs-starter
npm ci
npm run dev
```

Перейти в браузере по адресу [http://localhost:3000](http://localhost:3000)



## 🪄 Features:

- Typescript
- Sass
- Mobx
- ESLint
- Stylelint
- Prettier
- Husky
- Commitizen
- Vitest
- Lint-staged
- Absolute Imports
- Storybook
- Sentry
- Bundle analyzer
- React Query
- API Codegen
- Figma tokens
- Security headers
- Generate components
- Coupling & cohesion graph
- Env variables validation

## 🎯 Deploy

- **NODEJS:** ```^18```
- **NPM:** ```^9```
- **Port:** ```3000```
- **Healthcheck:** ```/api/health```

## 🎈 CI / CD:

- `npm pkg delete scripts.prepare`
- `npm ci --silent`
- `npm run build`
- `npm run prod`

## 📝 Docs:

- [ENV переменные](docs/env.md)
- [Базовая настройка](docs/settings.md)
- [Структура проекта](https://kb.w6p.ru/doc/struktura-proekta-FmXknSyhJq)
- [Работа с API](https://kb.w6p.ru/doc/rabota-s-backend-api-TL0jXnQM9S)
- [Стандарт React & TS](https://kb.w6p.ru/doc/ts-react-DH9L2VPJ3T)
- [Error boundaries](https://kb.w6p.ru/doc/error-boundaries-RvX6tYG5dM)
- [React-query](https://kb.w6p.ru/doc/queries-xxCAi8Fex1)
- [Настройка Sentry](https://kb.w6p.ru/doc/sentry-RLE1b9FXT7)
- [Настройка прокси сервера](https://kb.w6p.ru/doc/kastomnyj-server-kOLtgu8DJG)
- [Дизайн токены](https://kb.w6p.ru/doc/dizajn-tokeny-fFz0aZ6F76)

## 📜 NPM Scripts:

| 	    Script                      | Description 	                        |
|----------------------------------|--------------------------------------|
| ```npm ci```                     | Установка модулей	                   |
| ```npm run build```              | Запуск билда	                        |
| 	```npm run dev```               | Запуск dev сборки 	                  |
| 	```npm run prod```              | Запуск прод сборки	                  |
| 	```npm run analyze```           | Анализ билда                         |
| 	```npm run storybook```         | Запуск storybook                     |
| 	```npm run build-storybook```   | Билд storybook                       |
| 	```npm run test```              | Запуск тестов                        |
| 	```npm run coverage```          | Покрытие тестов                      |
| 	```npm run type-coverage```     | Покрытие типизацией                  |
| 	```npm run build-tokens```      | Билд фигма токенов                   |
| 	```npm run api-codegen```       | Автогенерация API                    |
| 	```npm run type-check```        | Проверка TS                          |
| 	```npm run lint```              | Проверка eslint                      |
| 	```npm run stylelint```         | Проверка стилей                      |
| 	```npm run format```            | Форматирование prettier              |
| 	```npm run check-all```         | Проверка всего в параллельном режиме |
| 	```npm run gen -- <название>``` | Создание реакт компонента            |
| 	```npm run cruiser```           | Построить граф зависимостей          |
| 	```npm run clean```             | Очистка сборки                       |

## 📦 Packages:

- [zod](https://zod.dev/)
- [axios](https://axios-http.com/ru/docs/intro)
- [react-query-kit](https://github.com/liaoliao666/react-query-kit#examples)
- [@t3-oss/env-nextjs](https://env.t3.gg/docs/nextjs)
- [lodash](https://lodash.com/docs)
- [react-use](https://github.com/streamich/react-use#readme)
- [dompurify](https://www.npmjs.com/package/dompurify)
- [modern-normalize](https://www.npmjs.com/package/modern-normalize)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [clsx](https://www.npmjs.com/package/clsx)
