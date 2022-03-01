import ContentLoader from 'react-content-loader';

const CardResultLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="150" y="31" rx="5" ry="5" width="140" height="20" />
    <rect x="150" y="59" rx="5" ry="5" width="140" height="20" />
    <rect x="150" y="86" rx="5" ry="5" width="140" height="20" />
    <rect x="150" y="115" rx="5" ry="5" width="140" height="20" />
    <rect x="0" y="17" rx="0" ry="0" width="140" height="138" />
  </ContentLoader>
);
export default CardResultLoader;
