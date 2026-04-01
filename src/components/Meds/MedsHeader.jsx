export default function MedsHeader() {
  return (
    <div className="w-full max-w-2xl mb-6 flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          width: '36px',
          height: '36px',
          background: 'color-mix(in srgb, var(--primary) 15%, transparent)',
          color: 'var(--primary)',
          fontSize: '1.125rem',
        }}
      >
        💊
      </div>
      <span className="text-h5 font-bold text-base-content">약뭇나</span>
    </div>
  );
}
