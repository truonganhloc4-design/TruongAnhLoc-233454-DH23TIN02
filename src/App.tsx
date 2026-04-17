/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  AppWindow, 
  Cpu, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  Send,
  Calendar,
  Layers,
  Search,
  BrainCircuit,
  QrCode,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

// --- Components ---

const BentoMotion = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`glass-card p-10 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Khởi đầu', href: '#hero' },
    { name: 'Năng lực', href: '#skills' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-blue-600 bg-white/50 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50"
        >
          LOC.PORTFOLIO
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 bg-white/30 backdrop-blur-lg border border-white/50 p-2 rounded-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-xl font-bold transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 glass-card flex items-center justify-center">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-card overflow-hidden z-50 shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 font-bold text-lg text-center py-4 bg-white/40 rounded-2xl block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const skills = [
    { name: 'Next.js', cat: 'Frontend' },
    { name: 'React', cat: 'Frontend' },
    { name: 'Tailwind CSS', cat: 'Frontend' },
    { name: 'Figma', cat: 'Frontend' },
    { name: 'C# WinForms', cat: 'Backend' },
    { name: 'SQL Server', cat: 'Backend' },
    { name: 'ADO.NET', cat: 'Backend' },
    { name: 'Kotlin', cat: 'App' },
    { name: 'Android Java', cat: 'App' },
    { name: 'Firebase', cat: 'App' },
    { name: 'GitHub Copilot', cat: 'AI' },
    { name: 'Genetic Algorithm', cat: 'AI' },
    { name: 'A* Search', cat: 'AI' },
  ];

  const softSkills = [
    "Tự học & Nghiên cứu", "Soạn thảo tài liệu KT", "AI & Copilot Usage", "Tư duy giải quyết vấn đề", "Làm việc nhóm"
  ];

  const exercises = [
    { 
      title: "Bài tập thực hành AI 1", 
      link: "https://drive.google.com/file/d/10Xna_9Lm1MvlJhUqK0lL15tEU4CAi4B-/view?usp=sharing",
      description: "Ứng dụng GenAI để tạo nội dung thương hiệu."
    },
    { 
      title: "Bài tập thực hành AI 2", 
      link: "https://drive.google.com/file/d/1D-frRO-ShxJdzoheV_t9BGuwxS4Jglqx/view?usp=sharing",
      description: "Xây dựng mô hình dự đoán thông minh."
    },
    { 
      title: "Bài tập thực hành AI 3", 
      link: "https://drive.google.com/file/d/1X_TmlDoIfsaFcgqrz5KwuK83LVFUzeM7/view?usp=sharing",
      description: "Tối ưu hóa Prompt Engineering."
    },
    { 
      title: "Bài tập thực hành AI 4", 
      link: "https://drive.google.com/file/d/1kRulhq7B-twzPyCfqQFNEVkzbzdiQSCg/view?usp=sharing",
      description: "Phân tích dữ liệu với GenAI."
    },
    { 
      title: "Bài tập thực hành AI 5", 
      link: "https://drive.google.com/file/d/1HpoWTFErlpj7VVhXzI4HnB3OaiaHvUrC/view?usp=sharing",
      description: "Sáng tạo nội dung số thông minh."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-200 selection:text-blue-900">
      <div className="mesh-bg"></div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6 sm:gap-8">
          
          {/* --- HERO BLOCK --- */}
          <BentoMotion className="md:col-span-4 md:row-span-2 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="relative group/avatar">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-10 group-hover/avatar:opacity-20 transition-opacity"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 transition-transform duration-500 group-hover/avatar:scale-105">
                <img 
                  src="https://raw.githubusercontent.com/truonganhloc4-design/TruongAnhloc.github.io/refs/heads/main/avatar.jpg" 
                  alt="Trương Ánh Lộc" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl shadow-lg z-20">
                <Sparkles className="text-blue-600" size={20} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="inline-block px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6"
              >
                Xin chào! Mình là
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight">
                Trương <span className="text-blue-600">Ánh Lộc</span>
              </h1>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-600 mb-8 flex items-center justify-center md:justify-start">
                <Code2 className="mr-4 text-blue-600" size={32} /> Lập trình viên (Developer)
              </h3>
              <p className="text-slate-600 leading-relaxed text-xl mb-10">
                Hiện là sinh viên năm 3 chuyên ngành Công nghệ thông tin tại Đại học Nam Cần Thơ (DNC). 
                Với nền tảng vững chắc về <span className="font-bold text-slate-800 underline decoration-blue-200 underline-offset-4">C# .NET, SQL Server</span>, và <span className="font-bold text-slate-800 underline decoration-blue-200 underline-offset-4">Kotlin</span>, 
                mình đam mê xây dựng các hệ thống quản lý tối ưu và ứng dụng di động hiện đại. 
                Sở hữu chứng chỉ <span className="bg-blue-50 px-3 py-1 rounded-xl border border-blue-100 font-bold">VSTEP B1</span>, tôi tự tin trong việc tiếp cận tài liệu kỹ thuật và luôn hướng tới mục tiêu trở thành một <span className="text-blue-600 font-black underline decoration-blue-200 decoration-4">Technical Lead</span> chuyên nghiệp.
              </p>
              <div className="flex justify-center md:justify-start">
                <a 
                  href="https://github.com/truonganhloc4-design/TruongAnhloc-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-14 py-5 bg-blue-600 text-white rounded-3xl font-black text-xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center w-full md:w-auto"
                >
                  Xem Dự Án <ChevronRight className="ml-3" size={24} />
                </a>
              </div>
            </div>
          </BentoMotion>

          {/* --- SKILLS PILLS --- */}
          <BentoMotion className="md:col-span-2 md:row-span-2" delay={0.3}>
            <h4 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
              <Cpu className="mr-4 text-blue-600" size={32} /> Kỹ năng & Công nghệ
            </h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill, i) => (
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  key={i} 
                  className={`px-5 py-3 rounded-2xl text-base font-bold border-2 transition-all ${
                    skill.cat === 'Frontend' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                    skill.cat === 'Backend' ? 'bg-purple-50 border-purple-100 text-purple-600' :
                    skill.cat === 'App' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                    'bg-orange-50 border-orange-100 text-orange-600'
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <p className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Tự học & Kỹ năng mềm</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((s, i) => (
                  <div key={i} className="flex items-center space-x-3 text-base font-bold text-slate-700 bg-white/40 p-4 rounded-3xl">
                    <div className="w-3 h-3 rounded-full bg-blue-400 shadow-sm shadow-blue-200"></div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoMotion>

          {/* --- FEATURED PROJECT (DỰ ÁN TIÊU BIỂU) --- */}
          <BentoMotion className="md:col-span-2 md:row-span-4 bg-white/80 border-blue-100/30 shadow-blue-900/5 flex flex-col justify-between" delay={0.4}>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-200">DỰ ÁN TIÊU BIỂU</div>
                <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                  <Database size={32} />
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-4xl font-black mb-2 leading-tight text-slate-900">QL PHÒNG HỌC NCT</h2>
                <p className="text-blue-600 font-bold">Hệ thống quản lý tối ưu & Bảo mật</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                   <p className="text-blue-600 font-bold text-sm uppercase mb-2 tracking-wide">Mục tiêu dự án:</p>
                   <p className="text-slate-600 text-lg leading-relaxed font-medium">
                     "Giải quyết bài toán sắp xếp lịch học phức tạp và quản lý thiết bị khoa CNTT tại Đại học Nam Cần Thơ."
                   </p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-black text-blue-500 uppercase tracking-widest px-2">Cấu trúc hệ thống & Bảo mật</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4 p-5 bg-blue-50/30 rounded-3xl border border-blue-100/50">
                      <div className="mt-1 bg-blue-600 rounded-full p-1 flex-shrink-0"><ChevronRight size={14} className="text-white" /></div>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-black text-slate-900">Cấu trúc CSDL:</span> Thiết kế tối ưu trên SSMS 20.2 quản lý chặt chẽ các thực thể.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 p-5 bg-emerald-50/30 rounded-3xl border border-emerald-100/50">
                      <div className="mt-1 bg-emerald-600 rounded-full p-1 flex-shrink-0"><ChevronRight size={14} className="text-white" /></div>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="font-black text-slate-900">Phân quyền:</span> Thiết lập RBAC nghiêm ngặt cho Staff và Admin.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-10 group-hover/image:opacity-20 transition-opacity"></div>
                  <img 
                    src="https://raw.githubusercontent.com/truonganhloc4-design/TruongAnhloc.github.io/refs/heads/main/anhgiaodien.png" 
                    alt="Giao diện quản lý phòng học" 
                    className="w-full aspect-video object-cover rounded-[2rem] border border-slate-200 shadow-xl relative z-10 transition-transform duration-500 group-hover/image:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-blue-600 border border-blue-100 shadow-sm">
                    Screenshot
                  </div>
                </div>

                <div className="space-y-3 px-2 pb-4">
                  <p className="text-sm font-black text-slate-800 uppercase tracking-tighter flex items-center italic">
                    <Sparkles size={16} className="mr-2 text-blue-500" /> TÍNH NĂNG NỔI BẬT:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-600 text-base leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                      Quản lý toàn diện danh mục: Dãy nhà, Phòng học, Thiết bị và hồ sơ Sinh viên.
                    </li>
                    <li className="flex items-center text-slate-600 text-base leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                      Giao diện thân thiện, hỗ trợ tìm kiếm nhanh và kết xuất báo cáo hiệu quả.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {["C#", "WinForms", ".NET", "SQL Server", "ADO.NET"].map(t => (
                  <span key={t} className="px-5 py-2.5 bg-white text-blue-600 rounded-2xl text-xs font-black border border-blue-100 shadow-sm uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </div>
            
            <a 
              href="https://github.com/truonganhloc4-design/TruongAnhloc-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 w-full py-7 bg-slate-900 text-white text-center rounded-[2rem] font-black text-xl hover:bg-black transition-all shadow-2xl shadow-slate-200 group flex items-center justify-center transform active:scale-95"
            >
              Xem Mã Nguồn GitHub <Github size={28} className="ml-4 group-hover:scale-110 transition-transform" />
            </a>
          </BentoMotion>

          {/* --- EXPERIENCE TIMELINE --- */}
          <BentoMotion className="md:col-span-2 md:row-span-1" delay={0.5}>
            <h4 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
              <GraduationCap className="mr-4 text-blue-600" size={32} /> Hành trình học tập
            </h4>
            <div className="space-y-8">
              <div className="flex gap-6 relative">
                <div className="w-px bg-slate-100 absolute left-4 top-10 bottom-0"></div>
                <div className="w-8 h-8 rounded-full bg-blue-50 border-4 border-white shadow-sm flex-shrink-0 relative z-10"></div>
                <div>
                  <h5 className="text-xl font-black text-slate-900">Sinh viên Công nghệ thông tin</h5>
                  <p className="text-lg text-blue-600 font-bold mt-1">Hiện tại tại Đại học Nam Cần Thơ (DNC)</p>
                </div>
              </div>
              <div className="flex gap-6 relative">
                <div className="w-8 h-8 rounded-full bg-sky-50 border-4 border-white shadow-sm flex-shrink-0 relative z-10"></div>
                <div>
                  <h5 className="text-xl font-black text-slate-900">Chứng chỉ VSTEP B1</h5>
                  <p className="text-lg text-sky-600 font-bold mt-1 leading-relaxed">Nền tảng ngoại ngữ vững chắc cho việc nghiên cứu tài liệu kỹ thuật chuyên sâu.</p>
                </div>
              </div>
            </div>
          </BentoMotion>

          {/* --- AI EXERCISES GRID --- */}
          <BentoMotion className="md:col-span-2 md:row-span-1" delay={0.6}>
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-black text-slate-900 flex items-center">
                <BrainCircuit className="mr-4 text-blue-600" size={28} /> Bài tập thực hành AI
              </h4>
              <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-xs font-black border border-blue-100">GenAI Lab</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {exercises.map((ex, i) => (
                <motion.a 
                  key={i}
                  href={ex.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
                  className={`p-4 rounded-2xl bg-white/50 border border-slate-100 transition-all cursor-pointer group/item flex flex-col justify-between ${
                    i < 3 ? 'w-[calc(33.333%-8px)]' : 'w-[calc(50%-6px)]'
                  } min-w-[120px]`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-sm font-black text-slate-800 group-hover/item:text-blue-600 line-clamp-1">{ex.title}</h5>
                    <LinkIcon size={14} className="text-slate-400 group-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">{ex.description}</p>
                  <div className="text-sm font-black text-blue-600 flex items-center">
                    Xem ngay <ChevronRight size={14} className="ml-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </BentoMotion>

          {/* --- LEADERSHIP BLOCK --- */}
          <BentoMotion className="md:col-span-2 md:row-span-1" delay={0.7}>
            <h4 className="text-2xl font-black mb-4 flex items-center text-slate-900">
              <Layers className="mr-4 text-blue-600" size={28} /> Quản lý & Vận hành
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Từng đảm nhận vị trí <span className="text-slate-900 font-bold">Supervisor (Giám sát)</span> tại GO! và Mega Market Cần Thơ. Kinh nghiệm quản lý vận hành, theo dõi KPI và điều phối công việc mô hình bán lẻ lớn – nền tảng cho năng lực lãnh đạo dự án kỹ thuật.
            </p>
          </BentoMotion>

          {/* --- CONTACT FORM --- */}
          <BentoMotion className="md:col-span-2 md:row-span-2" delay={0.8}>
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-3xl font-black text-slate-900 mb-4">Để lại lời nhắn</h4>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">Hợp tác cùng Lộc? Hãy gửi tin nhắn ngay nhé!</p>
              <form action="https://formspree.io/f/MÃ_CỦA_TÔI_SẼ_ĐIỀN_SAU" method="POST" className="space-y-4">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email của bạn" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-lg font-bold placeholder:text-slate-400" 
                />
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Nội dung thảo luận..." 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-lg font-bold resize-none placeholder:text-slate-400"
                ></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center shadow-lg shadow-blue-100">
                  Gửi lời nhắn <Send size={24} className="ml-3" />
                </button>
              </form>
            </div>
          </BentoMotion>

          {/* --- CREATIVE BLOCK --- */}
          <BentoMotion className="md:col-span-1 md:row-span-1 border-2 border-dashed border-blue-100 flex flex-col justify-center bg-blue-50/20" delay={0.75}>
            <h4 className="text-xl font-black text-slate-900 mb-3">Góc Sáng Tạo</h4>
            <p className="text-base text-slate-500 italic leading-relaxed">
              Nhiếp ảnh chân dung Canon 700D rèn luyện tư duy bố cục thẩm mỹ bổ trợ thiết kế UI/UX hiện đại.
            </p>
          </BentoMotion>

          {/* --- CONNECT BLOCK --- */}
          <BentoMotion className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center bg-white/95 p-8" delay={0.85}>
            <h4 className="text-xl font-black text-slate-900 mb-6 self-start">Kết nối Zalo</h4>
            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=truonganhloc" 
                alt="Zalo QR" 
                className="w-28 h-28 rounded-3xl shadow-md border-4 border-white relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full space-y-3 mb-2">
              <div className="flex items-center space-x-3 text-slate-700">
                <Mail size={16} className="text-blue-600" />
                <span className="text-xs font-black truncate">truonglocpi@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Phone size={16} className="text-sky-600" />
                <span className="text-xs font-black">0931 065 956</span>
              </div>
            </div>
          </BentoMotion>

        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 pb-12">
        <div className="glass-card p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold text-sm">© 2026 Trương Ánh Lộc - Portfolio cá nhân</p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Zalo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
