import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        py: 2,
        mt: 5,
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" gutterBottom>
        © 2024 Your Company. All rights reserved.
      </Typography>
      <Box>
        <IconButton
          sx={{ color: '#fff' }}
          aria-label="GitHub"
          href="https://github.com/your-profile"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={{ color: '#fff' }}
          aria-label="Twitter"
          href="https://twitter.com/your-profile"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{ color: '#fff' }}
          aria-label="LinkedIn"
          href="https://linkedin.com/in/your-profile"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Designed with ♥ by Your Name
      </Typography>
    </Box>
  );
};

export default Footer;
