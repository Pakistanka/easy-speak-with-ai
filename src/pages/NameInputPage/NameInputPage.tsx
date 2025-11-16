'use client';

import {
  ArrowRight,
  GraduationCap,
  Globe,
  Heart,
  LogOut,
  Settings,
  Star,
  Wallet,
} from 'lucide-react';
import { useState, ChangeEvent, JSX } from 'react';

import styles from './NameInputPage.module.css';

export default function NameInputPage(): JSX.Element {
  const [name, setName] = useState<string>('Carolina');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleReturn = (): void => {
    console.log('Return clicked');
  };

  const handleNext = (): void => {
    console.log('Next clicked with name:', name);
  };

  const handleLogout = (): void => {
    console.log('Logout clicked');
  };

  const handleSettings = (): void => {
    console.log('Settings clicked');
  };

  const handleCryptoWallet = (): void => {
    console.log('Crypto wallet clicked');
  };

  return (
    <div className={styles.container}>
      {/*header*/}
      <header className={styles.header}>
        <img src="/icons/LOGO.png" alt="Easy Speak Logo" className={styles.logo} />
        <nav className={styles.nav}>
            <button
              type="button"
              className={styles.navButtonSettings}
              onClick={handleSettings}
            >
              Settings
            </button>
            <button
              type="button"
              className={styles.navButtonWallet}
              onClick={handleCryptoWallet}
            >
              Crypto wallet
              <img src="/icons/wallet-logo.svg" alt="wallet-logo" className={styles.walletIcon} />
            </button>
            <button
              type="button"
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              Log out
            </button>
          </nav>
      </header>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          {/* Features List */}
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <Heart className={styles.featureIcon} />
              <span>Your native language</span>
            </li>
            <li className={styles.featureItem}>
              <Globe className={styles.featureIcon} />
              <span>The language you want to learn</span>
            </li>
            <li className={styles.featureItem}>
              <GraduationCap className={styles.featureIcon} />
              <span>Your current level of knowledge</span>
            </li>
            <li className={styles.featureItem}>
              <Star className={styles.featureIcon} />
              <span>The purpose of learning language</span>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className={styles.sidebarFooter}>
          <img src="/icons/line.png" alt="line" className={styles.line} />
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                Twitter 
                <img src="/icons/vector.png" alt="arrow" className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                Discord
                <img src="/icons/vector.png" alt="arrow" className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                Instagram
                <img src="/icons/vector.png" alt="arrow" className={styles.socialIcon} />
              </a>
              <p className={styles.copyright}>© 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Main Content */}
      <div className={styles.mainContent}>
        {/* Main Form Section */}
        <main className={styles.main}>
          <div className={styles.what}>
            <h2 className={styles.sectionTitle}>What is your name/nickname?</h2>
            <p className={styles.subtitle}>
              Please, write your name or nickname
            </p>
          </div>
            <div className={styles.inputSection}>
              <label htmlFor="name-input" className={styles.inputLabel}>
                Name/nickname
              </label>
              <input
                id="name-input"
                type="text"
                className={styles.nameInput}
                value={name}
                onChange={handleNameChange}
                placeholder="Carolina"
              />
            </div>
          </main>

        {/* Footer with Action Buttons */}
        <footer className={styles.footer}>
          <button
            type="button"
            className={styles.returnButton}
            onClick={handleReturn}
          >
            Return
          </button>
          <button
            type="button"
            className={styles.nextButton}
            onClick={handleNext}
            disabled={!name.trim()}
          >
            Next
          </button>
        </footer>
        
      </div>
    </div>
  );
}

