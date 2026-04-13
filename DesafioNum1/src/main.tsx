import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exercicio from './App.tsx'
//import Grid from "@mui/material/Grid";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exercicio
     title={'Cenário 1'}
      text={'Você lidera uma equipe que está enfrentando um erro crítico em um sistema de produção. O erro pode parar a operação por 24h e gerar prejuízo. A diretoria quer uma solução “pra ontem”, mas você ainda não sabe exatamente a origem do problema.'}
      subtitle={'Você tem três alternativas, pense bem antes de escolher:'}
      italictext={'Selecione uma alternativa'} 
      alternativas={
        ['Tomar uma decisão imediata, desativando temporariamente o sistema e assumindo os riscos', 
        'Convocar uma força-tarefa para investigar a fundo e tomar uma decisão coletiva em 2 horas.', 
        'Esperar instruções da diretoria e evitar agir até ter um respaldo formal.']

      } correctAlternative={1}

      feedback={{
        correct: {
          title: 'Parabéns!',
          text: 'Você acertou, continue assim durante o curso.'
        },
        incorrect: {
          title: 'Tente Novamente...',
          text: 'Resposta incorreta, volte e responda de novo!'
        }
      }}
    />  
  

  </StrictMode>,
)
