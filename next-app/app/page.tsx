import { Shell } from "./_components/Shell";
import { ActivityFeed } from "../features/dashboard/ActivityFeed";
import { DashboardHero } from "../features/dashboard/DashboardHero";
import { StatsGrid } from "../features/dashboard/StatsGrid";

export default function Home() {
  return (
    <Shell>
      <DashboardHero />
      <StatsGrid />
      <ActivityFeed />
    </Shell>
  );
}
