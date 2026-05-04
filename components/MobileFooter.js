export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around px-4 py-3">
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
            <path d="M19.07 4.93L19.07 4.93c-2.01-2.01-4.68-3.12-7.52-3.12c-5.86 0-10.63 4.77-10.63 10.63c0 1.87.49 3.71 1.42 5.33L2 22l5.73-1.5c1.56.85 3.32 1.3 5.12 1.3c5.86 0 10.63-4.77 10.63-10.63C22.48 9.6 21.08 6.94 19.07 4.93zM12.85 19.65c-1.6 0-3.16-.42-4.54-1.21l-.33-.19l-3.4.89l.91-3.33l-.2-.32c-.85-1.35-1.3-2.91-1.3-4.5c0-4.87 3.96-8.83 8.83-8.83c2.36 0 4.58.92 6.25 2.59c1.67 1.67 2.59 3.89 2.59 6.25C21.68 15.69 17.72 19.65 12.85 19.65zM17.3 14.7c-.26-.13-1.56-.77-1.8-.86c-.24-.08-.42-.13-.59.13c-.17.26-.65.86-.8 1.04c-.14.17-.29.19-.55.06c-.26-.13-1.1-.41-2.1-1.3c-.78-.69-1.3-1.54-1.45-1.8c-.14-.26-.02-.4.11-.53c.11-.11.26-.29.39-.43c.13-.14.17-.24.26-.4c.08-.17.04-.31-.02-.43c-.06-.13-.59-1.42-.81-1.95c-.21-.51-.43-.44-.59-.45c-.15 0-.32 0-.49 0c-.17 0-.44.06-.67.31c-.24.26-.91.89-.91 2.17c0 1.28.93 2.52 1.06 2.69c.13.17 1.85 2.83 4.48 3.97c.62.27 1.11.43 1.49.55c.62.2 1.19.17 1.64.1c.5-.07 1.56-.64 1.78-1.25c.22-.61.22-1.13.15-1.25C17.72 14.89 17.56 14.83 17.3 14.7z"/>
          </svg>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
