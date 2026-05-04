import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      slug: 'yerinde-olcu',
      name: 'Yerinde Ölçü',
      desc: 'Uzman ekibimiz evinize gelerek hassas ölçümler alır ve en uygun çözümü önerir.'
    },
    {
      slug: 'yerinde-montaj',
      name: 'Yerinde Montaj',
      desc: 'Profesyonel montaj ekibimiz plise perdelerinizi yerinde kurarak ayarlar ve test eder.'
    },
    {
      slug: 'kurumsal-cozumler',
      name: 'Kurumsal Çözümler',
      desc: 'Otel, hastane, klinik ve ofisler için özel tasarlanmış kurumsal çözümler sunuyoruz.'
    },
    {
      slug: 'ozel-tasarim',
      name: 'Özel Tasarım',
      desc: 'Mekanınıza özel tasarlanmış, sınırsız renk ve desen seçenekleri ile üretim yapıyoruz.'
    },
    {
      slug: 'toplu-uretim',
      name: 'Toplu Üretim',
      desc: '100+ adet siparişlerde özel fiyatlandırma ve hızlandırılmış üretim hizmeti.'
    },
  ]

  return (
    <>
      <Head>
        <title>Plise Perde Hizmetleri - Ölçü, Montaj, Kurumsal Çözümler</title>
        <meta name="description" content="Plise Perde Sistemleri hizmetleri - Yerinde ölçü, montaj, kurumsal çözümler ve özel tasarım. Profesyonel ekip, garantili işçilik." />
        <meta name="keywords" content="plise perde montaj, yerinde ölçü, kurumsal çözümler, özel tasarım, profesyonel montaj, plise perde hizmeti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmetler/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Plise Perde <span className="text-primary">Hizmetleri</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Ölçüden montaja kadar <strong>tam hizmet</strong> sunuyoruz. Profesyonel ekibimiz her adımda yanınızda.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link key={service.slug} href={`/hizmetler/${service.slug}`}>
                  <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition cursor-pointer">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <span className="text-primary font-semibold">Detayları Gör →</span>
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
                <h3 className="font-bold text-secondary mb-4 text-lg">Ürün Seçenekleri</h3>
                <ul className="space-y-2">
                  <li><Link href="/urunler/yapiskan-plise-perde" className="text-primary hover:underline">Yapışkanlı Plise Perde</Link></li>
                  <li><Link href="/urunler/blackout-plise-perde" className="text-primary hover:underline">Blackout Plise Perde</Link></li>
                  <li><Link href="/urunler/honeycomb-perde" className="text-primary hover:underline">Honeycomb Perde</Link></li>
                  <li><Link href="/urunler" className="text-primary hover:underline">Tüm Ürünleri Gör</Link></li>
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
                  <li><Link href="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikası</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Hizmet Almak İster misiniz?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              İstanbul ve Kocaeli bölgelerinde <strong>ücretsiz yerinde ölçü</strong> hizmeti sunuyoruz. Hemen iletişime geçin.
            </p>
            <a href="https://wa.me/905403363873" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              WhatsApp ile Randevu Alın
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </>
  )
}
