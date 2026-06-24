export function TechnicalAuditCard() {
  return (
    <div className="project-card-features flex flex-col gap-4 px-4 py-4">
      <div>
        <p className="text-md font-semibold">Technical Audit</p>
        <p className="subHeading text-xs">{new Date().toLocaleDateString()}</p>
      </div>
      <div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Indexable Pages</span>
          <span>1,984</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Blocked Pages</span>
          <span>47</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Broken Links</span>
          <span>23</span>
        </div>
        <div className="project-item-info flex justify-between gap-4">
          <span>Redirect Chains</span>
          <span>8</span>
        </div>
      </div>
    </div>
  );
}
