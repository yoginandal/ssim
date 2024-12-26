import { Outlet, useLocation } from "react-router-dom";
import BannerWithBreadcrumbs from "./BannerWithBreadcrumbs";

const AboutLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define breadcrumbs based on path
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
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
      <div className="container mx-auto mt-8">
        {/* Content Area for Subpages */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
