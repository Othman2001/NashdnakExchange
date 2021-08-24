/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */

const UsColnumRender = (info = [
  { title: 'Multiple Brokage Options', desc: 'Scelerisque diam ortis ut phasellus exorci posuere mollis tellus ia lorrem pharetra dolordui.' },
  { title: 'Convenience', desc: 'Necscelerisque diam ortis ut phasellus exorci one posuere mollis tellus ia lorrem pharetra.' },
  { title: 'Expert Research Recommendations', desc: 'Elerisque diam ortisut phasellus exorci posuere one mollis tellusia lorrem desones deroits.' },
]) => info.map((inf, index) => (
  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={index}>
    <h3 className="Us-title">
      {' '}
      {inf.title}
    </h3>
    <p>
      {' '}
      {inf.desc}
    </p>
  </div>
));
export default UsColnumRender;
