"use server";

import { GetOrgByIdParams, GetOrgBySubdomainParams } from "@lib/shared.types";

import { OrgData } from "@constants/data";

export function orgExistsBySubdomain(subdomain: string): boolean {
  try {
    const org = OrgData.find((org) => org.subdomain === subdomain);
    return !!org; // Return true if org is found, false otherwise
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function getOrgById(params: GetOrgByIdParams) {
  try {
    const { orgId } = params;

    const org = OrgData.find((org) => org.orgId === orgId);

    if (!org) {
      throw new Error("Org not found");
    }

    return org;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function getOrgBySubdomain(params: GetOrgBySubdomainParams) {
  try {
    const { subdomain } = params;

    const org = OrgData.find((org) => org.subdomain === subdomain);

    if (!org) {
      throw new Error("Org not found");
    }

    return org;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
