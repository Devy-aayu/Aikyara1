import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CinematicBackdrop } from "@/components/CinematicBackdrop";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <CinematicBackdrop />
        <div className="pointer-aura" aria-hidden="true" />
        <div className="scroll-progress" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
