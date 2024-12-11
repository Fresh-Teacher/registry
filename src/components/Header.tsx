// src/components/Header.tsx
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Classroom Register
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}