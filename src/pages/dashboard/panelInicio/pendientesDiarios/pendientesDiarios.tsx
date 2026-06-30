import styles from "./pendientesDiarios.module.css";
import archivo from "@/assets/img/adjunto-archivo.png";
import reloj from "@/assets/img/reloj.png";
import check from "@/assets/img/check.png";
import calendario from "@/assets/img/calendario.png";
import folder from "@/assets/img/folder.png";

import documentoN from "@/assets/img/expediente.png";
import documentoA from "@/assets/img/expediente-azul.png";

const tareas = [
  {
    titulo: "Revisar Manual de Calidad",
    estado: "pendiente",
    img: documentoN,
    fecha: "Hoy, 09:00",
    carpeta: "Gestión de calidad",
  },
  {
    titulo: "Actualizar Procedimiento PR-001",
    estado: "proceso",
    img: documentoA,
    fecha: "Hoy, 15:45",
    carpeta: "Procedimientos",
  },
  {
    titulo: "Validar Registro de Capacitación",
    estado: "completado",
    img: check,
    fecha: "Completado, 15:30",
    carpeta: "Registros",
  },
  {
    titulo: "Aprobar Documento Auditoría",
    estado: "pendiente",
    img: documentoN,
    fecha: "Hoy, 17:00",
    carpeta: "Auditorias",
  },
];

const validar = (estado: string) => {
  if (estado === "pendiente") {
    return "Alta prioridad";
  } else if (estado === "proceso") {
    return "Media prioridad";
  } else if (estado === "completado") {
    return "Baja prioridad";
  }

  return "Estado desconocido";
};

export default function PendientesDiarios() {
  const pendientes = tareas.filter((t) => t.estado === "pendiente").length;

  const completadas = tareas.filter((t) => t.estado === "completado").length;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titulo}>
          <img src={archivo} alt="imagen archivo" />
          <div>
            <h2>Pendientes de Hoy</h2>
            <p>Resumen de tus tareas y actividades para hoy.</p>
          </div>
        </div>

        <div className={styles.resumen}>
          <span>
            <img src={reloj} alt="reloj imagen" />
            {pendientes} pendientes
          </span>
          <span>
            <img src={check} alt="check imagen" />
            {completadas} completadas
          </span>
        </div>
      </div>

      <div className={styles.lista}>
        {tareas.map((tarea, index) => (
          <div
            key={index}
            className={`${styles.tarea} ${styles[tarea.estado]}`}
          >
            <img src={tarea.img} alt="imagenes" />
            <div className={styles.dato}>
              <p>{tarea.titulo}</p>
              <span>
                <img src={folder} alt="icono carpeta auditoria" />
                {tarea.carpeta}
              </span>
            </div>

            <div className={styles.info}>
              <p className={styles[tarea.estado]}>{tarea.estado}</p>
              <p>
                <span className={styles[tarea.estado]}></span>
                <span>{validar(tarea.estado)}</span>
              </p>
            </div>
            <div className={styles.fecha}>
              <img src={calendario} alt="calendario" />
              <span>{tarea.fecha}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
