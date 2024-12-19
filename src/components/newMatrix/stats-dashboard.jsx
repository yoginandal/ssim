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
            number="900+"
            label="Company Visited"
            sublabel="for Recruitment"
          />
          <MetricCard
            number="54.75LPA"
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
        <div className="grid grid-cols-2 lg:grid-cols-5 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-200 rounded-lg shadow-lg">
          <PackageMetric lpa="20" companies="50+" />
          <PackageMetric lpa="15" companies="60+" />
          <PackageMetric lpa="10" companies="200+" />
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
