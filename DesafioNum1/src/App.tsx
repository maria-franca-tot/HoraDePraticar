import "./App.css";
import imagem from "./img/image.png";
import { useState } from "react";
//use state vai guardar a informacao q muda na tela OU SEJA vai vai guardar a informacao de qual alternativa que eu cliquei dando um numero de indice pra ela onde minha funcao vai  verificar se ta certo e aparecer a msg na tela

const alternativas = ['Tomar uma decisão imediata, desativando temporariamente o sistema e assumindo os riscos.',
  'Convocar uma força-tarefa para investigar a fundo e tomar uma decisão coletiva em 2 horas.',
  'Esperar instruções da diretoria e evitar agir até ter um respaldo formal.'];

const letras = ['A', 'B', 'C']

export function Exercicio(
  { title,
    text,
    subtitle,
    italictext,
    feedback,
    correctAlternative }:
    {
      text: string;
      title: string;
      subtitle: string;
      italictext: string;
      alternativas: string[];
      correctAlternative: number;

      feedback: {
        correct: { title: string; text: string };
        incorrect: { title: string; text: string };
      };
    }
) {
  const [mostrarFeedBack, setMostrarFeedBack] = useState(false)
  const [selecionada, setSelecionada] = useState<number | null>(null);
  //ou ela pode ser um numero ou nao pode ser nd (null) pq qnd eu clico ela vira um numero
  //selecionada → valor atual setSelecionada → função que muda o valor
  const [resultado, setResultado] = useState<"correct" | "incorrect" | null>(null);


  function verificarResp() {
    if (selecionada === null) return; //se n tiver nd clicado ele vai evitar erro
    if (selecionada === correctAlternative) {
      setResultado("correct")
    } else {
      setResultado("incorrect")
    }

    setMostrarFeedBack(true) //aq vai abrir o pop up do feedback certo ou errado
  }

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
              <button className="opcao" key={index} onClick={() => setSelecionada(index)}> {/*quando clicar, guarda o número dessa alternativa*/}
                <div className="circulo">{letras[index]}</div>
                <span>{alternativa}</span>
              </button>
            ))}

          </div>

          <div className="BoxBotao">
            <button className="btn" onClick={verificarResp}><strong>Enviar</strong></button>

            {mostrarFeedBack && (
              <div className="overlay">
                <div className="feedback">
                  {resultado === "correct" ? (
                    <>
                      <h3>{feedback.correct.title}</h3>
                      <p>{feedback.correct.text}</p>
                      <button className="btn" onClick={() => {  /*quando clica no botao limpa a selecao e a msg  */
                        setSelecionada(null);
                        setResultado(null);
                        setMostrarFeedBack(false);
                      }}>CONTINUAR</button>
                    </>
                  ) : (
                    <>
                      <h3>{feedback.incorrect.title}</h3>
                      <p>{feedback.incorrect.text}</p>
                      <button className="btn" onClick={() => {
                        setSelecionada(null);
                        setResultado(null);
                        setMostrarFeedBack(false);
                      }}>TENTE NOVAMENTE</button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Exercicio;