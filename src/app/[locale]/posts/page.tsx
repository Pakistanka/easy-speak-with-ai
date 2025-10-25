'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Heart, MessageCircle, User } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

// Demo posts data
const demoPostsData = {
  en: [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      excerpt: 'Learn how to build modern web applications with Next.js 15 and the latest React features.',
      category: 'Technology',
      readTime: 5,
      views: 1250,
      comments: 12,
      author: 'John Doe',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop'
    },
    {
      id: '2', 
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for writing maintainable code in large applications.',
      category: 'Programming',
      readTime: 8,
      views: 890,
      comments: 7,
      author: 'Jane Smith',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Modern CSS Layout Techniques',
      excerpt: 'Explore CSS Grid, Flexbox, and Container Queries to create responsive layouts.',
      category: 'Design',
      readTime: 6,
      views: 650,
      comments: 15,
      author: 'Mike Johnson',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    }
  ],
  ru: [
    {
      id: '1',
      title: 'Начало работы с Next.js 15',
      excerpt: 'Изучите, как создавать современные веб-приложения с Next.js 15 и новейшими возможностями React.',
      category: 'Технологии',
      readTime: 5,
      views: 1250,
      comments: 12,
      author: 'Джон Доу',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Лучшие практики TypeScript',
      excerpt: 'Основные паттерны и практики TypeScript для написания поддерживаемого кода в крупных приложениях.',
      category: 'Программирование', 
      readTime: 8,
      views: 890,
      comments: 7,
      author: 'Джейн Смит',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Современные техники CSS-вёрстки',
      excerpt: 'Изучите CSS Grid, Flexbox и Container Queries для создания адаптивных макетов.',
      category: 'Дизайн',
      readTime: 6,
      views: 650,
      comments: 15,
      author: 'Майк Джонсон',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    }
  ]
};

export default function PostsPage() {
  const t = useTranslations('posts');
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Use current locale from next-intl context
  const currentLang = locale as keyof typeof demoPostsData;
  const posts = demoPostsData[currentLang] || demoPostsData.en;
  
  // Use translated category names
  const categories = [t('all'), t('technology'), t('programming'), t('design')];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8">
              {t('description')}
            </p>
            
            {/* Demo notice */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                🎨 Theme & Language Demo
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Try switching themes (sun/moon icon) and languages (globe icon) in the navbar to see the changes!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-sm font-medium text-[var(--muted-foreground)]">
            {t('categories')}:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(index === 0 ? 'all' : category.toLowerCase())}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  (index === 0 && selectedCategory === 'all') ||
                  selectedCategory === category.toLowerCase()
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                    : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card)] rounded-xl overflow-hidden border border-[var(--border)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[var(--primary)] text-[var(--primary-foreground)] px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{t('readTime', { minutes: post.readTime })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span>{t('views', { count: post.views })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={12} />
                      <span>{t('comments', { count: post.comments })}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors">
                    <Heart size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Demo Footer */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">
              ✨ Demo Features Showcase
            </h3>
            <div className="text-sm text-[var(--muted-foreground)] space-y-2">
              <p>🌐 <strong>Language Switcher:</strong> Click the globe icon to switch between English and Russian</p>
              <p>🎨 <strong>Theme Switcher:</strong> Click the sun/moon icon to toggle between light and dark themes</p>
              <p>📱 <strong>Responsive Design:</strong> Resize your browser to see mobile/desktop layouts</p>
              <p>🎭 <strong>Animations:</strong> Smooth transitions and hover effects throughout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}