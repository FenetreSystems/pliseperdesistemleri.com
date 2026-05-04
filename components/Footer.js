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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 001.516 5.394c1.487 2.386 3.83 4.068 6.529 4.235.359.025.728.036 1.101.036 1.231 0 2.416-.195 3.514-.57l.366-.106 3.626 1.143-.923-3.723.231-.369a9.884 9.884 0 001.242-5.45c-.963-5.431-5.922-9.362-11.313-9.362"/>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 001.516 5.394c1.487 2.386 3.83 4.068 6.529 4.235.359.025.728.036 1.101.036 1.231 0 2.416-.195 3.514-.57l.366-.106 3.626 1.143-.923-3.723.231-.369a9.884 9.884 0 001.242-5.45c-.963-5.431-5.922-9.362-11.313-9.362"/>
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
