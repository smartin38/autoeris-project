import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import { LoginForm } from './login';


export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Login`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner, 'heroBannerContact')}>
                <div className="container">
                    <h1 className="hero__title">Login to AutoEris</h1>
                    <p className="hero__subtitle"></p>
                </div>
            </header>
            <LoginForm />
        </Layout>
    );
}