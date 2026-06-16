import { PlaceholderStamp } from "@/components/primitives";

// Temporary shell-preview page. The real homepage (hero + eight regions) is
// built in the pages phase and replaces this file.
export default function ShellPreview() {
  return (
    <section className="section shell-preview">
      <div className="container">
        <p className="eyebrow accent" style={{ marginBottom: 28 }}>
          Shared layout · Nav · Footer
        </p>
        <h1 className="h1" style={{ maxWidth: "18ch" }}>
          The shell is ready <PlaceholderStamp>PAGES NEXT</PlaceholderStamp>
        </h1>
        <p className="lede" style={{ marginTop: 36 }}>
          The sticky dropdown nav, the language switcher, and the dark footer
          are in place. Page bodies drop in next, one at a time.
        </p>
      </div>
    </section>
  );
}
