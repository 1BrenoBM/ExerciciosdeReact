function Exercicioslista204() {
  const numeros = [5, 10, 15];

  const resultado = numeros.reduce((total, numero) => total + numero, 0);

  return (
    <div>

      <h2> Soma de números do array</h2>

      <p>Resultado da soma: {resultado}</p>
    </div>
  );
}
export default Exercicioslista204