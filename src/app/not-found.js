import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@900&display=swap');

        .nf-root {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0a0a0f;
          color: #c8ffd4;
          font-family: 'Share Tech Mono', monospace;
          z-index: 9999;
        }

        .nf-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,80,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,80,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .nf-corner {
          position: absolute;
          width: 22px; height: 22px;
          border-color: rgba(0,255,80,0.2);
          border-style: solid;
          z-index: 10;
        }
        .nf-tl { top: 24px; left: 24px; border-width: 1px 0 0 1px; }
        .nf-tr { top: 24px; right: 24px; border-width: 1px 1px 0 0; }
        .nf-bl { bottom: 24px; left: 24px; border-width: 0 0 1px 1px; }
        .nf-br { bottom: 24px; right: 24px; border-width: 0 1px 1px 0; }

        .nf-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 700px;
          width: 100%;
        }


        .nf-code {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: clamp(96px, 22vw, 200px);
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 2px rgba(0,255,80,0.92);
          letter-spacing: -0.02em;
          position: relative;
          user-select: none;
          display: block;
        }

        .nf-shadow1,
        .nf-shadow2 {
          position: absolute;
          inset: 0;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          font-size: clamp(96px, 22vw, 200px);
          line-height: 0.85;
          letter-spacing: -0.02em;
          color: transparent;
          pointer-events: none;
        }

        .nf-headline {
          font-size: clamp(13px, 2.2vw, 17px);
          letter-spacing: 0.15em;
          color: rgba(0,255,80,0.68);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          margin-top: 2rem;
        }

        .nf-subtext {
          font-size: 13px;
          color: rgba(0,255,80,0.32);
          line-height: 1.9;
          margin-bottom: 2rem;
        }

        .nf-btn {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 11px 26px;
          border: 1px solid rgba(0,255,80,0.32);
          background: transparent;
          color: rgba(0,255,80,0.65);
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .nf-btn:hover {
          border-color: rgba(0,255,80,0.75);
          color: #c8ffd4;
          background: rgba(0,255,80,0.06);
        }
        .nf-btn-primary {
          border-color: rgba(0,255,80,0.58);
          color: #00ff50;
        }


      `}</style>

      <div className="nf-root">
        <div className="nf-grid" />

        <div className="nf-corner nf-tl" />
        <div className="nf-corner nf-tr" />
        <div className="nf-corner nf-bl" />
        <div className="nf-corner nf-br" />

        <div className="nf-content">
          <span className="nf-code" role="img" aria-label="404">404</span>
          <p className="nf-headline">Signal lost in the void</p>
          <p className="nf-subtext">
            The page you requested does not exist,
            <br />
            has been moved, or has never existed.
          </p>
          <div className="nf-actions">
            <Link href="/" className="nf-btn nf-btn-primary">← Return home</Link>
          </div>
        </div>

      </div>
    </>
  );
}