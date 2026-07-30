export default function AmbientBackground() {
  return (
    <>
      <div className="ambient-root" aria-hidden>
        <div className="ambient-blob ambient-blob-a" />
        <div className="ambient-blob ambient-blob-b" />
        <div className="ambient-blob ambient-blob-c" />
      </div>
      <div className="noise-overlay" aria-hidden />
    </>
  );
}
