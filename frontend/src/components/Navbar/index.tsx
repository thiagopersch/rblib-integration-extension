import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export type NavbarProps = {
  children?: string;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
          >
            RBLib
          </Typography>
          {/* <Button variant="text">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
