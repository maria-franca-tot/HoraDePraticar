import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Accordion } from './Accordion.tsx'
import { Grid } from '@mui/material'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Grid>
            <Accordion 
            title={'Accordion'}
            textBold={'Recurso muito utilizado para listas, definições ou conteúdo denso que não caberia em cards ou recursos menores.'}
            text={'Prestar atenção de ter a seta ao lado que inverte de lado para ser intuitivo e o texto dentro do recurso ser responsivo.'}
            />
        </Grid>
    </StrictMode>
)
