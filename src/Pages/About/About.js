import React from "react";

const About = () => {
  return (
    <div className='about-body'>
      <section className='overview'>
        <h1>Overview</h1>
        <p className='p'>
          Web Vitals is an initiative by Google to provide unified guidance for
          quality signals that are essential to delivering a great user
          experience on the web.
        </p>
        <p className='p'>
          Google has provided a number of tools over the years to measure and
          report on performance. Some developers are experts at using these
          tools, while others have found the abundance of both tools and metrics
          challenging to keep up with.
        </p>
        <p className='p'>
          Site owners should not have to be performance gurus in order to
          understand the quality of experience they are delivering to their
          users. The Web Vitals initiative aims to simplify the landscape, and
          help sites focus on the metrics that matter most, the Core Web Vitals.
        </p>
        <p>
          When you instrument Performance with Web Vitals, you turn what was
          once a hunch into hard data. By visualizing those transactions
          specific to a user’s environment, device, and network speed, you can
          now see the actions that are slowing a user’s experience down. And
          with Performance’s dedicated Web Vital histograms, you can evaluate
          important frontend transactions against specific thresholds.
        </p>
      </section>
    </div>
  );
};
export default About;
