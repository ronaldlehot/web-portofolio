import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowDown,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [showChatbot, setShowChatbot] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ronaldlehot/?hl=id",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fransisco-ronaldo-lehot-6b553a326/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/ronaldlehot", label: "GitHub" },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20"
      id="home"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Animated Circle Background */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-secondary/30 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-secondary/60 rounded-full -top-1 sm:-top-2 left-6 sm:left-8 lg:left-10"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Profile Photo */}
              <motion.div
                className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden mx-auto"
                style={
                  {
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  } as React.CSSProperties
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/web-portofolio/assets/images/bg.jpeg"
                  alt="Fransisco Ronaldo Lehot"
                  className="w-full h-full object-cover"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left lg:order-1"
            variants={itemVariants}
          >
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl text-silver/80 mb-3 sm:mb-4"
              variants={itemVariants}
            >
              {t("hero.greeting")}
            </motion.h2>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-kanit font-bold mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">{t("hero.name")}</span>
              <br />
              <span className="text-silver">{t("hero.title")}</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-silver/70 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={itemVariants}
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.portfolioButton")}
              </motion.button>
              <motion.button
                className="btn-glass w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.getInTouch")}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center text-silver hover:text-secondary transition-colors group"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Chatbot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!showChatbot ? (
          <motion.button
            onClick={() => setShowChatbot(true)}
            className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6 text-primary group-hover:animate-pulse" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark/95 backdrop-blur-sm border border-white/10 p-4 rounded-xl w-80 mb-4 relative shadow-2xl"
          >
            <button
              onClick={() => setShowChatbot(false)}
              className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-300 hover:text-white" />
            </button>

            <div className="mb-3">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/web-portofolio/assets/images/ngobars.jpeg"
                  alt="ngobar.id logo"
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <h3 className="font-semibold text-white">
                  {t("hero.chatbot.buttonText")}
                </h3>
              </div>
              <p className="text-gray-200 text-sm mb-3">
                {t("hero.chatbot.description")}
              </p>
              <p className="text-gray-300 text-xs mb-3">
                {t("hero.chatbot.feature1")}
                <br />
                {t("hero.chatbot.feature2")}
                <br />
                {t("hero.chatbot.feature3")}
                <br />
                {t("hero.chatbot.feature4")}
              </p>
              <motion.button
                onClick={() =>
                  window.open("https://instagram.com/ngobars.id", "_blank")
                }
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-2 px-4 rounded-lg font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.chatbot.contactButton")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="text-silver/60 cursor-pointer hover:text-secondary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown size={20} className="sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
