import aboutImg from '../images/alexis.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>La relacion entre humano y tecnologia</h3>
          <p>
            La tecnologia marco un gran avance en la sociedad, por lo que, al desarrollar la capacidad de manejar estas tecnologias en la nueva era es nuestra mision.
          </p>
          <p>
            Estar a la altura del cambio siempre viene bien y nosotros siempre estamos actualizados, asi que los nuevos estudiantes tendran la mejor educacion, facil y siempre al tanto.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
