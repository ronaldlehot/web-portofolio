import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id" | "zh";

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations object
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm Fransisco Ronaldo Lehot",
    "hero.name": "Frontend",
    "hero.title": "Development",
    "hero.description":
      "I'm from Kupang, Nusa Tenggara Timur and I am a Computer Science graduate from Nusa Cendana University, graduated Cum Laude with a GPA of 3.72. My passion lies in technology, and I continue to learn to stay ahead in this dynamic field.",
    "hero.cvButton": "Download CV",
    "hero.portfolioButton": "View My Work",
    "hero.getInTouch": "Get In Touch",
    "hero.scrollDown": "Scroll Down",
    "hero.chatbot.buttonText": "Need a Website? 🚀",
    "hero.chatbot.title": "Looking for Professional Web Development?",
    "hero.chatbot.description":
      "Contact ngobar.id for high-quality website development services!",
    "hero.chatbot.feature1": "✨ Modern & Responsive Design",
    "hero.chatbot.feature2": "⚡ Fast Loading Speed",
    "hero.chatbot.feature3": "📱 Mobile-First Approach",
    "hero.chatbot.feature4": "🔒 Secure & Reliable",
    "hero.chatbot.contactButton": "Contact Us Now",
    "hero.chatbot.closeButton": "Close",

    // Projects Section
    "projects.title": "Selected Projects",
    "projects.subtitle": "A showcase of my recent work and creative solutions",
    "projects.viewMore": "View More Projects",
    "projects.remaining": "remaining",

    // Skills Section
    "skills.title": "Tools & Skills",
    "skills.subtitle":
      "Technologies and tools I work with to bring ideas to life",
    "skills.learning.title": "Always Learning, Always Growing",
    "skills.learning.description":
      "As a passionate developer, I'm constantly exploring new technologies and improving my skills. Currently diving deeper into React ecosystem, TypeScript, and modern web development practices.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Let's discuss your next project or collaboration opportunity",
    "contact.description":
      "For hiring, business, or collaboration opportunities, feel free to reach out directly:",
    "contact.email.title": "Email Me",
    "contact.email.description": "Send me an email for detailed discussions",
    "contact.instagram.title": "Instagram DM",
    "contact.instagram.description": "Quick chat via Instagram message",
    "contact.social.title": "Connect with me on other platforms:",

    // Chatbot
    "chatbot.title": "🚀 Need a Website?",
    "chatbot.description":
      "Hi! I'm from ngobar.id - a web development business. Looking for a modern, professional website?",
    "chatbot.features.react": "✨ React & Modern Frameworks",
    "chatbot.features.responsive": "✨ Responsive Design",
    "chatbot.features.seo": "✨ Fast & SEO Optimized",
    "chatbot.button": "💬 Chat on Instagram",
  },

  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.projects": "Proyek",
    "nav.skills": "Keahlian",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.greeting": "Halo, Saya Fransisco Ronaldo Lehot",
    "hero.name": "Frontend",
    "hero.title": "Development",
    "hero.description":
      "Saya berasal dari Kupang, Nusa Tenggara Timur dan merupakan lulusan Ilmu Komputer dari Universitas Nusa Cendana dengan predikat Cum Laude dengan IPK 3.72. Passion saya terletak pada teknologi, dan saya terus belajar untuk tetap unggul di bidang yang dinamis ini.",
    "hero.cvButton": "Unduh CV",
    "hero.portfolioButton": "Lihat Karya Saya",
    "hero.getInTouch": "Hubungi Saya",
    "hero.scrollDown": "Scroll ke Bawah",
    "hero.chatbot.buttonText": "Butuh Website? 🚀",
    "hero.chatbot.title": "Mencari Pengembangan Web Profesional?",
    "hero.chatbot.description":
      "Hubungi ngobar.id untuk layanan pengembangan website berkualitas tinggi!",
    "hero.chatbot.feature1": "✨ Desain Modern & Responsif",
    "hero.chatbot.feature2": "⚡ Kecepatan Loading Tinggi",
    "hero.chatbot.feature3": "📱 Pendekatan Mobile-First",
    "hero.chatbot.feature4": "🔒 Aman & Terpercaya",
    "hero.chatbot.contactButton": "Hubungi Kami Sekarang",
    "hero.chatbot.closeButton": "Tutup",

    // Projects Section
    "projects.title": "Proyek Pilihan",
    "projects.subtitle": "Showcase karya terbaru dan solusi kreatif saya",
    "projects.viewMore": "Lihat Proyek Lainnya",
    "projects.remaining": "tersisa",

    // Skills Section
    "skills.title": "Alat & Keahlian",
    "skills.subtitle":
      "Teknologi dan alat yang saya gunakan untuk mewujudkan ide",
    "skills.learning.title": "Selalu Belajar, Selalu Berkembang",
    "skills.learning.description":
      "Sebagai developer yang bersemangat, saya terus mengeksplorasi teknologi baru dan meningkatkan kemampuan saya. Saat ini sedang mendalami ekosistem React, TypeScript, dan praktik pengembangan web modern.",

    // Contact Section
    "contact.title": "Hubungi Saya",
    "contact.subtitle":
      "Mari diskusikan proyek atau peluang kolaborasi selanjutnya",
    "contact.description":
      "Untuk perekrutan, bisnis, atau peluang kolaborasi, jangan ragu untuk menghubungi saya secara langsung:",
    "contact.email.title": "Email Saya",
    "contact.email.description": "Kirim email untuk diskusi detail",
    "contact.instagram.title": "Instagram DM",
    "contact.instagram.description": "Chat cepat via pesan Instagram",
    "contact.social.title": "Terhubung dengan saya di platform lain:",

    // Chatbot
    "chatbot.title": "🚀 Butuh Website?",
    "chatbot.description":
      "Halo! Saya dari ngobar.id - bisnis pengembangan web. Mencari website yang modern dan profesional?",
    "chatbot.features.react": "✨ React & Framework Modern",
    "chatbot.features.responsive": "✨ Desain Responsif",
    "chatbot.features.seo": "✨ Cepat & SEO Optimal",
    "chatbot.button": "💬 Chat di Instagram",
  },

  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.contact": "联系",

    // Hero Section
    "hero.greeting": "你好，我是 Fransisco Ronaldo Lehot",
    "hero.name": "前端",
    "hero.title": "开发",
    "hero.description":
      "我来自印度尼西亚东努沙登加拉省库邦，是努沙真达那大学计算机科学专业的毕业生，以 3.72 的 GPA 获得优等生荣誉。我对技术充满热情，并持续学习以在这个充满活力的领域中保持领先。",
    "hero.cvButton": "下载简历",
    "hero.portfolioButton": "查看我的作品",
    "hero.getInTouch": "联系我",
    "hero.scrollDown": "向下滚动",
    "hero.chatbot.buttonText": "需要网站？🚀",
    "hero.chatbot.title": "寻找专业的网页开发？",
    "hero.chatbot.description": "联系 ngobar.id 获得高质量的网站开发服务！",
    "hero.chatbot.feature1": "✨ 现代响应式设计",
    "hero.chatbot.feature2": "⚡ 快速加载速度",
    "hero.chatbot.feature3": "📱obile优先方法",
    "hero.chatbot.feature4": "🔒 安全可靠",
    "hero.chatbot.contactButton": "立即联系我们",
    "hero.chatbot.closeButton": "关闭",

    // Projects Section
    "projects.title": "精选项目",
    "projects.subtitle": "展示我最近的工作和创意解决方案",
    "projects.viewMore": "查看更多项目",
    "projects.remaining": "剩余",

    // Skills Section
    "skills.title": "工具与技能",
    "skills.subtitle": "我用来将想法变为现实的技术和工具",
    "skills.learning.title": "持续学习，不断成长",
    "skills.learning.description":
      "作为一名充满热情的开发者，我不断探索新技术并提升我的技能。目前正在深入学习 React 生态系统、TypeScript 和现代 Web 开发实践。",

    // Contact Section
    "contact.title": "联系我",
    "contact.subtitle": "让我们讨论您的下一个项目或合作机会",
    "contact.description": "如有招聘、业务或合作机会，请随时直接联系我：",
    "contact.email.title": "发邮件给我",
    "contact.email.description": "发送邮件进行详细讨论",
    "contact.instagram.title": "Instagram 私信",
    "contact.instagram.description": "通过 Instagram 消息快速聊天",
    "contact.social.title": "在其他平台上与我联系：",

    // Chatbot
    "chatbot.title": "🚀 需要网站吗？",
    "chatbot.description":
      "你好！我来自 ngobar.id - 一家网站开发公司。正在寻找现代化、专业的网站吗？",
    "chatbot.features.react": "✨ React 和现代框架",
    "chatbot.features.responsive": "✨ 响应式设计",
    "chatbot.features.seo": "✨ 快速且 SEO 优化",
    "chatbot.button": "💬 在 Instagram 上聊天",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "portfolio-language"
    ) as Language;
    if (savedLanguage && ["en", "id", "zh"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[currentLanguage][key as keyof (typeof translations)["en"]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
