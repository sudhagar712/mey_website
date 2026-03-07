import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main style={{
            background: 'var(--yellow)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
        }}>
            <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(6rem, 20vw, 14rem)',
                fontWeight: 900,
                color: 'var(--black)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                marginBottom: '1rem',
                opacity: 0.08,
            }}>
                404
            </h1>
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--black)',
                marginTop: '-4rem',
                marginBottom: '1rem',
            }}>
                Page not found
            </h2>
            <p style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(0,0,0,0.55)',
                fontSize: '0.95rem',
                marginBottom: '2.5rem',
            }}>
                This page doesn't exist. Let's get you back on track.
            </p>
            <Link to="/" className="btn-primary">Back to Home</Link>
        </main>
    );
};

export default NotFound;
