export default function Docs({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    return <h1>Welcome to the Docs page</h1>;
  }

  if (slug.length === 2) {
    return (
      <>
        <h1>{slug[0]}</h1>
        <h2>{slug[1]}</h2>
      </>
    );
  }

  return (
    <>
      {slug.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
}
