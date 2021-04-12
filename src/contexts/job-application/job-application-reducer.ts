import {
  ADD_JOB_APPLICATION,
  DELETE_JOB_APPLICATION,
  SELECT_JOB_APPLICATION,
  UPDATE_JOB_APPLICATION,
  CLEAR_SELECTED_JOB_APPLICATION,
  GET_TOTAL_JOB_APPLICATIONS,
  GET_JOB_APPLICATIONS,
  SET_ERROR,
} from "./job-application-types";

const jobApplicationReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_JOB_APPLICATIONS: {
      return {
        ...state,
        jobApplications: action.payload.jobApplications,
        isLoading: false,
      };
    }
    case GET_TOTAL_JOB_APPLICATIONS: {
      return {
        ...state,
        totalJobApplications: action.payload.total,
      };
    }
    case ADD_JOB_APPLICATION: {
      return {
        ...state,
        jobApplications: [
          action.payload.jobApplication,
          ...state.jobApplications,
        ],
      };
    }
    case DELETE_JOB_APPLICATION: {
      const filterJobApplications = state.jobApplications.filter(
        (jobApplication: any) => jobApplication.id !== action.payload.id
      );
      return {
        ...state,
        jobApplications: filterJobApplications,
      };
    }
    case SELECT_JOB_APPLICATION: {
      return {
        ...state,
        selectedJobApplication: action.payload.jobApplication,
      };
    }
    case UPDATE_JOB_APPLICATION: {
      const newJobApplications = state.jobApplications.map(
        (jobApplication: any) =>
          jobApplication.id === action.payload.jobApplication.id
            ? { ...jobApplication, ...action.payload.jobApplication }
            : jobApplication
      );

      return {
        ...state,
        jobApplications: newJobApplications,
      };
    }
    case CLEAR_SELECTED_JOB_APPLICATION: {
      return {
        ...state,
        selectedJobApplication: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default jobApplicationReducer;
