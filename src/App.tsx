import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import ProductSmall from './images/image-product-mobile.jpg';
import ProductLarge from './images/image-product-desktop.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  appStyles, buttonStyle, discountedCostStyles,
  glossCostStyles, h1Styles, h2Styles,
  imageStyles, mainContainerStyles, mainTextStyles
} from './styles';

function App(): JSX.Element {
  return (
    <main className={appStyles}>
      <Container sx={mainContainerStyles}>
        <Card variant='elevation'
          sx={{ borderRadius: '10px' }}
          component={Grid}
          container >
          <Grid item xs={12} sm={6}>
            <CardMedia component='picture'>
              <source media="(min-width: 37.5rem )" srcSet={ProductLarge} />
              <img src={ProductSmall} alt="" className={imageStyles} />
            </CardMedia>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ paddingInline: '.5rem' }} >
            <CardContent>
              <Typography variant='h1' sx={h1Styles}>
                Perfume
              </Typography>
              <Typography variant='h2' gutterBottom sx={h2Styles}>
                Gabrielle Essence Eau De Parfum
              </Typography>
              <Typography variant='body1' gutterBottom sx={mainTextStyles}>
                A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.
              </Typography>
              <Typography variant='body2' component='div'
                sx={{ marginBlock: '1rem' }}>
                <Typography component='span' sx={discountedCostStyles}>
                  $149.99
                </Typography>
                <Typography component='span' sx={glossCostStyles}>
                  $169.99
                </Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='large' variant='contained'
                startIcon={< ShoppingCartIcon />}
                sx={buttonStyle}>
                Add to cart
              </Button>
            </CardActions>
          </Grid>
        </Card>

      </Container>
    </main>
  );
}

export default App;
