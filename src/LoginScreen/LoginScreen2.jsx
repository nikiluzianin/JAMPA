



const LoginScreen = props => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="w-full h-full absolute top-0 left-0">

      </div>
      <div
        id="login-page"
        className="flex flex-col items-center absolute top-0 left-0">
        <h2 className="text-5xl text-white font-bold tracking-wide capitalize text-center mt-20">
          MusicApp
        </h2>

        <div className="flex flex-col items-center justify-center mt-10">
          <button
            className="w-fit px-5 py-2 text-lg capitalize text-white bg-[#1ed760] rounded-full font-bold"
            onClick={props.click}>
            connect to Jampa
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
