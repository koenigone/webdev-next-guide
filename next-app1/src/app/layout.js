import './global.css';
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <nav>
            <Navbar />
          </nav>
          <h1>Welcome</h1>
        </header>
        {children}
        </div>
        <footer>
           <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}