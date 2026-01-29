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
    <form onSubmit={handleSubmit}>
      <Stack gap={16}>
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
        />

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
        />

        <Anchor
          component="button"
          type="button"
          size="sm"
          onClick={handleForgotPassword}
          style={{ textAlign: 'right', color: '#2563EB' }}
        >
          Forgot Password?
        </Anchor>

        <Button
          type="submit"
          fullWidth
          size="md"
          radius="md"
          style={{ backgroundColor: '#2563EB' }}
        >
          Log In
        </Button>

        <Text size="sm" c="dimmed" ta="center" style={{ whiteSpace: 'nowrap' }}>
          Note: Temporary identifiers (OTP) sent to your email serve as your login credentials.
        </Text>
      </Stack>
    </form>
  );
}

export default LoginForm;
