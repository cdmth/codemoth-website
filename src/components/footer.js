import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Codemoth</strong>, yritys <a href="https://codemoth.fi">Codemoth Oy</a>. Sivuston koodi on vapaasti käytettävissä, mutta noudattaa lisenssiehtoja (
      <a target="_blank"  href="http://opensource.org/licenses/mit-license.php">MIT</a>). Sivuston sisältö on lisenssioitu <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
)

export default Header
