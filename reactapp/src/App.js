// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import Button from "./components/UI/Button/Button";
// import Card from "./components/UI/Card/Card";

// function App() {
//   const [showResults, setShowResults] = useState(false);

//   const toggleResults = () => {
//     setShowResults(!showResults);
//   };

//   return (
//     <div className="App">
//       <h1>Quizz App</h1>
//       <Button onClick={toggleResults}>
//         {showResults ? "Start Quiz" : "Show Results"}
//       </Button>
//       {showResults && (
//         <Card
//           question="What color is are the leaves?"
//           options={["Blue", "Red", "Yellow", "Green"]}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";


function App() {
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  return (
    <div className="App">
      <h1>Quizz App</h1>
      <Button onClick={toggleResults}>
        {showResults ? "Start Quiz" : "Show Results"}
      </Button>
      {showResults && (
        <Card
          question="What color are leaves?"
          options={["Blue", "Red", "Yellow", "Green"]}
        />
      )}
    </div>
  );
}

export default App;
