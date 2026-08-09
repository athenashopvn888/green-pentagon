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
assert(catalog.includes("Delivery text/SMS:") && catalog.includes("sms:"));
assert(chat.includes('STORE_ID = "GP"') && chat.includes('"NEW_CUSTOMER"') && chat.includes('"RETURNING_CUSTOMER"'));
assert(chat.includes("preparePhoto") && chat.includes("id-review") && chat.includes("Text delivery"));
const forbiddenPlaceholder = "__SOD_" + "DELIVERY_PHONE__";
assert(!combined.includes(forbiddenPlaceholder), "A private delivery-number placeholder remains");
const phoneValues = [...catalog.matchAll(/deliveryPhone:\s*"(\+1\d{10})"/g), ...chat.matchAll(/DELIVERY_PHONE = "(\+1\d{10})"/g)].map((match) => match[1]);
assert.equal(phoneValues.length, 2);
assert.equal(new Set(phoneValues).size, 1);
assert(page.includes("Cannabis Delivery Menu") && !page.includes("Coming Soon"));
assert(drawer.includes('role="dialog"') && drawer.includes('aria-modal="true"'));
assert(css.includes("grid-template-columns:repeat(2,minmax(0,1fr))") || css.includes("grid-template-columns: repeat(2, minmax(0, 1fr))"));
assert(navbar.includes("STORE MENU") && navbar.includes("DELIVERY MENU"));
assert(home.includes("STORE MENU") && home.includes("DELIVERY MENU"));
assert(footer.includes('<Link href="/delivery">Delivery Menu</Link>') && !footer.includes("Delivery (Coming Soon)"));

console.log(JSON.stringify({ storeId: "GP", podId: "POD03", products: 63, descriptions: 58, images: 63, root }, null, 2));
