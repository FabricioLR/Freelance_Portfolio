import { describe, expect, it } from "vitest";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

describe("Contact links", () => {
  it("points at FabricioLR's Instagram account", () => {
    expect(INSTAGRAM_HANDLE).toBe("fabriciolr.online");
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/fabriciolr.online/");
  });
});
