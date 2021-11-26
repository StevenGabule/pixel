import React from 'react';
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  GlobalStyles,
  CssBaseline,
  Link,
  CardContent,
  Card,
  Grid,
  CardMedia,
} from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import image1 from './images/image1.jfif';
import image2 from './images/alpha.jfif';
import logo from './images/icon.png';
import quote from './images/quote.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const featuresList = [
  {
    label: 'Copyright Type',
    feature: 'Sound recording',
  },
  {
    label: 'Total Investment',
    feature: '1,000 USDC',
  },

  {
    label: 'Numbe of NFTs',
    feature: '5',
  },

  {
    label: 'Copyright Share',
    feature: '2%',
  },
];

const navigationLink = ['My assets', 'Royalties', 'Analytics'];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Container fixed>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt={'logo'} /> <span style={{ marginLeft: 10 }}>OPULOUS</span>
            </Typography>
            <nav>
              {navigationLink.map((navLink, i) => (
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5, textDecoration: 'none', fontWeight: 'bold' }}
                >
                  {navLink}
                </Link>
              ))}
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, border: '1px solid #FF5400', color: '#000' }}>
              0xC7R…S34 <AccountBalanceWalletIcon sx={{ marginLeft: '10px', color: '#FF5400' }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* End hero unit */}
      <Container fixed component="main" sx={{ marginTop: 5 }}>
        <Grid container sx={{ display: 'flex' }}>
          <Card sx={{ width: '75%', display: 'flex', padding: '30px', marginRight: '3%' }} elevation={2}>
            <CardMedia
              component="img"
              sx={{ width: 240, height: 240, borderRadius: '10px' }}
              image={image1}
              alt="Paella dish"
            />
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontSize: 24, fontWeight: 'bold' }}
                color="text.primary"
                gutterBottom
              >
                Wildfire
              </Typography>

              <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                SBTRKT, Little Dragon
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: '1.5em', fontSize: 16 }}>
                Culpa modi quos voluptas voluptatem quis minus ad laudantium quod. Odit labore quia dolores atque
                voluptate sint sed temporibus. Et aspernatur aut aspernatur quibusdam officiis magnam sunt nulla. Quo ut
                in doloremque rerum magnam consequatur earum exercitationem esse.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: '22%', backgroundColor: '#f8f8f8', borderRadius: '15px' }} elevation={0}>
            <CardContent sx={{ paddingLeft: '25px' }}>
              {featuresList.map((feature, i) => (
                <div key={i} style={{ marginBottom: '5%' }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {feature.label}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {feature.feature}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid container sx={{ marginTop: '40px' }}>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{ borderBottom: '1px solid rgba(0, 0, 5, 0.12)', borderColor: 'divider' }}
              indicatorColor={'#FF5400'}
            >
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Royalties" {...a11yProps(1)} />
                <Tab label="Analytics" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container sx={{ display: 'flex' }}>
                <Card sx={{ width: '65%', display: 'flex' }} elevation={0}>
                  <CardContent>
                    <div style={{ marginBottom: '30px' }}>
                      <Typography
                        component={'div'}
                        variant="h6"
                        sx={{ fontSize: 18 }}
                        color="text.primary"
                        gutterBottom
                      >
                        Highlights
                      </Typography>
                      <ul>
                        <li style={{ listStyle: 'disc', marginLeft: '35px' }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ea.
                        </li>
                        <li style={{ listStyle: 'disc', marginLeft: '35px' }}>Lorem ipsum dolor sit amet.</li>
                        <li style={{ listStyle: 'disc', marginLeft: '35px' }}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </li>
                        <li style={{ listStyle: 'disc', marginLeft: '35px' }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos repellendus dolorum
                          distinctio.
                        </li>
                      </ul>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                      <Typography
                        component={'div'}
                        variant="h6"
                        sx={{ fontSize: 18, marginTop: 2 }}
                        color="text.primary"
                        gutterBottom
                      >
                        Song
                      </Typography>
                      <p>
                        Exercitationem accusamus maiores laborum esse esse. Aliquam aut atque voluptatem incidunt quo
                        asperiores. Tempora tempore soluta adipisci labore.
                      </p>
                    </div>

                    <Typography component={'div'} variant="h6" sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                      Artist bio
                    </Typography>
                    <p>
                      Est vel non iusto. Ut et laudantium. Aut esse voluptatem distinctio est quidem minus cum vitae
                      ipsum. Eos deserunt facere voluptatem fuga et voluptatem ut. Assumenda ratione sint. Earum
                      doloribus deserunt accusantium fuga.
                    </p>
                    <p>
                      Veniam quibusdam veniam et tenetur eos. Labore et asperiores omnis totam voluptas suscipit quas.
                      Facere sunt odit accusamus sunt quasi porro repudiandae. Quaerat repellat sunt. Sed quae et
                      aliquam impedit ab.
                    </p>
                    <p>
                      {' '}
                      Iusto natus commodi esse non doloremque. Vitae assumenda et. Sint non sed expedita tempora esse.
                      Suscipit nesciunt reiciendis voluptatum quibusdam ipsam sint inventore ut a. Adipisci qui tempora
                      consectetur nemo minus dolor qui rem rerum. Nihil deserunt at voluptas ut autem est corporis.
                    </p>
                  </CardContent>
                </Card>
                <Card sx={{ width: '25%', marginLeft: '10%', display: 'flex', flexDirection: 'column' }} elevation={0}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '340px',
                      width: '100%',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      objectFit: 'cover',
                    }}
                    image={image2}
                    alt="green iguana"
                  />
                  <CardContent sx={{ backgroundColor: '#f8f8f8', marginTop: '25px', borderRadius: '15px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <img src={quote} alt="quote" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: 18, color: '#000005', fontWeight: 'bold' }}
                    >
                      I could bet all of the riches <br /> that I ever had
                      <br /> Rushing the night like a<br /> shockwave wouldn't be bad
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Under construction
            </TabPanel>
            <TabPanel value={value} index={2}>
              Under construction
            </TabPanel>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default App;
