import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { removeBook } from '../Redux/books/books';

const Differentbooks = (prop) => {
  const { title, category, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="display-container">
      <div className="firstpart">
        <ul className="gotteninfo">
          <li className="catinput">{category}</li>
          <li className="titinput">{title}</li>
          <p className="myname">Mucyo soda</p>
        </ul>
        <div className="lower-remove ">
          <button className="removebtn" type="button">Comments</button>
          <p className="breakk">|</p>
          <button className="removebtn" type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
          <p className="breakk">|</p>
          <button className="removebtn" type="button">Edit</button>
        </div>
      </div>
      <div className="loadsec">
        <span className="loadspin">
          <AiOutlineLoading3Quarters />
        </span>
        <div className="percentage-sec">
          <p className="percentage">64%</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <span className="blueline">|</span>
      <div className="chapter-section">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Introduction</p>
        <button className="updateprogress" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Differentbooks;
