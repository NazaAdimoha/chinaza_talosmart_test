import { LoginForm } from '@/components/loginForm/page'
import { RegisterForm } from '@/components/registerForm/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <LoginForm />
      {/* <RegisterForm /> */}
    </main>
  )
}
