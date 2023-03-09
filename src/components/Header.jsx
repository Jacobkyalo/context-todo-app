export const Header = (props) => {
  return (
    <>
      <h1 className="text-2xl text-green-500 text-center mb-6 font-semibold">
        {props.title}
      </h1>
    </>
  );
};
