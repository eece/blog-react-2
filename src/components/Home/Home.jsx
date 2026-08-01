import { HeroSection } from '../HeroSection/HeroSection';
import { RecentBlogs } from '../RecentBlogs/RecentBlogs';
export function Home() {
  return (
    <div className="home">
      <HeroSection />
      <RecentBlogs />
    </div>
  );
}