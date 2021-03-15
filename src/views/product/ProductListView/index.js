import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from '../../../components/Page';
import Toolbar from './Toolbar';
import CardSistema from './CardSistema';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cardSistema: {
    height: '100%'
  }
}));

const ListaSistemas = () => {
  const classes = useStyles();
  const [sistemas] = useState(data);
  const [sistemasFiltrados, setSistemasFiltrados] = useState(data);
  const filtrarSistema = (texto) => {
    const sf = texto ? sistemas.filter(
      (sistema) => sistema.title.toLowerCase().includes(texto.toLowerCase())
      || sistema.description.toLowerCase().includes(texto.toLowerCase())
    ) : sistemas;
    console.log(texto, sf);
    setSistemasFiltrados(sf);
  };
  return (
    <Page
      className={classes.root}
      title="Sistemas"
    >
      <Container maxWidth={false}>
        <Toolbar atualizarBusca={filtrarSistema} />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {sistemasFiltrados.map((sistema) => (
              <Grid
                item
                key={sistema.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CardSistema
                  className={classes.productCard}
                  sistema={sistema}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ListaSistemas;
