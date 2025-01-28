import { Github, Twitter } from "lucide-react";
import Link from "next/link";

const navigation = {
  product: [
    { name: "Features", href: "#" },
    { name: "Security", href: "#" },
    { name: "Team", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Customer stories", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/arcjetio",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/arcjet",
      icon: Github,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-24 sm:mt-32" aria-labelledby="footer-heading">
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-neutral-200 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="text-sm font-medium">
                Ken Mwangi
              </Link>
              <p className="text-sm leading-6 text-neutral-600">
                Fast, secure, and customizable application security
                infrastructure.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-500 hover:text-neutral-600"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="size-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:ml-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Product
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="footer-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Support
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link className="footer-link" href={item.href}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Company
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="footer-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Legal
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="footer-link">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-neutral-200 pt-8 sm:mt-20 flex items-center justify-between">
            <p className="text-sm leading-5 text-neutral-500">
              &copy; {new Date().getFullYear()} Ken Mwangi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-500 hover:text-neutral-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="size-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
