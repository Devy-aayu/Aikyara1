import Link from "next/link";

export const metadata = {
  title: "Cloud Backup — In Development",
  description:
    "A Windows backup application being developed with scheduling, folder monitoring, version history, and restore tools.",
};

const features = [
  "Fixed-interval automatic backups",
  "Backup after protected-folder changes",
  "Background tray operation",
  "Version history and restore tools",
  "S3-compatible, WebDAV, and local vault destinations",
  "Smart backup filtering",
  "Sanitized diagnostic export",
  "Live command-deck activity console",
];

export default function CloudBackupPage() {
  return (
    <>
      <section className="product-hero shell" data-reveal>
        <div>
          <span className="kicker">Aikyara Cloud Backup · In development</span>
          <h1>Your files, protected without constant attention.</h1>
          <p>
            A Windows desktop backup utility being engineered around scheduled
            automation, change monitoring, version history, and guided recovery.
          </p>
          <div className="button-row">
            <span className="button button-disabled" aria-disabled="true">
              Release coming later
            </span>
            <Link className="button button-ghost" href="/support">
              Follow development
            </Link>
          </div>
        </div>
        <div className="console-preview" data-reveal>
          <div className="console-bar">
            <span /> <span /> <span />
            <strong>BACKUP ENGINE</strong>
          </div>
          <pre>{`[22:10:03] SCHEDULER  Interval reached\n[22:10:04] SCAN       25 files checked\n[22:10:05] CHANGE     1 file detected\n[22:10:06] UPLOAD     project-notes.txt\n[22:10:08] COMPLETE   Backup verified`}</pre>
        </div>
      </section>

      <section className="section shell" data-reveal>
        <div className="notice beta-notice">
          <strong>Development build</strong>
          <p>
            Cloud Backup is undergoing reliability, recovery, security, and
            distribution testing. A public installer is not being offered yet.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <div key={feature}>
              <span aria-hidden="true">✓</span>
              {feature}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
