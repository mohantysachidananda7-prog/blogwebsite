import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
  Divider,
  Link,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import BoltIcon from '@mui/icons-material/Bolt';
import SendIcon from '@mui/icons-material/Send';
import Logo from '../logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'AI Engineering', icon: <BoltIcon sx={{ fontSize: 18 }} />, url: '/ai-engineering' },
        { label: 'Cloud Native', icon: <CloudIcon sx={{ fontSize: 18 }} />, url: '/cloud-native' },
        { label: 'Edge Computing', icon: <CodeIcon sx={{ fontSize: 18 }} />, url: '/edge' },
        { label: 'Cybersecurity', icon: <SecurityIcon sx={{ fontSize: 18 }} />, url: '/security' },
        { label: 'Web3', icon: <BoltIcon sx={{ fontSize: 18 }} />, url: '/web3' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', url: '/docs' },
        { label: 'Tutorials', url: '/tutorials' },
        { label: 'Case Studies', url: '/case-studies' },
        { label: 'Whitepapers', url: '/whitepapers' },
        { label: 'API Reference', url: '/api' },

      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Blog', url: '/blog' },
        { label: 'Press', url: '/press' },
        { label: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Cookie Policy', url: '/cookies' },
        { label: 'Security', url: '/security' },
        { label: 'Compliance', url: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/aediax', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/company/aediax', label: 'LinkedIn' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/aediax', label: 'Twitter' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com/c/aediax', label: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        background: 'linear-gradient(145deg, #0B0F1A 0%, #030712 50%, #0F1320 100%)',
        color: '#E2E8F0',
        pt: { xs: 8, md: 12 },
        pb: 4,
        borderTop: '1px solid rgba(56,189,248,0.15)',
        boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
        overflow: 'hidden',
      }}
    >
      {/* Animated background grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* Glowing orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main footer content */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ maxWidth: 360 }}>
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="AediaX Logo"
                  sx={{
                    height: 44,
                    width: 'auto',
                    filter: 'brightness(1.2) drop-shadow(0 0 8px rgba(56,189,248,0.5))',
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 20px rgba(56,189,248,0.3)',
                  }}
                >
                  AediaX
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: '#94A3B8',
                  lineHeight: 1.7,
                  mb: 3,
                  fontSize: '0.95rem',
                }}
              >
                Engineering the future of digital intelligence through 
                cutting-edge AI systems, cloud-native architectures, 
                and scalable infrastructure.
              </Typography>

              {/* Newsletter subscription */}
              <Box
                sx={{
                  background: 'rgba(2,6,23,0.6)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  p: 2.5,
                  border: '1px solid rgba(56,189,248,0.15)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#F1F5F9',
                    mb: 1.5,
                    fontSize: '1rem',
                  }}
                >
                  Stay ahead of the curve
                </Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter your email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(15,23,42,0.8)',
                        borderRadius: '12px',
                        color: '#F1F5F9',
                        '& fieldset': {
                          borderColor: 'rgba(56,189,248,0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(56,189,248,0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#38BDF8',
                        },
                      },
                      '& input::placeholder': {
                        color: '#64748B',
                        opacity: 1,
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: '48px',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1D4ED8, #4338CA)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <SendIcon sx={{ fontSize: 20 }} />
                  </Button>
                </Stack>
              </Box>

              {/* Social links */}
              <Stack direction="row" spacing={1.5}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#94A3B8',
                      bgcolor: 'rgba(15,23,42,0.8)',
                      border: '1px solid rgba(56,189,248,0.15)',
                      padding: 1.2,
                      transition: '0.3s',
                      '&:hover': {
                        color: '#38BDF8',
                        bgcolor: 'rgba(56,189,248,0.1)',
                        borderColor: '#38BDF8',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 14px rgba(56,189,248,0.2)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Navigation columns */}
          {footerSections.map((section) => (
            <Grid item xs={6} sm={3} md={2} key={section.title}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  mb: 2.5,
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 30,
                    height: 2,
                    background: 'linear-gradient(90deg, #38BDF8, #818CF8)',
                    borderRadius: 2,
                  },
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: '0.2s',
                      '&:hover': {
                        color: '#38BDF8',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link.icon && link.icon}
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* CTA Column */}
          <Grid item xs={12} md={2}>
            <Typography
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2.5,
                fontSize: '1rem',
                letterSpacing: '0.5px',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: 'linear-gradient(90deg, #38BDF8, #818CF8)',
                  borderRadius: 2,
                },
              }}
            >
              Get Started
            </Typography>
            <Stack spacing={2}>
              <Button
                href="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1.2,
                  borderRadius: '12px',
                  color: '#F1F5F9',
                  bgcolor: 'rgba(56,189,248,0.1)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(56,189,248,0.2)',
                    borderColor: '#38BDF8',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Contact Sales
              </Button>
              <Button
                href="/docs"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1.2,
                  borderRadius: '12px',
                  color: '#F1F5F9',
                  bgcolor: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(99,102,241,0.2)',
                    borderColor: '#818CF8',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                Read Docs
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom section */}
        <Divider
          sx={{
            my: 5,
            borderColor: 'rgba(56,189,248,0.15)',
            borderWidth: '1px',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#64748B',
              fontSize: '0.85rem',
            }}
          >
            © {currentYear} AediaX Technologies. All rights reserved. 
            <Box
              component="span"
              sx={{
                display: { xs: 'block', sm: 'inline' },
                ml: { sm: 1 },
                color: '#38BDF8',
              }}
            >
              Innovate at scale.
            </Box>
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="/privacy"
              sx={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: '0.2s',
                '&:hover': {
                  color: '#38BDF8',
                },
              }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: '0.2s',
                '&:hover': {
                  color: '#38BDF8',
                },
              }}
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              sx={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: '0.2s',
                '&:hover': {
                  color: '#38BDF8',
                },
              }}
            >
              Cookies
            </Link>
            <Link
              href="/sitemap"
              sx={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: '0.2s',
                '&:hover': {
                  color: '#38BDF8',
                },
              }}
            >
              Sitemap
            </Link>
          </Stack>
        </Box>

        {/* Tech stack signature */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#475569',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              letterSpacing: '1px',
            }}
          >
            BUILT WITH
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              color: '#64748B',
              '& > *': {
                fontSize: '0.75rem',
                transition: '0.2s',
                '&:hover': {
                  color: '#38BDF8',
                },
              },
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>MUI</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Edge</span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;