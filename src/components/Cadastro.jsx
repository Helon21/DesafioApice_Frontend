import React, {useState} from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Cadastro = () => {
    const [cadastroAnchor, setCadastroAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setCadastroAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setCadastroAnchorEl(null);
    };


    return (
        <div>
            <Button
                color="inherit"
                aria-controls="menu-cadastro"
                aria-haspopup="true"
                onClick={handleMenuClick}
            >
                Cadastro
            </Button>

            <Menu
                id="menu-cadastro"
                anchorEl={cadastroAnchor}
                open={Boolean(cadastroAnchor)}
                onClose={handleMenuClose}
            >
                <MenuItem component={Link} to="/cadastro-bairro" onClick={handleMenuClose}>Bairro</MenuItem>
                <MenuItem component={Link} to="/cadastro-cidade" onClick={handleMenuClose}>Cidade</MenuItem>
                <MenuItem component={Link} to="/cadastro-pessoa" onClick={handleMenuClose}>Pessoa</MenuItem>
                <MenuItem component={Link} to="/cadastro-produto" onClick={handleMenuClose}>Produtos</MenuItem>
            </Menu>
        </div>
    );
}

export default Cadastro;