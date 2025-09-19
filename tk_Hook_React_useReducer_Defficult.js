import { useReducer } from "react";

// state khởi tạo
const initState = {
  job: "",
  jobs: []
};

// action types
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

// action creators
const setJob = (payload) => ({ type: SET_JOB, payload });
const addJob = (payload) => ({ type: ADD_JOB, payload });
const deleteJob = (payload) => ({ type: DELETE_JOB, payload }); // payload = index

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs
      };
    default:
      throw new Error("Invalid action");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const handleAdd = () => {
    if (job.trim() === "") return; // không thêm job rỗng
    dispatch(addJob(job));
    dispatch(setJob("")); // reset input
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        value={job}
        placeholder="Search"
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => dispatch(deleteJob(index))}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
