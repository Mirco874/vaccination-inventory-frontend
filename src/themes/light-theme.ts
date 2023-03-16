import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    components:{
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBlock:"10px"
          }
        }
      },

    }
})

