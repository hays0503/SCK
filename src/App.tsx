import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import sck from "/sck-logo.svg";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.container}>
      <div className={style.spinContainer}>
        
        <div className={`${style.spinerDiv}`}>
          <a className={style.z1} href="https://sck-1.kz" target="_blank">
            <img src={sck} className={style.logo} alt="sck-1 logo" />
          </a>
        </div>

        <div className={`${style.spinerDiv}`}>
          <a className={style.z1} href="https://vitejs.dev" target="_blank">
            <img src={reactLogo} className={style.logo} alt="React logo" />
          </a>
        </div>

        <div className={`${style.spinerDiv}`}>
          <a className={style.z1} href="https://react.dev" target="_blank">
            <img
              src={viteLogo}
              className={`${style.logo} ${style.react}`}
              alt="Vite logo"
            />
          </a>
        </div>

        <div className={`${style.spinerDiv}`}><h5>Vite+React</h5></div>
      </div>

      <h1>Тестирование интеграций</h1>
      <div className={style.readTheDocs}>
        <h3>
          <a href="https://m.binotel.kz/">Binotel</a> +{" "}
          <a href="https://www.jivosite.com/">Jivosite</a>
          (скрипты вырезан с сайта <a href="https://sck-1.kz">sck-1.kz</a>)
        </h3>
        <h3>
          Тестирование интеграции функций с сайта{" "}
          <a href="https://sck-1.kz">sck-1.kz</a>
        </h3>
        </div>
    </div>
  );
}

export default App;
