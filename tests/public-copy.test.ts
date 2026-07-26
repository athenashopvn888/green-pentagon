import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const PUBLIC_COPY_FILES = [
  "app/components/SaleBanner.tsx",
  "app/careers/budtender/page.tsx",
  "app/careers/budtender/BudtenderApplicationForm.tsx",
  "app/staff-photo/StaffPhotoApp.tsx",
] as const;

test("public-facing GPC copy uses the full store name", async () => {
  for (const file of PUBLIC_COPY_FILES) {
    const source = await readFile(file, "utf8");
    const publicSource = file.endsWith("StaffPhotoApp.tsx")
      ? source.replace(
          /store:\s*\{\s*code:\s*"GPC01",/,
          'store: { code: "[internal-store-code]",',
        )
      : source;

    assert.doesNotMatch(
      publicSource,
      /GPC01/i,
      `${file} must not render or submit the internal store code`,
    );
  }
});

test("sale banner identifies Green Pentagon Cannabis by name", async () => {
  const source = await readFile("app/components/SaleBanner.tsx", "utf8");

  assert.match(
    source,
    /GREEN PENTAGON CANNABIS · ENDS \{GPC_SALE_END_LABEL\}/,
  );
});

test("application store code remains enforced server-side", async () => {
  const route = await readFile("app/api/careers/budtender/route.ts", "utf8");
  const form = await readFile(
    "app/careers/budtender/BudtenderApplicationForm.tsx",
    "utf8",
  );

  assert.match(route, /normalized\.StoreKey = "GPC01"/);
  assert.doesNotMatch(form, /name="StoreKey"/);
});
