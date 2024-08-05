export default function page({ params }: { params: { domain: string } }) {
  return (
    <div>
      <div>
        Dashboard page For: <strong>{params.domain}</strong>
      </div>
      <div>Analytics and Notifications here</div>
    </div>
  );
}
