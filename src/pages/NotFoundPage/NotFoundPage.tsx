import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import NotFound from "../../components/NotFound/NotFound";
import { LinkStyledNotFoundPage } from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NotFound />
      <LinkStyledNotFoundPage className="not-found-text">
        <span className="not-found-text__text">
          Something went wrong, let us bring you to the
          <Link to={"/login"}>
            <ButtonStyled className="button-link">homepage</ButtonStyled>
          </Link>
        </span>
      </LinkStyledNotFoundPage>
    </>
  );
};
export default NotFoundPage;
