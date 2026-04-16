import Grid from '@mui/material/Grid';
import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import './index.css'
import Typography from '@mui/material/Typography'
import ThemeSettings from "./theme/themeSettings"
import { useState } from 'react';


interface DuolingoProps { //propriedades do duolingo, interface define oq o componente recebe, nesses caso, strings 
  title: string;
  text: string;
  words: string[]; //vetor de strings = palavras 
  correctOrder: string[];
  feedback: {
    correct: string;
    incorrect: string;
    sentenca: string;
  }

}

export function Duolingo({
  title, text, words, correctOrder, feedback
}: DuolingoProps) {
  const [isUserRespCorrect, setIsUserRespCorrect] = useState<null | boolean>(null); //ou vai ser vazia, ou vai ser booleana, como ainda n tem nd, é vazia
  const [UserResp, setUserResp] = useState<string[]>([]); //guarda a resp do usiruario no array q comeca null

  function AddWordToResp(word: string) {
    setUserResp((prev) => {
      const copy = [...prev]; //copia do vetor(array) Evita mexer direto no estado (regra do React)
      copy.push(word) //remove 1 item na posicao index
      return copy; //retorna o array atualizado 
    })
  }

  function RemoveWordToResp(word: string, index: number) { //remove uma palavra da resp do usuario usando o indice 
    setUserResp((prev) => {
      const copy = [...prev]
      if (copy[index] === word) {
        copy.splice(index, 1)//remove so um item q ta naquela posicao
      }
      return copy;
    });
  }

  function Finish() {
    let correct = true; //permite reatribuicao de valores (varia) ja o const cria uma referencia de leitura, nn permitindo reatribuicao

    if (UserResp.length != correctOrder.length) {
      correct = false;
    }

    if (correct) {
      UserResp.map((word, i) => {
        if (word != correctOrder[i])
          correct = false
      })
    }

    setIsUserRespCorrect(correct)
  }

  function Continue() {
    if (isUserRespCorrect === false) {
      setUserResp([])//limpa a rspota
    }
    setIsUserRespCorrect(null)
  }

  return (
    <Grid container gap="1vw">
      <Grid container justifyContent={"center"}>
        <Typography variant="h2"
          color={ThemeSettings.THEME_COLORS.textPrimary}
          fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.semiBold}>{title}</Typography>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Typography textAlign={"center"} color={ThemeSettings.THEME_COLORS.textPrimary}>{text}</Typography>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Typography
          textAlign={"center"}
          component={"i"}
          fontWeight={ThemeSettings.THEME_FONT_WEIGHTS.medium}
          color={ThemeSettings.THEME_COLORS.textPrimary}
        >
          Clique nas palavras abaixo na ordem correta.
        </Typography>
      </Grid>
      <Grid container sx={{
        backgroundColor: ThemeSettings.THEME_COLORS.secondaryBackground,
        padding: "2%",
        borderRadius: "2vw",
        gap: "2vw",
        width: "75vw",
        marginLeft: "12.5vw",
      }}

      > <Grid container sm gap="0.5vw" sx={{
        backgroundColor: `${ThemeSettings.THEME_COLORS.primaryHover}50`, //o 50 ali muda a opacidade da cor sem criar uma nova, oq deixa o laranjao tipo um rosinha
        padding: "1vw", //1vw equivale a 1% da tela
        gap: "1.25vw",
        alignContent: "start", //alinha as coistas pro comco do container
        borderRadius: "1.2vw"
      }}> {UserResp.map((word, i) => (
        <Grid container width={"auto"} key={i}
          sx={{
            backgroundColor: ThemeSettings.THEME_COLORS.primaryHover,
            paddingY: "0.2vw",
            paddingX: "0.5vw",
            borderRadius: 9999,
            cursor: "pointer",
            transition: "background-color 200ms", //faz o hover mudar mais demorado e mais suave, em 200milisegundos
            "&:hover": {
              backgroundColor: ThemeSettings.THEME_COLORS.background,
              color: ThemeSettings.THEME_COLORS.textPrimary
            },
          }} onClick={() => RemoveWordToResp(word, i)}>
          <Typography variant='body2'>{word}</Typography>
        </Grid>
      ))}
        </Grid>
        <Grid container sm gap="0.5vw">
          {words.map((word, i) => (
            <Grid container width={"auto"} key={i} sx={{
              backgroundColor: ThemeSettings.THEME_COLORS.primaryHover,
              paddingY: "0.5vw",
              paddingX: "1.5vw",
              borderRadius: 9999,
              cursor: "pointer",
              transition: "background-color 200ms", //determina o tempo q vai demorar p hover acontecer, deixando mais clean e bonito
              "&:hover": {
                backgroundColor: ThemeSettings.THEME_COLORS.primary,
              },
            }} onClick={() => AddWordToResp(word)}> <Typography variant="body2">{word}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Button variant="contained" onClick={Finish} sx={{
          backgroundColor: ThemeSettings.THEME_COLORS.secondary,
          cursor: "pointer",
          transition: "background-color 200ms",
          "&:hover": {
            backgroundColor: ThemeSettings.THEME_COLORS.secondaryHover,
          }
        }}>Continuar</Button>
      </Grid>
      <Dialog
        open={isUserRespCorrect != null}
        onClose={() => setIsUserRespCorrect(null)}
        maxWidth='md'
        sx={{
          backdropFilter: "blur(20px)",
        }}
        PaperProps={{
          sx: { background: "transparent", boxShadow: "none", gap: "1vw", color: ThemeSettings.THEME_COLORS.textPrimary},

        }}
      >
        {isUserRespCorrect != null && (
          <>
            <Grid container sx={{
              backgroundColor: isUserRespCorrect ?
                ThemeSettings.THEME_COLORS.primaryHover :
                ThemeSettings.THEME_COLORS.background,
              padding: "1vw", 
              borderRadius: "1vw"
            }}
              justifyContent={"center"}>
              <Grid container xs={9}>
                <Typography sx={{ textAlign: "center" }} >
                  {isUserRespCorrect
                    ? feedback.correct
                    : feedback.incorrect}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: ThemeSettings.THEME_COLORS.secondaryBackground, 
              padding: "1vw", 
              borderRadius: "1vw" 
              }} justifyContent={"center"}>
              <Grid xs={9} gap="1vw">
                <Grid container justifyContent={"center"}>
                  <Typography
                    textAlign={"center"}
                    component={"strong"}
                    datatype="secondary"
                    color={ThemeSettings.THEME_COLORS.textSecondary}
                  >Frase Correta Esperada</Typography>
                  <Typography variant="body2" color={ThemeSettings.THEME_COLORS.textSecondary}>Lamento esse incoveniente. Posso ajudar você a gerar o boleto por e-mail?</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
              <Button variant="contained" onClick={Continue} sx={{
                backgroundColor: ThemeSettings.THEME_COLORS.secondary,
                cursor: "pointer",
                transition: "background-color 300ms",
                "&:hover": {
                  backgroundColor: ThemeSettings.THEME_COLORS.secondaryHover,
                }
              }}>{isUserRespCorrect ? "Continuar" : "Tentar novamente"}</Button>
            </Grid>
          </>
        )}
      </Dialog>
    </Grid>
  );
}