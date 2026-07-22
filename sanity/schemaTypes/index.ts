import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { testimonialType } from "./testimonialType";
import { siteSettingsType } from "./siteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, projectType, testimonialType, siteSettingsType],
};
