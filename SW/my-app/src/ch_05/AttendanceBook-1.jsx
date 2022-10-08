import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}> {student.name}</li>; //id를 키값으로 사용함
            })}

            {/* {students.map((student, index) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>; //format된 문자열 == 키값
            })}

            {students.map((student, index) => {
                return <li key={index} > {student.name}</li>; //list 인덱스 == 키값
            })} */}
        </ul>
    );
}

export default AttendanceBook;