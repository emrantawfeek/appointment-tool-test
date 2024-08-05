import React from "react";

export default function CutomersPage({
  params,
}: {
  params: { domain: string };
}) {
  return (
    <div>
      <div>
        Cutomers Page For: <strong>{params.domain}</strong>
      </div>
      <div>view Cutomers here</div>
    </div>
  );
}
