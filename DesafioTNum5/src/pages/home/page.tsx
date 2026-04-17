import { Grid } from "@mui/material";
import ThemeSettings from "../../theme/themeSettings";
import { Duolingo } from "../../Accordion";

export default function Page() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: ThemeSettings.THEME_COLORS.background,
        minHeight: "100dvh",
        paddingY: "2vh",
      }}
    >
      <Grid container xs={10}>
        <Duolingo
          title="Situação 1"
          text="O cooperado relata que o app não está funcionando e ele precisa pagar uma conta com urgência. Monte uma frase de apoio com empatia e solução clara."
          words={[
            "Posso",
            "Entendo",
            "Lamento",
            "incoveniente",
            "esse",
            "ajudar",
            "você",
            ".",
            "gerar",
            "é",
            "o",
            "boleto",
            "por",
            "e-mail",
            "?",
          ]}
          correctWordsOrder={[
            "Lamento",
            "esse",
            "incoveniente",
            ".",
            "Posso",
            "ajudar",
            "você",
            "gerar",
            "o",
            "boleto",
            "por",
            "e-mail",
            "?",
          ]}
          feedback={{
            correct:
              "Ótima escolha! Você demonstrou empatia e ofereceu uma solução clara de forma gentil.",
            incorrect:
              "Que tal tentar uma frase com mais acolhimento e foco na solução? Use empatia + ação clara.",
            sentence:
              "Lamento esse incoveniente. Posso ajudar você a gerar o boleto por e-mail?",
          }}
        />
      </Grid>
    </Grid>
  );
}
