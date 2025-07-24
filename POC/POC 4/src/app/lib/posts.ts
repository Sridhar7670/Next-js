// lib/posts.ts

// Define the type for a single blog post
export type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
};

// In a real application, this data would come from a headless CMS,
// a database, or markdown files.
const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Building Modern Web Apps with Next.js',
    excerpt: 'A deep dive into the powerful features of Next.js, including static site generation, server-side rendering, and API routes. Discover why it\'s a top choice for developers.',
    author: 'Alex Johnson',
    date: '2025-07-22',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400/1A202C/4FD1C5?text=Next.js',
    featured: true,
  },
  {
    id: 2,
    title: 'The Art of UI/UX Design',
    excerpt: 'Explore the principles of creating intuitive and beautiful user interfaces. We cover user research, wireframing, prototyping, and the psychology of design.',
    author: 'Samantha Lee',
    date: '2025-07-20',
    category: 'Design',
    imageUrl: 'https://placehold.co/600x400/2D3748/FFFFFF?text=UI/UX',
  },
  {
    id: 3,
    title: 'Mastering PostgreSQL for Scalable Apps',
    excerpt: 'Learn how to leverage the full power of PostgreSQL, from advanced queries and indexing to performance tuning and replication for high-availability systems.',
    author: 'Peter Chen',
    date: '2025-07-18',
    category: 'Databases',
    imageUrl: 'https://placehold.co/600x400/4A5568/E2E8F0?text=PostgreSQL',
  },
  {
    id: 4,
    title: 'A Guide to Effective Project Management',
    excerpt: 'Discover the methodologies and tools that can help you deliver projects on time and within budget. We compare Agile, Scrum, and Kanban frameworks.',
    author: 'Maria Garcia',
    date: '2025-07-15',
    category: 'Productivity',
    imageUrl: 'https://placehold.co/600x400/718096/FFFFFF?text=Productivity',
  },
  {
    id: 5,
    title: 'Introduction to Machine Learning with Python',
    excerpt: 'Step into the world of AI and machine learning. This guide provides a beginner-friendly introduction to core concepts using Python, Scikit-learn, and TensorFlow.',
    author: 'David Kim',
    date: '2025-07-12',
    category: 'AI',
    imageUrl: 'https://placehold.co/600x400/9F7AEA/FFFFFF?text=AI',
  },
];

export function getSortedPostsData(): Post[] {
  // Sort posts by date
  return mockPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
