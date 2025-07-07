'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

interface Breadcrumb {
  name: string;
  path: string;
  isLast: boolean;
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const isHomePage = pathname === '/';

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 432);
      if (window.innerWidth >= 432) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getBreadcrumbs = (): Breadcrumb[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: Breadcrumb[] = [];
    let currentPath = '';

    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      breadcrumbs.push({
        name: path === 'workflow' ? 'Как мы работаем' :
              path === 'services' ? 'Услуги' : path,
        path: currentPath,
        isLast: index === paths.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs: Breadcrumb[] = getBreadcrumbs();

  const shouldShowLogo = !isMobile && !isHomePage;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {isHomePage || shouldShowLogo ? (
            <Link href="/" className={styles.logo}>
              <Image src='/logo.png' width={50} height={50} alt="Логотип Билдинг" />
              <span className={styles.logoText}>БИЛДИНГ</span>
            </Link>
          ) : (
            <div className={styles.breadcrumbs}>
              <Link href="/" className={styles.homeLink}>Главная</Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  <span className={styles.separator}> -&gt; </span>
                  {crumb.isLast ? (
                    <span className={styles.currentPage}>{crumb.name}</span>
                  ) : (
                    <Link href={crumb.path} className={styles.crumbLink}>
                      {crumb.name}
                    </Link>
                  )}
                </span>
              ))}
            </div>
          )}

          {isMobile && (
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label="Открыть меню"
            >
              <Image
                src="/menu.svg"
                width={24}
                height={24}
                alt="Меню"
                className={styles.menuIcon}
              />
            </button>
          )}

          {!isMobile && (
            <nav className={styles.nav}>
              <Link href="/" className={styles.link}>Главная</Link>
              <Link href="/services" className={styles.link}>Виды услуг</Link>
              <Link href="/workflow" className={styles.link}>Как мы работаем</Link>
              <button
                onClick={scrollToForm}
                className={styles.requestButton}
              >
                Оставить заявку
              </button>
            </nav>
          )}
        </div>
      </header>

      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <button
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="Закрыть меню"
          >
            ✕
          </button>

          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>
              Главная
            </Link>
            <Link href="/services" className={styles.mobileLink} onClick={toggleMenu}>
              Услуги
            </Link>
            <Link href="/workflow" className={styles.mobileLink} onClick={toggleMenu}>
              Как мы работаем
            </Link>
            <button
              onClick={scrollToForm}
              className={styles.mobileRequestButton}
            >
              Оставить заявку
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
