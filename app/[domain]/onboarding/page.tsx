import React from "react";

export default function OnBoarding({ params }: { params: { domain: string } }) {
  return (
    <div>
      <div>
        OnBoarding page For: <strong>{params.domain}</strong>
      </div>
      <div>complete OnBoarding here</div>
    </div>
  );
}
