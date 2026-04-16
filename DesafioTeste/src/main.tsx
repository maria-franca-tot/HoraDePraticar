import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Duolingo } from './duolingo.tsx'
import { Grid } from '@mui/material'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Grid>
            <Duolingo
                title='Situação 1'
                text='O cooperado relata que o app não está funcionando e ele precisa pagar uma conta com urgência. Monte uma frase de apoio com empatia e solução clara.'
                words={["Posso", "Entendo", "Lamento", "incoveniente",
                    "esse", "ajudar", "você", ".", "gerar", "é", "o",
                    "boleto", "por", "e-mail", "?"]}
                correctOrder={[
                    "Lamento", "esse", "incoveniente", ".",
                    "Posso", "ajudar", "você", "gerar", "o",
                    "boleto", "por", "e-mail", "?"]}

                feedback={{
                    correct:
                        "Ótima escolha! Você demonstrou empatia e ofereceu uma solução clara de forma gentil.",
                    incorrect:
                        "Que tal tentar uma frase com mais acolhimento e foco na solução? Use empatia + ação clara.",
                    sentenca:
                        "Lamento esse incoveniente. Posso ajudar você a gerar o boleto por e-mail?",
                }}
            />
        </Grid>
    </StrictMode>
)
