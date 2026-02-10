export default function Head() {
  return (
    <>
      {/* Performance: warm up connections for our external placeholder media hosts. */}
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.coverr.co" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://cdn.coverr.co" />
    </>
  );
}

