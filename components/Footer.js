// components/Footer.js

import Link from 'next/link'

function getYear() {
  return new Date().getFullYear();
}

  const Footer = () => (

    <footer>

      <div class="container">
        <p>&copy; {getYear()} Lucas Menezes</p>
        {/* <p><Link href="/privacy"><a accessKey="6">privacy</a></Link></p> */}
      </div>
		
    </footer>

  );
  
  export default Footer;