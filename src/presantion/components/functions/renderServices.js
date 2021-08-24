/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import img1 from '../../service-icon1.png';
import img2 from '../../service-icon2.png';
import img3 from '../../service-icon3.png';
import img4 from '../../service-icon4.png';

const renderService = (services = [
  { title: 'Equity', desc: 'Nulla lorem risu elementum spoeircis atincid vestibulum esnean tempor stibullor non pelntesque.', img: img1 },
  { title: 'Comodity', desc: 'Nulla lorem risu elementum spoeircis atincid vestibulum esnean tempor stibullor non pelntesque.', img: img2 },
  { title: 'Nifty Future', desc: 'Posroin in tellusin libero one saculis sihoncus urabitur on ictumie libero elementum leous dapibus tortor.', img: img3 },
  { title: 'Curruncy', desc: 'Fussce asapien idur loremis svallise dapibuorem ipsum dolorese sitamet ectetur iscing elitra saero.', img: img4 },

]) => services.map((service, index) => (
  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 equal service-block " key={index}>
    <div className="outline">
      <div className="img">
        <img src={service.img} alt="service" />
      </div>
      <div className="title">
        <h2>
          {' '}
          {service.title}
          {' '}
        </h2>
        <p>
          {service.desc}
          {' '}
        </p>

      </div>
      <a href="#"> Read More</a>

    </div>
  </div>
));

export default renderService;
