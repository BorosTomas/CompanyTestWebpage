function Stats() {
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '25+', label: 'Team Members' },
  ]

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
