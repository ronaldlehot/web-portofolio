import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: "HTML5", icon: "assets/icon/html.svg", level: 90 },
    { name: "CSS3", icon: "assets/icon/css.svg", level: 90 },
    { name: "JavaScript", icon: "assets/icon/javascript.svg", level: 85 },
    {
      name: "React",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      level: 80,
    },
    { name: "Laravel", icon: "assets/icon/Laravel.svg", level: 85 },
    { name: "PHP", icon: "assets/icon/php.svg", level: 85 },
    { name: "Bootstrap", icon: "assets/icon/bootstrap.svg", level: 85 },
    { name: "MySQL", icon: "assets/icon/mysql.svg", level: 80 },
    { name: "Figma", icon: "assets/icon/figma.svg", level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Tools & Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="glass-card p-6 rounded-xl text-center relative overflow-hidden">
                {/* Skill Icon */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon mx-auto mb-4"
                  />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-silver font-medium mb-3 relative z-10">
                  {skill.name}
                </h3>

                {/* Skill Level Bar */}
                <div className="relative z-10">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-xs text-silver/60">{skill.level}%</span>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold gradient-text mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-silver/70 leading-relaxed">
              As a passionate developer, I'm constantly exploring new
              technologies and improving my skills. Currently diving deeper into
              React ecosystem, TypeScript, and modern web development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
