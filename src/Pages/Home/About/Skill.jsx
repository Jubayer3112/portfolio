import Progress from "./Progress";

const Skill = () => {
  return (
    <div>
      <div className="w-full">
        <Progress name="HTML" width={97} value={97} />
        <Progress name="CSS" width={95} value={95} />
        <Progress name="Java Script" width={50} value={50} />
        <Progress name="React" width={75} value={75} />
        <Progress name="Express" width={40} value={40} />
        <Progress name="Node JS" width={30} value={30} />
        <Progress name="Mongo DB" width={50} value={50} />
      </div>
    </div>
  );
};

export default Skill;
