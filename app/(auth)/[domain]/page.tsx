export default function HomePage({ params }: { params: { domain: string } }) {
  return (
    <>
      <>
        Home page For: <strong>{params.domain}</strong>
      </>
      <>get an appointment here</>
    </>
  );
}
