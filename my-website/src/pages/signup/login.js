import React from 'react';
import styles from './index.module.css';

export function LoginForm() {
    function handleSubmit() {
        alert("Hello!")
    }
    return (
        <div className={styles.contactUsBackground} id="contact-us">
            <div className={`${styles.contactContainer} container`}>
                <div className={styles.contactSideBySide}>
                    <div className={styles.contactMainPart}>
                        <h3 className={styles.contactTitle}><a href="https://open.spotify.com/track/58zsLZPvfflaiIbNWoA22O?si=3a358c16f55e42ac">Welcome! Join us!</a></h3>
                        <div className={styles.contactLimitContainer}>
                            <p className={styles.contactDetails}>
                            </p>
                        </div>

                        <div className={styles.contactRow}>
                            <div className={styles.contactGrid}>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">
                                        Username
                                    </label>
                                    <input className={styles.messageInput}
                                        id="username"
                                        type="username"
                                        name="username"
                                    />
                                    <label htmlFor="email">
                                        Password
                                    </label>
                                    <input className={styles.messageInput}
                                        id="password"
                                        type="password"
                                        name="password"
                                    />
                                    <button className={styles.thisButton} type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;