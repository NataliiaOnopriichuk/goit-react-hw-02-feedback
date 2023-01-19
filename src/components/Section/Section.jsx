import s from './Section.module.css';
// import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};
