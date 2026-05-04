import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function CayirovaPage() {
  return (
    <>
      <Head>
        <title>Çayırova Plise Perde - Kocaeli | Profesyonel Montaj ve Ölçü</title>
        <meta name="description" content="Çayırova'da plise perde hizmetleri. Yerinde ölçü, profesyonel montaj, hızlı teslimat. 15 yıldan fazla tecrübe." />
        <meta name="keywords" content="plise perde Çayırova, montaj Çayırova, ölçü Çayırova, plise perde Kocaeli, blackout perde, honeycomb perde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmet-bolgeler/kocaeli-cayirova/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/hizmet-bolgeler/kocaeli" className="text-primary font-semibold mb-4 inline-block hover:underline">
              ← Kocaeli'ye Dön
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Çayırova <span className="text-primary">Plise Perde</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Çayırova'nın en güvenilir plise perde hizmet sağlayıcısı. Merkez ofisimize yakın olduğumuz için, çoğu zaman aynı gün hizmet sağlayabiliyoruz. Yerinde ölçü, profesyonel montaj ve 2 yıl garantili ürünler ile hizmet veriyoruz.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12">Çayırova'da Hizmet Verdiğimiz Mahalleler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Çayırova Merkez',
                'Cumhuriyet',
                'Yenişehir',
                'Aydıntepe',
                'Kayabaşı',
                'Kışlacık',
                'Akçaova',
                'Kaynarca',
                'Yeşiltepe',
                'Gümüşyaka',
                'Bahçeşehir',
                'Altınşehir'
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
            <h2 className="text-4xl font-bold text-secondary mb-12">Çayırova'da Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Hızlı Hizmet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Merkez ofisimize çok yakın olduğumuz için, çoğu zaman aynı gün ölçü ve montaj hizmeti sağlayabiliyoruz. Acil durumlarda 1-2 saat içinde hizmet yapılabilir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Uygun Fiyatlar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Çayırova'da yaşayan müşterilerimize özel fiyat indirimleri sunuyoruz. Toplu siparişlerde ek indirimler mevcuttur.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Stok Ürünler</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tüm 12 ürün türü stokta bulunur. Standart boyutlar anında gönderilir, özel boyutlar 3-5 gün içinde hazırlanır.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-4">Tam Destek</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ölçüden montaja, garantiye kadar tüm aşamalarda profesyonel destek sağlıyoruz. 24/7 WhatsApp desteği mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Çayırova Hakkında Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Çayırova\'nda yerinde ölçü hizmeti kaç saat sonra yapılır?',
                  a: 'Çayırova\'nda merkez ofisimize çok yakın olduğumuz için, çoğu zaman 1-2 saat içinde yerinde ölçü hizmeti yapılır. Aynı gün montaj da mümkündür.'
                },
                {
                  q: 'Çayırova\'nda montaj hizmeti ne kadar sürer?',
                  a: 'Basit montajlar 1-2 saatte, karmaşık projeler 1 gün içinde tamamlanır. Çayırova\'daki projelerimiz genellikle aynı gün bitir.'
                },
                {
                  q: 'Çayırova\'nda hangi ürünler stokta bulunur?',
                  a: 'Tüm 12 ürün türü stokta bulunur. Standart boyutlar anında gönderilir, özel boyutlar 3-5 gün içinde hazırlanır.'
                },
                {
                  q: 'Çayırova\'nda teslimat ücreti var mı?',
                  a: 'Çayırova\'nda teslimat ücretsizdir. 100 TL ve üzeri siparişlerde montaj hizmeti de ücretsizdir.'
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
              Çayırova'da Plise Perde <span className="text-primary">Çözümü</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Çayırova'da yaşayan müşterilerimiz, aynı gün hizmet ve uygun fiyatlardan memnundur. Bugün bize ulaşın, bugün montaj yapılabilir.
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
