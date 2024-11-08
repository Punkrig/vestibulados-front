import Menu from '../components/Menu';
import { users } from '../constants'; // Certifique-se de que users está importado corretamente

const Roulette = () => {
  return (
    <div>
      <Menu />
      <div className='flex flex-col items-center mt-10'>
        <h1 className='font-bold text-4xl'>Roleta</h1>
        <div className="flex flex-col items-center mt-10 ">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 w-[500px] h-[40px] border border-black mb-5 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roulette;
