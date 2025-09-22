import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";
export const categoryType = defineType({
  name: "category",
  title: "category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (val) => val.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (val) => val.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (val) => val.required(),
    }),
    defineField({
      name: "availableItem",
      type: "number",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
      validation: (val) => val.required(),
    }),
    defineField({
      name: "range",
      type: "number",
      description: "Starting From",
    }),
    defineField({
      name: "feature",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
