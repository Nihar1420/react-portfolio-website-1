import { styled, Button } from "@mui/material";

const ColorButton = styled(Button)({
    borderRadius: "20px",
    backgroundColor: "#444444",
    color: "white",
    fontWeight: 'bold',
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#444444',
    },
});

export default ColorButton;