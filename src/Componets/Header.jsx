function Header() {
  return (
    <div className="w-full bg-teal-600 text-white flex flex-col items-center justify-center px-4 py-4">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        ToDo App
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-2xl">
        Today's actions build tomorrow's success.
      </p>
    </div>
  );
}

export default Header;
