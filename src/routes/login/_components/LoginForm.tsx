import { useState } from 'react';
import { TextInput, PasswordInput, Button, Anchor, Stack, Text } from '@mantine/core';
import { User, Lock } from 'lucide-react';


function LoginForm(): JSX.Element {
  const [studentNumber, setStudentNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleForgotPassword = (): void => {
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '100%' }}>
      <Stack gap={16} style={{ width: '100%', maxWidth: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextInput
          label="Student Number"
          placeholder="Enter your student number"
          required
          value={studentNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentNumber(e.target.value)}
          leftSection={<User size={18} />}
          autoComplete="username"
          size="md"
          radius="md"
          className="mb-6"
          style={{ width: '100%' }} // Inputs expand to full card width.
        />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          leftSection={<Lock size={18} />}
          autoComplete="current-password"
          size="md"
          radius="md"
          className="w-full"
          style={{ width: '100%' }} // Inputs expand to full card width.


        />
        </div>
        <Anchor
          component="button"
          type="button"
          size="md"
          mr = {'xl'}
          onClick={handleForgotPassword}
          style={{ textAlign: 'right', color: '#2563EB' }}
          
        >
          Forgot Password?
        </Anchor>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="submit"
          fullWidth
          size="md"
          radius="md"
          style={{ backgroundColor: '#2563EB', width: '100%' }} // Button expands to full card width.
          className="mt-10 w-full"
        >
          Log In
        </Button>
        </div>
        <Text size="sm" c="dimmed" ta="center" style={{ whiteSpace: 'wrap' }}>
          Note: Temporary identifiers (OTP) sent to your email serve as your login credentials.
        </Text>
      </Stack>
    </form>
  );
}

export default LoginForm;
