import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <>
      {course.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content course={course} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
