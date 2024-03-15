import "./App.css";

function App() {
  const handleSubmit = () => {
    fetch(
      `${process.env.REACT_APP_DEV_API_URL}student/submission_dashboard/7`
    ).then((res) => {
      console.log("Res:", res);
    });
  };
  return (
    <div className="App">
      <h1>Second - CI/CD Build Success</h1>
      <button onClick={() => handleSubmit()}>Ok</button>
    </div>
  );
}

export default App;
