import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function GebzePage() {
  return (
    <>
      <Head>
        <title>Gebze Plise Perde - Kocaeli | Merkez Ofis | Profesyonel Montaj</title>
        <meta name="description" content="Gebze'de plise perde hizmetleri. Merkez ofisimiz Gebze'de bulunmaktadır. Aynı gün hizmet, profesyonel montaj, hızlı teslimat." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmet-bolgeler/kocaeli-gebze" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/hizmet-bolgeler/kocaeli" className="text-primary font-semibold mb-4 inline-block hover:underline">
              ← Kocaeli'ye Dön
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Gebze <span className="text-primary">Plise Perde</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Gebze'de merkez ofisimiz bulunmaktadır. Türkiye'nin en modern üretim tesislerinden biri olan Gebze'deki fabrikamızda, tüm ürünler üretilmektedir. Gebze'de yaşayan müşterilerimize özel hizmetler sunuyoruz.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12">Gebze'de Hizmet Verdiğimiz Mahalleler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Gebze Merkez',
                'Cumhuriyet',
                'Yenişehir',
                'Aydıntepe',
                'Kayabaşı',
                'Kışlacık',
                'Akçaova',
                'Kaynarca',
                'Yeşiltepe',
                'Çayırova',
                'Gümüşyaka',
                'Bahçeşehir'
              ].map((mahalle) => (
                <div key={mahalle} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-secondary mb-2">{mahalle}</h3>
                  <p className="text-gray-600 text-sm">Hızlı hizmet, profesyonel montaj, ücretsiz ölçü</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12">Gebze'de Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Merkez Ofis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Merkez ofisimiz Gebze'de bulunmaktadır. Gebze'de yaşayan müşterilerimiz, doğrudan ofisimizi ziyaret edebilir ve ürünleri görebilirler.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Üretim Tesisi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gebze'deki modern üretim tesisimizde, tüm ürünler üretilmektedir. Kalite kontrol ve üretim sürecini görebilirsiniz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Aynı Gün Hizmet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gebze'de bulunduğumuz için, çoğu zaman aynı gün ölçü ve montaj hizmeti sağlayabiliyoruz. Acil durumlarda 1-2 saat içinde hizmet yapılabilir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Uygun Fiyatlar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gebze'de yaşayan müşterilerimize özel fiyat indirimleri sunuyoruz. Toplu siparişlerde ek indirimler mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Gebze Hakkında Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Gebze\'de merkez ofisini ziyaret edebilir miyim?',
                  a: 'Evet, Gebze\'deki merkez ofisimizi ziyaret edebilirsiniz. Pazartesi-Cuma 09:00-18:00 saatleri arasında açık bulunmaktayız. Ürünleri görebilir ve danışmanlık alabilirsiniz.'
                },
                {
                  q: 'Gebze\'de üretim tesisini görebilir miyim?',
                  a: 'Evet, önceden randevu alarak üretim tesisimizi ziyaret edebilirsiniz. Üretim sürecini ve kalite kontrol işlemlerini görebilirsiniz.'
                },
                {
                  q: 'Gebze\'de montaj hizmeti ne kadar sürer?',
                  a: 'Basit montajlar 1-2 saatte, karmaşık projeler 1 gün içinde tamamlanır. Gebze\'deki projelerimiz genellikle aynı gün bitir.'
                },
                {
                  q: 'Gebze\'de teslimat ücreti var mı?',
                  a: 'Gebze\'de teslimat ücretsizdir. 100 TL ve üzeri siparişlerde montaj hizmeti de ücretsizdir.'
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

        <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Gebze'de Plise Perde <span className="text-primary">Çözümü</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Gebze'de yaşayan müşterilerimiz, aynı gün hizmet ve uygun fiyatlardan memnundur. Bugün bize ulaşın, bugün montaj yapılabilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/905403363873" className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition inline-block text-lg">
                WhatsApp ile Yazın
              </a>
              <a href="tel:+905403363873" className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition inline-block text-lg">
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
