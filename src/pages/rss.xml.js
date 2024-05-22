import { AppConfig } from "@/utils/AppConfig";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const blog = await getCollection("blog");
  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: AppConfig.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdDate,
      description: post.data.summary,
      link: `/blog/${post.slug}/`,
    })),
  });
}
