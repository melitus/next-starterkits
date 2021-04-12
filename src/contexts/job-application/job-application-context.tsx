import React, { createContext, useReducer, useContext, useMemo } from "react";
import {
  ManageJobApplication,
  JobApplication,
} from "interfaces/JobApplication";
import reducer from "./job-application-reducer";
import {
  ADD_JOB_APPLICATION,
  DELETE_JOB_APPLICATION,
  SELECT_JOB_APPLICATION,
  UPDATE_JOB_APPLICATION,
  CLEAR_SELECTED_JOB_APPLICATION,
  GET_JOB_APPLICATIONS,
  SET_ERROR,
  GET_TOTAL_JOB_APPLICATIONS,
} from "./job-application-types";
import { JobApplicationService } from "services/job-application-service";

interface InitialState {
  totalJobApplications: number;
  isLoading: boolean;
  error: string | null;
  jobApplications: JobApplication[];
  selectedJobApplication: null | JobApplication;
  getTotalJobApplications(): Promise<void>;
  getJobApplications(): Promise<void>;
  deleteJobApplication(id: string): Promise<void>;
  addJobApplication(jobApplication: ManageJobApplication): Promise<void>;
  selectJobApplication(jobApplication: JobApplication): Promise<void>;
  updateJobApplication(jobApplication: JobApplication): Promise<void>;
  clearSelectedJobApplication(): Promise<void>;
}

const initialState = {
  totalJobApplications: 0,
  jobApplications: [],
  isLoading: true,
  selectedJobApplication: null,
  error: null,
};

const JobApplicationContext = createContext<InitialState>({
  ...initialState,
  deleteJobApplication: async () => {},
  selectJobApplication: async () => {},
  updateJobApplication: async () => {},
  clearSelectedJobApplication: async () => {},
  addJobApplication: async () => {},
  getJobApplications: async () => {},
  getTotalJobApplications: async () => {},
});

export const JobApplicationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTotalJobApplications = async () => {
    const result = await JobApplicationService.getTotalJobApplications();
    dispatch({ type: GET_TOTAL_JOB_APPLICATIONS, payload: { total: result } });
  };

  const getJobApplications = async () => {
    try {
      const results = await JobApplicationService.getJobApplications();
      dispatch({
        type: GET_JOB_APPLICATIONS,
        payload: { jobApplications: results },
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: {
          error: error.message,
        },
      });
    }
  };

  const deleteJobApplication = async (id: string) => {
    await JobApplicationService.deleteJobApplication(id);
    dispatch({ type: DELETE_JOB_APPLICATION, payload: { id } });
  };

  const addJobApplication = async (jobApplication: ManageJobApplication) => {
    const result = await JobApplicationService.addJobApplication(
      jobApplication
    );
    dispatch({
      type: ADD_JOB_APPLICATION,
      payload: { jobApplication: result },
    });
  };

  const updateJobApplication = async (jobApplication: JobApplication) => {
    await JobApplicationService.updateJobAppication(jobApplication);
    dispatch({
      type: UPDATE_JOB_APPLICATION,
      payload: { jobApplication },
    });
  };

  const selectJobApplication = (jobApplication: JobApplication) => {
    dispatch({ type: SELECT_JOB_APPLICATION, payload: { jobApplication } });
  };

  const clearSelectedJobApplication = () => {
    dispatch({ type: CLEAR_SELECTED_JOB_APPLICATION });
  };

  const value = useMemo(
    () => ({
      ...state,
      getJobApplications,
      addJobApplication,
      deleteJobApplication,
      selectJobApplication,
      updateJobApplication,
      clearSelectedJobApplication,
      getTotalJobApplications,
    }),
    [state]
  );

  return (
    <JobApplicationContext.Provider value={value}>
      {children}
    </JobApplicationContext.Provider>
  );
};

export const useJobApplication = () => useContext(JobApplicationContext);
