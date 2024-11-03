import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Your Learning Dashboard</h1>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Your Courses</h5>
          <p className="card-text">
            Explore and enroll in courses tailored to your interests. Your learning journey begins here.
          </p>
          <a href="/courses" className="btn btn-secondary">Explore Courses</a>
        </div>
      </div>


      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Upcoming Tasks</h5>
          <ul>
            <li>Complete Week 3 assignments in 'Science Fundamentals.'</li>
            <li>Join the live discussion in 'Introduction to Coding' on Friday.</li>
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Your Achievements</h5>
          <p className="card-text">
            Celebrate your milestones and achievements on your learning journey.
          </p>
          <a href="/dashboard/achievements" className="btn btn-secondary">View Achievements</a>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
