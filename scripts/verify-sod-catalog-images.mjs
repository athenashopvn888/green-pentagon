import assert from "node:assert/strict";

const [storeId, storefrontBaseUrl] = process.argv.slice(2);
assert(/^[A-Z0-9]{2,4}$/.test(storeId || ""), "Pass the SOD store ID");
assert(/^https:\/\//.test(storefrontBaseUrl || ""), "Pass the production storefront base URL");

const catalogResponse = await fetch(`https://milestone-1-demo.vercel.app/api/catalog?store=${storeId}`);
assert.equal(catalogResponse.status, 200, "SOD catalog must return 200");
const catalog = await catalogResponse.json();
assert.equal(catalog.products?.length, 63, "SOD catalog must return 63 products");

const imageUrls = catalog.products.flatMap((product) => product.images || []);
assert.equal(imageUrls.length, 63, "SOD catalog must return one image per product");
assert(imageUrls.every((url) => {
  const parsed = new URL(url);
  return parsed.protocol === "https:" && parsed.hostname === "milestone-1-demo.vercel.app" && parsed.pathname === "/api/catalog-image";
}), "Every dynamic product image must use the approved SOD image route");

const representativeIndexes = [...new Set([0, Math.floor(imageUrls.length / 2), imageUrls.length - 1])];
for (const index of representativeIndexes) {
  const imageUrl = imageUrls[index];
  const direct = await fetch(imageUrl);
  assert.equal(direct.status, 200, `Representative SOD image ${index} must return 200`);
  assert.match(direct.headers.get("content-type") || "", /^image\//, `Representative SOD image ${index} must be an image`);

  const optimizerUrl = new URL("/_next/image", storefrontBaseUrl);
  optimizerUrl.searchParams.set("url", imageUrl);
  optimizerUrl.searchParams.set("w", "640");
  optimizerUrl.searchParams.set("q", "75");
  const optimized = await fetch(optimizerUrl);
  assert.equal(optimized.status, 200, `Storefront optimizer must load representative SOD image ${index}`);
  assert.match(optimized.headers.get("content-type") || "", /^image\//, `Optimized response ${index} must be an image`);
}

console.log(JSON.stringify({ storeId, catalogProducts: catalog.products.length, catalogImages: imageUrls.length, optimizedRepresentatives: representativeIndexes.length }));
