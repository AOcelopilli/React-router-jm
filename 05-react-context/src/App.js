import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
