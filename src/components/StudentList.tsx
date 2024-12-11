// src/components/StudentList.tsx
import { Student } from '@/types/Student';

interface StudentListProps {
  students: Student[];
  onToggleAttendance: (studentId: string) => void;
}

export default function StudentList({ 
  students, 
  onToggleAttendance 
}: StudentListProps) {
  // Calculate attendance statistics
  const totalStudents = students.length;
  const presentStudents = students.filter(student => student.attendance).length;
  const attendancePercentage = (presentStudents / totalStudents) * 100;

  return (
    <div className="bg-white shadow-md rounded">
      <div className="p-4 bg-gray-100 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Student List</h2>
          <div className="text-sm">
            <span>Total Students: {totalStudents}</span>
            <span className="ml-4">Present: {presentStudents}</span>
            <span className="ml-4">Attendance: {attendancePercentage.toFixed(1)}%</span>
          </div>
        </div>
      </div>
      
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Grade</th>
            <th className="p-3 text-center">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr 
              key={student.id} 
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="p-3">{student.firstName} {student.lastName}</td>
              <td className="p-3">{student.grade}</td>
              <td className="p-3 text-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={student.attendance}
                    onChange={() => onToggleAttendance(student.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm">
                    {student.attendance ? 'Present' : 'Absent'}
                  </span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}