import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div className="logo">
                <h1>Logo</h1>
            </div>

            <div className="link-container">
                <Link className='link' href='/'>
                    Inicio
                </Link>
                <Link className="link" href='/pacientes'>
                    Pacientes
                </Link>
                {/* <Link className="link" href='/routing/nesting'>
                    Nesting
                </Link> */}
            </div>
        </ul>
    </nav>
  )
};

export default Navbar;