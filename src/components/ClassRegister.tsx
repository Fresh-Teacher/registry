// src/components/ClassRegister.tsx
'use client';

import { useState, useEffect } from 'react';
import { Student } from '@/types/Student';
import { saveToLocalStorage, getFromLocalStorage } from '@/utils/localStorage';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

// Initial dummy data
const INITIAL_STUDENTS: Student[] = [
  {
    id: '1',
    firstName: 'Mutumba',
    lastName: 'Jesse Paul',
    grade: 'P5',
    attendance: false
  },
  {
    id: '2',
    firstName: 'Nalule',
    lastName: 'Rebecca',
    grade: 'P4',
    attendance: true
  },
  {
    id: '3',
    firstName: 'Musoke',
    lastName: 'Johnson',
    grade: 'P1',
    attendance: false
  },
  {
    id: '4',
    firstName: 'Namazzi',
    lastName: 'Vickie',
    grade: 'P2',
    attendance: true
  },
  {
    id: '5',
    firstName: 'Lubega',
    lastName: 'Henry',
    grade: 'P7',
    attendance: false
  }
];

export default function ClassRegister() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load students from local storage or use initial data
  useEffect(() => {
    const savedStudents = getFromLocalStorage<Student[]>('students');
    
    // If no saved students, use initial dummy data
    const studentsToLoad = savedStudents && savedStudents.length > 0 
      ? savedStudents 
      : INITIAL_STUDENTS;
    
    setStudents(studentsToLoad);
    saveToLocalStorage('students', studentsToLoad);
    setIsLoaded(true);
  }, []);

  // Add a new student
  const addStudent = (student: Student) => {
    // Ensure the new student has a unique ID
    const updatedStudents = [...students, {
      ...student,
      id: `student-${students.length + 1}-${Date.now()}`
    }];
    setStudents(updatedStudents);
    saveToLocalStorage('students', updatedStudents);
  };

  // Mark student attendance
  const toggleAttendance = (studentId: string) => {
    const updatedStudents = students.map(student => 
      student.id === studentId 
        ? { ...student, attendance: !student.attendance } 
        : student
    );
    setStudents(updatedStudents);
    saveToLocalStorage('students', updatedStudents);
  };

  // Prevent hydration mismatch
  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <StudentForm onAddStudent={addStudent} />
      <StudentList 
        students={students} 
        onToggleAttendance={toggleAttendance} 
      />
    </div>
  );
}