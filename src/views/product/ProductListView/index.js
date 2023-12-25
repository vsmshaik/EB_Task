import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';

import ProductCard from './ProductCard';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  userCard : {
    height: '350px'
  }
}));

const ProductList = (props) => {
  const classes = useStyles();
console.log(props.products)
  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {props.products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
                className={classes.userCard}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
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

const mapStateToProps = (state) => {
	return {
		products: state.counter
	};
};

export default connect(mapStateToProps)(ProductList);
