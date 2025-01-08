import "../blocks/App.css";

const Profile = ({ name, numberOfSavedArticles }) => {
  return (
    <div className="profile__container">
      <div className="profile__header1">
        <h3 className="profile__header1-text">Saved Articles</h3>
      </div>
      <div className="profile__header-greeting">
        <h1 className="profile__header-greeting-text">{`Hello ${name}, you have ${numberOfSavedArticles} saved articles `}</h1>
      </div>
    </div>
  );
};

export default Profile;
