import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const menu = JSON.parse(await read("app/delivery/delivery-menu.json"));
const catalog = await read("app/delivery/DeliveryCatalog.tsx");
const chat = await read("app/delivery/IdVerificationChat.tsx");
const page = await read("app/delivery/page.tsx");
const content = await read("app/delivery/DeliveryContent.tsx");
const drawer = await read("app/delivery/ProductDetailsDrawer.tsx");
const css = await read("app/delivery/delivery-experience.css");
const home = await read("app/page.tsx");
const navbar = await read("app/components/Navbar.tsx");
const footer = await read("app/components/Footer.tsx");
const nextConfig = await read("next.config.ts");
const combined = [catalog, chat, page, content, drawer, css, home, navbar, footer, JSON.stringify(menu)].join("\n");

assert.deepEqual(menu.store, { id: "GP", code: "GP01", name: "Green Pentagon Cannabis", pod: "POD03" });
assert.equal(menu.products.length, 63);
assert.equal(menu.products.filter((product) => product.description).length, 58);
assert.equal(menu.products.filter((product) => product.images?.length).length, 63);
assert(menu.products.every((product) => product.publicProductId && product.tier && product.tier !== "Flower"));
assert.deepEqual([...new Set(menu.products.map((product) => product.tier))].sort(), ["BC Premium", "Budget", "CRAFTS", "Exotics", "SHREDS"].sort());
assert(!/"sku"|sourceProductId|sourceUrl|provenance|farmerslink/i.test(JSON.stringify(menu)));
for (const product of menu.products) {
  for (const image of product.images) await access(new URL(`../public${image}`, import.meta.url));
}

assert(catalog.includes("api/catalog?store=") && catalog.includes('id: "GP"'));
assert(catalog.includes("explicitLoyalty") && catalog.includes("eligible && regular28 ? regular28.price - 30"));
assert(catalog.includes("formatCurrency(each)") && catalog.includes("formatCurrency(total)"));
assert(!/Delivery text\/SMS:|href=["'{`]sms:|deliveryPhone/i.test(catalog));
assert(chat.includes('STORE_ID = "GP"') && chat.includes('"NEW_CUSTOMER"') && chat.includes('"RETURNING_CUSTOMER"'));
assert(chat.includes("smsConsent") && chat.includes("workflowVersion: \"READY_V1\"") && chat.includes("one READY delivery-link text") && chat.includes('required type="checkbox"'));
assert(chat.includes("preparePhoto") && chat.includes("id-review"));
assert.match(chat, /new URLSearchParams\(window\.location\.search\)\.get\("liveOrder"\) !== "1"/);
assert.match(chat, /window\.setTimeout\(\(\) => setOpen\(true\), 0\)/);
assert(!/href=["'{`]sms:|DELIVERY_PHONE|Reply YES|YES confirmation|Text delivery/i.test(chat));
const forbiddenPlaceholder = "__SOD_" + "DELIVERY_PHONE__";
assert(!combined.includes(forbiddenPlaceholder), "A private delivery-number placeholder remains");
assert(page.includes("Cannabis Delivery Menu") && !page.includes("Coming Soon"));
assert(drawer.includes('role="dialog"') && drawer.includes('aria-modal="true"'));
assert(css.includes("grid-template-columns:repeat(2,minmax(0,1fr))") || css.includes("grid-template-columns: repeat(2, minmax(0, 1fr))"));
assert(navbar.includes("STORE MENU") && navbar.includes("DELIVERY MENU"));
assert(home.includes("STORE MENU") && home.includes("DELIVERY MENU"));
assert(footer.includes('<Link href="/delivery">Delivery Menu</Link>') && !footer.includes("Delivery (Coming Soon)"));
assert(catalog.includes("unoptimized") && drawer.includes("unoptimized"));
assert(nextConfig.includes('hostname: "athena-cannabis-images.vercel.app"'));
assert(nextConfig.includes('pathname: "/products/delivery/v1/**"'));
assert(!nextConfig.includes("milestone-1-demo.vercel.app"));

console.log(JSON.stringify({ storeId: "GP", podId: "POD03", products: 63, descriptions: 58, images: 63, root }, null, 2));
