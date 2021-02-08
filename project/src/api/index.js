import axios from "axios";

const API_URL = "http://localhost:3001";
const ENDPOINTS = {
  stats: "stats",
  courses: "courses",
  instructors: "instructors"
};

export const fetchStats = () =>
    axios.get(`${API_URL}/${ENDPOINTS.stats}`).then(({ data }) => data);

export const fetchCourses = () =>
    axios.get(`${API_URL}/${ENDPOINTS.courses}`).then(({ data }) => data);

export const fetchInstructors = () =>
    axios
        .get(`${API_URL}/${ENDPOINTS.instructors}`)
        .then(({ data }) => data);