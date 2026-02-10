import {Paper, Title, Stack, Image, Box} from '@mantine/core';
import LoginForm from './_components/LoginForm';
import Footer from './_components/footer';

function Login(): JSX.Element {
  return (
    <main>
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
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
          {/* Top-left decorative logo */}
          <div
            style={{ position: 'absolute', right: '34vw', bottom: '30vh', width: '1000px', height: '1000px', overflow: 'hidden', pointerEvents: 'none', 
              zIndex: 0, opacity: 0.12,
            }}
          >
            <img
              src="/Schuler_Logo.png"
              alt="Schüler Track background"
              style={{
                width: '3500px',
                height: '1500px',
                objectFit: 'contain',
                display: 'block',
                marginLeft: '-18vw',
                marginTop: '-9vw',
              }}
            />
          </div>
          {/* Bottom-right decorative logo */}
          <Box
            style={{
              position: 'absolute',
              left: 500,
              top: 600,
              width: '1000px',
              height: '1000px',
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0.12,
            }}
          >
            <img
              src="/Schuler_Logo.png"
              alt="Schüler Track background bottom-right"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '5% center',
                display: 'block',
                margin: 0,
                transform: 'scale(1.1)', // zooms in by 10%
              }}
            />
          </Box>
          {/* Main content card */}
          <div className="mt-8 w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
            <Paper
              p={16}
              radius={20}
              w={{ base: '100%', sm: '90%', md: '70%', lg: '34vw' }}
              miw={320}
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                zIndex: 10,
                position: 'relative',
                minHeight: 'min(750px, 92vh)',
              }}
              className="w-full min-w-[320px] sm:min-w-[420px] max-w-[760px] lg:max-w-[34vw] min-h-[600px] sm:min-h-[700px] p-4 sm:p-8"
            >
              <Stack gap={24} style={{ width: '100%', maxWidth: '100%' }}>
                {/* Logo and Title Section */}
                <Box
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 w-full"
                  style={{ width: '100%', maxWidth: '100%' }}
                >
                  <Image
                    src="/image.png"
                    alt="School Logo"
                    mt={24}

                    w={140}
                    h={140}
                    fit="contain"
                    className="sm:w-[140px] sm:h-[140px] w-[140px] h-[140px]"
                  />
                  <Title
                    order={1}
                    mt={24}
                    className="sm:text-[48px] text-[36px] text-left font-extrabold"
                    style={{ color: '#3F3F46', lineHeight: '1.1' }}
                  >
                    School<br />Management<br />System
                  </Title>
                </Box>
                {/* Student Portal Title */}
                <Title
                  order={2}
                  size="40px"
                  fw={700}
                  mt={24}
                  mb={'xl'}
                  className="sm:text-[45px] text-[32px] text-center mb-8"
                  style={{ color: '#2563EB' }}
                >
                  Student Portal
                </Title>
                {/* Login Form */}
                <Box style={{ width: '100%', maxWidth: '100%' }}>
                  <LoginForm />
                </Box>
              </Stack>
            </Paper>
            <Footer />
          </div>
        </Box>
      </div>
    </main>
  );
}

export default Login;
