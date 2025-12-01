import { NextResponse } from 'next/server';

// Mock data for demonstration
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn how to build modern web applications with Next.js 15',
    content: 'Next.js 15 introduces many exciting features...',
    coverImage:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800',
    category: 'Technology',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: 5,
    viewCount: 1250,
    commentCount: 12,
    authorId: 'author1',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    excerpt: 'Essential TypeScript patterns for better code quality',
    content: 'TypeScript provides excellent type safety...',
    coverImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    category: 'Programming',
    tags: ['TypeScript', 'Best Practices', 'Development'],
    readTime: 8,
    viewCount: 890,
    commentCount: 7,
    authorId: 'author2',
    author: {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b332c83c?w=100',
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const category = searchParams.get('category') || undefined;
    const sortBy = searchParams.get('sortBy') || 'newest';

    let filteredPosts = [...mockPosts];

    // Filter by query
    if (query) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    // Sort posts
    filteredPosts.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case 'oldest':
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case 'popular':
          return b.viewCount - a.viewCount;
        default:
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }
    });

    return NextResponse.json(filteredPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
