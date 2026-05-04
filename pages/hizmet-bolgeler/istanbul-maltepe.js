import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function MaltepePage() {
  return (
    <>
      <Head>
        <title>Maltepe Plise Perde - İstanbul | Profesyonel Montaj ve Ölçü</title>
        <meta name="description" content="Maltepe'de plise perde hizmetleri. Yerinde ölçü, profesyonel montaj, hızlı teslimat. 15 yıldan fazla tecrübe." />
        <meta name="keywords" content="plise perde Maltepe, montaj Maltepe, ölçü Maltepe, plise perde İstanbul, blackout perde, honeycomb perde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmet-bolgeler/istanbul-maltepe/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/hizmet-bolgeler/istanbul" className="text-primary font-semibold mb-4 inline-block hover:underline">
              ← İstanbul'a Dön
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Maltepe <span className="text-primary">Plise Perde</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Maltepe'nin en güvenilir plise perde hizmet sağlayıcısı. Yerinde ölçü, profesyonel montaj ve 2 yıl garantili ürünler ile hizmet veriyoruz. Maltepe'nin tüm mahallelerine 1-2 gün içinde ulaşabiliyoruz.
            </p>
          </div>
        </section>

        {/* Hizmet Alanları */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12">Maltepe'de Hizmet Verdiğimiz Mahalleler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Fenerbahçe',
                'Cevizli',
                'Bahçelievler',
                'Altayçeşme',
                'Bostancı',
                'Suadiye',
                'Erenköy',
                'Göztepe',
                'Merter',
                'Güzeltepe',
                'Ataşehir',
                'Koşuyolu'
              ].map((mahalle) => (
                <div key={mahalle} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-secondary mb-2">{mahalle}</h3>
                  <p className="text-gray-600 text-sm">Hızlı hizmet, profesyonel montaj, ücretsiz ölçü</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Biz */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12">Maltepe'de Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Hızlı Hizmet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maltepe'de bulunduğumuz için, çoğu zaman aynı gün veya ertesi gün hizmet sağlayabiliyoruz. Acil durumlarda 2-3 saat içinde montaj yapabiliyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Uzman Ekip</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maltepe bölgesinde 15 yıldan fazla tecrübesiyle tanınan ekibimiz, her türü projeyi profesyonelce yönetir. Müşteri memnuniyeti %99'un üzerindedir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Uygun Fiyatlar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Doğrudan üreticiden alışveriş yaparak %30-40 daha uygun fiyatlar sunuyoruz. Maltepe'de yaşayan müşterilerimize özel indirimler mevcuttur.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Garantili Hizmet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tüm ürünlerimiz 2 yıl garantilidir. Montaj işçiliği ömür boyu garantilidir. Herhangi bir sorun yaşanırsa ücretsiz onarım yapılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Maltepe Hakkında Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Maltepe\'de yerinde ölçü hizmeti kaç gün sonra yapılır?',
                  a: 'Maltepe\'de bulunduğumuz için, çoğu zaman 1 gün içinde yerinde ölçü hizmeti yapılır. Acil durumlarda aynı gün hizmet sağlanabilir.'
                },
                {
                  q: 'Maltepe\'de montaj ne kadar sürer?',
                  a: 'Basit montajlar 1-2 saatte, karmaşık projeler 1-2 gün içinde tamamlanır. Maltepe\'deki projelerimiz genellikle 1 gün içinde bitir.'
                },
                {
                  q: 'Maltepe\'de hangi ürünler stokta bulunur?',
                  a: 'Tüm 12 ürün türü stokta bulunur. Standart boyutlar anında gönderilir, özel boyutlar 3-5 gün içinde hazırlanır.'
                },
                {
                  q: 'Maltepe\'de teslimat ücreti var mı?',
                  a: 'Maltepe\'de teslimat ücretsizdir. 100 TL ve üzeri siparişlerde montaj hizmeti de ücretsizdir.'
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
        <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Maltepe'de Plise Perde <span className="text-primary">Çözümü</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Maltepe'de yaşayan müşterilerimiz, hızlı hizmet ve uygun fiyatlardan memnundur. Bugün bize ulaşın, yarın montaj yapılabilir.
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
