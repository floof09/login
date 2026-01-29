import { Container, Paper, Title, Stack, Image, Box, Text } from '@mantine/core';
import LoginForm from './_components/LoginForm';


function Login(): JSX.Element {
  return (
    <main>
      <Box
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)',
          padding: '20px',
          position: 'relative',
          
        }}
      >
        {/* box topleft*/}
            <div
  style={{
    position: 'absolute',
    left: -100,         
    top: -400,          
    width: 900,
    height: 1000,
    overflow: 'hidden',
    pointerEvents: 'none', 
    zIndex: 0,
    opacity: 0.12,     

  }}
>
  <img
    src="/schuler_logo.png"
    alt="Schüler Track background"
    style={{
      width: '3500px',
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
      marginLeft: '-450px',   
      marginTop: '-100px',

    }}
    
  />
  
</div>
      {/* box bottom-right (decorative, non-interactive) */}
      <div
        style={{
          position: 'absolute',
          right: -250, // adjust horizontal offset
          bottom: -220, // adjust vertical offset
          width: 900,
          height: 700,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.12,
        }}
      >
        <img
          src="/schuler_logo.png"
          alt="Schüler Track background bottom-right"
          style={{
            width: '3500px',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            marginLeft: '-350px',
            marginTop: '-179px'
          }}
        />
      </div>
      <Container size="sm" style={{ width: '100%', maxWidth: '660px' }}>
        <Paper
          p={32}
          radius={30}
          style={{
            minWidth: '665px',
            maxWidth: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
            borderRadius: '30px',
            zIndex: 10,
            minHeight: '750px',
            position: 'relative',


          }}
        >
          <Stack gap={24} align="center">
            {/* Logo and Title Section */}
            <Box style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <Image
                src="/image.png"
                alt="School Logo"
                w={150}
                h={150}
                fit="contain"
              />
              <Title
                order={1}
                size="40px"
                fw={700}
                style={{ lineHeight: '1', textAlign: 'left', color: '#3F3F46',}}
              >
                School<br />Management<br />System
              </Title>
            </Box>

            {/* Student Portal Title */}
            <Title
              order={2}
              size="45px"
              fw={650}
              style={{ color: '#2563EB', textAlign: 'center', marginBottom: '50px', }}
            >
              Student Portal
            </Title>

            {/* Login Form */}
            <Box style={{ width: '100%' }}>
              <LoginForm />
            </Box>
          </Stack>
        </Paper>

        {/* Footer */}
        <Box className="text-center mt-6">
          <Text size="sm" c="gray.7" mb={8} fw={500}>
            
            Powered by
          </Text>

          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {/* LEFT CROP*/}
            <div style={{ 
              width: '80px', 
              height: '30px', 
              overflow: 'hidden',
            }}>
              <img
                src="/schuler_logo.png"
                alt="Left"
                style={{
                  height: 'auto',
                  width: '150px',
                  display: 'block',
                  marginLeft: '-60px',
                    marginTop: '2px'

                }}

              />
            </div>

            {/* RIGHT CROP */}
            <div style={{ 
              width: '70px', 
              height: '20px', 
              overflow: 'hidden',
              marginTop: '7px',
              marginLeft: '-8px',

            }}>
              <img
                src="/schuler_logo.png"
                alt="Right"
                style={{
                  height: 'auto',
                  width: '150px',
                  display: 'block',
                  marginLeft: '-55px',
                  marginTop: '-26px',
                }}
              />
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
    </main>
  );
}

export default Login;
