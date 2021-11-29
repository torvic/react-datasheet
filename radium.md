# Radium - Estilos en linea simplificado

Es un paquete de terceros que ofrece una interfaz estándar y abstracciones para añadir estilos en linea.

- Una extensión conceptualmente simple de los estilos en línea normales.
- Estilos de estado del navegador al apoyo `:hover`, `:focus` y `:active`.
- Media queries.
- etc.

## Instalacion

`npm install --save radium`

## Ejemplos

Agregando estilos en linea

```js
const styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',
  },
}
// Inside render
return <button style={styles.base}>Siguiente</button>
```

Estados del navegador.

```js
const styles = {
  both: {
    background: 'black',
    border: 'solid 1px white',
    height: 100,
    width: 100
  },
  one: {
    ':hover': {
      background: 'blue',
    }
  },
  two: {
    ':hover': {
      background: 'red',
    }
  }
};
// Inside render
return (
  <div>
    <div key="one" style={[styles.both, styles.one]} />
    <div key="two" style={[styles.both, styles.two]} />
  </div>
);
```
