import { ParamsProps } from "@types";

export default async function HomePage({ params }: ParamsProps) {
  const { domain } = params;

  return (
    <div className="flex min-h-screen items-center justify-center capitalize">
      Home page For: <strong> {domain}</strong>
    </div>
  );
}
