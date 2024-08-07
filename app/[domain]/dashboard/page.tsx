export default function page({ params }: { params: { domain: string } }) {
  const domain = params.domain;

  return (
    <>
      <>
        Dashboard page For: <strong>{domain}</strong>
      </>
      <>Analytics and Notifications here</>
    </>
  );
}
