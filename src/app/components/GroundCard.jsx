export function GroundCard({ ground }) {
  const approved = Boolean(ground?.isUEFAApproved);
  const status = approved ? "✅" : "❌";

  return (
    <>
      <li className="card">
        <h1 className="card-title">
          <strong>{ground.name}</strong>
        </h1>
        <p>Opened in: {ground.yearOpened}</p>
        <p>{status}</p>
        <p className="card-sub">
          {ground.city}, {ground.country}
        </p>
      </li>
    </>
  );
}
