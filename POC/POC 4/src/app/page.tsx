// src/app/page.tsx
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostCard from './components/BlogPostCrad';
import { getSortedPostsData } from './lib/posts';

export default function Home() {
  // In the App Router, we fetch data directly in the component.
  // This component runs on the server by default.
  const allPostsData = getSortedPostsData();
  const featuredPost = allPostsData.find(p => p.featured) || allPostsData[0];
  const otherPosts = allPostsData.filter(p => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Featured Post Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Featured Article</h1>
          <p className="text-lg text-brand-text-light mb-8 text-center max-w-3xl mx-auto">
            Our latest and greatest article, handpicked for you. Dive into the most relevant topics in tech today.
          </p>
          {featuredPost && <BlogPostCard post={featuredPost} isFeatured={true} />}
        </section>

        {/* Latest Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
