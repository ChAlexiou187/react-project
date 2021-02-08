import React, { useState, useEffect } from 'react';
import { fetchStats, fetchCourses} from '../api';
import { Grid, Typography } from '@material-ui/core';
const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const stats = await fetchStats();
      const courses = await fetchCourses();

      setStats(stats);
      setCourses(courses);
    }

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h1'>Welcome to Code.Hub Dashboard!</Typography>
        <Typography variant='body1'>Manage everything and have fun!</Typography>
      </Grid>
      <Grid item xs={12}>
        <ul>
          {stats ? (
              stats.map(stat => (
                  <li key={stat.id}>{stat.title} - {stat.amount}</li>
              ))
          ) : <p>loading</p>}
        </ul>
      </Grid>
      <Grid item xs={12}>
        <ul>
          {courses ? (
              courses.map(course => (
                  <li key={course.id}>{course.title}</li>
              ))
          ) : <p>loading</p>}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

