const SkillItem = (props) => {
  return (
    <div className="skill-item">
      <img src={props.src} alt="skill" />
      <span>{props.skill}</span>
    </div>
  );
};

export default SkillItem;
