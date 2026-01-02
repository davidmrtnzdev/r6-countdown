import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Rainbow Six Siege Season Countdown';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    // We use a simple system font stack for reliability
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#020617', // r6-darker
                    backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), #020617)',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                        padding: '8px 20px',
                        borderRadius: 50,
                        border: '1px solid rgba(255, 85, 0, 0.3)',
                        background: 'rgba(255, 85, 0, 0.1)',
                        color: '#ff5500', // r6-orange
                        fontSize: 24,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                    }}
                >
                    Live Tracker
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ fontSize: 60, fontWeight: 900, marginBottom: 0, lineHeight: 1 }}>
                        OPERATION
                    </div>
                    <div
                        style={{
                            fontSize: 100,
                            fontWeight: 900,
                            background: 'linear-gradient(to right, #ff5500, #ef4444)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            lineHeight: 1,
                            marginTop: -10,
                        }}
                    >
                        TENFOLD
                    </div>
                </div>

                <div style={{ marginTop: 40, fontSize: 30, color: '#94a3b8', letterSpacing: 1 }}>
                    Ending March 3, 2026
                </div>

                <div style={{ position: 'absolute', bottom: 40, fontSize: 24, opacity: 0.5 }}>
                    r6countdown.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
