import "./App.css";
import imagem from "./img/image.png";
//import { useState } from "react"; 

//import { Button, Grid } from '@mui/material/Grid';
//import Grid from 
//use state vai guardar a informacao q muda na tela OU SEJA vai vai guardar a informacao
//de qual alternativa que eu cliquei dando um numero de indice pra ela onde minha funcao vai 
// verificar se ta certo e aparecer a msg na tela
const alternativas = ['Tomar uma decisão imediata, desativando temporariamente o sistema e assumindo os riscos.',
  'Convocar uma forca-tarefa para investigar a fundo e tomar uma decisão coletiva em 2 horas.',
  'Esperar instruções da diretoria e evitar agir até ter um respaldo formal.'];
  
  export function Exercicio(
    { title,
    text,
    subtitle,
    italictext, }:
    {
      text: string;
      title: string;
      subtitle: string;
      italictext: string;
      alternativas: string[];
      alternativaCorreta: number;
      
      feedback: {
        correct: {
          title: string;
          text: string;
        };
        incorrect: {
          title: string;
          text: string;
        };
      };
    }
    

  ) {
    //const [selecionada, setSelecionada] = useState<number | null>(null); 
    //ou ela pode ser um numero ou nao pode ser nd (null) pq qnd eu clico ela vira um numero
  //selecionada → valor atual setSelecionada → função que muda o valor

  return (
    <div className="cardQuestao">
      <div className="blocosDeTexto">
        <h2>{title}</h2>
        <p>{text}</p>
        <h4>{subtitle}</h4>
        <p><em>{italictext}</em></p>
      </div>

      <div className="conteudo">
        <div className="EsquerdaImg">
          <img src={imagem} alt="Homem mexendo no computador" />
        </div>
        <div className="OpcoesDireita">
          <div className="alternativas">
            {alternativas.map((alternativa, index) => (
              <button className="opcao" key={index}> <div className="circulo">{letras[index]}</div> 
                {alternativa}
              </button>
            ))}
          </div>
          <div className="BoxBotao">
            <button className="btn"><strong>Enviar</strong></button>
          </div>
        </div>
      </div>

    </div>
  )
}


const letras = ['A', 'B', 'C']
export default Exercicio;