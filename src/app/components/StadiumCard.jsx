export function StadiumCard({ stadium, children }) {
  const {
    name,
    yearOpened,
    isUEFAApproved,
    city,
    country,
    capacity = "Unknown",
  } = stadium;
  const approved = Boolean(stadium?.isUEFAApproved);
  const status = approved ? "✅" : "❌";
  return (
    <>
      <li className="card">
        <h1 className="card-title">
          <strong>{name}</strong>
        </h1>
        <p>
          <strong>Opened in:</strong> {yearOpened}
        </p>
        <p>
          <strong>Capacity:</strong> {capacity}
        </p>
        <p>
          <strong>UEFA Approved:</strong> {status}
        </p>
        <p className="card-sub">
          <strong>City:</strong> {city}, {country}
        </p>
        <p>{children}</p>
      </li>
    </>
  );
}
