import { Hero } from '@/features/hero/hero';
import { HowIWork } from '@/features/hero/how-i-work';
import { FeaturedProjects } from '@/features/projects/featured-projects';
import { PreferredStack } from '@/features/stack/preferred-stack';
import { RecentPosts } from '@/features/blog/recent-posts';
import { ContactSection } from '@/features/contact/contact-section';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedProjects />
      <PreferredStack />
      <HowIWork />
      <RecentPosts />
      <ContactSection />
    </main>
  );
}
