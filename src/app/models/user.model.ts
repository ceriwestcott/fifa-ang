export interface SignUp {
  email: string;
  password: string;
  name: string;
}

export interface Login extends Pick<SignUp, 'email' | 'password'> {}
