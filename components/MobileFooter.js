export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-1">
          <div className="text-sm font-bold text-secondary">
            PP <span className="text-primary">Plise Perde</span>
          </div>
        </div>

        {/* Telefon */}
        <a 
          href="tel:+905403363873" 
          className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition flex-1"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="text-xs font-medium">Telefon</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/905403363873" 
          className="flex flex-col items-center gap-1 text-secondary hover:text-primary transition flex-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9.95 21.61 10.97 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.95l-.28-.15-2.89.44.44-2.89-.15-.27C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.3-12.3c-.3-.3-.78-.3-1.08 0l-1.5 1.5c-.3.3-.3.78 0 1.08l1.08 1.08c.3.3.3.78 0 1.08l-2.16 2.16c-.3.3-.78.3-1.08 0l-1.08-1.08c-.3-.3-.78-.3-1.08 0l-1.5-1.5c-.3-.3-.3-.78 0-1.08l1.08-1.08c.3-.3.3-.78 0-1.08l-2.16-2.16c-.3-.3-.3-.78 0-1.08l1.08-1.08c.3-.3.78-.3 1.08 0l1.5 1.5c.3.3.78.3 1.08 0l2.16-2.16c.3-.3.78-.3 1.08 0l1.08 1.08c.3.3.78.3 1.08 0l1.5 1.5c.3.3.3.78 0 1.08z"/>
          </svg>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
