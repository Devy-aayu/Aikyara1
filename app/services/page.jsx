export const metadata = { title: "Services" };

const services = [
  ["Product engineering", "Web platforms, desktop applications, APIs, and production-focused architecture."],
  ["Security review", "Practical code review, threat analysis, hardening plans, and safer deployment workflows."],
  ["AI workflow automation", "Human-reviewed assistants, operational automation, email triage, and internal tools."],
  ["Platform modernization", "Refactoring, UI/UX upgrades, performance work, deployment, and reliability improvements."],
];

export default function ServicesPage() {
  return (
    <section className="page shell" data-reveal>
      <span className="kicker">Aikyara services</span>
      <h1>Focused engineering for products that need to work.</h1>
      <p className="page-lead">
        Services are presented as a company capability—not a freelancer portfolio.
      </p>
      <div className="service-grid">
        {services.map(([title, body], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
