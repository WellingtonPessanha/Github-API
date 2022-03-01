import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';
import CardResultLoader from './CardResultLoader';

type FormData = {
  user: string;
};

type UserProfile = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const GithubSearch = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        setUserProfile(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              className="search-input"
              placeholder="Usuário Github"
              value={formData.user}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <div className="container">
          <CardResultLoader />
        </div>
      ) : (
        userProfile && (
          <>
            <ResultCard
              avatar_url={userProfile.avatar_url}
              html_url={userProfile.html_url}
              followers={userProfile.followers}
              location={userProfile.location}
              name={userProfile.name}
            />
          </>
        )
      )}
    </div>
  );
};

export default GithubSearch;
