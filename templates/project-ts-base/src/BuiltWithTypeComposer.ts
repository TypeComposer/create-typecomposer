import { DivElement, ImageElement, SpanElement } from "typecomposer";

type BuiltWithTypeComposerProps = {
  className?: string;
};

export class BuiltWithTypeComposer extends DivElement {
  constructor({ className }: BuiltWithTypeComposerProps = {}) {
    super({
      className: className ? `badge-tc ${className}` : "badge-tc",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 12px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        color: "#1f2937",
        fontWeight: "500",
        fontSize: "12px",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        border: "1px solid #e5e7eb",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        cursor: "pointer",
      },
    });

    this.addEventListener("click", () => window.open("https://typecomposer.com", "_blank"));

    this.append(new ImageElement({ src: "/typecomposer.svg", style: { width: "14px", height: "14px" } }));
    this.append(new SpanElement({ text: "Made with TypeComposer" }));
  }
}