//como criar um elemento HTML com JS

var divApp = document.getElementById("app");

// var titulo = document.createElement("h1");
// titulo.innerHTML = "Esse titulo foi criado com JS!";

// divApp.appendChild(titulo);

//Nome de componente padrão PascalCase
function Contador(props) {

  const [numero, setNumero] = React.useState(0);

  function somar(){
    setNumero(numero + 1);
    console.log(numero)
  }

  function subtrair(){
    setNumero(numero - 1);
    console.log(numero)
  }

  return(
    <React.Fragment>
        <h1>{props.titulo}</h1>
        <h2>{numero}</h2>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
    </React.Fragment>
  ) ;
}

function App(){
  return(
    <React.Fragment>
      <h1>Vote no correto: </h1>
      <Contador titulo = "Bolacha"/>
      <Contador titulo = "Biscoito"/>
      <Contador titulo = "Nenhum desses!"/>
      <Contador titulo = "Depende!"/>
    </React.Fragment>
  );
}

ReactDOM.render(React.createElement(App), divApp);

//Um componente pode receber props
//Essas props podem passar para outro componente
//Um componente pode chamar outro (que pode chamar outro e outro.....e outro)
//Um componente pode conter funções (funções dentro de funções)