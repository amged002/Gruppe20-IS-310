import './App.css';
import { profiles } from './utils/profiles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function App() {
    return (
        <div>
            {/* Banner/Header */}
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    background: '#ffffff',
                    color: '#003d7a',
                    padding: '1.5rem 2rem',
                    textAlign: 'left',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <span>GRUPPE 20</span>
                <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                    <a href="#members" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Medlemmer
                    </a>
                    <a href="#contact" style={{ color: '#003d7a', textDecoration: 'none' }}>
                        Kontakt oss
                    </a>
                </nav>
            </div>

            {/* Content */}
            <div style={{ marginTop: '2rem' }}>
                {/* Om oss */}
                <div
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto 3rem auto',
                        textAlign: 'center',
                        background: '#ffffffff',
                        padding: '3rem 2rem',
                        borderRadius: '12px',
                        color: '#2f2f2f',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                    }}
                >
                    <h2 style={{ color: '#003d7a', fontSize: '2rem', marginBottom: '1rem' }}>OM OSS</h2>
                    <p>
                        Vi er en gruppe på 6 studenter som studerer Bachelor IT og informasjonssystemer ved UiA.
                        Gjennom studiet har vi fått erfaring med ulike typer IT-prosjekter og har utviklet gode ferdigheter innen samarbeid,
                        problemløsning og prosjektarbeid. Vi ønsker å bruke denne erfaringen videre i et bachelorprosjekt hvor vi kan skape en løsning med praktisk verdi.
                    </p>

                    <p>
                        Gruppen har erfaring fra prosjekter i samarbeid med blant annet Kartverket og Luftambulansen,
                        i tillegg til praksiserfaring fra Kongsberg Gruppen. Denne kombinasjonen har gitt oss innblikk i hvordan IT brukes i ulike bransjer og organisasjoner.
                        Vi er åpne for ulike typer prosjekter og ønsker et samarbeid med en bedrift hvor vi kan lære, utfordre oss selv og samtidig bidra med våre tekniske ferdigheter.
                    </p>
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: '60%',
                        height: '2px',
                        backgroundColor: '#0052cc',
                        margin: '2rem auto',
                    }}
                ></div>

                {/* Gruppemedlemmer */}
                <div>
                    <h1
                        id="members"
                        style={{
                            textAlign: 'center',
                            color: '#0052cc',
                            marginBottom: '2rem',
                            fontSize: '2.5rem',
                        }}
                    >
                        GRUPPEMEDLEMMER
                    </h1>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                            gap: '2rem',
                            margin: '0 auto 3rem auto',
                            maxWidth: '1400px',
                            padding: '0 1rem',
                        }}
                    >
                        {profiles.map((profile, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    border: '1px solid #c2bda9',
                                    borderRadius: '10px',
                                    padding: '2rem',
                                    background: '#fff',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                {/* Profile Image */}
                                {profile.image ? (
                                    <img
                                        src={profile.image}
                                        alt={profile.name}
                                        style={{
                                            width: '180px',
                                            height: '180px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                            border: '3px solid #0052cc',
                                            marginBottom: '1rem',
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '8px',
                                            border: '3px solid #0052cc',
                                            marginBottom: '1rem',
                                            backgroundColor: '#e0e0e0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#999',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        Legg til bilde
                                    </div>
                                )}

                                {/* Name and Role */}
                                <h2
                                    style={{
                                        fontSize: '1.4rem',
                                        margin: '0.5rem 0',
                                        color: '#003d7a',
                                    }}
                                >
                                    {profile.name}
                                </h2>
                                <p
                                    style={{
                                        fontSize: '1rem',
                                        color: '#666',
                                        margin: '0.5rem 0 1rem 0',
                                    }}
                                >
                                    {profile.role}
                                </p>

                                {/* Description */}
                                
                                <div
                                    style={{
                                        fontSize: '0.95rem',
                                        color: '#555',
                                        lineHeight: '1.6',
                                        marginBottom: '1rem',
                                        minHeight: '60px',
                                    }}
                                >
                                    {profile.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index} style={{ marginBottom: '1rem' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Social Icons */}
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    {profile.github && (
                                        <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub size={28} color="#333" />
                                        </a>
                                    )}
                                    {profile.linkedin && (
                                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin size={28} color="#0A66C2" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div
                style={{
                    width: '60%',
                    height: '2px',
                    backgroundColor: '#0052cc',
                    margin: '3rem auto',
                }}
            ></div>

            {/* Footer/Contact */}
            <footer id="contact">
                <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                    <h2
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: '#003d7a',
                            marginBottom: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            textAlign: 'center',
                        }}
                    >
                        Kontakt oss
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            color: '#003d7a',
                            fontSize: '1rem',
                            marginBottom: '3rem',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <p style={{ margin: '0.5rem 0' }}>📧 E-post: gruppe20@example.com</p>
                            <p style={{ margin: '0.5rem 0' }}>📱 Telefon: +47 XXX XX XXX</p>
                        </div>
                    </div>
                    <p
                        style={{
                            textAlign: 'center',
                            color: '#666',
                            fontSize: '0.9rem',
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid #e0e0e0',
                        }}
                    >
                        © 2026 Gruppe 20 IS-310. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
