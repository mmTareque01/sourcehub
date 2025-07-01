/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://opensourcehub.xyz",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Optional
  exclude: [
    "/dashboard*",
    "/login*",
    "/error*",
    "/Home.page",
    "/About.page",
    "/ContactUs.page",
    "/Projects.page",
    "/SubmitProjects.page",
    "/*.page", // if legacy routes use .page extension
  ],
};
