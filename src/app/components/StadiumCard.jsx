export function StadiumCard({ stadium, children }) {
  const {
    name,
    yearOpened,
    isUEFAApproved,
    city,
    country,
    capacity,
    image,
    isClosed,
  } = stadium;
  const status = isUEFAApproved ? "✅" : "❌";

  const numericCapacity = typeof capacity === "number" ? capacity : "undefined";
  const isCapacityLarge = (numericCapacity ?? 0) >= 40000;

  return (
    <>
      <li className="card">
        {image && <img src={image} width={400} alt={`${name} stadium`} />}
        <h1 className="card-title">
          <strong>{name}</strong>
        </h1>
        <p>
          <strong>Opened in:</strong> {yearOpened}
        </p>
        <p>
          <strong>Capacity:</strong>
          {numericCapacity != null ? (
            <>
              {isCapacityLarge ? "Large venue" : "Cozy"}, {numericCapacity}
            </>
          ) : (
            "Unknown"
          )}
        </p>
        <p>
          <strong>UEFA Approved:</strong> {status}
        </p>
        <p className="card-sub">
          <strong>City:</strong> {city}, {country}
        </p>
        <p>{children}</p>
        <p style={isClosed ? undefined : { display: "none" }}>Closed</p>
      </li>
    </>
  );
}
