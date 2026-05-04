import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plise Perde Sistemleri - Türkiye'nin Lider Üreticisi | Premium Kalite</title>
        <meta name="description" content="Plise Perde Sistemleri - 15 yıldan fazla tecrübesiyle Türkiye'nin en güvenilir plise perde üreticisi. Premium kalitede ürünler, profesyonel montaj ve ölçü hizmetleri." />
        <meta name="keywords" content="plise perde, plise perde fiyatı, plise perde montaj, plise perde ölçü, blackout perde, honeycomb perde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white text-secondary py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  15 Yıldan Fazla Tecrübe
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Plise Perde <span className="text-primary">Sistemleri</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Türkiye'nin en güvenilir plise perde üreticisi olarak, ev, ofis, hastane, klinik, otel, yat, tekne ve daha birçok mekan türüne özel tasarlanmış premium kalitede çözümler sunuyoruz. Doğrudan üreticiden alışveriş yaparak en iyi fiyat ve hizmet kalitesini garantiliyoruz.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Yerinde ölçü, profesyonel montaj ve 24/7 müşteri desteği ile tam hizmet sağlıyoruz. Türkiye'den Avusturya'ya kadar 4-8 gün içinde güvenli ve sigortalı teslimat yapıyoruz. Tüm ürünlerimiz 2 yıl garantili ve sertifikalı malzemelerle üretilmiştir.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/905403363873" className="bg-primary text-secondary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition inline-block text-center">
                    WhatsApp ile Hemen İletişim Kurun
                  </a>
                  <a href="tel:+905403363873" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-secondary transition inline-block text-center">
                    Telefon: +90 540 336 3873
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl h-96 md:h-full flex items-center justify-center text-white text-center p-8 shadow-2xl">
                  <div>
                    <div className="text-7xl font-bold mb-6">PP</div>
                    <p className="text-2xl font-bold mb-4">Plise Perde Sistemleri</p>
                    <div className="space-y-3 text-sm">
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</span> Premium Kalite
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</span> Hızlı Teslimat
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</span> Profesyonel Montaj
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">✓</span> 2 Yıl Garantili
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-700 font-semibold">Yıl Tecrübe</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-gray-700 font-semibold">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Ürün Çeşidi</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Müşteri Desteği</p>
              </div>
            </div>
          </div>
        </section>

        {/* Neden Biz */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Neden <span className="text-primary">Plise Perde Sistemleri</span>'ni Seçmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Doğrudan üreticiden alışveriş yaparak %30-40 daha ucuz fiyatlar elde edin. Profesyonel ekibimiz, premium kaliteli ürünler ve mükemmel hizmet ile sektörde lider konumdayız. Binlerce memnun müşteri tarafından güvenilen markamız, her mekan türüne özel çözümler sunmaktadır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Doğrudan Üretim Avantajı</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aracı olmadan doğrudan üreticiden satın alarak %30-40 daha uygun fiyatlar elde edin. Toplu siparişlerde ek indirimler ve özel ödeme planları sunuyoruz. Stok ürünler anında gönderilir, özel siparişler ise 7-10 gün içinde hazırlanır.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> En uygun fiyatlandırma</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Toplu sipariş indirimleri</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Ödeme planı imkanı</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.52l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.34.24.52.49.52h4c.25 0 .46-.18.49-.52l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Profesyonel Montaj Ekibi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  15 yıldan fazla tecrübesiyle deneyimli montaj ekibimiz, tüm mekan türlerine uygun profesyonel kurulum hizmeti sunmaktadır. Yerinde ölçü hizmeti tamamen ücretsizdir. Montaj sonrası tam garantili işçilik ve ömür boyu teknik destek sağlıyoruz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Ücretsiz yerinde ölçü</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Garantili montaj işçiliği</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Ömür boyu destek</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5M5 9.5v3h5v-3H5m12 0v3h4.5L19 9.5h-2m2-7H3c-1.1 0-2 .9-2 2v11h2a3 3 0 013 3 3 3 0 013-3h6a3 3 0 013 3 3 3 0 013-3h2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Hızlı ve Güvenli Teslimat</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Türkiye'den Avusturya'ya kadar 4-8 gün içinde güvenli teslimat yapıyoruz. Tüm paketler sigortalı ve demonte şekilde paketlenir. Kargo takibi 24/7 mümkündür. Uluslararası gönderim hizmeti ile dünyanın her yerine ulaşabilirsiniz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> 4-8 gün teslimat</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Sigortalı paketleme</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Uluslararası gönderim</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Premium Kalite Garantisi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tüm ürünlerimiz uluslararası standartlarda sertifikalı malzemelerle üretilir. Kalite kontrol testlerinden geçen her ürün 2 yıl garantili olarak teslim edilir. Sertifikalı kumaş, alüminyum profiller ve hassas mekanizmalar kullanıyoruz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> 2 yıl garantili</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Kalite kontrol testleri</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Sertifikalı malzeme</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Özel Tasarım Çözümleri</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mekanınıza özel tasarlanmış, sınırsız renk ve desen seçenekleri ile üretim yapıyoruz. 40+ standart renk ve özel renk seçenekleri sunuyoruz. Kurumsal projeler için dedikeli proje müdürü atanır ve tam koordinasyon sağlanır.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> 40+ renk seçeneği</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Özel tasarım</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Proje yönetimi</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Bayilik Ortaklığı</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kazançlı bir iş kurmak istiyorsanız, bayilik programımız ile ortağımız olabilirsiniz. Yüksek kar marjı, pazarlama desteği ve teknik destek sağlıyoruz. Bölgesel satış hakkı ve münhasır dağıtım imkanları sunuyoruz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Yüksek kar marjı</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Pazarlama desteği</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Bölgesel satış hakkı</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Plise Perde <span className="text-primary">Kullanım Alanları</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Plise perdeler, ev, ofis, hastane, klinik, otel, yat, tekne, gemi, villa, yazlık, restoran, kafe, berber, kuaför, spor salonu, fitness merkezi ve daha birçok mekan türünde kullanılabilir. Her mekan türüne özel çözümler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'home', title: 'Konut', desc: 'Yatak odası, salon, mutfak, balkon, veranda ve tüm oda türleri' },
                { icon: 'building', title: 'Ofis', desc: 'Konferans odaları, özel ofisler, açık alanlar, yönetim odaları' },
                { icon: 'hospital', title: 'Hastane', desc: 'Hasta odaları, muayenehane, ameliyathaneler, yoğun bakım' },
                { icon: 'medical', title: 'Klinik', desc: 'Doktor odaları, bekleme alanları, tedavi odaları, laboratuvar' },
                { icon: 'hotel', title: 'Otel', desc: 'Oda perdesi, lobi, restoran, bar, konferans salonu' },
                { icon: 'beach', title: 'Yazlık', desc: 'Veranda, teras, bahçe, açık alanlar, balkon' },
                { icon: 'boat', title: 'Yat/Tekne', desc: 'Kabin pencereleri, salon, güverte alanları' },
                { icon: 'restaurant', title: 'Restoran', desc: 'Yemek alanı, özel bölümler, mutfak, bar' },
                { icon: 'salon', title: 'Kuaför/Berber', desc: 'Çalışma alanları, bekleme bölümü, özel kabinler' },
                { icon: 'fitness', title: 'Spor Salonu', desc: 'Antrenman alanları, soyunma odaları, ofis' },
                { icon: 'cinema', title: 'Sinema/Tiyatro', desc: 'Tam karanlık ortam, ses yalıtımı, profesyonel tasarım' },
                { icon: 'library', title: 'Kütüphane', desc: 'Okuma alanları, arşiv bölümleri, ışık kontrolü' },
              ].map((area, idx) => {
                const iconMap = {
                  home: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
                  building: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
                  hospital: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 11h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/></svg>,
                  medical: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>,
                  hotel: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h2v3h2v-3h12v3h2v-3h2V7z"/></svg>,
                  beach: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 2c1.93 0 3.5 1.57 3.5 3.5 0 1.04-.46 1.97-1.18 2.62.78.97 1.18 2.3 1.18 3.88 0 3.35-2.57 6-6 6s-6-2.65-6-6c0-1.58.4-2.91 1.18-3.88C2.96 7.47 2.5 6.54 2.5 5.5 2.5 3.57 4.07 2 6 2c1.04 0 1.97.46 2.62 1.18C9.59 2.4 10.92 2 12.5 2s2.91.4 3.88 1.18C17.03 2.46 17.96 2 18.5 2m0 2c-.83 0-1.5.67-1.5 1.5S16.67 7 17.5 7 19 6.33 19 5.5 18.33 4 17.5 4m-12 0c-.83 0-1.5.67-1.5 1.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4z"/></svg>,
                  boat: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20 21H4v-2h16v2zm-2-4H6v-5h12v5zm1-6H5l1-4h12l1 4z"/></svg>,
                  restaurant: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H19V2c-2.75 0-5 2.25-5 4z"/></svg>,
                  salon: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
                  fitness: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9L7 13v-2c0-.55.45-1 1-1h1V9.5C9 8.12 10.12 7 11.5 7c.55 0 1-.45 1-1V5.5c0-.55.45-1 1-1s1 .45 1 1v.5h2c.55 0 1 .45 1 1v3.5h1c.55 0 1 .45 1 1v2l-2.51 6.38c-.23.57-.85.95-1.49.95H10c-.64 0-1.26-.38-1.49-.95l-2.6-6.52z"/></svg>,
                  cinema: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zm-2 16h-8V5h8v14z"/></svg>,
                  library: <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H4V6zm16 7h-5v5h5v-5zm-7-6H6v5h7V7zm9 9h-4v4h4v-4z"/></svg>,
                };
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                    <div className="mb-4">{iconMap[area.icon]}</div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Malzeme Kalitesi */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                <span className="text-primary">Malzeme Kalitesi</span> ve Sertifikasyonlar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tüm ürünlerimiz uluslararası standartlarda sertifikalı malzemelerle üretilir. Kalite kontrol testlerinden geçen her ürün, uzun ömürlü ve güvenilir kullanım için tasarlanmıştır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-6">Kumaş Seçimi ve Özellikleri</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Polyester Kumaş</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Yüksek kaliteli polyester kumaş, dayanıklılığı ve renk atmayan özellikleri ile bilinir. Kolay temizlenebilir ve uzun ömürlü kullanım sağlar. Tüm ürünlerimizde kullanılan polyester, uluslararası standartlarda test edilmiştir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Keten Kumaş</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Doğal keten kumaş, premium görünüm ve nefes alan özellikleri ile tercih edilir. Çevre dostu ve biyolojik olarak parçalanabilir malzemedir. Uzun ömürlü ve zamanla daha güzel görünüme sahip olur.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Blackout Kumaş</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Işığı %99 oranında engelleyen blackout kumaş, tam karanlık ortam oluşturur. Yüksek ısı yalıtımı sağlayarak enerji tasarrufu yapılmasına yardımcı olur. Ses yalıtımı özellikleri ile dış gürültüyü azaltır.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Honeycomb Kumaş</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Hava boşluğu tasarımı ile maksimum ısı yalıtımı sağlayan honeycomb kumaş, enerji faturasında %40 tasarruf yapılmasını sağlar. Ses yalıtımı özellikleri ile dış sesleri %50 oranında azaltır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-6">Mekanizm ve Donanım Kalitesi</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Alüminyum Profiller</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Hafif, güçlü ve korozyona dayanıklı alüminyum alaşımı kullanıyoruz. Tüm profiller aerodinamik tasarım ile yapılmıştır. Rüzgar ve ısıya dayanıklı, uzun ömürlü kullanım sağlar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Hassas Mekanizma</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Yumuşak açılıp kapanma sistemi, kullanıcı deneyimini maksimum seviyeye çıkarır. Uzun ömürlü ve sessiz çalışma garantilidir. Tüm hareketli parçalar, yüksek kaliteli rulmanlar ile donatılmıştır.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Montaj Donanımı</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Paslanmaz çelik vidalar ve emniyetli tutturma sistemi kullanıyoruz. Tüm donanımlar, yüksek mukavemetli ve korozyona dayanıklı malzemelerden yapılmıştır. Profesyonel montajcılar tarafından test edilmiş.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Sertifikasyonlar</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Tüm ürünlerimiz, uluslararası kalite standartlarında sertifikalıdır. CE işareti, ISO sertifikaları ve Türk Standartları (TS) uyumludur. Bağımsız laboratuvarlarda test edilmiş.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-secondary mb-6">Kalite Kontrol Süreci</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="px-6 py-4 text-left font-bold">Kontrol Aşaması</th>
                      <th className="px-6 py-4 text-left font-bold">Açıklama</th>
                      <th className="px-6 py-4 text-left font-bold">Standart</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Kumaş Kontrolü</td>
                      <td className="px-6 py-4 text-gray-700">Kumaş kalitesi, renk, desen ve dayanıklılık testi</td>
                      <td className="px-6 py-4 text-gray-700">ISO 105</td>
                    </tr>
                    <tr className="border-b hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Mekanizm Testi</td>
                      <td className="px-6 py-4 text-gray-700">10.000 açılıp kapanma testi, ses ve yumuşaklık</td>
                      <td className="px-6 py-4 text-gray-700">ISO 9001</td>
                    </tr>
                    <tr className="border-b hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Ölçü Kontrolü</td>
                      <td className="px-6 py-4 text-gray-700">Tüm boyutlar hassas ölçüm cihazları ile kontrol</td>
                      <td className="px-6 py-4 text-gray-700">TS 1500</td>
                    </tr>
                    <tr className="border-b hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Isı Testi</td>
                      <td className="px-6 py-4 text-gray-700">Isı yalıtımı ve enerji tasarrufu testi</td>
                      <td className="px-6 py-4 text-gray-700">ISO 6946</td>
                    </tr>
                    <tr className="border-b hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Ses Testi</td>
                      <td className="px-6 py-4 text-gray-700">Ses yalıtımı ve akustik performans testi</td>
                      <td className="px-6 py-4 text-gray-700">ISO 717</td>
                    </tr>
                    <tr className="hover:bg-white/50">
                      <td className="px-6 py-4 font-semibold text-secondary">Son Kontrol</td>
                      <td className="px-6 py-4 text-gray-700">Paketleme, etiketleme ve teslimat hazırlığı</td>
                      <td className="px-6 py-4 text-gray-700">ISO 8015</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Renk Seçenekleri */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                <span className="text-primary">40+ Renk</span> Seçeneği
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Mekanınızın dekorasyonuna uygun, 40+ standart renk seçeneğinden birini seçebilir veya sınırsız özel renk seçenekleri ile üretim yapabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {[
                { name: 'Beyaz', color: '#ffffff' },
                { name: 'Krem', color: '#fffdd0' },
                { name: 'Açık Gri', color: '#d3d3d3' },
                { name: 'Gri', color: '#808080' },
                { name: 'Koyu Gri', color: '#404e5e' },
                { name: 'Siyah', color: '#000000' },
                { name: 'Açık Yeşil', color: '#90ee90' },
                { name: 'Yeşil', color: '#83bd81' },
                { name: 'Koyu Yeşil', color: '#2d5016' },
                { name: 'Açık Mavi', color: '#87ceeb' },
                { name: 'Mavi', color: '#4169e1' },
                { name: 'Koyu Mavi', color: '#00008b' },
                { name: 'Açık Kahve', color: '#d2b48c' },
                { name: 'Kahverengi', color: '#8b4513' },
                { name: 'Koyu Kahve', color: '#3e2723' },
                { name: 'Bej', color: '#f5f5dc' },
                { name: 'Açık Pembe', color: '#ffb6c1' },
                { name: 'Pembe', color: '#ff69b4' },
                { name: 'Kırmızı', color: '#ff0000' },
                { name: 'Turuncu', color: '#ffa500' },
                { name: 'Sarı', color: '#ffff00' },
                { name: 'Mor', color: '#800080' },
                { name: 'Açık Mor', color: '#dda0dd' },
                { name: 'Turkuaz', color: '#40e0d0' },
              ].map((color, idx) => (
                <div key={idx} className="text-center">
                  <div 
                    className="w-full h-24 rounded-lg mb-3 border-2 border-gray-300 shadow-md hover:shadow-lg transition"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <p className="font-semibold text-secondary text-sm">{color.name}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Tüm renklerde <strong>özel sipariş</strong> yapılabilir. Mekanınızın dekorasyonuna uygun, tamamen özelleştirilmiş renk seçenekleri sunuyoruz.
              </p>
              <a href="https://wa.me/905403363873" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
                Renk Örnekleri İçin İletişime Geçin
              </a>
            </div>
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                <span className="text-primary">Müşteri Yorumları</span> ve Deneyimleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Binlerce memnun müşteri tarafından güvenilen hizmetimiz. Gerçek müşteri deneyimleri ve yorumları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ahmet Yılmaz',
                  location: 'İstanbul, Maltepe',
                  rating: 5,
                  text: 'Plise Perde Sistemleri ile çalışmak harika bir deneyim oldu. Ölçüden montaja kadar her şey mükemmeldi. Ekip çok profesyonel ve hızlıydı. Evim çok güzel görünüyor şimdi. Kesinlikle tavsiye ederim.',
                  project: 'Yaşam Odası ve Yatak Odası'
                },
                {
                  name: 'Fatma Kaya',
                  location: 'Kocaeli, Gebze',
                  rating: 5,
                  text: 'Fiyatlar çok uygun ve kalite harika. Diğer yerlerden çok daha ucuz ve daha iyi hizmet aldım. Montaj ekibi çok düzgün çalıştı. Ürünler çok dayanıklı görünüyor. Teşekkürler, çok memnunum.',
                  project: 'Ofis Pencereleri'
                },
                {
                  name: 'Mehmet Şahin',
                  location: 'İstanbul, Beşiktaş',
                  rating: 5,
                  text: 'Hızlı teslimat ve güvenilir montaj. Evim çok güzel görünüyor. Çok memnunum. Arkadaşlarıma da tavsiye ettim. Kalite ve hizmet beklentilerimi çok aştı. Tekrar çalışmak istiyorum.',
                  project: 'Tüm Pencereler'
                },
                {
                  name: 'Ayşe Demir',
                  location: 'İstanbul, Kadıköy',
                  rating: 5,
                  text: 'Profesyonel ekip, kaliteli ürün ve mükemmel hizmet. Yerinde ölçü hizmeti ücretsiz olması çok iyi. Montaj çok temiz yapıldı. Hiç pişman değilim. Herkese tavsiye ediyorum.',
                  project: 'Yatak Odası'
                },
                {
                  name: 'Mustafa Arslan',
                  location: 'Kocaeli, Dilovası',
                  rating: 5,
                  text: 'Kurumsal projemiz için çalıştık. Çok profesyonel bir şekilde yönetildi. Zaman içinde teslim edildi. Kalite kontrol çok iyi. Tekrar çalışmak istiyorum. Tavsiye ederim.',
                  project: 'Ofis Projesi'
                },
                {
                  name: 'Zeynep Yıldız',
                  location: 'İstanbul, Avcılar',
                  rating: 5,
                  text: 'Yazlığımda kullandım. Çok memnunum. Kalitesi harika, fiyatı uygun. Montaj çok profesyonel yapıldı. Hiç sorun yaşamadım. Çok tavsiye ederim.',
                  project: 'Veranda'
                },
              ].map((review, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-secondary text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">"{review.text}"</p>
                  <p className="text-sm text-primary font-semibold">Proje: {review.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ürünler */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                <span className="text-primary">12 Farklı</span> Plise Perde Modeli
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Her mekan türüne özel tasarlanmış, premium kalitede plise perde çözümleri. Yapışkanlı, Blackout, Honeycomb, Gece Gündüz ve daha fazlası.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Yapışkanlı Plise Perde', slug: 'yapiskan-plise-perde' },
                { name: 'Blackout Plise Perde', slug: 'blackout-plise-perde' },
                { name: 'Karartmalı Plise Perde', slug: 'karartmali-plise-perde' },
                { name: 'Yarı Karartmalı Plise Perde', slug: 'yari-karartmali-plise-perde' },
                { name: 'Tam Karartmalı Plise Perde', slug: 'tam-karartmali-plise-perde' },
                { name: 'Tül Plise Perde', slug: 'tul-plise-perde' },
                { name: 'Keten Plise Perde', slug: 'keten-plise-perde' },
                { name: 'Honeycomb Perde', slug: 'honeycomb-perde' },
                { name: 'Düet Perde', slug: 'duet-perde' },
                { name: 'Pimapen Plise Perde', slug: 'pimapen-plise-perde' },
                { name: 'Cam Balkon Plise Perde', slug: 'cam-balkon-plise-perde' },
                { name: 'Gece Gündüz Plise Perde', slug: 'gece-gunduz-plise-perde' },
              ].map((product) => (
                <Link key={product.slug} href={`/urunler/${product.slug}`}>
                  <div className="bg-white rounded-lg p-6 hover:shadow-lg transition cursor-pointer border border-gray-200">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-32 mb-4 flex items-center justify-center text-white text-center">
                      <span className="text-sm font-semibold">{product.name}</span>
                    </div>
                    <h3 className="font-bold text-secondary mb-2">{product.name}</h3>
                    <span className="text-primary font-semibold text-sm">Detayları Gör →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/urunler" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
                Tüm Ürünleri Gör
              </Link>
            </div>
          </div>
        </section>

        {/* SSS Bölümü */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Sıkça Sorulan <span className="text-primary">Sorular</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Plise perdeler hakkında merak ettiklerinize cevaplar bulabilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Plise perde kaç yıl dayanır?',
                  a: 'Kaliteli bakım ile 10-15 yıl dayanabilir. Tüm ürünlerimiz 2 yıl garantilidir. Düzenli temizleme ve hafif yağlama ile ömrü uzatabilirsiniz.'
                },
                {
                  q: 'Yerinde ölçü hizmeti ücretsiz mi?',
                  a: 'Evet, İstanbul ve Kocaeli bölgelerinde yerinde ölçü hizmeti tamamen ücretsizdir. 1-2 gün içinde ekibimiz evinize gelir.'
                },
                {
                  q: 'Montaj hizmeti kaç gün sürer?',
                  a: 'Basit montajlar 1-2 saatte, karmaşık projeler 1-2 gün içinde tamamlanır. Montaj ekibimiz çok temiz çalışır.'
                },
                {
                  q: 'Özel renk seçeneği var mı?',
                  a: 'Evet, 40+ standart renk ve sınırsız özel renk seçeneği sunuyoruz. Mekanınızın dekorasyonuna uygun renk seçiminde danışmanlık yapıyoruz.'
                },
                {
                  q: 'Uluslararası kargo yapılır mı?',
                  a: 'Evet, Türkiye\'den Avusturya\'ya kadar 4-8 gün içinde güvenli teslimat sağlıyoruz. Tüm paketler sigortalıdır.'
                },
                {
                  q: 'Blackout perde tam karanlık sağlıyor mu?',
                  a: 'Evet, blackout kumaş ışığı %99 oranında engeller. Tam karanlık ortam oluşturur ve enerji tasarrufu sağlar.'
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition group">
                  <summary className="font-bold text-secondary text-lg flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition inline-block">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* İç Linkler Bölümü */}
        <section className="bg-white py-16 md:py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Ürün Kataloğu</h3>
                <ul className="space-y-2">
                  <li><Link href="/urunler/blackout-plise-perde" className="text-primary hover:underline">Blackout Plise Perde</Link></li>
                  <li><Link href="/urunler/honeycomb-perde" className="text-primary hover:underline">Honeycomb Perde</Link></li>
                  <li><Link href="/urunler/gece-gunduz-plise-perde" className="text-primary hover:underline">Gece Gündüz Perde</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li><Link href="/hizmetler/yerinde-olcu" className="text-primary hover:underline">Yerinde Ölçü Hizmeti</Link></li>
                  <li><Link href="/hizmetler/yerinde-montaj" className="text-primary hover:underline">Profesyonel Montaj</Link></li>
                  <li><Link href="/hizmetler/kurumsal-cozumler" className="text-primary hover:underline">Kurumsal Projeler</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Hizmet Bölgeleri</h3>
                <ul className="space-y-2">
                  <li><Link href="/hizmet-bolgeler/istanbul" className="text-primary hover:underline">İstanbul Hizmetleri</Link></li>
                  <li><Link href="/hizmet-bolgeler/kocaeli" className="text-primary hover:underline">Kocaeli Hizmetleri</Link></li>
                  <li><Link href="/iletisim" className="text-primary hover:underline">Tüm Bölgeler</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-100 to-gray-50 text-secondary py-16 md:py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Plise Perde Çözümleriniz İçin <span className="text-primary">Hemen İletişime Geçin</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Uzman ekibimiz, mekanınızın ihtiyaçlarına göre en uygun çözümü bulmanıza yardımcı olacaktır. Ücretsiz danışmanlık ve yerinde ölçü hizmeti sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905403363873" 
                className="bg-primary text-secondary px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition inline-block text-lg"
              >
                WhatsApp ile Yazın
              </a>
              <a 
                href="tel:+905403363873" 
                className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary hover:text-secondary transition inline-block text-lg"
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
