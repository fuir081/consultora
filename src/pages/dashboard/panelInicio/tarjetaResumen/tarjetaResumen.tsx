import styles from "./tarjetaResumen.module.css";

const cards = [
  {
    title: "Documentos",
    value: 248,
    icon: "📄",
  },
  {
    title: "Carpetas",
    value: 36,
    icon: "📁",
  },
  {
    title: "Versiones",
    value: 12,
    icon: "🔄",
  },
  {
    title: "Notificaciones",
    value: 5,
    icon: "🔔",
  },
];

export default function TarjetaResumen() {
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <article key={card.title} className={styles.card}>
          <div className={styles.icon}>{card.icon}</div>

          <div>
            <h3>{card.title}</h3>
            <span>{card.value}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
