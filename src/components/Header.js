import Nav from './Nav'
import Logo from './Logo'

export default function Header() {
    return (
        <header className="container header">
            <Logo />
            <Nav />
        </header>
    )
}