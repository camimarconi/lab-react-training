function IdCard(props) {
  return (
    <div className="border idCard">
      <img src={props.picture} alt="user pic" />
      <div>
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height / 100}m
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
