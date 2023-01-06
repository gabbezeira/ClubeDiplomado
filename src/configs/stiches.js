import { createStitches } from "@stitches/react";

export const { 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
    prefix,
    reset, 
} = createStitches({
    theme: {
        colors: {
            primary_100: 'rgba(7, 59, 89, 1)',
            info_100: 'rgba(38, 133, 202,1)',
            white: 'rgba(255, 255, 255)',
        }
    },
    media: {
      lg: '(min-width: 992px)',
    },
});