const Features = () => {
  const birthDate = new Date('1996-07-06');
  const today = new Date();

  // Calculate the age
  let age = today.getFullYear() - birthDate.getFullYear();

  const isBirthdayPassed =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate());

  if (isBirthdayPassed) {
    // Subtract 1 from the age if the birthday has not occurred yet this year
    age--;
  }

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >

      <div className="flex flex-col gap-4 font-titleFont mb-5">
        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">About</h1>
      </div>

      <div>
        <p className="text-md md:text-md font-titleFont font-bold text-gray-300">
          Full Stack Web Developer with over <span className="text-md md:text-md font-titleFont font-bold text-designColor tracking-wide"> 2 years of experience.</span> I write efficient code using
          <span className="text-md md:text-md font-titleFont font-bold text-designColor tracking-wide"> MERN Stack.</span>  Passionate about web development and excited about building
          interactive and user-friendly websites. Skilled in collaboration, decision making, DS &
          Algo. Looking forward to an opportunity to work as a Full-stack developer/ Frontend
          developer with an exciting organization.
        </p>
        <p className="text-md md:text-md font-titleFont font-bold text-gray-300 mt-3">
          <span className="text-md md:text-md font-titleFont font-bold text-designColor tracking-wide">From:</span> Pattikonda, Andhra Pradesh, India
        </p>
        <p className="text-md md:text-md font-titleFont font-bold text-gray-300 mt-3">
          <span className="text-md md:text-md font-titleFont font-bold text-designColor tracking-wide">Age:</span> {age}
        </p>
        <p className="text-md md:text-md font-titleFont font-bold text-gray-300 mt-3">
          <span className="text-md md:text-md font-titleFont font-bold text-designColor tracking-wide">Gender:</span> Male
        </p>
      </div>

    </section>
  );
};

export default Features;
