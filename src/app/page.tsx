import LoginForm  from '@/app/loginform/page'
import  RegisterForm   from '@/app/registerform/page'
import Image from 'next/image'
import Dashboard from './dashboard/page'

export default function Home() {
  return (
    <main>
      <LoginForm />
      <Dashboard />
      <RegisterForm />
      {/* <RegisterForm /> */}
    </main>
  )
}
