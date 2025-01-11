import React from 'react';
import styles from './schedule.module.css';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className={styles.feature}>
      <h2>Wedding Schedule</h2>

      <div>
        <h3>Day 1: Welcome &amp; Rehearsal Dinner</h3>
        <p>Join us for a welcome gathering and rehearsal dinner at [Venue]. Time: 6:00pm – 9:00pm.</p>
      </div>

      <div>
        <h3>Day 2: The Big Day</h3>
        <p>
          Celebrate with us on our wedding day! Ceremony at [Venue], followed by a reception. Time: 2:00pm – Midnight.
        </p>
      </div>

      <div>
        <h3>Day 3: Farewell Brunch</h3>
        <p>End the festivities with a relaxed brunch. Time: 10:00am – 1:00pm.</p>
      </div>
    </section>
  );
};

export default Schedule;
