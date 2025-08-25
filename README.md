# Laravel + React (Inertia) CRUD App

## Setup

1. Copy .env.example to .env and configure:
   - DB_CONNECTION=sqlite
   - DB_DATABASE=database/database.sqlite
2. Install dependencies:
   - Composer: `composer install`
   - Node: `npm install`
3. Generate app key: `php artisan key:generate`
4. Run migrations and seeders:
   - `php artisan migrate --force`
   - `php artisan db:seed --force`
5. Link storage for images: `php artisan storage:link`
6. Start dev servers:
   - PHP: `php artisan serve`
   - Vite: `npm run dev`

Login with the seeded user:
- email: test@example.com
- password: password

## Features
- Auth (email/password)
- Products: create, list, view, edit, delete
- Image upload (stores to storage/app/public/products)
- Validation & CSRF (FormRequests, Laravel middleware)
- Laravel Eloquent, migrations, seeders

## Notes / Next improvements
- Add pagination UI and search/filter on products
- Display uploaded images via a proper asset helper on frontend
- Add tests for ProductController and requests
- Replace simple forms with shared components and error handling
- Configure CI and deploy to Railway/Render

## Deploy
- Set APP_KEY, APP_ENV, APP_URL
- Use SQLite or provision MySQL/Postgres
- Run: `php artisan migrate --force && php artisan db:seed --force`
- Build assets: `npm run build` and serve `public/` with PHP-FPM/Nginx
