import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from '../../utils/cn';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Format the email body
    const body = `Name: ${data.name}
Email: ${data.email}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}`;

    // Create the mailto link
    const mailtoLink = `mailto:mekonnenabraham1993@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;

    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Let's Work Together
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question about my research, need a freelance designer, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-light shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                    <a href="mailto:mekonnenabraham1993@gmail.com" className="text-lg font-bold text-white hover:text-secondary transition-colors">
                     mekonnenabraham1993@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Telegram</p>
                    <a href="https://t.me/Cheguvera29" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-secondary transition-colors">
                      @Cheguvera29
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                    <p className="text-lg font-bold text-white">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Mobile</p>
                   <p className="text-lg font-bold text-white"> +251918446669 / +251925350145</p>
                  </div>
              </div>
            </div>
            
            {/* Social Hub Preview */}
            {/* <div className="bg-gradient-to-br from-primary-dark to-primary border border-primary/30 rounded-3xl p-8 backdrop-blur-sm">
              <h4 className="text-lg font-serif font-bold mb-4 text-always-white">Connect Socially</h4>
              <div className="flex flex-wrap gap-4">
                {['LinkedIn', 'Instagram', 'GitHub', 'Behance', 'Twitter', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-bg-dark/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary-light mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-white">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className={cn(
                        "w-full bg-bg-dark/50 border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.name ? "border-red-500" : "border-white/10 focus:border-primary"
                      )}
                      placeholder="Abriham Dereje"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      className={cn(
                        "w-full bg-bg-dark/50 border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                        errors.email ? "border-red-500" : "border-white/10 focus:border-primary"
                      )}
                      placeholder="abriham@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className={cn(
                      "w-full bg-bg-dark/50 border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                      errors.subject ? "border-red-500" : "border-white/10 focus:border-primary"
                    )}
                    placeholder="Project Inquiry"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-gray-300">Budget (Optional for Design Projects)</label>
                  <select
                    id="budget"
                    className="w-full bg-bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                    {...register("budget")}
                  >
                    <option value="" className="bg-bg-dark text-gray-400">Select a budget range</option>
                    <option value="< $500" className="bg-bg-dark text-white">Less than $500</option>
                    <option value="$500 - $1000" className="bg-bg-dark text-white">$500 - $1,000</option>
                    <option value="$1000 - $5000" className="bg-bg-dark text-white">$1,000 - $5,000</option>
                    <option value="> $5000" className="bg-bg-dark text-white">More than $5,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(
                      "w-full bg-bg-dark/50 border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                      errors.message ? "border-red-500" : "border-white/10 focus:border-primary"
                    )}
                    placeholder="Tell me about your project..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-always-white font-bold hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
