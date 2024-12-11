// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-6">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Classroom Register. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }