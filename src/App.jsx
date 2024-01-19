import TwitterFollowCard from './components/TwitterFollowCard';
import usersFollowInformation from './constants';

const App = () => {
  return (
    <main className=' w-[355px] min-h-60 flex flex-col  bg-[#16181C]  rounded-3xl  border-[#16181C]  '>
      <header className='flex  justify-start px-4 py-3'>
        <h2 className='text-white text-xl font-bold'>Tal vez te guste</h2>
      </header>

      {usersFollowInformation.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          name={user.name}
          initialIsFollowing={user.isFollowing}
        />
      ))}

      <footer>
        <a href='/'>
          <div className='flex  justify-start p-4 hover:bg-[#1D1F23] rounded-b-3xl'>
            <span className=' text-[#1d9bf0] text-sm font-normal '>
              Mostras más
            </span>
          </div>
        </a>
      </footer>
    </main>
  );
};

export default App;
