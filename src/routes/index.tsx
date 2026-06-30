import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { readFile } from "node:fs/promises";

const getBusinessName = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const cfg = JSON.parse(await readFile("site.json", "utf8")) as {
      businessName?: string;
    };
    return cfg.businessName?.trim() ?? "";
  } catch {
    return "";
  }
});

export const Route = createFileRoute("/")({
  loader: () => getBusinessName(),
  component: Home,
});

function Home() {
  const businessName = Route.useLoaderData();
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
              D
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {businessName || "DevFlow"}
            </span>
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(99,102,241,0.08),transparent)] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(99,102,241,0.15),transparent)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              Custom software for startups &amp; SMEs
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              From idea to{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                production-ready
              </span>{" "}
              product
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              High-quality, scalable custom software development and technical consulting
              for startups and SMEs. We help non-technical founders turn ideas into
              products that ship.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-indigo-700"
              >
                See our services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-gray-200 pt-10 dark:border-gray-800 sm:grid-cols-3">
            {[
              { label: "Projects Delivered", value: "30+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "On-Time Delivery", value: "95%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-gray-100 bg-gray-50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              How we work
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Two engagement models built for startups and growing teams.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Project-Based */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl dark:bg-indigo-950">
                🚀
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Project-Based Development
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Fixed-fee or time-and-materials engagements for initial development.
                Perfect for MVPs, feature builds, and product launches with clear
                scope and deadlines.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Fixed price or T&amp;M billing",
                  "Clear milestones and deliverables",
                  "MVP to production launch",
                  "Dedicated project lead",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-0.5 text-indigo-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Retainers */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl dark:bg-purple-950">
                🔄
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                Retainers &amp; Ongoing Support
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Monthly retainers for maintenance, support, and continuous feature
                updates. Keep your product healthy and evolving without
                over-committing.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Monthly retainer billing",
                  "Priority support &amp; SLAs",
                  "Continuous feature delivery",
                  "Technical health monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-0.5 text-purple-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About / Target Audience */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Built for builders
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We work best with early-stage startups, non-technical founders, and
                SMEs who need more than a freelancer but aren't ready for a full
                in-house team.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Early-stage startups",
                    description:
                      "Turn your pitch deck into a working product. We handle the technical side so you can focus on fundraising and growth.",
                  },
                  {
                    title: "Non-technical founders",
                    description:
                      "No CTO? No problem. We act as your technical partner — from architecture decisions to production deployment.",
                  },
                  {
                    title: "SMEs scaling up",
                    description:
                      "Modernise your digital presence, launch new features, or rebuild legacy systems with a team that ships fast.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our KPIs</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We measure ourselves by the outcomes that matter to our clients.
              </p>
              <div className="mt-6 space-y-5">
                {[
                  {
                    metric: "Customer Satisfaction",
                    desc: "Client feedback and referral rate",
                    value: "98%",
                  },
                  {
                    metric: "Project Delivery",
                    desc: "On-time and on-budget completion rate",
                    value: "95%",
                  },
                  {
                    metric: "Recurring Revenue",
                    desc: "Percentage of revenue from monthly retainers",
                    value: "60%",
                  },
                ].map((kpi) => (
                  <div
                    key={kpi.metric}
                    className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {kpi.metric}
                      </span>
                      <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                        {kpi.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {kpi.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="border-t border-gray-100 bg-gradient-to-b from-white to-indigo-50 px-6 py-20 dark:border-gray-800 dark:from-gray-950 dark:to-indigo-950/30"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Ready to build?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Tell us about your project. We'll get back to you within one business
            day with a roadmap and estimate.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@devflowsolutions.com"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
            No commitment needed — just a conversation about what you're building.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
              D
            </div>
            {businessName || "DevFlow Solutions"} &copy; {new Date().getFullYear()}
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Built with{" "}
            <a
              href="https://cto.new"
              className="underline hover:text-gray-600 dark:hover:text-gray-400"
            >
              cto.new
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}