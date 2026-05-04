import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      slug: 'yapiskan-plise-perde',
      name: 'Yapışkanlı Plise Perde',
      desc: 'Cam yüzeyine doğrudan yapışan, kurulum kolaylığı sağlayan model.'
    },
    {
      slug: 'blackout-plise-perde',
      name: 'Blackout Plise Perde',
      desc: 'Işığı %99 oranında engelleyen, uyku odaları için ideal çözüm.'
    },
    {
      slug: 'karartmali-plise-perde',
      name: 'Karartmalı Plise Perde',
      desc: 'Işığı kısmen engelleyen, gizlilik sağlayan profesyonel model.'
    },
    {
      slug: 'yari-karartmali-plise-perde',
      name: 'Yarı Karartmalı Plise Perde',
      desc: 'Işık kontrolü ile gizlilik dengesi sağlayan çok amaçlı model.'
    },
    {
      slug: 'tam-karartmali-plise-perde',
      name: 'Tam Karartmalı Plise Perde',
      desc: 'Tam karanlık ortam oluşturan, enerji tasarrufu sağlayan model.'
    },
    {
      slug: 'tul-plise-perde',
      name: 'Tül Plise Perde',
      desc: 'Hafif ve şeffaf, doğal ışık geçiren zarif tasarım.'
    },
    {
      slug: 'keten-plise-perde',
      name: 'Keten Plise Perde',
      desc: 'Doğal keten kumaş, premium görünüm ve uzun ömürlü kullanım.'
    },
    {
      slug: 'honeycomb-perde',
      name: 'Honeycomb Perde',
      desc: 'Hava boşluğu tasarımı, maksimum ısı yalıtımı ve ses yalıtımı.'
    },
    {
      slug: 'duet-perde',
      name: 'Düet Perde',
      desc: 'İki katmanlı tasarım, gün ve gece kullanımı için esnek çözüm.'
    },
    {
      slug: 'pimapen-plise-perde',
      name: 'Pimapen Plise Perde',
      desc: 'Pimapen profil ile güçlü ve dayanıklı, ticari kullanıma uygun.'
    },
    {
      slug: 'cam-balkon-plise-perde',
      name: 'Cam Balkon Plise Perde',
      desc: 'Cam balkonlar için özel tasarım, rüzgar ve ısıya dayanıklı.'
    },
    {
      slug: 'gece-gunduz-plise-perde',
      name: 'Gece Gündüz Plise Perde',
      desc: 'Gündüz şeffaflık, gece karanlığı sağlayan akıllı tasarım.'
    },
  ]

  return (
    <>
      <Head>
        <title>Plise Perde Ürünleri - 12 Farklı Model | Premium Kalite</title>
        <meta name="description" content="Plise Perde Sistemleri - 12 farklı plise perde modeli. Yapışkanlı, Blackout, Honeycomb, Gece Gündüz ve daha fazlası. Premium kalitede ürünler." />
        <meta name="keywords" content="plise perde, blackout perde, honeycomb perde, karartmalı perde, gece gündüz perde, yapışkanlı plise perde, tül plise perde" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/urunler/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Plise Perde <span className="text-primary">Ürünleri</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              12 farklı modelde <strong>premium kaliteli plise perde</strong> çözümleri. Her mekan ve ihtiyaca uygun seçenekler.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.slug} href={`/urunler/${product.slug}`}>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <div className="bg-gradient-to-br from-primary to-secondary h-40 flex items-center justify-center text-white text-center p-4">
                      <span className="font-semibold">{product.name}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-secondary mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                      <span className="text-primary font-semibold text-sm">Detayları Gör →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li><Link href="/hizmetler/yerinde-olcu" className="text-primary hover:underline">Yerinde Ölçü</Link></li>
                  <li><Link href="/hizmetler/yerinde-montaj" className="text-primary hover:underline">Profesyonel Montaj</Link></li>
                  <li><Link href="/hizmetler/ozel-tasarim" className="text-primary hover:underline">Özel Tasarım</Link></li>
                  <li><Link href="/hizmetler" className="text-primary hover:underline">Tüm Hizmetler</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Hizmet Bölgeleri</h3>
                <ul className="space-y-2">
                  <li><Link href="/hizmet-bolgeler/istanbul" className="text-primary hover:underline">İstanbul Hizmetleri</Link></li>
                  <li><Link href="/hizmet-bolgeler/kocaeli" className="text-primary hover:underline">Kocaeli Hizmetleri</Link></li>
                  <li><Link href="/iletisim" className="text-primary hover:underline">İletişim Bilgileri</Link></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-secondary mb-4 text-lg">Kurumsal</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-primary hover:underline">Ana Sayfa</Link></li>
                  <li><Link href="/bayilik" className="text-primary hover:underline">Bayilik Programı</Link></li>
                  <li><Link href="/kullanim-sartlari" className="text-primary hover:underline">Kullanım Şartları</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Hangi Ürün Size Uygun?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mekanınızın ihtiyaçlarına göre <strong>en uygun plise perde modelini</strong> seçmek için bize ulaşın. Ücretsiz danışmanlık hizmeti sunuyoruz.
            </p>
            <a href="https://wa.me/905403363873" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              WhatsApp ile Danışın
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </>
  )
}
