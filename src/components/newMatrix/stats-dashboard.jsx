import { MetricCard } from "./metric-card";
import { PackageMetric } from "./package-metric";

export default function StatsDashboard() {
  return (
    <div className="mb-8p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard number="9000+" label="Placement" sublabel="Offers" />
          <MetricCard
            number="130+"
            label="Company Visited"
            sublabel="for Recruitment"
          />
          <MetricCard
            number="12LPA"
            label="Highest National"
            sublabel="Package Offered"
          />
          <MetricCard
            number="1.7CR"
            label="Highest International"
            sublabel="Package Offered"
          />
        </div>

        {/* Package Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 rounded-lg shadow-lg">
          <PackageMetric lpa="10.70" companies="10+" />
          <PackageMetric lpa="9.25" companies="20+" />
          <PackageMetric lpa="7.83" companies="50+" />
          <PackageMetric lpa="7" companies="162" />
          <PackageMetric
            lpa="5"
            companies="500+"
            className="col-span-2 lg:col-span-1 border-t lg:border-t-0 border-black/20"
          />
        </div>
      </div>
    </div>
  );
}
