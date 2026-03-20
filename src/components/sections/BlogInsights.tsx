import { motion } from 'motion/react';
import { Clock, ArrowRight, Bookmark } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: "The Impact of Microfinance on Rural Agriculture in Ethiopia",
    category: "Economics",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/microfinance/600/400",
    excerpt: "An in-depth analysis of how micro-loans are transforming small-scale farming practices and increasing crop yields in rural communities."
  },
  {
    id: 2,
    title: "Designing Data: 5 Principles for Effective Infographics",
    category: "Design",
    date: "April 22, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/datadesign/600/400",
    excerpt: "Learn how to transform complex statistical data into visually appealing and easily digestible infographics that tell a compelling story."
  },
  {
    id: 3,
    title: "Market Volatility and Crop Pricing Strategies",
    category: "Research",
    date: "March 10, 2024",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/market/600/400",
    excerpt: "A comprehensive review of recent market trends and how farmers can adopt pricing strategies to mitigate risks associated with volatility."
  }
];

export default function BlogInsights() {
  return (
    <section id="research" className="py-24 relative bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest text-secondary uppercase mb-4 block"
            >
              Insights & Articles
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold"
            >
              Research & Blog
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
            />
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#all-articles"
            className="group flex items-center gap-2 text-primary-light hover:text-secondary font-medium transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-wider">
                  {post.category}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-dark/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-colors border border-white/10">
                  <Bookmark size={14} />
                </button>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
                  <a href={`#post-${post.id}`} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <a href={`#post-${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors mt-auto group/link">
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
