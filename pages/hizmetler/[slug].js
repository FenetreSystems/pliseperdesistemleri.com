import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

const services = {
  'yerinde-olcu': {
    name: 'Yerinde Ölçü',
    title: 'Yerinde Ölçü Hizmeti - Ücretsiz Danışmanlık',
    description: 'Uzman ekibimiz evinize gelerek hassas ölçümler alır ve en uygun plise perde çözümünü önerir.',
    content: 'Yerinde ölçü hizmeti, plise perde seçiminin en önemli adımıdır. Profesyonel ekibimiz cam boyutlarını, pencere tipini ve mekanın özelliklerini detaylı şekilde inceleyerek en uygun çözümü sunar.',
    process: [
      'Telefon veya WhatsApp ile randevu alınır',
      'Belirlenen tarihte ekibimiz evinize gelir',
      'Tüm pencereler hassas şekilde ölçülür',
      'Mekan özellikleri ve ihtiyaçlar değerlendirilir',
      'En uygun ürün ve renk önerileri sunulur',
      'Fiyat teklifi hazırlanır'
    ],
    benefits: [
      'Tamamen ücretsiz hizmet',
      'Profesyonel ölçüm ekibi',
      'Detaylı danışmanlık',
      'Hızlı ve güvenilir',
      'Bağlayıcı olmayan teklif',
      'İstanbul ve Kocaeli\'de hizmet'
    ],
    regions: 'İstanbul ve Kocaeli bölgelerinde',
    duration: '1-2 gün içinde',
    cost: 'Tamamen Ücretsiz'
  },
  'yerinde-montaj': {
    name: 'Yerinde Montaj',
    title: 'Yerinde Montaj Hizmeti - Profesyonel Kurulum',
    description: 'Deneyimli montaj ekibimiz plise perdelerinizi yerinde kurarak ayarlar, test eder ve teslim eder.',
    content: 'Yerinde montaj hizmeti, plise perdenizin doğru şekilde kurulmasını ve uzun ömürlü kullanımını sağlar. Profesyonel ekibimiz tüm kurulum aşamalarında dikkat ve özen gösterir.',
    process: [
      'Ürün teslimatından sonra randevu alınır',
      'Montaj ekibi belirlenen tarihte gelir',
      'Tüm bileşenler kontrol edilir',
      'Profesyonel kurulum yapılır',
      'Mekanizma test edilir ve ayarlanır',
      'Müşteri eğitimi verilir'
    ],
    benefits: [
      'Profesyonel montaj ekibi',
      'Garantili işçilik',
      'Tüm mekan türlerine uygun',
      'Hızlı kurulum',
      'Müşteri eğitimi',
      'Sonrası destek'
    ],
    regions: 'İstanbul ve Kocaeli bölgelerinde',
    duration: '1-2 gün',
    cost: 'Ürün fiyatına göre değişir'
  },
  'kurumsal-cozumler': {
    name: 'Kurumsal Çözümler',
    title: 'Kurumsal Çözümler - Büyük Ölçekli Projeler',
    description: 'Otel, hastane, klinik ve ofisler için özel tasarlanmış kurumsal plise perde çözümleri sunuyoruz.',
    content: 'Kurumsal projeler, özel tasarım, hızlı üretim ve koordinasyon gerektiren büyük ölçekli işlerdir. Deneyimli proje yönetim ekibimiz her adımda yanınızda olur.',
    process: [
      'Proje detayları ve ihtiyaçlar belirlenir',
      'Site ziyareti ve ölçümler yapılır',
      'Tasarım ve fiyat teklifi hazırlanır',
      'Üretim planlaması yapılır',
      'Hızlandırılmış üretim başlatılır',
      'Montaj ve kurulum yapılır'
    ],
    benefits: [
      'Özel tasarım seçenekleri',
      'Hızlandırılmış üretim',
      'Proje yönetimi',
      'Toplu sipariş indirimleri',
      'Dedikeli proje müdürü',
      'Tam koordinasyon'
    ],
    regions: 'Türkiye geneli',
    duration: '2-4 hafta',
    cost: 'Proje detayına göre değişir'
  },
  'ozel-tasarim': {
    name: 'Özel Tasarım',
    title: 'Özel Tasarım - Sınırsız Seçenekler',
    description: 'Mekanınıza özel tasarlanmış, sınırsız renk ve desen seçenekleri ile plise perde üretimi yapıyoruz.',
    content: 'Özel tasarım hizmeti, mekanınızın benzersiz ihtiyaçlarını karşılamak için tamamen özelleştirilmiş çözümler sunar. Renk, desen, boyut ve mekanizma seçenekleri sınırsızdır.',
    process: [
      'Mekan fotoğrafları ve ölçüler gönderilir',
      'Tasarım önerileri sunulur',
      'Renk ve desen seçimi yapılır',
      'Prototip hazırlanabilir',
      'Son onay alınır',
      'Üretim başlatılır'
    ],
    benefits: [
      'Tamamen özelleştirilmiş tasarım',
      '40+ standart renk seçeneği',
      'Sınırsız özel renk',
      'Desen ve motif seçenekleri',
      'Mekan uyumlu tasarım',
      'Premium görünüm'
    ],
    regions: 'Türkiye geneli',
    duration: '7-14 gün',
    cost: 'Tasarıma göre değişir'
  },
  'toplu-uretim': {
    name: 'Toplu Üretim',
    title: 'Toplu Üretim - Büyük Siparişler İçin',
    description: '100+ adet siparişlerde özel fiyatlandırma ve hızlandırılmış üretim hizmeti sunuyoruz.',
    content: 'Toplu üretim hizmeti, aynı model ve renkte çok sayıda perde siparişi için özel koşullar ve indirimler sunar. Minimum 100 adet siparişten başlar.',
    process: [
      'Sipariş detayları belirlenir',
      'Özel fiyat teklifi hazırlanır',
      'Üretim planlaması yapılır',
      'Kalite kontrol süreci başlatılır',
      'Hızlandırılmış üretim yapılır',
      'Toplu teslimat sağlanır'
    ],
    benefits: [
      'Minimum 100 adet siparişlerde başlar',
      '%20-35 indirim',
      'Hızlandırılmış üretim',
      'Kalite kontrol raporları',
      'Ödeme planı imkanı',
      'Özel renk seçenekleri'
    ],
    regions: 'Türkiye geneli',
    duration: '10-15 gün',
    cost: '%20-35 indirim ile'
  }
}

export default function ServiceDetail({ service, slug }) {
  if (!service) {
    return <div>Hizmet bulunamadı</div>
  }

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.name}, plise perde hizmeti, montaj, ölçü`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://pliseperdesistemleri.com/hizmetler/${slug}`} />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {service.description}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <h3 className="font-bold text-secondary mb-2">Bölge</h3>
                <p className="text-gray-600">{service.regions}</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <h3 className="font-bold text-secondary mb-2">Süre</h3>
                <p className="text-gray-600">{service.duration}</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <h3 className="font-bold text-secondary mb-2">Maliyet</h3>
                <p className="text-gray-600">{service.cost}</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-12">
              {service.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Hizmet Süreci</h2>
                <ol className="space-y-3">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-gray-600 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Avantajları</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Diğer Hizmetlerimiz</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              <strong>5 farklı hizmet</strong> ile tam çözüm sunuyoruz.
            </p>
            <Link href="/hizmetler" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {service.name} Hizmetini Almak İster misiniz?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Uzman ekibimiz <strong>hemen</strong> size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905403363873" 
                className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block"
              >
                WhatsApp ile İletişim
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

export async function getStaticProps({ params }) {
  const service = services[params.slug]
  
  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      service,
      slug: params.slug,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(services).map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
