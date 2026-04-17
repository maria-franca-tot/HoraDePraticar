import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button, Typography } from '@mui/material';
import ThemeSettings from './theme/themeSettings';
import { useState } from 'react';
import "./index.css";

interface Props {
    title: string;
    textBold: string;
    text: string;
}

export function Accordion({ title, /*textBold*, text*/  }: Props) {
    const [Open, setOpen] = useState<boolean | null>(null);
    return (
        <Grid container sx={{
            backgroundColor: ThemeSettings.THEME_COLORS.secondary,
            width: "75vw",
            height: "auto",
            marginLeft: "12.5vw",
        }}>
            <Grid container sx={{
                color: ThemeSettings.THEME_COLORS.textPrimary,
                fontFamily: ThemeSettings.THEME_FONTS.primary,
                fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.bold,
                position: "relative",
                alignItems: "center",
                padding: "1vw",
                width: "100%",
            }}> <Typography sx={{
                width: "100%",
                textAlign: "center",
                fontWeight: ThemeSettings.THEME_FONT_WEIGHTS.bold
            }}>{title}</Typography>

                <Button variant="text" onClick={() => setOpen(!Open)}
                    sx={{
                        position: "absolute",
                        right: "1vw",
                        paddingRight: "3vw",
                        minWidth: "auto",
                        padding: 0, 
                    }}>
                    <ExpandMoreIcon sx={{
                        color: ThemeSettings.THEME_COLORS.textPrimary,
                    }} />
                </Button>

            </Grid>
        </Grid>
    )
}