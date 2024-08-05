import React from "react";

export default function HomePage({ params }: { params: { domain: string } }) {
  return (
    <div>
      <div>
        Home page For: <strong>{params.domain}</strong>
      </div>
      <div>get an appointment here</div>
    </div>
  );
}
