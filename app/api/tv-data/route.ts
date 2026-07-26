import { NextResponse } from "next/server";
import { allFlowers, allItems } from "../../lib/products";
import { applyGpcSaleCampaignToFlowers } from "../../lib/gpcSaleCampaign";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "flowers";

  if (type === "items") {
    return NextResponse.json(allItems);
  }

  return NextResponse.json(applyGpcSaleCampaignToFlowers(allFlowers));
}
