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
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:"#323845"
          }
        }
      },
      MuiInputLabel:{
        styleOverrides: {
          root: {
            color:"black"
          }
        }
      },
      MuiListItemIcon:{
        styleOverrides: {
          root: {
            justifyContent: 'center'
          }
        }
      }
    }
})

