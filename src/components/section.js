function Section(props) {
  let image;
  if (props.image) {
    image = (
      <div className="col col-12 col-md-3">
        <img
          src={props.image.thumbnail}
          alt={props.label}
          className="img-fluid"
        />
      </div>
    );
  }

  const text = (
    <div className={props.image ? "col mt-3 col-12 col-md-9" : "col mt-3"}>
      <div
        className={
          props.imageDisplay === "left" ? "row justify-content-end" : "row"
        }
      >
        <div className="col col-md-auto">
          <h1>{props.displayName}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  );

  let content;
  if (!props.image) {
    content = text;
  } else if (props.imageDisplay === "left") {
    content = (
      <>
        {image}
        {text}
      </>
    );
  } else {
    content = (
      <>
        {text}
        {image}
      </>
    );
  }

  return <div className="row justify-content-md-center mb-5">{content}</div>;
}

export default Section;
