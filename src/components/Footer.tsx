export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-sm text-slate-600 dark:text-slate-300">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">Kadongo Resort</h4>
            <p className="mt-2">Mfangano Island, Lake Victoria<br />Kenya</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">Quick links</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="hover:text-primary dark:hover:text-primary-light">Home</a></li>
              <li><a href="/rooms" className="hover:text-primary dark:hover:text-primary-light">Rooms</a></li>
              <li><a href="/booking" className="hover:text-primary dark:hover:text-primary-light">Booking</a></li>
              <li><a href="/contact" className="hover:text-primary dark:hover:text-primary-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">Contact</h4>
            <p className="mt-2">Email: info@kadongoresort.com<br />Phone: +254 700 000000</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          © {new Date().getFullYear()} Kadongo Resort · Built with Next.js + Tailwind CSS + Firebase
        </div>
      </div>
    </footer>
  )
}
