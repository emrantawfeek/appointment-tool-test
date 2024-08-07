export default function CutomersPage({
  params,
}: {
  params: { domain: string };
}) {
  return (
    <>
      <>
        Cutomers Page For: <strong>{params.domain}</strong>
      </>
      <>view Cutomers here</>
    </>
  );
}
