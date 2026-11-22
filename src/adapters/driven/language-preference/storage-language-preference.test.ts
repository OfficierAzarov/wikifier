import { describe, expect, it } from "vitest";
import { createStorageLanguagePreference } from "./storage-language-preference";

function fakeStorage(initial: Record<string, string> = {}) {
  const entries = new Map(Object.entries(initial));
  return {
    entries,
    getItem: (key: string) => entries.get(key) ?? null,
    setItem: (key: string, value: string) => void entries.set(key, value),
  };
}

const brokenStorage = {
  getItem: (): never => {
    throw new Error("storage unavailable");
  },
  setItem: (): never => {
    throw new Error("storage full");
  },
};

describe("createStorageLanguagePreference", () => {
  it("has no choice when nothing is stored", () => {
    expect(createStorageLanguagePreference(fakeStorage()).read()).toBeUndefined();
  });

  it("reads back the locale it wrote", () => {
    const preference = createStorageLanguagePreference(fakeStorage());

    preference.write("en");

    expect(preference.read()).toBe("en");
  });

  it("writes under its own key", () => {
    const storage = fakeStorage();

    createStorageLanguagePreference(storage).write("fr");

    expect([...storage.entries]).toEqual([["wiki3.language", "fr"]]);
  });

  it("ignores a stored value that is not a supported locale", () => {
    const storage = fakeStorage({ "wiki3.language": "de" });

    expect(createStorageLanguagePreference(storage).read()).toBeUndefined();
  });

  it("has no choice when the storage cannot be read", () => {
    expect(createStorageLanguagePreference(brokenStorage).read()).toBeUndefined();
  });

  it("does not fail when the storage cannot be written", () => {
    expect(() => {
      createStorageLanguagePreference(brokenStorage).write("en");
    }).not.toThrow();
  });
});
