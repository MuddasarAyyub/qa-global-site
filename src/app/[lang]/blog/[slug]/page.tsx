import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/config";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  body: any[];
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title, excerpt, category, publishedAt, author, body
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const prefix = `/${locale}`;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-gray-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Post not found</h1>
          <Link href={`${prefix}/blog`} className="text-primary-400 mt-4 inline-block">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 bg-gray-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`${prefix}/blog`}
          className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        {post.category && (
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full mb-4">
            {post.category.replace("-", " ")}
          </span>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
          {post.author && <span>By {post.author}</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          )}
        </div>

        {post.body && (
          <div className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary-400 prose-strong:text-white">
            <PortableText value={post.body} />
          </div>
        )}
      </div>
    </article>
  );
}
