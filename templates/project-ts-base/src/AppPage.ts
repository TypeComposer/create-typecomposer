import {
	AnchorElement,
	App,
	BorderPanel,
	CodeElement,
	DivElement,
	H1Element,
	H3Element,
	HBox,
	ImageElement,
	ParagraphElement,
	PreElement,
	SpanElement,
	VBox,
  } from "typecomposer";
  import logo from "/typecomposer.svg";
  import typescriptLogo from "/typescript.svg";
  import { BuiltWithTypeComposer } from "./BuiltWithTypeComposer";
  
  
  const FONT_SANS =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
  
  const FONT_MONO =
	'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';
  
  const COLOR_TEXT = "#e8e4da";
  const COLOR_GREEN = "rgba(109,239,149,0.65)";
  const COLOR_GREEN_BG = "rgba(109,239,149,0.07)";
  const COLOR_GREEN_BORDER = "rgba(109,239,149,0.18)";
  const COLOR_MUTED = "rgba(232,228,218,0.22)";
  
  
  export class AppPage extends BorderPanel {
	constructor() {
	  super();
  
	  const badge = new BuiltWithTypeComposer();
	  Object.assign(badge.style, {
		position: "fixed",
		bottom: "20px",
		right: "20px",
		zIndex: "1000",
	  });
	  this.appendChild(badge);
  
	  const root = new VBox({
		style: {
		  width: "100dvw",
		  minHeight: "100dvh",
		  alignItems: "center",
		  color: COLOR_TEXT,
		  fontFamily: FONT_SANS,
		  padding: "0 28px 96px",
		  gap: "0",
		  overflowX: "hidden",
		},
	  });
  
	  // Helper: centred max-width column
	  const section = (cls: string, style: Record<string, string> = {}) => {
		const col = new VBox({
		  className: cls,
		  style: { width: "100%", maxWidth: "600px", alignItems: "center", ...style },
		});
		root.appendChild(col);
		return col;
	  };
  
	  const logoRow = section("f1").appendChild(
		new HBox({
		  style: {
			alignItems: "center",
			justifyContent: "center",
			gap: "18px",
			paddingTop: "80px",
			paddingBottom: "36px",
		  },
		}),
	  );
	  logoRow.append(new ImageElement({ src: logo, className: "logo-tc" }));
	  logoRow.append(
		new DivElement({
		  text: "+",
		  style: { fontFamily: FONT_SANS, fontSize: "1.75rem", color: "rgba(232,228,218,0.15)", lineHeight: "1" },
		}),
	  );
	  logoRow.append(new ImageElement({ src: typescriptLogo, className: "logo-ts" }));
  
	  const pill = section("f2", { paddingBottom: "20px" }).appendChild(
		new HBox({
		  style: {
			display: "inline-flex",
			alignItems: "center",
			gap: "7px",
			fontFamily: FONT_MONO,
			fontSize: "0.62rem",
			letterSpacing: "0.12em",
			textTransform: "uppercase",
			color: COLOR_GREEN,
			background: COLOR_GREEN_BG,
			border: `1px solid ${COLOR_GREEN_BORDER}`,
			padding: "4px 12px",
			borderRadius: "999px",
		  },
		}),
	  );
	  pill.append(
		new DivElement({
		  style: {
			width: "5px",
			height: "5px",
			borderRadius: "50%",
			background: "#6def95",
			boxShadow: "0 0 7px #6def95",
			flexShrink: "0",
		  },
		}),
	  );
	  pill.append(new SpanElement({ text: "TypeComposer + TypeScript · Ready" }));
  
	  const headSec = section("f2", { gap: "14px", paddingBottom: "44px", textAlign: "center" });
	  headSec.append(
		new H1Element({
		  text: "Welcome to TypeComposer",
		  style: {
			fontFamily: FONT_SANS,
			fontSize: "clamp(2rem, 7vw, 4.8rem)",
			lineHeight: "1",
			letterSpacing: "-0.03em",
			color: COLOR_TEXT,
			fontWeight: "700",
			textAlign: "center",
		  },
		}),
	  );
	  headSec.append(
		new ParagraphElement({
		  text: "A TypeScript-first framework for building composable, class-based web interfaces.",
		  style: {
			fontFamily: FONT_SANS,
			fontSize: "0.82rem",
			lineHeight: "1.75",
			color: "rgba(232,228,218,0.38)",
			maxWidth: "360px",
			textAlign: "center",
		  },
		}),
	  );
  
	  const cmdSec = section("f4", { alignItems: "flex-start", gap: "10px", paddingTop: "44px", paddingBottom: "44px" });
	  cmdSec.append(
		new DivElement({
		  text: "Next steps",
		  style: {
			fontSize: "0.6rem",
			letterSpacing: "0.18em",
			textTransform: "uppercase",
			color: COLOR_MUTED,
			marginBottom: "4px",
			alignSelf: "center",
		  },
		}),
	  );
  
	  const cmds: [string, string][] = [
		["build",   "npm run build"],
		["preview", "npm run preview"],
	  ];
  
	  for (const [label, cmd] of cmds) {
		const row = cmdSec.appendChild(
		  new HBox({ style: { gap: "14px", alignItems: "center", width: "100%" } }),
		);
		row.append(
		  new DivElement({
			text: label,
			style: {
			  fontFamily: FONT_SANS,
			  fontSize: "0.6rem",
			  letterSpacing: "0.12em",
			  textTransform: "uppercase",
			  color: COLOR_MUTED,
			  minWidth: "52px",
			  flexShrink: "0",
			  textAlign: "right",
			},
		  }),
		);
		const pre = row.appendChild(new PreElement({ style: { flex: "1" } }));
		pre.append(new CodeElement({ text: cmd, className: "snippet" }));
	  }
  
	  root.appendChild(
		new DivElement({ className: "hr f4", style: { maxWidth: "600px", width: "100%" } }),
	  );
  
	  const tileRow = section("f5", { paddingTop: "40px" }).appendChild(
		new HBox({ style: { gap: "10px", flexWrap: "wrap", width: "100%" } }),
	  );
  
	  const tiles = [
		{ label: "Website →", desc: "typecomposer.com",   href: "https://typecomposer.com/" },
		{ label: "Docs →",    desc: "Guides & API ref",   href: "https://typecomposer.com/#/docs/home" },
		{ label: "GitHub →",  desc: "Source & issues",    href: "https://github.com/typecomposer/typecomposer" },
	  ];
  
	  for (const { label, desc, href } of tiles) {
		const tile = tileRow.appendChild(new AnchorElement({ href, className: "link-tile" }));
		tile.append(
		  new H3Element({
			text: label,
			style: { fontFamily: FONT_SANS, fontSize: "0.8rem", fontWeight: "500", color: COLOR_TEXT },
		  }),
		);
		tile.append(
		  new ParagraphElement({
			text: desc,
			style: { fontFamily: FONT_SANS, fontSize: "0.7rem", color: "rgba(232,228,218,0.3)", lineHeight: "1.5" },
		  }),
		);
	  }
  
	  section("f6", { paddingTop: "44px" }).appendChild(
		new DivElement({
		  text: "Edit src/AppPage.ts and save to hot-reload",
		  style: {
			fontSize: "0.65rem",
			color: "rgba(232,228,218,0.14)",
			letterSpacing: "0.06em",
			textAlign: "center",
		  },
		}),
	  );
  
	  this.center = root;
	}
  }
  
  App.setPage(new AppPage());