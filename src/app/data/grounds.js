export default function Stadiums() {
  const stadiums = [
    { id: 1, name: "Fenerbahçe Stadı", city: "İstanbul", country: "Turkey" },
    { id: 2, name: "Zeytinburnu Stadı", city: "İstanbul", country: "Turkey" },
    { id: 3, name: "Eskişehir Stadı", city: "Eskişehir", country: "Turkey" },
    { id: 4, name: "Highbury Stadium", city: "London", country: "England" },
  ];
  return (
    <div>
      <section>
        <h2>Stadiums</h2>
        <ul className="stadium-list">
          {stadiums.map((stadium) => (
            <li key={stadium.id}>
              {stadium.name} - {stadium.city}, {stadium.country}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
