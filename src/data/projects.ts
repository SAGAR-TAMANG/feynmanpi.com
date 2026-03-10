import type { Project } from "../types";

export const PROJECTS: Project[] = [
  // {
  //   id: "01",
  //   title: "VECTOR FIELD",
  //   tag: "SIMULATION",
  //   year: "2025",
  //   desc: "Real-time fluid dynamics visualiser built on WebGL. 60fps particle systems reacting to cursor input.",
  //   stack: ["WebGL", "GLSL", "TypeScript"],
  //   status: "LIVE",
  // },
  // {
  //   id: "02",
  //   title: "LOGBOOK",
  //   tag: "TOOL",
  //   year: "2025",
  //   desc: "Minimalist daily log CLI that syncs to plain-text markdown. No cloud, no account, no noise.",
  //   stack: ["Rust", "SQLite", "Terminal"],
  //   status: "LIVE",
  // },
  // {
  //   id: "03",
  //   title: "DIFFUSION LUT",
  //   tag: "AI / VISUAL",
  //   year: "2024",
  //   desc: "Fine-tuned diffusion model that generates film-grade colour grading LUTs from text prompts.",
  //   stack: ["Python", "PyTorch", "ONNX"],
  //   status: "WIP",
  // },
  // {
  //   id: "04",
  //   title: "MESH RADIO",
  //   tag: "HARDWARE",
  //   year: "2024",
  //   desc: "Off-grid LoRa mesh chat network. Encrypted messages hop between nodes with no internet.",
  //   stack: ["C++", "LoRa", "Raspberry Pi"],
  //   status: "LIVE",
  // },
  // {
  //   id: "05",
  //   title: "CODE LENS",
  //   tag: "DEV TOOL",
  //   year: "2024",
  //   desc: "VS Code extension that overlays O(n) complexity annotations inline as you type.",
  //   stack: ["TypeScript", "Tree-sitter", "VSCode API"],
  //   status: "LIVE",
  // },
  // {
  //   id: "06",
  //   title: "EIGEN FACE",
  //   tag: "ML RESEARCH",
  //   year: "2023",
  //   desc: "Interactive PCA face-space explorer. Drag sliders through eigenvectors in real time.",
  //   stack: ["NumPy", "React", "Canvas API"],
  //   status: "ARCHIVE",
  // },
];

export const statusColor: Record<string, string> = {
  LIVE: "#b4ff6f",
  WIP: "#ffe066",
  ARCHIVE: "#888",
};
