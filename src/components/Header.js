import Nav from './Nav'
import Logo from './Logo'
import Banner from './Banner'

export default function Header() {
    return (
        <header className="container header">
            <Logo />
            <Nav />
        </header>
    )
}