export type VisualAssetCategory =
  | "hero"
  | "agent"
  | "medical"
  | "lookbook"
  | "paper"
  | "doodle"
  | "decoration";

export type AnimationPreset =
  | "float"
  | "drift"
  | "parallax"
  | "reveal"
  | "rotate"
  | "none";

export interface VisualAsset {
  id: string;
  src: string;
  width: number;
  height: number;
  altZh: string;
  altEn: string;
  category: VisualAssetCategory;
  transparent: boolean;
  animationPreset: AnimationPreset;
}

export const visualAssets = {
  heroStudentEditorial: {
    id: "hero-student-editorial",
    src: "/images/collage/hero-student-editorial.webp",
    width: 1280,
    height: 720,
    altZh: "人工智能学生、笔记本电脑与研究图表组成的编辑拼贴",
    altEn: "Editorial collage of an AI student, laptop, and research diagrams",
    category: "hero",
    transparent: false,
    animationPreset: "reveal",
  },
  campusAgentEditorial: {
    id: "campus-agent-editorial",
    src: "/images/collage/campus-agent-editorial.webp",
    width: 1280,
    height: 960,
    altZh: "校园智能助手在电脑和手机上的产品界面拼贴",
    altEn: "Campus AI assistant interface collage across laptop and phone",
    category: "agent",
    transparent: false,
    animationPreset: "reveal",
  },
  lookbookEditorial: {
    id: "lookbook-editorial",
    src: "/images/collage/lookbook-editorial.webp",
    width: 1280,
    height: 960,
    altZh: "学习、摄影、书籍、咖啡与校园生活剪贴报",
    altEn: "Scrapbook of study, photography, books, coffee, and campus life",
    category: "lookbook",
    transparent: false,
    animationPreset: "reveal",
  },
  heroStudentCutout: {
    id: "hero-student-cutout",
    src: "/images/collage/hero-student-cutout.webp",
    width: 1280,
    height: 853,
    altZh: "人工智能学生与研究元素透明拼贴",
    altEn: "Transparent collage of an AI student and research elements",
    category: "hero",
    transparent: true,
    animationPreset: "parallax",
  },
  lookbookCutout: {
    id: "lookbook-cutout",
    src: "/images/collage/lookbook-cutout.webp",
    width: 1280,
    height: 853,
    altZh: "学习、相机、书本和咖啡组成的生活拼贴",
    altEn: "Life collage with study, camera, books, and coffee",
    category: "lookbook",
    transparent: true,
    animationPreset: "reveal",
  },
  campusAgentCutout: {
    id: "campus-agent-cutout",
    src: "/images/collage/campus-agent-cutout.webp",
    width: 1280,
    height: 853,
    altZh: "电脑、手机、任务卡片与工具图标组成的校园智能体拼贴",
    altEn: "Campus agent collage with laptop, phone, task cards, and tools",
    category: "agent",
    transparent: true,
    animationPreset: "parallax",
  },
  computerContactCutout: {
    id: "computer-contact-cutout",
    src: "/images/collage/computer-contact-cutout.webp",
    width: 1280,
    height: 853,
    altZh: "笔记本电脑、邮件、日历与绿植组成的联系主题拼贴",
    altEn: "Contact-themed collage with a laptop, email, calendar, and plant",
    category: "agent",
    transparent: true,
    animationPreset: "reveal",
  },
  medicalMriCutout: {
    id: "medical-mri-cutout",
    src: "/images/collage/medical-mri-cutout.webp",
    width: 1280,
    height: 853,
    altZh: "脑部 MRI、医学切片与植物元素组成的研究拼贴",
    altEn: "Research collage of brain MRI, medical scans, and botanical elements",
    category: "medical",
    transparent: true,
    animationPreset: "reveal",
  },
  paperElements: {
    id: "paper-elements",
    src: "/images/collage/paper-elements.webp",
    width: 1280,
    height: 853,
    altZh: "",
    altEn: "",
    category: "paper",
    transparent: true,
    animationPreset: "drift",
  },
  doodleElements: {
    id: "doodle-elements",
    src: "/images/collage/doodle-elements.webp",
    width: 1280,
    height: 853,
    altZh: "",
    altEn: "",
    category: "doodle",
    transparent: true,
    animationPreset: "rotate",
  },
} as const satisfies Record<string, VisualAsset>;

export type VisualAssetKey = keyof typeof visualAssets;

export const projectVisuals: Partial<Record<string, VisualAssetKey>> = {
  "campus-agent": "campusAgentCutout",
  "medical-imaging": "medicalMriCutout",
};

export const projectDetailVisuals: Partial<Record<string, VisualAssetKey>> = {
  "campus-agent": "campusAgentEditorial",
  "medical-imaging": "medicalMriCutout",
};
