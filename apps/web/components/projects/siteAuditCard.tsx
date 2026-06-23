export function SiteAuditCard() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 max-md:w-full">
      <div>
        <p className="text-md font-semibold">Site Audit</p>
        <p className="subHeading text-xs">{new Date().toLocaleDateString()}</p>
      </div>
      <div>
        <div className="project-item-info flex justify-between gap-4">
          <span>SEO Score</span>
          <span>85%</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Crawled Pages</span>
          <span>85</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Critical Issues</span>
          <span>12</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Warning Issues</span>
          <span>8</span>
        </div>
      </div>
    </div>
  );
}
