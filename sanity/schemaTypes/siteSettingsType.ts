import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "about", title: "About" },
    { name: "contact", title: "Contact & social" },
  ],
  fields: [
    // ---- Hero ----
    defineField({
      name: "firstName",
      title: "First name",
      type: "string",
      group: "hero",
      initialValue: "Amit",
    }),
    defineField({
      name: "lastName",
      title: "Last name",
      type: "string",
      group: "hero",
      initialValue: "Pokharel",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "hero",
      description: "The one line under your name.",
      initialValue: "Anchor, Presenter, IT Professional & Data Analyst",
    }),
    defineField({
      name: "heroImage",
      title: "Hero portrait",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "cvUrl",
      title: "CV link",
      type: "url",
      group: "hero",
      description: "Link to your CV (upload it to Drive and paste the share link).",
    }),

    // ---- About ----
    defineField({
      name: "aboutHeading",
      title: "About heading",
      type: "string",
      group: "about",
      initialValue: "Passionate. Smart-working. Creative.",
    }),
    defineField({
      name: "aboutBody",
      title: "About text",
      type: "array",
      of: [{ type: "block" }],
      group: "about",
    }),
    defineField({
      name: "aboutImage",
      title: "About image",
      type: "image",
      group: "about",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of experience",
      type: "number",
      group: "about",
      description: "Shown in the stat card. Leave empty to hide it.",
    }),

    // ---- Contact ----
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "contact",
      initialValue: "Kathmandu, Nepal",
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      group: "contact",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "Facebook",
                  "Instagram",
                  "LinkedIn",
                  "YouTube",
                  "X",
                  "GitHub",
                  "Behance",
                ],
              },
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
