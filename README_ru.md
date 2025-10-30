# Easy Speak 2

> Современное, готовое к продакшну приложение на Next.js 15, построенное с использованием архитектуры Feature-Sliced Design, TypeScript и комплексного инструментария.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![FSD](https://img.shields.io/badge/Architecture-FSD-orange)](https://feature-sliced.design/)

## 🚀 Возможности

- **⚡ Next.js 15** с Turbopack для сверхбыстрой разработки
- **🏗️ Feature-Sliced Design (FSD)** архитектура для поддерживаемого кода
- **📱 Адаптивный дизайн** с Tailwind CSS v4
- **🌐 Интернационализация** с next-intl
- **🎨 Современные UI компоненты** с анимациями Framer Motion
- **🔄 Управление состоянием** с TanStack Query (React Query)
- **🎭 Разработка компонентов** со Storybook
- **🧪 Настройка тестирования** с Jest и Testing Library
- **📦 Типобезопасность** с TypeScript 5.8
- **🎯 Качество кода** с ESLint, Prettier и Husky
- **🌙 Поддержка тем** с next-themes
- **📊 Анализ бандла** с Next.js Bundle Analyzer

## 🛠️ Технологический стек

### Основа
- **Фреймворк:** Next.js 15.2.5
- **Рантайм:** React 19
- **Язык:** TypeScript 5.8
- **Стилизация:** Tailwind CSS 4.1.4
- **Архитектура:** Feature-Sliced Design (FSD)

### Состояние и данные
- **Серверное состояние:** TanStack Query 5.80.7
- **HTTP клиент:** Axios 1.8.2
- **Обработка форм:** React Hook Form 7.53.1

### UI и анимация
- **Иконки:** Lucide React 0.487.0
- **Анимация:** Framer Motion 12.17.0
- **Уведомления:** React Hot Toast 2.4.1
- **Темы:** next-themes 0.4.6

### Инструменты разработки
- **Тестирование:** Jest 30.2.0 + Testing Library
- **Storybook:** 9.1.15
- **Линтинг:** ESLint + Prettier
- **Git хуки:** Husky + lint-staged
- **Конвенция коммитов:** Commitlint

## 📁 Структура проекта (FSD)

```
src/
├── app/              # Next.js App Router
├── pages/            # Композиции страниц
├── widgets/          # Сложные UI блоки
├── features/         # Бизнес-фичи
├── entities/         # Бизнес-сущности
├── services/         # API сервисы
└── shared/           # Общие ресурсы
    ├── ui/           # UI компоненты
    ├── lib/          # Утилиты и хуки
    ├── api/          # HTTP клиент
    ├── config/       # Конфигурации
    ├── types/        # TypeScript типы
    └── styles/       # Глобальные стили
```

## 🚀 Быстрый старт

### Требования
- Node.js >= 20.0.0
- Yarn

### Установка

1. **Клонировать репозиторий**
```bash
git clone [<repository-url>](https://github.com/Pakistanka/easy-speak-with-ai.git)
cd easy-speak-2
```

2. **Установить зависимости**
```bash
yarn install
```

3. **Настроить переменные окружения**
```bash
cp .env.example .env.local
```

4. **Запустить сервер разработки**
```bash
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📝 Доступные скрипты

### Разработка
- `yarn dev` - Запустить сервер разработки с Turbopack
- `yarn build` - Собрать для продакшна
- `yarn start` - Запустить продакшн сервер
- `yarn lint` - Запустить линтинг и форматирование
- `yarn format` - Форматировать код с Prettier

### Тестирование
- `yarn test` - Запустить тесты
- `yarn test:watch` - Запустить тесты в режиме наблюдения

### Storybook
- `yarn storybook` - Запустить dev сервер Storybook
- `yarn build-storybook` - Собрать Storybook

### Утилиты
- `yarn ngrok` - Открыть локальный сервер через ngrok

## 🏗️ Архитектура

Этот проект следует методологии **Feature-Sliced Design (FSD)**:

### Правила слоев
- **app** → pages, widgets, features, entities, shared
- **pages** → widgets, features, entities, shared
- **widgets** → features, entities, shared
- **features** → entities, shared
- **entities** → shared
- **shared** → без зависимостей

### Слой сервисов
API сервисы организованы в `/services`:
- `postService` - Операции с постами
- `userService` - Управление пользователями
- `authService` - Аутентификация

## 🔧 Конфигурация

### Переменные окружения
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind CSS
Современный Tailwind CSS v4 с конфигурацией PostCSS.

### TypeScript
Строгая конфигурация TypeScript с алиасами путей:
- `@/` → `src/`

## 🧪 Тестирование

- **Модульные тесты:** Jest + Testing Library
- **Тесты компонентов:** Storybook interactions
- **E2E тесты:** Готово для Playwright/Cypress

## 📦 Сборка и развертывание

### Продакшн сборка
```bash
yarn build
yarn start
```

### Настройка окружения
- Разработка: `.env.local`
- Продакшн: Настройте вашу платформу развертывания

## 🤝 Участие в разработке

1. Форкните репозиторий
2. Создайте ветку фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'feat: add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Конвенция коммитов
Этот проект следует [Conventional Commits](https://conventionalcommits.org/):
- `feat:` - Новые функции
- `fix:` - Исправления ошибок
- `docs:` - Документация
- `style:` - Изменения стиля кода
- `refactor:` - Рефакторинг кода
- `test:` - Тесты
- `chore:` - Обслуживание

## 📚 Документация

- [Feature-Sliced Design](./src/FSD_ARCHITECTURE.md)
- [API Сервисы](./src/services/)
- [Библиотека компонентов](http://localhost:6006) (Storybook)

## 🔗 Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)


⭐ Поставьте звездочку этому репозиторию, если он вам помог!
