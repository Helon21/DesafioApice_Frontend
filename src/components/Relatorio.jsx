import React,{useState} from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Relatorio = () => {
    const [relatorioAnchor, setRelatorioAnchor] = useState(null);
    const handleMenuClick = (event) => {
        setRelatorioAnchor(event.currentTarget);
    }
    const handleMenuClose = () => {
        setRelatorioAnchor(null);
    }

    return (
        <div>
            <Button
                color="inherit"
                aria-controls="menu-relatorio"
                aria-haspopup="true"
                onClick={handleMenuClick}
            >
                Relatorio
            </Button>

            <Menu
                id="menu-relatorio"
                anchorEl={relatorioAnchor}
                open={Boolean(relatorioAnchor)}
                onClose={handleMenuClose}
            >
                <MenuItem component={Link} to="relatorio-pessoa" onClick={handleMenuClose}> Lista de Pessoas </MenuItem>
                <MenuItem component={Link} to="relatorio-venda" onClick={handleMenuClose}> Lista de Vendas </MenuItem>
            </Menu>
        </div>
    );
}

export default Relatorio;