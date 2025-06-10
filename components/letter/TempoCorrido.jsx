import { useEffect, useState } from 'react';

function TempoDecorrido({ dataInicial }) {
  const [tempoDecorrido, setTempoDecorrido] = useState('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const inicio = new Date(dataInicial);
      const diffMs = agora - inicio;

      const segundos = Math.floor(diffMs / 1000) % 60;
      const minutos = Math.floor(diffMs / 1000 / 60) % 60;
      const horas = Math.floor(diffMs / 1000 / 60 / 60) % 24;
      const dias = Math.floor(diffMs / 1000 / 60 / 60 / 24);

      setTempoDecorrido(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
    }, 1000);

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
  }, [dataInicial]);

  return (
      <span>{tempoDecorrido}</span>
  );
}

export default TempoDecorrido;