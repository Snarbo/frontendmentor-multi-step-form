import Comment from './Comment';
import Classes from './Comments.module.css';

const Comments = ({ currentUser, data, controlData, modalData }) => {
  const handleControlData = (id, action, newScore, replyTo, replyText, editedText) => {
    controlData(id, action, newScore, replyTo, replyText, editedText);
  };

  const handleModalData = (id) => {
    modalData(id);
  };

  return (
    <div className={`comment ${Classes.comment}`}>
      <Comment
        id={data.id}
        currentUser={currentUser}
        score={data.score}
        avatar={data.user.image.png}
        username={data.user.username}
        date={data.date}
        content={data.content}
        controlData={handleControlData}
        modalData={handleModalData}
      />
      {data.replies && (
        <div className={`comment-replies relative max-[375px]:pl-[18px] min-[375px]:pl-[90px]  ${Classes['comment-replies']}`}>
          {data.replies.map((reply) => (
            <Comment
              key={reply.id}
              id={reply.id}
              currentUser={currentUser}
              score={reply.score}
              avatar={reply.user.image.png}
              username={reply.user.username}
              date={reply.date}
              replyTo={reply.replyingTo}
              content={reply.content}
              controlData={handleControlData}
              modalData={handleModalData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
