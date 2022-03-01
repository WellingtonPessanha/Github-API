import './styles.css';

type Props = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const ResultCard = ({
  avatar_url,
  html_url,
  followers,
  location,
  name,
}: Props) => {
  return (
    <div className="container result-container">
      <div className="img-container">
        <img src={avatar_url} alt="" />
      </div>
      <div className="info-container">
        <h2>Informações</h2>
        <p>
          Perfil:{' '}
          <a href={html_url} target="blank">
            {html_url}
          </a>
        </p>
        <p>
          Seguidores: <span>{followers}</span>
        </p>
        <p>
          Localidade: <span>{location}</span>
        </p>
        <p>
          Nome: <span>{name}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
