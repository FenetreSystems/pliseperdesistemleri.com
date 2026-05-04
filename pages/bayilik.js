import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'

export default function Dealership() {
  return (
    <>
      <Head>
        <title>Bayilik Programı - Plise Perde Sistemleri | Kazançlı İş Ortaklığı</title>
        <meta name="description" content="Plise Perde Sistemleri bayilik programı - Kazançlı bir iş kurmak için ortağımız olun. Yüksek kar marjı, pazarlama desteği, teknik destek." />
        <meta name="keywords" content="bayilik, plise perde bayisi, iş ortaklığı, dağıtıcı, bölgesel satış, münhasır dağıtım" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/bayilik" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Bayilik <span className="text-primary">Programı</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Plise perde satışında <strong>ortağımız olmak</strong> ve <em>kazançlı bir iş</em> kurmak ister misiniz?
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Bayilik Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Yüksek Kar Marjı</h3>
                <p className="text-gray-600">
                  Doğrudan üreticiden alışveriş yaparak <strong>%30-40 kar marjı</strong> elde edebilirsiniz. Rekabetçi fiyatlandırma ile pazarda güçlü konumlanabilirsiniz.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Pazarlama Desteği</h3>
                <p className="text-gray-600">
                  Ürün tanıtımı, sosyal medya desteği ve <em>pazarlama materyalleri</em> sağlıyoruz. Müşteri kazanımında <u>tam destek</u> alabilirsiniz.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Ürün Eğitimi</h3>
                <p className="text-gray-600">
                  Tüm ürünler hakkında <strong>detaylı eğitim</strong> ve <em>satış teknikleri</em> öğretiyoruz. Müşteri danışmanlığında uzman olabilirsiniz.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Teknik Destek</h3>
                <p className="text-gray-600">
                  Ürün sorunları, montaj yardımı ve müşteri şikayetlerinde <strong>24/7 teknik destek</strong> sağlıyoruz. Hiçbir zaman yalnız değilsiniz.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Toplu Sipariş İndirimleri</h3>
                <p className="text-gray-600">
                  100+ adet siparişlerde <em>özel indirimler</em> ve <u>hızlandırılmış üretim</u> hizmeti alabilirsiniz. Büyük projelerde avantaj sağlayabilirsiniz.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-secondary mb-4">Bölgesel Satış Hakkı</h3>
                <p className="text-gray-600">
                  Belirlenen bölgede <strong>münhasır satış hakkı</strong> alabilirsiniz. Bölgenizde güçlü pazarlama yapabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Bayilik Şartları</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Minimum Sipariş</h3>
                    <p className="text-gray-600 text-sm">İlk sipariş minimum 50 adet olmalıdır. Sonraki siparişlerde daha esnek koşullar geçerlidir.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Ödeme Koşulları</h3>
                    <p className="text-gray-600 text-sm">Peşin ödeme veya 30 gün vadeli ödeme seçenekleri sunuyoruz. Toplu siparişlerde ödeme planı imkanı vardır.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Bölge Seçimi</h3>
                    <p className="text-gray-600 text-sm">Bayilik hakkı belirlenen bölgede geçerlidir. Bölge dışında satış yapılamaz.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Sözleşme Süresi</h3>
                    <p className="text-gray-600 text-sm">Bayilik sözleşmesi 1 yıl için yapılır. Başarılı performans ile yenileme imkanı vardır.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Kalite Standartları</h3>
                    <p className="text-gray-600 text-sm">Tüm ürünler kalite kontrol testlerinden geçer. Müşteri memnuniyeti garantilidir.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Bayilik Başvurusu</h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white text-center">
              <p className="text-lg mb-6">
                Bayilik programımız hakkında detaylı bilgi almak ve başvuru yapmak için <strong>WhatsApp</strong> ile iletişime geçin.
              </p>
              <a 
                href="https://wa.me/905403363873?text=Bayilik%20programı%20hakkında%20bilgi%20almak%20istiyorum" 
                className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block"
              >
                WhatsApp ile Başvuru Yap
              </a>
              <p className="text-sm mt-6 opacity-90">
                Telefon: +90 540 336 3873
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </>
  )
}
