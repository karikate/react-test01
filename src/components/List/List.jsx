const List = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map(film => (
          <li key="id">{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
