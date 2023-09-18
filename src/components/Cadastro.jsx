import React, {useState} from "react";
import { Button, Menu, MenuItem } from "@mui/material";

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
                <MenuItem onClick={handleMenuClose}>Bairro</MenuItem>
                <MenuItem onClick={handleMenuClose}>Cidade</MenuItem>
                <MenuItem onClick={handleMenuClose}>Pessoa</MenuItem>
                <MenuItem onClick={handleMenuClose}>Produtos</MenuItem>
            </Menu>
        </div>
    );
}

export default Cadastro;