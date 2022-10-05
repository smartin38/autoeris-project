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
                        <h3 className={styles.contactTitle}><a href="https://open.spotify.com/track/58zsLZPvfflaiIbNWoA22O?si=3a358c16f55e42ac">I'm only human after all</a></h3>
                        <div className={styles.contactLimitContainer}>
                            <p className={styles.contactDetails}>
                                Yes, you read my text right. If you have a question, please fill out the form below and I will get back to you as soon as possible.
                            </p>
                        </div>

                        <div className={styles.contactRow}>
                            <div className={styles.contactGrid}>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input className={styles.messageInput}
                                        id="name"
                                        type="name"
                                        name="name"
                                    />
                                    <label htmlFor="email">
                                        Email Address
                                    </label>
                                    <input className={styles.messageInput}
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                    <label htmlFor="message">
                                        Message
                                    </label>
                                    <textarea className={styles.messageInput}
                                        id="message"
                                        name="message"
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