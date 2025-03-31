import React,{useState,useEffect} from 'react';
import courses from '../data/courses';
import testimonials from '../data/testimonials';
const MainSection = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  
    useEffect(() => {
      const shuffledCourses = [...courses].sort(() => 0.5 - Math.random());
      setFeaturedCourses(shuffledCourses.slice(0, 3));
  
      const shuffledTestimonials = [...testimonials].sort(() => 0.5 - Math.random());
      setSelectedTestimonials(shuffledTestimonials.slice(0, 2));
    }, []);
  
    return (
      <main className="main-section">
        <section className="about-section">
        <h2>About LMS</h2>
        <p>
        The Learning Management System (LMS) allows students to view courses, attempt quizzes, and track their progress. It is designed to enhance the learning experience through an intuitive interface and helpful features.
        </p>
        </section>
  
        <section className="featured-courses">
          <h3>Featured Courses</h3>
          <div className="course-cards">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.name} height="100" />
                <h4>{course.name}</h4>
                <p>{course.instructor}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="testimonials">
          <h3>What Students Say</h3>
          {selectedTestimonials.map((t, idx) => (
            <div key={idx} className="testimonial">
              <p>"{t.review}"</p>
              <strong>- {t.studentName}, {t.courseName}</strong>
              <p>{"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}</p>
            </div>
          ))}
        </section>
      </main>
    );
  };
  
  export default MainSection;