/* eslint-disable react/prop-types */
const ButtonFollowingCard = ({
  text,
  buttonStyles,
  isFollowing,
  setIsFollowing,
}) => {
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button className={`${buttonStyles}`} onClick={handleClick}>
      <span className='tw-followCard-text'>{text}</span>
      <span className='tw-followCard-unFollow'>Dejar de seguir</span>
    </button>
  );
};

export default ButtonFollowingCard;
