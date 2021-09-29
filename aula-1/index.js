//como criar um elemento HTML com JS

var divApp = document.getElementById("app");

// var titulo = document.createElement("h1");
// titulo.innerHTML = "Esse titulo foi criado com JS!";

// divApp.appendChild(titulo);

//nome de componente padrão PascalCase
function PrimeiroComponente() {
  return(
    <React.Fragment>
        <h1>Esse titulo foi criado com React usando JSX :O</h1>
        <h2>Esse também foi</h2>
    </React.Fragment>

  ) ;
}

ReactDOM.render(PrimeiroComponente(), divApp);
