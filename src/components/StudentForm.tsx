// src/components/StudentForm.tsx
'use client';

import { useState } from 'react';
import { Student } from '@/types/Student';

interface StudentFormProps {
  onAddStudent: (student: Student) => void;
}

export default function StudentForm({ onAddStudent }: StudentFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!firstName.trim()) {
      setError('First Name is required');
      return;
    }

    if (!lastName.trim()) {
      setError('Last Name is required');
      return;
    }

    if (!grade.trim()) {
      setError('Grade is required');
      return;
    }

    // Validate grade format (optional, you can customize this)
    const gradeRegex = /^(\d{1,2})[A-Z]?$/;
    if (!gradeRegex.test(grade.trim())) {
      setError('Grade should be in format like 10, 11A, 12B');
      return;
    }

    const newStudent: Student = {
      id: '', // ID will be generated in the parent component
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade: grade.trim().toUpperCase(),
      attendance: false
    };

    onAddStudent(newStudent);

    // Reset form
    setFirstName('');
    setLastName('');
    setGrade('');
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
            Grade
          </label>
          <input
            id="grade"
            type="text"
            placeholder="Grade (e.g., 10A, 11B)"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}