const Education = () => {
  const data = [
    {
      date: "2025-2021",
      degree: "B.Tech Computer Science and Engineering",
      college: "RGUKT Srikakulam",
    },
    { date: "2019-2021", degree: "PUC", college: "RGUKT Srikakulam" },
  ];
  return (
    <div className="flex my-20 ml-20">
      <div className="w-3/5">
        <h1 className="text-5xl font-bold text-primary my-10">Education</h1>
        {data.map((ele, ind) => (
          <div
            key={ind}
            className="bg-orange-800 bg-opacity-60 hover:bg-opacity-100 p-5 rounded-xl flex my-4 cursor-pointer"
          >
            <div className="">
              <p className="font-semibold text-primary">{ele.date}</p>
              <h1 className="text-lg font-semibold">{ele.degree}</h1>
              <h2 className="text-lg font-semibold">{ele.college}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <img
          alt=""
          src="/images/study.svg"
          className="h-[60vh] w-full object-fill"
        />
      </div>
    </div>
  );
};

export default Education;
