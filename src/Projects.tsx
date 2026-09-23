export default function Projects() {
    return (
        <div>
            <header
                style={{
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    boxSizing: 'border-box',
                    background: '#ffffff',
                    color: '#003d7a',
                    padding: '1.2rem 1.5rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                    }}
                >
                    GRUPPE 20
                </span>

                <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                    <a href="/#about" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Om oss
                    </a>

                    <a href="/#looking-for" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Hva ser vi etter?
                    </a>

                    <a href="/prosjekter" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Prosjekter
                    </a>

                    <a href="/#members" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Medlemmer
                    </a>

                    <a href="/#contact" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Kontakt oss
                    </a>
                </nav>
            </header>

            <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#003d7a',
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                    }}
                >
                    VÅRE PROSJEKTER
                </h1>

                <div
                    style={{
                        width: '60%',
                        height: '2px',
                        backgroundColor: '#0052cc',
                        margin: '0 auto 3rem auto',
                    }}
                ></div>

                <section
                    style={{
                        border: '1px solid #c2bda9',
                        borderRadius: '12px',
                        padding: '2.5rem',
                        background: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '180px',
                            height: '180px',
                            border: '3px solid #0052cc',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: '#003d7a',
                            fontWeight: '700',
                            textAlign: 'center',
                        }}
                    >
                        Kartverket<br />&<br />Luftambulansen
                    </div>

                    <div>
                        <h2
                            style={{
                                color: '#003d7a',
                                fontSize: '1.8rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            Kartverket & Luftambulansen (3. semester)
                        </h2>

                        <p
                            style={{
                                color: '#555',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Utvikling av NRLApp, en webbasert løsning for registrering og
                            behandling av luftfartshindre. Løsningen inkluderer kartbasert
                            registrering, brukerroller, databasehåndtering og godkjenningsflyt,
                            og ga oss erfaring med utvikling av et komplett informasjonssystem
                            i samarbeid med eksterne aktører.
                        </p>

                        <a
                            href="https://github.com/amged002/NRLAPPfinal"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '0.8rem 1.5rem',
                                backgroundColor: '#0052cc',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                            }}
                        >
                            Se prosjektet
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}