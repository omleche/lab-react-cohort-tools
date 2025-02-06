import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";


import studentsData from "../assets/students.json";

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const [students, setStudents] = useState(studentsData);
 

  return (
    <div className="border-2 border-rose-500 m-2">
        <h1>Home Page</h1>
        <div className="flex justify-between items-center p-2 font-bold border-b w-full" >
          <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
          <span style={{ flexBasis: "20%" }}>Name</span>
          <span style={{ flexBasis: "20%" }}>Program</span>
          <span style={{ flexBasis: "20%" }}>Email</span>
          <span style={{ flexBasis: "20%" }}>Phone</span>
        </div>

      {students &&
        students.map((student) => {
          return (
            <Link to={`/students/${student._id}`}>
               <StudentCard key={student._id} {...student}  />
            </Link>

          );
        })}
    </div>
  );
}

export default HomePage;



// A link to /students/:studentId (Student Details Page) on each student list item in the list of students. The link should contain the student's _id as a URL parameter.
