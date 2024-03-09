import { useContext } from "react";
import { useState } from "react";
import { ColorModeContext } from "../../Theme";
import { IconButton, useTheme, Box, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, ExpandMore } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'En',
  'Ar',

];
const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "3px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}>
        <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              marginY: "20px",
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "300",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#fff",
              marginY: "25px"
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "20px", color: "#fff", }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "30px" }} />
              </IconButton>
            )}

          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "15px", color: "#fff" ,mx:"10"},
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}

                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
              mt: "10px",
              mx:"5px",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "20px",
              mt: "10px",
              mx: "3px",
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "20px",
              color: "#fff",
              mt: "10px",
              mx: "5px",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;