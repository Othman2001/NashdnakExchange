/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import test1 from '../../testimonial1.jpg';
import test2 from '../../testimonial2.jpg';
import testt3 from '../../testimonial3.jpg';

const TestRender = (data = [
  {
    title: 'Good Service',
    desc:
     ' “I have only been with the stock pick system and short time and so for have had very good results. 34 trades with only one loss and that amount was only 1.35%”',
    image: test1,
    customerName: 'JOSE CHRONISTER',
    meta: 'customer',
  },
  {
    title: 'Great Discovery',
    customerName: 'LISA GREENE',
    meta: 'customer',
    desc: '“What a great discovery. This is what I have been looking for. I don’t want to Daytrade. On the other hand, I do not want to sit on it for a long time before I sell”',
    image: test2,
  },
  {
    title: 'Easy to Follow',
    customerName: 'KATHERYN BROWN',
    meta: 'customer',
    desc: '“After searching for a site with recommendations that make sense and easy to follow I finally found one. Took about profit first and I’m just getting into the system”',
    image: testt3,
  },
]) => data.map((test, index) => (
  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 h-100" key={index}>
    <div className="outline h-100">
      <div className="test-title">
        <span>
          {' '}
          {test.title}
        </span>
      </div>
      <div className="test-content">
        <p>
          {test.desc}
        </p>
        {' '}
        “
      </div>
      <div className="customer-box h-100">
        <div className="box-image">
          <img src={test.image} alt="test1 " />
        </div>
        <div className="box-info">
          <h3 className="customer-name">
            {' '}
            {test.customerName}
            {' '}
          </h3>
          <h4 className="customer-meta">
            {' '}
            {test.meta}
            {' '}
          </h4>
        </div>
      </div>
    </div>
  </div>
));
export default TestRender;
