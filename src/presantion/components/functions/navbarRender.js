/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
const navbarRender = (links = ['Home ', 'Blog', 'Service list', 'Trade', 'contact us', 'style guide']) => links.map((link, index) => (
  <div>
    <li className="nav-item list-item" key={index}>
      <a className="nav-link list-link" href="#">
        {link}
      </a>
    </li>
  </div>
));
export default navbarRender;
