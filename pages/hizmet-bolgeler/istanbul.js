import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function Istanbul() {
  const districts = [
    {
      name: 'Maltepe',
      desc: 'Anadolu yakasının en gelişmiş ilçelerinden biri olan Maltepe\'de, modern konutlar, ofisler ve ticari mekanlar için plise perde çözümleri sunuyoruz. Hızlı ve profesyonel hizmet ile tanınırız.'
    },
    {
      name: 'Kartal',
      desc: 'Kartal bölgesinde yaşayan müşterilerimize yerinde ölçü ve montaj hizmetleri sağlıyoruz. Konut ve ticari projeler için özel tasarımlar yapıyoruz.'
    },
    {
      name: 'Pendik',
      desc: 'Pendik\'te bulunan konut ve ofis projelerine profesyonel plise perde çözümleri sunuyoruz. Aynı gün hizmet imkanı mevcuttur.'
    },
    {
      name: 'Tuzla',
      desc: 'Tuzla bölgesindeki müşterilerimize hızlı teslimat ve profesyonel montaj hizmeti sağlıyoruz. Endüstriyel ve ticari mekanlar için özel çözümler sunuyoruz.'
    },
    {
      name: 'Beşiktaş',
      desc: 'Beşiktaş\'ın merkezi konumundan yararlanarak, Avrupa yakasında hızlı ve güvenilir hizmet sunuyoruz. Lüks konutlar ve ofisler için premium çözümler.'
    },
    {
      name: 'Şişli',
      desc: 'Şişli bölgesinde yaşayan müşterilerimize profesyonel ölçü ve montaj hizmetleri sunuyoruz. Modern tasarımlar ve premium kaliteli ürünler.'
    },
    {
      name: 'Fatih',
      desc: 'Fatih\'in tarihi ve modern yapısına uygun plise perde çözümleri sunuyoruz. Hızlı kurulum ve güvenilir hizmet garantilidir.'
    },
    {
      name: 'Beyoğlu',
      desc: 'Beyoğlu\'nda bulunan konut, ofis ve ticari mekanlar için özel tasarlanmış çözümler sunuyoruz. Profesyonel ekip ve kaliteli ürünler.'
    },
    {
      name: 'Bakırköy',
      desc: 'Bakırköy bölgesinde aynı gün montaj hizmeti sunuyoruz. Konut ve ticari projeler için tam hizmet sağlıyoruz.'
    },
    {
      name: 'Zeytinburnu',
      desc: 'Zeytinburnu\'nda yaşayan müşterilerimize profesyonel ekip ile hizmet sunuyoruz. Hızlı ölçü ve montaj hizmeti.'
    },
    {
      name: 'Avcılar',
      desc: 'Avcılar bölgesinde hızlı ölçü ve montaj hizmeti sunuyoruz. Konut projelerine özel çözümler.'
    },
    {
      name: 'Kadıköy',
      desc: 'Kadıköy\'de merkez hizmet sunuyoruz. Modern tasarımlar ve premium kaliteli ürünler ile tanınırız.'
    },
  ]

  return (
    <>
      <Head>
        <title>İstanbul Plise Perde Hizmetleri - Yerinde Ölçü ve Montaj</title>
        <meta name="description" content="İstanbul'da plise perde montaj ve ölçü hizmetleri. Tüm ilçelerde profesyonel ekip. Maltepe, Kartal, Pendik, Tuzla, Beşiktaş ve daha fazlasında hizmet veriyoruz." />
        <meta name="keywords" content="plise perde İstanbul, montaj İstanbul, ölçü İstanbul, plise perde Maltepe, plise perde Kartal, plise perde Pendik, plise perde Tuzla" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmet-bolgeler/istanbul/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-secondary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              İstanbul <span className="text-primary">Hizmet Bölgesi</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              İstanbul\'un tüm ilçelerinde profesyonel plise perde montaj ve ölçü hizmetleri sunuyoruz. Anadolu ve Avrupa yakasında deneyimli ekibimiz, mekanınızın ihtiyaçlarına göre en uygun çözümü bulmanıza yardımcı olacaktır. Hızlı, güvenilir ve profesyonel hizmet taahhütümüz.
            </p>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <p className="text-gray-700 font-semibold">İlçe Hizmet</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1-2</div>
                <p className="text-gray-700 font-semibold">Gün Yanıt</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-700 font-semibold">Memnun Müşteri</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Müşteri Desteği</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Verilen İlçeler */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-center">
              Hizmet Verilen <span className="text-primary">İlçeler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              İstanbul\'un tüm ilçelerinde profesyonel plise perde montaj ve ölçü hizmetleri sunuyoruz. Her ilçeye özel çözümler ve hızlı hizmet garantilidir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {districts.map((district, idx) => {
                const districtSlug = district.name.toLowerCase().replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u');
                const detailLink = ['maltepe', 'kartal', 'pendik', 'tuzla'].includes(districtSlug) 
                  ? `/hizmet-bolgeler/istanbul-${districtSlug}`
                  : null;
                
                return (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                    <h3 className="text-2xl font-bold text-secondary mb-4">{district.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{district.desc}</p>
                    <div className="flex gap-3">
                      {detailLink ? (
                        <Link href={detailLink} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition text-center text-sm">
                          Detaylı Bilgi
                        </Link>
                      ) : (
                        <a href="https://wa.me/905403363873" className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition text-center text-sm">
                          Randevu Al
                        </a>
                      )}
                      <a href="tel:+905403363873" className="flex-1 border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition text-center text-sm">
                        Ara
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Neden İstanbul */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-center">
              İstanbul\'da Neden <span className="text-primary">Bizi Seçmelisiniz?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">⚡</span>
                  Hızlı Hizmet
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  İstanbul\'un merkezi konumundan yararlanarak, 1-2 gün içinde yerinde ölçü hizmeti sağlıyoruz. Acil durumlarda aynı gün hizmet imkanı mevcuttur. Montaj ekibimiz hızlı ve profesyonel çalışır.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">👥</span>
                  Deneyimli Ekip
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  15 yıldan fazla tecrübesiyle İstanbul\'da binlerce müşteriye hizmet vermiş ekibimiz. Tüm ilçelerde deneyimli montajcı ve ölçü uzmanlarımız bulunmaktadır.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">💰</span>
                  Uygun Fiyatlar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Doğrudan üreticiden alışveriş yaparak %30-40 daha uygun fiyatlar elde edin. İstanbul\'da yaşayan müşterilerimize özel indirimler sunuyoruz.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">✨</span>
                  Premium Kalite
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tüm ürünlerimiz 2 yıl garantili ve sertifikalı malzemelerle üretilir. Kalite kontrol testlerinden geçen her ürün, uzun ömürlü kullanım sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 text-center">
              Sıkça Sorulan <span className="text-primary">Sorular</span>
            </h2>

            <div className="space-y-4 mt-12">
              {[
                {
                  q: 'İstanbul\'da yerinde ölçü hizmeti kaç gün sonra yapılır?',
                  a: 'İstanbul\'da 1-2 gün içinde yerinde ölçü hizmeti yapılır. Acil durumlarda aynı gün hizmet sağlanabilir. Randevu alındıktan sonra uygun bir tarih belirlenir.'
                },
                {
                  q: 'Montaj hizmeti kaç gün sürer?',
                  a: 'Basit montajlar 1-2 saatte, karmaşık projeler 1-2 gün içinde tamamlanır. Proje büyüklüğüne göre zaman değişebilir. Montaj ekibimiz çok temiz çalışır.'
                },
                {
                  q: 'İstanbul\'un hangi ilçelerine hizmet veriyorsunuz?',
                  a: 'Maltepe, Kartal, Pendik, Tuzla, Beşiktaş, Şişli, Fatih, Beyoğlu, Bakırköy, Zeytinburnu, Avcılar, Kadıköy ve İstanbul\'un tüm ilçelerine hizmet veriyoruz.'
                },
                {
                  q: 'Hizmet bölgesi dışında teslimat yapılır mı?',
                  a: 'Evet, İstanbul dışında da kargo ile ürün göndeririz. Türkiye\'nin her yerine ve uluslararası teslimat yapıyoruz.'
                },
              ].map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition group">
                  <summary className="font-bold text-secondary text-lg flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-secondary to-slate-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              İstanbul\'da <span className="text-primary">Hemen İletişime Geçin</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz, mekanınızın ihtiyaçlarına göre en uygun çözümü bulmanıza yardımcı olacaktır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/905403363873" className="bg-primary text-secondary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition inline-block">
                WhatsApp ile İletişim
              </a>
              <a href="tel:+905403363873" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-secondary transition inline-block">
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
