import { Person2Outlined, ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container, Typography, InputBase,
  alpha, IconButton, useTheme
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import Badge from '@mui/material/Badge';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const items=
   [{
    "id":"1",
    "image":"./images/1.jpg",
    "title":"product1",
    "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year "
    }
    ,
    
     
      {
        "id":"2",
        "image":"./images/2.jpg",
        "title":"product3",
        "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year"
        }
        ,
      {
        "id":"3",
        "image":"./images/2.jpg",
        "title":"product3",
        "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year"
        }
        ,
          {
            "id":"4",
            "image":"./images/1.jpg",
            "title":"product4",
            "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year"
            }
            ,
            {
              "id":"5",
              "image":"./images/1.jpg",
              "title":"product5",
              "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year"
              }
              ,
              {
                "id":"6",
                "image":"./images/2.jpg",
                "title":"product6",
                "subtitle":"Best Fashion Ecommerce Sites To Watch in 2024 by Marijana Kay Year by year"
                }

]

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
}

const handleOnFocus = () => {
  console.log('Focused')
}

const formatResult = (item) => {
  return (
    <>
      <span>id: {item.id}</span>
      <span>name: {item.name}</span>
    </>
  )
}

const Search = styled('div')(({ theme }) => ({
    flexGrow: 0.4,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    "&:hover": {
      border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "266px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  color: "#777",

}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const options = ["All Categories", "CAR", "Clothes", "Electronics"];
const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const theme = useTheme();
  return (
    <>
      <Container sx={{my: 3, display: "flex", justifyContent: "space-between" }}>
        <stack alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography>E-commerce</Typography></stack>
        <Search sx={{ display: "flex", justifyContent: "space-between", borderRadius: "22px", }}>
          <SearchIconWrapper>
        
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderBottomRightRadius: 22,
                borderTopRightRadius: 22,
                p:"5px",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  // className="border"
                  sx={{
                    width: 93,
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                    
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
        <stack alignItems={'center'}>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <Person2Outlined />
          </IconButton>

        </stack>

      </Container>
    </>
  );
}
export default Header2;