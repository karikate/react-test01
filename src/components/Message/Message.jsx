const Message = ({ message, author = 'Defoult Author' }) => {
  return (
    <div>
      <h3>{message}</h3>
      <p>Author: {author}</p>
    </div>
  );
};

export default Message;
