import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="text-center">
      <h1 className="my-10 text-xl font-semibold text-stone-700 sm:my-20 text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
