import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Cadastro from '../../components/Cadastro';
import Movimento from '../../components/Movimento';
import Relatorio from '../../components/Relatorio';
import Rodape from '../../components/rodape/Rodape';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Cadastro />
            <Movimento />
            <Relatorio />
          </div>
          <Typography variant="h6" component="div">
            ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
      <Rodape />
    </div>
  );
}

export default Home;
