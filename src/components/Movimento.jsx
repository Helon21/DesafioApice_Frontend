import React, {useState} from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';


const Movimento = () => {
    const [movimentoAnchor, setMovimentoAnchor] = useState(null);
    const handleMenuClick = (event) => {
        setMovimentoAnchor(event.currentTarget);
    }
    const handleMenuClose = () => {
        setMovimentoAnchor(null);
    }

    return (
        <div>
            <Button
                color="inherit"
                aria-controls="menu-movimento"
                aria-haspopup="true"
                onClick={handleMenuClick}
            >
                Movimento
            </Button>

            <Menu
                id="menu-movimento"
                anchorEl={movimentoAnchor}
                open={Boolean(movimentoAnchor)}
                onClose={handleMenuClose}
            >
                <MenuItem component={Link} to="/cadastro-venda" onClick={handleMenuClose}>Vendas</MenuItem>

            </Menu>
        </div>
    )
}

export default Movimento;