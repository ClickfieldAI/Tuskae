import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { BlogCard } from "@/components/shared/blog-card";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { blogs, getBlogBySlug } from "@/lib/data/blogs";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  const url = `${siteConfig.url}/blog/${blog.slug}`;
  const imageUrl = blog.image ? `${siteConfig.url}${blog.image}` : siteConfig.ogImage;
  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.excerpt,
      siteName: siteConfig.name,
      publishedTime: blog.publishedAt,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);
  const url = `${siteConfig.url}/blog/${blog.slug}`;
  const imageUrl = blog.image ? `${siteConfig.url}${blog.image}` : `${siteConfig.url}${siteConfig.ogImage}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: imageUrl,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.ogImage}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqJsonLd = blog.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-40 sm:pt-48">
        <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />
        <div className="container-narrow relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[var(--turquoise)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--turquoise)]">
            {blog.category}
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-medium text-white sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-5 text-sm text-white/60">{blog.readingTime}</p>
        </div>
      </section>

      <div className="container-narrow relative -mt-16 sm:-mt-20">
        <PlaceholderImage
          src={blog.image}
          label={blog.title}
          objectPosition="center 20%"
          className="aspect-[16/9] w-full rounded-[2rem] shadow-[0_20px_60px_-20px_rgba(35,48,59,0.35)]"
        />
      </div>

      <section className="py-16 sm:py-24">
        <div className="container-narrow space-y-6">
          {blog.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="pt-4 font-heading text-2xl text-[var(--ink)] sm:text-3xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-[var(--ink-muted)]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--turquoise-dark)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-[var(--ink-muted)]">
                {block.text}
              </p>
            );
          })}
        </div>

        {blog.faqs?.length ? (
          <div className="container-narrow mt-16 border-t border-[var(--border)] pt-12">
            <h2 className="font-heading text-2xl text-[var(--ink)] sm:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {blog.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-heading text-lg text-[var(--ink)]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-3xl text-[var(--ink)]">More from the Blog</h2>
            <Link href="/blog" className="hidden items-center gap-1.5 text-sm font-semibold text-[var(--turquoise-dark)] sm:flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b, i) => (
              <BlogCard key={b.slug} blog={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
