import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bus, 
  MapPin, 
  Calendar, 
  Users, 
  Phone, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Menu, 
  X,
  Instagram,
  Twitter,
  Facebook,
  ArrowLeft
} from 'lucide-react';

const WHATSAPP_NUMBER = "966574262136";
const PHONE_NUMBER = "0574262136";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Bus size={28} />
              </div>
              <span className="font-bold text-2xl text-primary-dark">موصل</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-600 hover:text-primary font-medium transition-colors">الرئيسية</a>
              <a href="#features" className="text-slate-600 hover:text-primary font-medium transition-colors">مميزاتنا</a>
              <a href="#gallery" className="text-slate-600 hover:text-primary font-medium transition-colors">أسطولنا</a>
              <a href="#testimonials" className="text-slate-600 hover:text-primary font-medium transition-colors">آراء العملاء</a>
              <a href="#booking" className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-lg shadow-secondary/30">
                احجز الآن
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-primary focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">الرئيسية</a>
              <a href="#features" onClick={toggleMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">مميزاتنا</a>
              <a href="#gallery" onClick={toggleMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">أسطولنا</a>
              <a href="#testimonials" onClick={toggleMenu} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">آراء العملاء</a>
              <a href="#booking" onClick={toggleMenu} className="block px-3 py-3 mt-2 text-center bg-primary text-white font-bold rounded-lg">احجز الآن</a>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
              alt="حافلة حديثة في الطريق" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-semibold text-sm mb-6">
                  الخيار الأول للنقل البري في المملكة
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  رحلات مريحة وآمنة من <span className="text-secondary">مكة المكرمة</span> إلى <span className="text-secondary">الرياض</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                  نقدم لك تجربة سفر استثنائية عبر أسطول من الحافلات الحديثة والمجهزة بكافة وسائل الراحة. احجز مقعدك الآن وانطلق في رحلة لا تُنسى.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#booking" className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-secondary/20">
                    <Calendar size={24} />
                    احجز رحلتك الآن
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                    <MessageCircle size={24} />
                    تواصل عبر واتساب
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">لماذا تختار موصل؟</h2>
              <p className="text-lg text-slate-600">نلتزم بتقديم أعلى معايير الجودة والراحة لضمان رحلة ممتعة وآمنة لجميع مسافرينا.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck size={40} />, title: "أمان وموثوقية", desc: "حافلاتنا تخضع لفحوصات دورية مع سائقين محترفين وذوي خبرة طويلة في الطرق السريعة." },
                { icon: <Clock size={40} />, title: "دقة في المواعيد", desc: "نحترم وقتك، لذلك نلتزم بجدول زمني دقيق للانطلاق والوصول في الوقت المحدد." },
                { icon: <CheckCircle2 size={40} />, title: "راحة تامة", desc: "مقاعد واسعة ومريحة، تكييف ممتاز، وخدمات ضيافة لتستمتع بكل لحظة في رحلتك." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">أسطولنا الحديث</h2>
                <p className="text-lg text-slate-600">تعرف على حافلاتنا المجهزة بأحدث وسائل الراحة والأمان لضمان رحلة استثنائية.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
                "/bus4.jpeg",
                "/bus5.jpeg",
                "/G11.jpeg",
                "/G2.jpeg",
                "/bus1.jpeg"
              ].map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-md"
                >
                  <img 
                    src={img} 
                    alt={`حافلة ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg">حافلة VIP مجهزة بالكامل</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-24 bg-primary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">احجز مقعدك الآن وانطلق معنا في رحلة مريحة</h2>
                <p className="text-primary-100 text-lg mb-8 opacity-90">
                  خطوات بسيطة تفصلك عن حجز رحلتك من مكة إلى الرياض. املأ النموذج وسنقوم بتأكيد حجزك فوراً عبر الواتساب.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">مسار الرحلة</h4>
                      <p className="text-primary-100">مكة المكرمة ➔ الرياض</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Clock className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">رحلات يومية</h4>
                      <p className="text-primary-100">صباحية ومسائية لتناسب جدولك</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">نموذج الحجز السريع</h3>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ماذا يقول عملاؤنا؟</h2>
              <p className="text-lg text-slate-600">نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة تليق بهم.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "أحمد عبدالله", role: "مسافر دائم", text: "رحلة مريحة جداً، الحافلات نظيفة والالتزام بالمواعيد ممتاز. أنصح بشدة بالتعامل معهم.", rating: 5 },
                { name: "سارة محمد", role: "عائلة", text: "سافرت مع عائلتي وكانت تجربة رائعة، السائق محترف والخدمات المقدمة داخل الحافلة ممتازة.", rating: 5 },
                { name: "خالد العتيبي", role: "رجل أعمال", text: "أفضل خيار للنقل البري بين مكة والرياض. سهولة في الحجز عبر الواتساب واستجابة سريعة.", rating: 5 }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="flex text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-slate-300" : ""} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <Bus size={24} />
                </div>
                <span className="font-bold text-2xl text-white">موصل</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                الشركة الرائدة في مجال النقل البري في المملكة العربية السعودية. نقدم خدمات نقل متميزة وآمنة بين مكة المكرمة والرياض بأسطول حديث ومجهز.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/966574262136?text=السلام%20عليكم،%20أريد%20الاستفسار" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571673840905" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="hover:text-secondary transition-colors">الرئيسية</a></li>
                <li><a href="#features" className="hover:text-secondary transition-colors">مميزاتنا</a></li>
                <li><a href="#gallery" className="hover:text-secondary transition-colors">أسطولنا</a></li>
                <li><a href="#testimonials" className="hover:text-secondary transition-colors">آراء العملاء</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">تواصل معنا</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-secondary" />
                  <span dir="ltr">{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-secondary" />
                  <span dir="ltr">+{WHATSAPP_NUMBER}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={20} className="text-secondary" />
                  <span>مكة المكرمة، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} موصل.</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
          aria-label="اتصل بنا"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

// Booking Form Component
function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    passengers: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `*طلب حجز جديد* 🚌
    
*الاسم:* ${formData.name}
*رقم الجوال:* ${formData.phone}
*تاريخ الرحلة:* ${formData.date}
*عدد الركاب:* ${formData.passengers}
*ملاحظات إضافية:* ${formData.notes || 'لا يوجد'}

أرغب بتأكيد الحجز من مكة إلى الرياض.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">الاسم الكريم</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
          placeholder="أدخل اسمك الكامل"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">رقم الجوال</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          required
          dir="ltr"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 text-right"
          placeholder="05X XXX XXXX"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">تاريخ الرحلة</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
          />
        </div>
        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-slate-700 mb-1">عدد الركاب</label>
          <select 
            id="passengers" 
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'راكب' : 'ركاب'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">ملاحظات إضافية (اختياري)</label>
        <textarea 
          id="notes" 
          name="notes" 
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 resize-none"
          placeholder="أي طلبات خاصة أو استفسارات..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20"
      >
        <MessageCircle size={24} />
        إرسال الحجز عبر واتساب
      </button>
    </form>
  );
}

