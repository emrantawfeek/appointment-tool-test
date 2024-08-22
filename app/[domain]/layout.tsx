import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ParamsProps } from "@types";

import capitalizeFirstLetter from "@lib/utils";

import { orgExistsBySubdomain } from "@database/actions/org.action";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  // read route params
  const { domain } = params;

  return {
    title: capitalizeFirstLetter(domain) + " • Home",
  };
}

export default async function layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { domain: string };
}>) {
  const { domain } = params;
  const isValidSubdomain = await orgExistsBySubdomain(domain);

  if (!isValidSubdomain) {
    return notFound();
  }

  return <div>{children}</div>;
}
