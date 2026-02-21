import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  TextField,
  Stack,
  Divider,
  Avatar,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../logo.png';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openNewsletter, setOpenNewsletter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Categories', path: '/categories' },
    { label: 'Tutorials', path: '/tutorials' },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  /* ================= MOBILE DRAWER ================= */
  const drawer = (
    <Box sx={{ width: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="img" src={Logo} sx={{ height: 36 }} />
          <Typography fontWeight="bold" sx={{ color: '#000000' }}>AediaX</Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Search Bar for Mobile */}
      <Box component="form" onSubmit={handleSearch} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            sx: { borderRadius: '999px', bgcolor: '#F1F5F9' }
          }}
        />
      </Box>

      <List sx={{ mb: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 2,
              mb: 1,
              backgroundColor: location.pathname === item.path ? '#2563EB' : 'transparent',
              color: location.pathname === item.path ? 'white' : '#0F172A',
              '&:hover': {
                backgroundColor: '#2563EB',
                color: 'white',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />
      
      {/* Subscribe Button in Mobile Drawer */}
      <Button
        fullWidth
        onClick={() => {
          setOpenNewsletter(true);
          setMobileOpen(false);
        }}
        startIcon={<BookmarkIcon />}
        sx={{
          mt: 2,
          py: 1.2,
          borderRadius: '999px',
          fontWeight: 600,
          textTransform: 'none',
          background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #1D4ED8, #4338CA)',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
          },
        }}
      >
        Subscribe to Newsletter
      </Button>
    </Box>
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: 'all 0.4s ease',
          background: scrolled 
            ? 'rgba(255,255,255,0.85)' 
            : 'transparent', // Purely transparent at top
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>

            {/* LOGO */}
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
            >
              <Box component="img" src={Logo} alt="AediaX Logo" sx={{ height: 40 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: scrolled ? '#0F172A' : '#FFFFFF',
                  textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                AediaX
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                
                {/* Navigation Items */}
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Button
                      key={item.label}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: scrolled ? '#334155' : '#FFFFFF',
                        fontWeight: active ? 600 : 500,
                        fontSize: '0.95rem',
                        position: 'relative',
                        px: 1.5,
                        textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)',
                        '&::after': active
                          ? {
                              content: '""',
                              position: 'absolute',
                              bottom: 6,
                              left: '15%',
                              width: '70%',
                              height: 2,
                              backgroundColor: scrolled ? '#2563EB' : '#FFFFFF',
                              borderRadius: 2,
                              boxShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)',
                            }
                          : {},
                        '&:hover': {
                          color: scrolled ? '#2563EB' : '#E2E8F0',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}

                {/* Search Button */}
                <IconButton 
                  sx={{ 
                    ml: 1,
                    color: scrolled ? '#334155' : '#FFFFFF',
                    '&:hover': { color: '#2563EB' },
                    textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  <SearchIcon />
                </IconButton>

                {/* Subscribe Button */}
                <Button
                  onClick={() => setOpenNewsletter(true)}
                  startIcon={<BookmarkIcon />}
                  sx={{
                    ml: 1,
                    px: 2.5,
                    py: 1,
                    borderRadius: '999px',
                    fontWeight: 600,
                    textTransform: 'none',
                    background: scrolled
                      ? 'linear-gradient(135deg, #2563EB, #4F46E5)'
                      : 'rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                    backdropFilter: scrolled ? 'none' : 'blur(8px)',
                    border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.4)',
                    boxShadow: scrolled 
                      ? '0 8px 20px rgba(37,99,235,0.3)' 
                      : '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1D4ED8, #4338CA)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 12px 24px rgba(37,99,235,0.4)',
                    },
                  }}
                >
                  Subscribe
                </Button>

              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  sx={{ 
                    color: scrolled ? '#0F172A' : '#FFFFFF',
                    textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                  onClick={() => {}}
                >
                  <SearchIcon />
                </IconButton>
                <IconButton 
                  onClick={handleDrawerToggle} 
                  sx={{ 
                    color: scrolled ? '#0F172A' : '#FFFFFF',
                    textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* ================= NEWSLETTER SUBSCRIPTION POPUP ================= */}
      <Dialog
        open={openNewsletter}
        onClose={() => setOpenNewsletter(false)}
        fullWidth
        maxWidth="sm"
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.5)',
            p: 4,
          },
        }}
      >
        <DialogContent>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Avatar 
              sx={{ 
                width: 64, 
                height: 64, 
                bgcolor: '#2563EB', 
                margin: '0 auto 16px',
                boxShadow: '0 8px 20px rgba(37,99,235,0.3)'
              }}
            >
              <BookmarkIcon sx={{ fontSize: 32 }} />
            </Avatar>
            
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 1, 
                color: '#0F172A',
                letterSpacing: '-0.02em'
              }}
            >
              Subscribe to AediaX
            </Typography>
            
            <Typography sx={{ color: '#475569', mb: 2 }}>
              Get the latest AI insights and tech tutorials delivered to your inbox.
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Subscription Form */}
          <Stack spacing={2.5}>
            <TextField 
              label="Your Name" 
              fullWidth 
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: 'rgba(255,255,255,0.8)',
                }
              }}
            />
            
            <TextField 
              label="Email Address" 
              type="email"
              fullWidth 
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: 'rgba(255,255,255,0.8)',
                }
              }}
            />

            <Button
              startIcon={<SendIcon />}
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: '999px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                color: '#fff',
                background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1D4ED8, #4338CA)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 28px rgba(37,99,235,0.4)',
                },
              }}
            >
              Subscribe Now
            </Button>

            <Typography 
              variant="caption" 
              align="center" 
              sx={{ color: '#64748B', mt: 1 }}
            >
              No spam. Unsubscribe anytime.
            </Typography>

            <Button
              onClick={() => setOpenNewsletter(false)}
              sx={{
                py: 1,
                borderRadius: '999px',
                fontWeight: 600,
                textTransform: 'none',
                color: '#475569',
                '&:hover': { bgcolor: 'transparent', color: '#0F172A' }
              }}
            >
              Maybe Later
            </Button>
          </Stack>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;