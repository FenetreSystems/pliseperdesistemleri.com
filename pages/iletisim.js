import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>İletişim - Plise Perde Sistemleri</title>
        <meta name="description" content="Plise Perde Sistemleri - İletişim bilgileri, telefon, WhatsApp ve adres." />
        <meta name="keywords" content="iletişim, telefon, whatsapp, adres, plise perde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/iletisim" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              İletişime <span className="text-primary">Geçin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Plise perde çözümleriniz hakkında sorularınız varsa, uzman ekibimiz 24/7 size yardımcı olmaya hazır. Hızlı yanıt ve profesyonel hizmet garantilidir.
            </p>
          </div>
        </section>

        {/* İletişim Yolları */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Bize Ulaşmanın <span className="text-primary">Yolları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                En uygun iletişim yönteminizi seçin. Tüm kanallardan hızlı ve profesyonel yanıt alacaksınız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 001.516 5.394c1.487 2.386 3.83 4.068 6.529 4.235.359.025.728.036 1.101.036 1.231 0 2.416-.195 3.514-.57l.366-.106 3.626 1.143-.923-3.723.231-.369a9.884 9.884 0 001.242-5.45c-.963-5.431-5.922-9.362-11.313-9.362"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">WhatsApp</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  En hızlı iletişim yöntemi. Görüntülü görüşme ve anında yanıt imkanı ile 24/7 ulaşabilirsiniz.
                </p>
                <a href="https://wa.me/905403363873" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block w-full text-center">
                  WhatsApp ile Yazın
                </a>
                <p className="text-sm text-gray-600 mt-4 text-center">+90 540 336 3873</p>
              </div>

              {/* Telefon */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Telefon</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Doğrudan konuşmak istiyorsanız telefon ile arayabilirsiniz. Pazartesi-Cuma 09:00-18:00 arası hizmet veriyoruz.
                </p>
                <a href="tel:+905403363873" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block w-full text-center">
                  Telefon Ara
                </a>
                <p className="text-sm text-gray-600 mt-4 text-center">+90 540 336 3873</p>
              </div>

              {/* Adres */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Ofis Adresi</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Gebze'deki modern üretim tesisimizi ziyaret edebilirsiniz. Ürünleri görebilir ve danışmanlık alabilirsiniz.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-semibold">
                    Cumhuriyet Mah. 2233 Sok. No:4/A<br/>
                    Gebze / Kocaeli<br/>
                    Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Çalışma Saatleri */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Çalışma Saatleri</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-secondary mb-2">Pazartesi - Cuma</h3>
                    <p className="text-gray-700 text-lg">09:00 - 18:00</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-secondary mb-2">Cumartesi</h3>
                    <p className="text-gray-700 text-lg">10:00 - 16:00</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-secondary mb-2">Pazar</h3>
                    <p className="text-gray-700 text-lg">Kapalı</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 mt-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Acil Durumlarda:</strong> WhatsApp ile 24/7 iletişime geçebilirsiniz. Hızlı yanıt garantilidir.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Hizmet Bölgeleri</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-secondary mb-3 text-lg">İstanbul</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Anadolu ve Avrupa yakasında tüm ilçelerde yerinde ölçü ve montaj hizmeti sunuyoruz. 1-2 gün içinde hizmet sağlanır.
                    </p>
                    <a href="/hizmet-bolgeler/istanbul" className="text-primary font-semibold text-sm hover:underline">
                      Detaylı Bilgi →
                    </a>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="font-bold text-secondary mb-3 text-lg">Kocaeli</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Gebze merkez ofisimizden Kocaeli'nin tüm ilçelerine hızlı ve güvenilir hizmet sağlıyoruz. Aynı gün hizmet imkanı mevcuttur.
                    </p>
                    <a href="/hizmet-bolgeler/kocaeli" className="text-primary font-semibold text-sm hover:underline">
                      Detaylı Bilgi →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Sıkça Sorulan Sorular</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-secondary">
                  Yerinde ölçü hizmeti kaç gün sonra yapılır?
                </summary>
                <p className="text-gray-600 mt-3 text-sm">
                  İstanbul ve Kocaeli bölgelerinde 1-2 gün içinde yerinde ölçü hizmeti yapılır. Acil durumlarda aynı gün hizmet sağlanabilir.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-secondary">
                  Montaj hizmeti ne kadar sürer?
                </summary>
                <p className="text-gray-600 mt-3 text-sm">
                  Basit montajlar 1-2 saatte, karmaşık projeler 1-2 gün içinde tamamlanır. Proje büyüklüğüne göre zaman değişebilir.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-secondary">
                  Ürün garantisi ne kadar sürer?
                </summary>
                <p className="text-gray-600 mt-3 text-sm">
                  Tüm ürünlerimiz 2 yıl garantilidir. Garantili dönemde herhangi bir sorun yaşanırsa ücretsiz onarım veya değişim yapılır.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-secondary">
                  Hizmet bölgesi dışında ürün gönderimi yapılır mı?
                </summary>
                <p className="text-gray-600 mt-3 text-sm">
                  Evet, Türkiye'nin her yerine kargo ile ürün göndeririz. Uluslararası teslimat için Avusturya'ya kadar 4-8 gün içinde gönderim yapılır.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition">
                <summary className="font-bold text-secondary">
                  Özel renk seçeneği var mı?
                </summary>
                <p className="text-gray-600 mt-3 text-sm">
                  Evet, 40+ standart renk ve sınırsız özel renk seçeneği sunuyoruz. Renk örnekleri için bize ulaşabilirsiniz.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Ürün Kataloğu</h3>
                <ul className="space-y-2">
                  <li><Link href="/urunler/yapiskan-plise-perde" className="text-primary hover:underline">Yapışkanlı Plise Perde</Link></li>
                  <li><Link href="/urunler/blackout-plise-perde" className="text-primary hover:underline">Blackout Plise Perde</Link></li>
                  <li><Link href="/urunler/gece-gunduz-plise-perde" className="text-primary hover:underline">Gece Gündüz Perde</Link></li>
                  <li><Link href="/urunler" className="text-primary hover:underline">Tüm Ürünler</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li><Link href="/hizmetler/yerinde-olcu" className="text-primary hover:underline">Yerinde Ölçü Hizmeti</Link></li>
                  <li><Link href="/hizmetler/yerinde-montaj" className="text-primary hover:underline">Profesyonel Montaj</Link></li>
                  <li><Link href="/hizmetler/kurumsal-cozumler" className="text-primary hover:underline">Kurumsal Çözümler</Link></li>
                  <li><Link href="/hizmetler" className="text-primary hover:underline">Tüm Hizmetler</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Kurumsal</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-primary hover:underline">Ana Sayfa</Link></li>
                  <li><Link href="/bayilik" className="text-primary hover:underline">Bayilik Programı</Link></li>
                  <li><Link href="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikası</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hemen İletişime Geçin
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Plise perde çözümleriniz için <strong>bugün</strong> bize ulaşın. Uzman ekibimiz size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905403363873" 
                className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block"
              >
                WhatsApp ile Yazın
              </a>
              <a 
                href="tel:+905403363873" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-secondary transition inline-block"
              >
                Telefon: +90 540 336 3873
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </>
  )
}
