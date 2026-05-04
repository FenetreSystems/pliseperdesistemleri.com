import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

export default function ServiceRegions() {
  return (
    <>
      <Head>
        <title>Hizmet Bölgeleri - İstanbul, Kocaeli | Plise Perde Sistemleri</title>
        <meta name="description" content="Plise Perde Sistemleri hizmet bölgeleri - İstanbul ve Kocaeli'de yerinde ölçü ve montaj hizmeti. Tüm ilçelerde hizmet sunuyoruz." />
        <meta name="keywords" content="plise perde İstanbul, plise perde Kocaeli, yerinde montaj, hizmet bölgeleri, Maltepe, Kartal, Pendik, Gebze" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/hizmet-bolgeler/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Hizmet <span className="text-primary">Bölgeleri</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              İstanbul ve Kocaeli bölgelerinde <strong>yerinde ölçü ve montaj</strong> hizmeti sunuyoruz.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/hizmet-bolgeler/istanbul">
                <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition cursor-pointer">
                  <h2 className="text-3xl font-bold text-secondary mb-4">İstanbul</h2>
                  <p className="text-gray-600 mb-6">
                    Anadolu ve Avrupa yakasında tüm ilçelerde <strong>hızlı ve profesyonel</strong> hizmet sunuyoruz.
                  </p>
                  <h3 className="font-bold text-secondary mb-3">Hizmet Verilen İlçeler:</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Maltepe, Kartal, Pendik, Tuzla</li>
                    <li>• Beşiktaş, Şişli, Fatih, Beyoğlu</li>
                    <li>• Bakırköy, Zeytinburnu, Avcılar</li>
                    <li>• Kadıköy, Üsküdar, Ataşehir</li>
                    <li>• Ve diğer tüm ilçeler</li>
                  </ul>
                  <span className="text-primary font-semibold">Detayları Gör →</span>
                </div>
              </Link>

              <Link href="/hizmet-bolgeler/kocaeli">
                <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition cursor-pointer">
                  <h2 className="text-3xl font-bold text-secondary mb-4">Kocaeli</h2>
                  <p className="text-gray-600 mb-6">
                    Gebze, Dilovası, Darıca ve çevresinde <strong>güvenilir ve hızlı</strong> teslimat sağlıyoruz.
                  </p>
                  <h3 className="font-bold text-secondary mb-3">Hizmet Verilen İlçeler:</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Gebze (Merkez Ofis)</li>
                    <li>• Dilovası, Darıca, Çayırova</li>
                    <li>• İzmit, Körfez, Kandıra</li>
                    <li>• Gölcük, Derince, Başiskele</li>
                    <li>• Ve diğer tüm ilçeler</li>
                  </ul>
                  <span className="text-primary font-semibold">Detayları Gör →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Hizmet Dışı Bölgeler</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              İstanbul ve Kocaeli dışındaki bölgelere de <strong>kargo ile ürün gönderimi</strong> yapıyoruz. Türkiye'den Avusturya'ya kadar uluslararası teslimat hizmeti sunuyoruz.
            </p>
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-600 mb-6">
                Hizmet bölgesi dışında olup ürün sipariş etmek istiyorsanız, bize ulaşın. <em>Kargo ile güvenli teslimat</em> sağlıyoruz.
              </p>
              <a href="https://wa.me/905403363873" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
                WhatsApp ile İletişime Geçin
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
