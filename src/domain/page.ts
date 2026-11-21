import { failure, success, type Result } from "./result";

export interface Page {
  readonly title: string;
  readonly body: string;
  readonly lastModified: Date;
}

export type PageError = "title-required";

export function createPage(title: string, now: Date): Result<Page, PageError> {
  const trimmedTitle = title.trim();
  if (trimmedTitle === "") return failure("title-required");
  return success({ title: trimmedTitle, body: "", lastModified: now });
}
