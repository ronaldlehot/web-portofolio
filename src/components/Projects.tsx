import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsPerPage = 6;

const projects = [
  {
    id: 1,
    title: "Sistem Keuangan Modern",
    description:
      "Aplikasi sistem keuangan berbasis web menggunakan Filament, Laravel untuk manajemen transaksi, laporan keuangan, dan dashboard interaktif.",
    image: "/web-portofolio/assets/images/1.png",
    tech: ["Laravel", "Filament", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Web Profile Gereja",
    description:
      " Aplikasi web profile gereja dengan fitur manajemen jadwal ibadah, pengumuman, dan donasi online.",
    image: "/web-portofolio/assets/images/2.png",
    tech: ["Php Native", "Boostrap 4", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Sistem Inventaris Gereja",
    description:
      "Sistem manajemen inventaris gereja untuk melacak aset, peralatan, dan persediaan gereja. Fitur mencakup pencatatan barang masuk/keluar, kategori inventaris, laporan stok, dan manajemen lokasi penyimpanan.",
    image: "/web-portofolio/assets/images/3.png",
    tech: ["PHP Native", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Sistem Pendukung Keputusan Nakes Terbaik",
    description:
      "Sistem pendukung keputusan untuk menentukan tenaga kesehatan terbaik menggunakan metode AHP (Analytical Hierarchy Process) dan SAW (Simple Additive Weighting) dengan interface yang user-friendly.",
    image: "/web-portofolio/assets/images/4.png",
    tech: ["PHP Native", "Boostrap 4", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Sistem Informasi Bantuan Dana Hibah dan Sosial",
    description:
      "Sistem informasi untuk mengelola dana bantuan hibah dan sosial dengan fitur verifikasi penerima, pencairan dana, laporan distribusi, dan monitoring penggunaan bantuan.",
    image: "/web-portofolio/assets/images/5.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Livewire"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "SPK Pemilihan Kredit Koperasi",
    description:
      "Sistem pendukung keputusan untuk pemilihan kredit koperasi dengan kriteria kelayakan dan analisis risiko untuk membantu pengambilan keputusan yang tepat dengan menggunakan metode Copras.",
    image: "/web-portofolio/assets/images/6.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "SPK Rekomendasi Tempat Wisata di Bajawa",
    description:
      "Sistem pendukung keputusan untuk memberikan rekomendasi tempat wisata terbaik di Bajawa berdasarkan kriteria seperti akses jalan, fasilitas, dan rating pengunjung dengan menggunakan metode Smart.",
    image: "/web-portofolio/assets/images/7.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "SPK Rekomendasi Sekolah",
    description:
      "Sistem pendukung keputusan untuk memberikan rekomendasi sekolah terbaik berdasarkan kriteria akreditasi, fasilitas, prestasi akademik, dan lokasi strategis dengan metode scoring yang komprehensif dengan menggunakan metode Smart dan Topsis.",
    image: "/web-portofolio/assets/images/8.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Sistem Pembayaran BPP",
    description:
      "Sistem pembayaran Biaya Pendidikan dan Pelatihan dengan fitur pencatatan transaksi, laporan keuangan, dan manajemen data mahasiswa.",
    image: "/web-portofolio/assets/images/9.png",
    tech: ["CodeIgniter 3", "Bootstrap", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Web Profile Sekolah",
    description:
      "Website profile sekolah dengan fitur informasi akademik, galeri kegiatan, berita sekolah, dan sistem manajemen konten untuk administrator.",
    image: "/web-portofolio/assets/images/10.png",
    tech: ["PHP Native", "Bootstrap", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Web Reservasi Rental Mobil",
    description:
      "Platform reservasi rental mobil lengkap dengan paket sewa, sistem pembayaran terintegrasi (Midtrans/Xendit), notifikasi email otomatis, dan WhatsApp gateway untuk konfirmasi booking dan status rental.",
    image: "/web-portofolio/assets/images/12.png",
    tech: [
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Payment Gateway",
      "WhatsApp API",
      "Email Service",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "SPK Pemilihan Guru Terbaik",
    description:
      "Sistem pendukung keputusan untuk menentukan guru terbaik berdasarkan kriteria kinerja, kualifikasi pendidikan, pengalaman mengajar, dan prestasi akademik menggunakan metode Electre.",
    image: "/web-portofolio/assets/images/13.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 14,
    title: "SPK Pemilihan Pelatih Metode VIKOR",
    description:
      "Sistem pendukung keputusan untuk menentukan pelatih terbaik menggunakan metode VIKOR (Vise Kriterijumska Optimizacija I Kompromisno Resenje) dengan kriteria pengalaman, prestasi, kualifikasi sertifikasi, dan kemampuan komunikasi.",
    image: "/web-portofolio/assets/images/14.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 15,
    title: "SPK Dana Bantuan Metode MOORA",
    description:
      "Sistem pendukung keputusan untuk menentukan penerima dana bantuan menggunakan metode MOORA (Multi-Objective Optimization by Ratio Analysis) dengan kriteria penghasilan, jumlah tanggungan, kondisi rumah, dan pekerjaan.",
    image: "/web-portofolio/assets/images/15.png",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    liveUrl: "https://spk-moora.ngobars.id",
    githubUrl: "#",
  },
];

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) =>
      Math.min(prev + projectsPerPage, projects.length)
    );
  };

  // Get currently visible projects
  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6" id="projects">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Selected Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"></div>
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3 sm:space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.liveUrl !== "#") {
                          e.preventDefault();
                          window.open(
                            project.liveUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.githubUrl !== "#") {
                          e.preventDefault();
                          window.open(
                            project.githubUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center text-white hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-silver group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="btn-glass px-8 py-4"
              onClick={loadMoreProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects ({projects.length - visibleProjects} remaining)
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
