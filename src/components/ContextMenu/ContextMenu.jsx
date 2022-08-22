import s from './ContextMenu.module.css';

const ContextMenu = ({ onEditClick, onRemoveClick }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} type="button" onClick={onEditClick}>
        Edit
      </button>
      <button className={s.btn} type="button" onClick={onRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
