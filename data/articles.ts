// Codes by mahdi tasha
// Importing part
import { Article } from "@/type/general";
import WelcomeMDX from "@/content/welcome.mdx";
import PodcastGrowthMDX from "@/content/podcastGrowth.mdx";
import PodcastTrendsMDX from "@/content/podcastTrends.mdx";
import InterviewPodcasterMDX from "@/content/interviewPodcaster.mdx";
import PodcastSoundQuality from "@/content/soundQuality.mdx";
import TopEpisodes from "@/content/topEpisodes.mdx";
import Monetization from "@/content/monetization.mdx";
import FutureOfPodcasting from "@/content/futureOfPodcast.mdx";

// Creating some articles (fake data) to use in app
const articles: Article[] = [
   {
      author: {
         name: "Mahdi Tasha",
      },
      content: WelcomeMDX,
      title: "Welcome",
      createdAt: new Date(2026, 4, 12).toISOString(),
      description:
         "Welcome to the podcast app, a place to discover and listen to your favorite podcasts.",
      id: "podcast-app-welcome",
   },
   {
      author: {
         name: "Sara Ahmadi",
      },
      content: PodcastGrowthMDX,
      title: "Succesfull Podcast",
      label: ["Ai-Generated"],
      createdAt: new Date(2026, 4, 10).toISOString(),
      description: "How to grow a successful podcast audience in 2026.",
      id: "podcast-growth-strategies",
   },
   {
      author: {
         name: "Ali Rezaei",
      },
      content: PodcastTrendsMDX,
      title: "Podcasting Trends",
      label: ["Ai-Generated"],
      createdAt: new Date(2026, 4, 8).toISOString(),
      description:
         "The latest trends in podcast technology and tools for creators.",
      id: "podcast-technology-trends",
   },
   {
      author: {
         name: "Lana Davoodi",
      },
      content: InterviewPodcasterMDX,
      createdAt: new Date(2026, 4, 6).toISOString(),
      title: "Interview with podcasters",
      label: ["Ai-Generated"],
      description:
         "Interview with top podcasters sharing their success stories.",
      id: "podcaster-interviews",
   },
   {
      author: {
         name: "Reza Kian",
      },
      content: PodcastSoundQuality,
      createdAt: new Date(2026, 4, 4).toISOString(),
      title: "Quality matters",
      label: ["Ai-Generated"],
      description: "The importance of sound quality in podcast production.",
      id: "sound-quality-in-podcasts",
   },
   {
      author: {
         name: "Neda Ghasemi",
      },
      content: TopEpisodes,
      createdAt: new Date(2026, 4, 2).toISOString(),
      title: "Best Of 2026",
      label: ["Ai-Generated"],
      description: "Top 10 podcast episodes to listen to this year.",
      id: "top-episodes-2026",
   },
   {
      author: {
         name: "Hassan Farhadi",
      },
      content: Monetization,
      createdAt: new Date(2026, 4, 1).toISOString(),
      title: "Monitization of your podcast",
      label: ["Ai-Generated"],
      description: "How to monetize your podcast effectively.",
      id: "monetization-tips",
   },
   {
      author: {
         name: "Mina Ebrahimi",
      },
      content: FutureOfPodcasting,
      createdAt: new Date(2026, 3, 30).toISOString(),
      title: "Future of podcasting",
      label: ["Ai-Generated"],
      description: "The future of podcasting: predictions and insights.",
      id: "future-of-podcasting",
   },
];

// Exporting the data as default
export default articles;
