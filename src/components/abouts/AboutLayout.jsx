import { Outlet, useLocation } from "react-router-dom";
import BannerWithBreadcrumbs from "./BannerWithBreadcrumbs";
import AboutSidebar from "./AboutSidebar";

const AboutLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define breadcrumbs based on path
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const sidebarLinks = [
    { href: "/about/academic-advisory-board", label: "Academic Advisory Board" },
    { href: "/about/directors-message", label: "Message" },
    { href: "/about/vision-mission", label: "Vision & Mission" },
    { href: "/about/values", label: "Our Values" },
    { href: "/about/set-us-apart", label: "What Sets Us Apart" },
  ];

  // Determine title based on the current path
  const title = currentPath.includes("/values")
    ? "Our Values"
    : currentPath.includes("/set-us-apart")
    ? "What Sets Us Apart"
    : "Message";

  return (
    <div>
      {/* Banner with Breadcrumbs */}
      <BannerWithBreadcrumbs title={title} breadcrumbs={breadcrumbs} />
      <div className="mt-8">
        {/* <AboutSidebar sidebarLinks={sidebarLinks} /> */}
        {/* Content Area for Subpages */}
        <div className="bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
