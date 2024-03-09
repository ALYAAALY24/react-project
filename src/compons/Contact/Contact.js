
import { Button, Typography, Box, Grid, TextField, Link, } from "@mui/material";
import { useState } from 'react';
import Map from '../Map';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mtt2yim', ' template_9mp9z6n', form.current, {
        publicKey: 'F68ZcsRjVZtjpcKEb ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={sendEmail} ref={form} >
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            type="submit"
            sx={{
              mt: 2,
              bgcolor: "#2B3445",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Map />
    </Box>

  );

}