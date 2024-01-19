import { useState } from 'react';
import ButtonFollowingCard from './ButtonFollowingCard';

/* eslint-disable react/prop-types */
const TwitterFollowCard = ({
  userName,
  name = 'unkown',
  initialIsFollowing,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonStyles = isFollowing
    ? 'tw-followCard-Button-IsFollowing'
    : 'tw-followCard-Button';

  return (
    <div className='flex flex-row gap-4 w-full justify-between items-center hover:bg-[#1D1F23] px-4 py-3'>
      <div className='flex flex-row gap-2 items-center'>
        <div className='  bg-[rgb(26,26,26,0.15)]  '>
          <img
            className='rounded-full hover:opacity-90'
            src={`https://unavatar.io/${userName}`}
            alt={`Foto de perfil de ${userName}`}
            width={40}
            height={40}
          />
        </div>

        <div>
          <strong className='text-white hover:underline text-xs font-bold leading-normal text-start'>
            {name}
          </strong>
          <p className='text-[#989898] text-xs'>@{userName}</p>
        </div>
      </div>

      <aside className='flex justify-center items-center'>
        <ButtonFollowingCard
          text={text}
          buttonStyles={buttonStyles}
          setIsFollowing={setIsFollowing}
          isFollowing={isFollowing}
        />
      </aside>
    </div>
  );
};

export default TwitterFollowCard;
