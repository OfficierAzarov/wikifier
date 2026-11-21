import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { createPage } from "./page";

const now = new Date("2026-11-21T16:43:00Z");

describe("createPage", () => {
  it("creates a page with the given title, an empty body and the creation time", () => {
    expect(createPage("Ada Lovelace", now)).toEqual({
      ok: true,
      value: { title: "Ada Lovelace", body: "", lastModified: now },
    });
  });

  it("removes the whitespace around the title", () => {
    expect(createPage("  Ada Lovelace \n", now)).toEqual({
      ok: true,
      value: { title: "Ada Lovelace", body: "", lastModified: now },
    });
  });

  it("refuses any title made only of whitespace, including an empty one", () => {
    const whitespaceOnly = fc.string({ unit: fc.constantFrom(" ", "\t", "\n", " ", " ") });

    fc.assert(
      fc.property(whitespaceOnly, (title) => {
        expect(createPage(title, now)).toEqual({ ok: false, error: "title-required" });
      }),
    );
  });
});
