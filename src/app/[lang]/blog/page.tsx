import { client } from "@/sanity/client";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
}

async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, excerpt, category, publishedAt, author
      }`
    );
  } catch {
    return [];
  }
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const prefix = `/${locale}`;
  const posts = await getPosts();

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full mb-4">
            Blog & News
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights & Updates
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Latest news, testing insights, and industry updates from the Nulbug team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`${prefix}/blog/${post.slug.current}`}
                  className="group block p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all"
                >
                  {post.category && (
                    <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full mb-3">
                      {post.category.replace("-", " ")}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    {post.author && <span>{post.author}</span>}
                    {post.publishedAt && (
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
              <p className="text-gray-400">We&apos;re preparing great content. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
