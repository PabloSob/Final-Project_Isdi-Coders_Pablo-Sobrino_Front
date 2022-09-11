import NotFoundStyled from "./NotFoundStyled";

const NotFound = (): JSX.Element => {
  return (
    <NotFoundStyled>
      <section className="logo__container">
        <img
          className="logo__picture"
          src="/img/bitcoin-logo.png"
          alt="a crypto logo"
          height={"45pxpx"}
        />
        <span className="logo__text">Crypto Realm</span>
      </section>
      <h2 className="not-found__title">Wrong way</h2>
      <div className="not-found-warning__text__container">
        <p className="not-found-warning__text__title">404 PAGE NOT FOUND</p>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
