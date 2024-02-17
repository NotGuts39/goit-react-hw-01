import './Profile.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profileContainer">
      <div>
        <img
          src={image}
          alt="User avatar"
          className="profileImage"
        />
        <p className="profileName">{name}</p>
        <p className="profileTag">@{tag}</p>
        <p className="profileLocation">{location}</p>
      </div>
    
      <ul className="profileStats">
        <li className="profileStatsItem">
          <span className="profileStatsName">Followers</span>
          <span className="profileStatsValue">{followers}</span>
        </li>
        <li className="profileStatsItem">
          <span className="profileStatsName">Views</span>
          <span className="profileStatsValue">{views}</span>
        </li>
        <li className="profileStatsItem">
          <span className="profileStatsName">Likes</span>
          <span className="profileStatsValue">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;