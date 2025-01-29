import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Introducing Arcjet",
    description:
      "Today, we're excited to announce Arcjet, a new kind of application security infrastructure. Arcjet helps developers protect their applications from bots, fraud, and abuse with a single line of code.",
    date: "March 19, 2024",
    readingTime: "3 min read",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2000&auto=format&fit=crop",
    author: {
      name: "Adam Fitzgerald",
      role: "Co-founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
  },
];

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
        <header className="mb-20">
          <div className="flex items-center gap-x-3">
            <div className="h-px flex-auto bg-neutral-200" />
            <div className="text-sm leading-6 text-neutral-600">Blog</div>
            <div className="h-px flex-auto bg-neutral-200" />
          </div>
          <h1 className="mt-8 text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
            Writing on backend development, performance, and building modern
            applications.
          </h1>
        </header>

        <div className="space-y-24">
          {posts.map((post, index) => (
            <article key={index} className="relative group">
              <div className="absolute -inset-x-4 -inset-y-2 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
              <Link href={post.href}>
                <div className="relative z-10">
                  <div className="aspect-[2/1] overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={2000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-neutral-950">
                          {post.author.name}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {post.author.role}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-x-4">
                      <time className="text-sm leading-6 text-neutral-600">
                        {post.date}
                      </time>
                      <div className="text-sm leading-6 text-neutral-600">
                        {post.readingTime}
                      </div>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-neutral-950 group-hover:text-neutral-700">
                      <span className="absolute -inset-x-4 -inset-y-2 z-20 sm:-inset-x-6 sm:-inset-y-4" />
                      {post.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-x-2 text-sm font-medium text-neutral-950">
                      <span>Read article</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
