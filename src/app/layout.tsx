import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Строительная компания "Билдинг"',
  description: 'Качественные строительные услуги в Омске',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
