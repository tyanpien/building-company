/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (нужно для статического экспорта)
  },
  output: 'standalone', // Генерирует автономную сборку для деплоя
};

module.exports = nextConfig;
