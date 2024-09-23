import React from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

export default class Flip extends React.Component {
  constructor(props) {
    super(props);
    this._tickRef = React.createRef();
    this.state = {
      currentValue: 0, // Empieza desde 0
    };
  }

  componentDidMount() {
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.state.currentValue.toString(),
    });

    // Llamamos a la función para iniciar la animación de cascada
    this.startAnimation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      // Reiniciamos la animación si cambia el valor
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  startAnimation() {
    const targetValue = parseInt(this.props.value, 10); // Valor final
    const increment = Math.ceil(targetValue / 100); // Velocidad de incremento

    // Detener la animación si ya está en progreso
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      if (this.state.currentValue < targetValue) {
        this.setState(
          (prevState) => ({
            currentValue: prevState.currentValue + increment,
          }),
          () => {
            this._tickInstance.value = this.state.currentValue.toString();
          }
        );
      } else {
        clearInterval(this.interval);
      }
    }, 50); // Ajusta la velocidad de la animación
  }

  render() {
    // Definir los estilos en línea
    const tickStyles = {
      fontSize: '5rem',  // Ajusta el tamaño del número
      lineHeight: '1.2',
      fontWeight: 'bold',
      letterSpacing: '-2px',  // Hace que los números se vean más angostos
      height: '120px',  // Ajusta la altura de los números
      transform: 'scaleY(1.5)',  // Hace que los números se vean más altos
    };

    return (
      <div
        ref={this._tickRef}
        className="tick"
        style={tickStyles} // Aplica los estilos en línea aquí
      >
        <style>
          {`
            .tick-credits {
              display: none !important;
            }
          `}
        </style>
        <div data-repeat="true" aria-hidden="true">
          <span data-view="flip">Tick</span>
        </div>
      </div>
    );
  }
}
