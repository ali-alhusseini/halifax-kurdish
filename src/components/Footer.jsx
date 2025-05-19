export default function Footer() {
  return (
    <footer className="border-t mt-12">
     <div className="mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Halifax Kurdish Society. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
}