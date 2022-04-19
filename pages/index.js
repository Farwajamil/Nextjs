import styles from "../styles/Home.module.css";
function index() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
      <img src="Capture.PNG"></img>
        <h1> Brand Identity Design </h1>
        <p>
          Branding just like your personal Identity makes you uniquely you your
          brand identity is the special sauce of your business that set you
          apart from every other Tom Dick and Harry Inc.
        </p>
        <br />
        <a href="https://ozen-react.envytheme.com/services-details/">
          <h4>Read more --></h4>
        </a>
      </div>
      <div className={styles.card}>
        <img src="2.PNG"></img>
        <h1> Digital Marketing </h1>
        <p>
          Ozen offer you the best digital marketing services to just like your
          personnal identity makes you uniquely you, your brand identity is the
          special sauce of your to our customer.
        </p>
        <br />
        <a href="https://ozen-react.envytheme.com/services-details/">
          <h4>Read more --></h4>
        </a>
      </div>
      <div className={styles.card}>
      <img src="3.PNG"></img>
        <h1> Design and Development </h1>
        <p>
          Ozen offering you the best digital marketing services to just like
          your personal identity makes you uniquely you, your brand identity is
          the special sauce of your to our customer.
        </p>
        <br />
        <a href="https://ozen-react.envytheme.com/services-details/">
          <h4>Read more --></h4>
        </a>
      </div>
    </main>
  );
}
export default index;
