import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Şirket Bilgisi */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Plise Perde Sistemleri</h3>
                <p className="text-sm text-gray-300">Türkiye'nin Lider Üreticisi</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              15 yıldan fazla tecrübesiyle premium kalitede plise perde üretimi ve satışı yapıyoruz. Ev, ofis, hastane, klinik, otel, yat ve daha birçok mekan türüne özel çözümler sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/905403363873" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition text-primary hover:text-secondary" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.07 4.93L19.07 4.93c-2.01-2.01-4.68-3.12-7.52-3.12c-5.86 0-10.63 4.77-10.63 10.63c0 1.87.49 3.71 1.42 5.33L2 22l5.73-1.5c1.56.85 3.32 1.3 5.12 1.3c5.86 0 10.63-4.77 10.63-10.63C22.48 9.6 21.08 6.94 19.07 4.93zM12.85 19.65c-1.6 0-3.16-.42-4.54-1.21l-.33-.19l-3.4.89l.91-3.33l-.2-.32c-.85-1.35-1.3-2.91-1.3-4.5c0-4.87 3.96-8.83 8.83-8.83c2.36 0 4.58.92 6.25 2.59c1.67 1.67 2.59 3.89 2.59 6.25C21.68 15.69 17.72 19.65 12.85 19.65zM17.3 14.7c-.26-.13-1.56-.77-1.8-.86c-.24-.08-.42-.13-.59.13c-.17.26-.65.86-.8 1.04c-.14.17-.29.19-.55.06c-.26-.13-1.1-.41-2.1-1.3c-.78-.69-1.3-1.54-1.45-1.8c-.14-.26-.02-.4.11-.53c.11-.11.26-.29.39-.43c.13-.14.17-.24.26-.4c.08-.17.04-.31-.02-.43c-.06-.13-.59-1.42-.81-1.95c-.21-.51-.43-.44-.59-.45c-.15 0-.32 0-.49 0c-.17 0-.44.06-.67.31c-.24.26-.91.89-.91 2.17c0 1.28.93 2.52 1.06 2.69c.13.17 1.85 2.83 4.48 3.97c.62.27 1.11.43 1.49.55c.62.2 1.19.17 1.64.1c.5-.07 1.56-.64 1.78-1.25c.22-.61.22-1.13.15-1.25C17.72 14.89 17.56 14.83 17.3 14.7z"/>
                </svg>
              </a>
              <a href="tel:+905403363873" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition text-primary hover:text-secondary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li><Link href="/hizmetler/yerinde-olcu" className="text-gray-300 hover:text-primary transition">Yerinde Ölçü</Link></li>
              <li><Link href="/hizmetler/yerinde-montaj" className="text-gray-300 hover:text-primary transition">Yerinde Montaj</Link></li>
              <li><Link href="/hizmetler/kurumsal-cozumler" className="text-gray-300 hover:text-primary transition">Kurumsal Çözümler</Link></li>
              <li><Link href="/hizmetler/ozel-tasarim" className="text-gray-300 hover:text-primary transition">Özel Tasarım</Link></li>
              <li><Link href="/hizmetler/toplu-uretim" className="text-gray-300 hover:text-primary transition">Toplu Üretim</Link></li>
            </ul>
          </div>

          {/* Ürünlerimiz */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Ürünlerimiz</h4>
            <ul className="space-y-3">
              <li><Link href="/urunler/yapiskan-plise-perde" className="text-gray-300 hover:text-primary transition">Yapışkanlı Plise</Link></li>
              <li><Link href="/urunler/blackout-plise-perde" className="text-gray-300 hover:text-primary transition">Blackout Plise</Link></li>
              <li><Link href="/urunler/honeycomb-perde" className="text-gray-300 hover:text-primary transition">Honeycomb Perde</Link></li>
              <li><Link href="/urunler/gece-gunduz-plise-perde" className="text-gray-300 hover:text-primary transition">Gece Gündüz</Link></li>
              <li><Link href="/urunler" className="text-gray-300 hover:text-primary transition font-semibold">Tüm Ürünler →</Link></li>
            </ul>
          </div>

          {/* Hizmet Bölgeleri */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Hizmet Bölgeleri</h4>
            <ul className="space-y-3">
              <li><Link href="/hizmet-bolgeler/istanbul" className="text-gray-300 hover:text-primary transition">İstanbul</Link></li>
              <li><Link href="/hizmet-bolgeler/kocaeli" className="text-gray-300 hover:text-primary transition">Kocaeli</Link></li>
              <li><Link href="/bayilik" className="text-gray-300 hover:text-primary transition">Bayilik Programı</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-primary transition">İletişim</Link></li>
            </ul>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-t border-gray-700">
          <div>
            <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Telefon
            </h4>
            <a href="tel:+905403363873" className="text-gray-300 hover:text-primary transition font-semibold">
              +90 540 336 3873
            </a>
            <p className="text-sm text-gray-400 mt-2">Pazartesi - Cuma: 09:00 - 18:00</p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.07 4.93L19.07 4.93c-2.01-2.01-4.68-3.12-7.52-3.12c-5.86 0-10.63 4.77-10.63 10.63c0 1.87.49 3.71 1.42 5.33L2 22l5.73-1.5c1.56.85 3.32 1.3 5.12 1.3c5.86 0 10.63-4.77 10.63-10.63C22.48 9.6 21.08 6.94 19.07 4.93zM12.85 19.65c-1.6 0-3.16-.42-4.54-1.21l-.33-.19l-3.4.89l.91-3.33l-.2-.32c-.85-1.35-1.3-2.91-1.3-4.5c0-4.87 3.96-8.83 8.83-8.83c2.36 0 4.58.92 6.25 2.59c1.67 1.67 2.59 3.89 2.59 6.25C21.68 15.69 17.72 19.65 12.85 19.65zM17.3 14.7c-.26-.13-1.56-.77-1.8-.86c-.24-.08-.42-.13-.59.13c-.17.26-.65.86-.8 1.04c-.14.17-.29.19-.55.06c-.26-.13-1.1-.41-2.1-1.3c-.78-.69-1.3-1.54-1.45-1.8c-.14-.26-.02-.4.11-.53c.11-.11.26-.29.39-.43c.13-.14.17-.24.26-.4c.08-.17.04-.31-.02-.43c-.06-.13-.59-1.42-.81-1.95c-.21-.51-.43-.44-.59-.45c-.15 0-.32 0-.49 0c-.17 0-.44.06-.67.31c-.24.26-.91.89-.91 2.17c0 1.28.93 2.52 1.06 2.69c.13.17 1.85 2.83 4.48 3.97c.62.27 1.11.43 1.49.55c.62.2 1.19.17 1.64.1c.5-.07 1.56-.64 1.78-1.25c.22-.61.22-1.13.15-1.25C17.72 14.89 17.56 14.83 17.3 14.7z"/>
              </svg>
              WhatsApp
            </h4>
            <a href="https://wa.me/905403363873" className="text-gray-300 hover:text-primary transition font-semibold" target="_blank" rel="noopener noreferrer">
              +90 540 336 3873
            </a>
            <p className="text-sm text-gray-400 mt-2">Hızlı yanıt ve görüntülü görüşme</p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              Adres
            </h4>
            <p className="text-gray-300">
              Cumhuriyet Mah. 2233 Sok. No:4/A<br/>
              Gebze / Kocaeli
            </p>
          </div>
        </div>

        {/* Önemli Linkler */}
        <div className="py-8 border-t border-gray-700">
          <h4 className="font-bold text-primary mb-4">Hızlı Linkler</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/" className="text-gray-300 hover:text-primary transition">Ana Sayfa</Link>
            <Link href="/urunler" className="text-gray-300 hover:text-primary transition">Ürünler</Link>
            <Link href="/hizmetler" className="text-gray-300 hover:text-primary transition">Hizmetler</Link>
            <Link href="/hizmet-bolgeler" className="text-gray-300 hover:text-primary transition">Hizmet Bölgeleri</Link>
            <Link href="/bayilik" className="text-gray-300 hover:text-primary transition">Bayilik</Link>
            <Link href="/iletisim" className="text-gray-300 hover:text-primary transition">İletişim</Link>
            <a href="/sitemap.xml" className="text-gray-300 hover:text-primary transition">Sitemap</a>
            <a href="/robots.txt" className="text-gray-300 hover:text-primary transition">Robots.txt</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/30 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Plise Perde Sistemleri. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/gizlilik-politikasi" className="hover:text-primary transition">Gizlilik Politikası</a>
              <a href="/kullanim-sartlari" className="hover:text-primary transition">Kullanım Şartları</a>
              <a href="/cerez-politikasi" className="hover:text-primary transition">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
