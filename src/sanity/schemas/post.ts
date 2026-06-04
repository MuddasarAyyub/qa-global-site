export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } },
    { name: "category", title: "Category", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "author", title: "Author", type: "string" },
  ],
};
