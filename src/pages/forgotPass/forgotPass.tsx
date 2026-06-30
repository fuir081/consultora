import { Link } from "react-router-dom";

import styles from "./forgotPass.module.css";
import logo from "../../assets/img/logo.png";

export default function RecoverPassword() {
  return (
    <section className={styles.contenedor}>
      <img src={logo} alt="logo consultora alimentate" />
      <h1>Recuperar contraseña</h1>
      <p>
        Ingrese su correo electrónico y le enviaremos un enlace para restablecer
        su contraseña.
      </p>

      <form>
        <label>Correo electrónico</label>

        <input type="email" placeholder="Ingrese su correo" />

        <button type="submit">Enviar enlace</button>
      </form>

      <Link className={styles.volver} to="/login">
        Volver a iniciar sesión
      </Link>
      <div className={styles.msj}>
        <h2>Mensaje</h2>
        <p>info mensaje</p>
      </div>
    </section>
  );
}
