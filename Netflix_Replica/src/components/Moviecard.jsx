function Moviecard(props) {
  return (
    <div className="movie-card">
        <img src={props.image}
        alt={props.title}/>

      <span className="movie-number">
        {props.number}
      </span>
    </div>
  );
}

export default Moviecard;
