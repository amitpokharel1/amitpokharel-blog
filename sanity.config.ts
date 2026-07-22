"use client";

// Configuration for the embedded Sanity Studio (your writing dashboard).
// It lives at /studio on your own site.

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "amitpokharel-site",
  title: "Amit Pokharel",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Site settings is a single document, not a list
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site settings"),
              ),
            S.divider(),
            S.documentTypeListItem("post").title("Blog posts"),
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
