import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {

  let { user, login } = useContext( AuthContext )
  console.log( user, login );

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.svg" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
          <li>Login/</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/mario.jpg" width={966} height={276} />
      </div>
    </div>
  )
}