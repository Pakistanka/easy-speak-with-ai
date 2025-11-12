import { useState, useEffect, ChangeEvent, JSX } from 'react';
import styles from './OnboardingPage.module.css';

export default function OnboardingPage(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [debouncedName, setDebouncedName] = useState<string>('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(name);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [name]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleReturn = (): void => {
    console.log('Return clicked');
  };

  const handleNext = (): void => {
    console.log('Next clicked with name:', debouncedName);
  };

  return (
    <div className={styles.container}>

        <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>

          <h1 className={styles.appTitle}>Easy Speak</h1>
          
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>Your native language</li>
            <li className={styles.featureItem}>The language you want to learn</li>
            <li className={styles.featureItem}>Your current level of knowledge</li>
            <li className={styles.featureItem}>The purpose of learning language</li>
          </ul>
          
          <div className={styles.sidebarFooter}>
            <p className={styles.footerText}>Taste {'>'}</p>
            <p className={styles.footerText}>Discard {'>'}</p>
            <p className={styles.footerText}>Instagram {'>'}</p>
            <p className={styles.copyright}>© 2022 All rights reserved.</p>
          </div>
        </div>
        </div>

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <button className={styles.navButton}>Settings</button>
            <button className={styles.navButton}>Crypto wallet</button>
            <button className={styles.navButton}>Log out</button>
          </nav>
        </header>

        <main className={styles.main}>
          <h2 className={styles.sectionTitle}>What is your name/nickname?</h2>
          <p className={styles.subtitle}>Please, write your name or nickname</p>
          
          <div className={styles.inputSection}>
            <label className={styles.inputLabel}>Name/nickname</label>
            <input
              type="text"
              className={styles.nameInput}
              value={name}
              onChange={handleNameChange}
              placeholder="Cookies"
            />
            {debouncedName && (
              <p className={styles.debouncedValue}>
                Сохраненное значение: {debouncedName}
              </p>
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          <button className={styles.returnButton} onClick={handleReturn}>
            Return
          </button>
          <button 
            className={styles.nextButton} 
            onClick={handleNext}
            disabled={!debouncedName}
          >
            Next
          </button>
        </footer>

        
      </div>
    </div>
  );
}