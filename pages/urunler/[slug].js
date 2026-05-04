import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import Link from 'next/link'

const products = {
  'yapiskan-plise-perde': {
    name: 'Yapışkanlı Plise Perde',
    title: 'Yapışkanlı Plise Perde - Kolay Kurulum Çözümü',
    description: 'Cam yüzeyine doğrudan yapışan, kurulum kolaylığı sağlayan profesyonel plise perde modeli.',
    features: [
      'Cam yüzeyine doğrudan yapışma',
      'Kurulum kolaylığı',
      'Demontaj imkanı',
      'Tüm cam türlerine uygun',
      'Uzun ömürlü yapışkan',
      'Isı yalıtımı sağlar'
    ],
    benefits: [
      'Profesyonel montajcı gerekmez',
      'Hızlı kurulum (15-30 dakika)',
      'Temiz ve estetik görünüm',
      'Kiralık mekanlar için ideal',
      'Kolay temizleme',
      'Yeniden konumlandırılabilir'
    ],
    lightTransmission: '%80',
    heatInsulation: 'Orta',
    soundInsulation: 'Düşük',
    priceRange: '₺ 150-300',
    warranty: '2 Yıl',
    usage: 'Ofis, daire, ev, ticari mekanlar'
  },
  'blackout-plise-perde': {
    name: 'Blackout Plise Perde',
    title: 'Blackout Plise Perde - %99 Işık Engelleme',
    description: 'Işığı %99 oranında engelleyen, uyku odaları ve karanlık ortam gerektiren mekanlar için ideal çözüm.',
    features: [
      'Işığı %99 engeller',
      'Tam karanlık ortam',
      'Yüksek ısı yalıtımı',
      'Gizlilik sağlar',
      'Enerji tasarrufu',
      'Ses yalıtımı'
    ],
    benefits: [
      'Uyku kalitesi artırır',
      'Enerji faturasını düşürür',
      'Gizlilik maksimum',
      'Uzun ömürlü kullanım',
      'Kolay temizleme',
      'Tüm mevsimde uygun'
    ],
    lightTransmission: '%5',
    heatInsulation: 'Yüksek',
    soundInsulation: 'Orta',
    priceRange: '₺ 250-450',
    warranty: '2 Yıl',
    usage: 'Yatak odası, sinema odası, tıbbi mekanlar'
  },
  'karartmali-plise-perde': {
    name: 'Karartmalı Plise Perde',
    title: 'Karartmalı Plise Perde - Işık Kontrolü',
    description: 'Işığı kısmen engelleyen, gizlilik sağlayan profesyonel plise perde modeli.',
    features: [
      'Işığı %70 engeller',
      'Kısmi karanlık ortam',
      'Orta ısı yalıtımı',
      'Gizlilik sağlar',
      'Enerji tasarrufu',
      'Ses yalıtımı'
    ],
    benefits: [
      'Işık kontrolü sağlar',
      'Enerji tasarrufu',
      'Gizlilik seçeneği',
      'Uzun ömürlü',
      'Kolay temizleme',
      'Tüm mekanlar için uygun'
    ],
    lightTransmission: '%30',
    heatInsulation: 'Orta',
    soundInsulation: 'Orta',
    priceRange: '₺ 200-400',
    warranty: '2 Yıl',
    usage: 'Yatak odası, oturma odası, ofis'
  },
  'yari-karartmali-plise-perde': {
    name: 'Yarı Karartmalı Plise Perde',
    title: 'Yarı Karartmalı Plise Perde - Denge Çözümü',
    description: 'Işık kontrolü ile gizlilik dengesi sağlayan çok amaçlı plise perde modeli.',
    features: [
      'Işığı %50 engeller',
      'Işık dengesi',
      'Orta ısı yalıtımı',
      'Gizlilik sağlar',
      'Enerji tasarrufu',
      'Estetik görünüm'
    ],
    benefits: [
      'Doğal ışık geçişi',
      'Gizlilik sağlar',
      'Enerji tasarrufu',
      'Çok amaçlı kullanım',
      'Kolay temizleme',
      'Şık tasarım'
    ],
    lightTransmission: '%50',
    heatInsulation: 'Orta',
    soundInsulation: 'Orta',
    priceRange: '₺ 180-380',
    warranty: '2 Yıl',
    usage: 'Oturma odası, ofis, yatak odası'
  },
  'tam-karartmali-plise-perde': {
    name: 'Tam Karartmalı Plise Perde',
    title: 'Tam Karartmalı Plise Perde - Maksimum Gizlilik',
    description: 'Tam karanlık ortam oluşturan, enerji tasarrufu sağlayan profesyonel plise perde modeli.',
    features: [
      'Işığı %95 engeller',
      'Tam karanlık ortam',
      'Yüksek ısı yalıtımı',
      'Maksimum gizlilik',
      'Enerji tasarrufu',
      'Ses yalıtımı'
    ],
    benefits: [
      'Tam karanlık sağlar',
      'Enerji faturasında tasarruf',
      'Maksimum gizlilik',
      'Uzun ömürlü',
      'Kolay temizleme',
      'Premium görünüm'
    ],
    lightTransmission: '%5',
    heatInsulation: 'Çok Yüksek',
    soundInsulation: 'Yüksek',
    priceRange: '₺ 280-500',
    warranty: '2 Yıl',
    usage: 'Yatak odası, sinema, tıbbi mekanlar'
  },
  'tul-plise-perde': {
    name: 'Tül Plise Perde',
    title: 'Tül Plise Perde - Hafif ve Şeffaf',
    description: 'Hafif ve şeffaf, doğal ışık geçiren zarif tasarımlı plise perde modeli.',
    features: [
      'Hafif kumaş',
      'Şeffaf tasarım',
      'Doğal ışık geçişi',
      'Zarif görünüm',
      'Kolay temizleme',
      'Tüm cam türlerine uygun'
    ],
    benefits: [
      'Doğal ışık maksimum',
      'Zarif ve şık görünüm',
      'Hafif ve dayanıklı',
      'Kolay temizleme',
      'Gizlilik kısmi',
      'Tüm mekanlar için uygun'
    ],
    lightTransmission: '%85',
    heatInsulation: 'Düşük',
    soundInsulation: 'Düşük',
    priceRange: '₺ 120-250',
    warranty: '2 Yıl',
    usage: 'Salon, ofis, mutfak, balkon'
  },
  'keten-plise-perde': {
    name: 'Keten Plise Perde',
    title: 'Keten Plise Perde - Doğal ve Premium',
    description: 'Doğal keten kumaş, premium görünüm ve uzun ömürlü kullanım sağlayan plise perde.',
    features: [
      'Doğal keten kumaş',
      'Premium görünüm',
      'Uzun ömürlü',
      'Nefes alan kumaş',
      'Çevre dostu',
      'Renk atmayan'
    ],
    benefits: [
      'Doğal ve premium görünüm',
      'Uzun ömürlü kullanım',
      'Çevre dostu malzeme',
      'Nefes alan kumaş',
      'Kolay temizleme',
      'Lüks tasarım'
    ],
    lightTransmission: '%60',
    heatInsulation: 'Orta',
    soundInsulation: 'Orta',
    priceRange: '₺ 350-600',
    warranty: '2 Yıl',
    usage: 'Salon, yatak odası, ofis, villa'
  },
  'honeycomb-perde': {
    name: 'Honeycomb Perde',
    title: 'Honeycomb Perde - Maksimum İzolasyon',
    description: 'Hava boşluğu tasarımı ile maksimum ısı yalıtımı ve ses yalıtımı sağlayan premium plise perde.',
    features: [
      'Hava boşluğu tasarımı',
      'Maksimum ısı yalıtımı',
      'Yüksek ses yalıtımı',
      'Şık görünüm',
      'Enerji tasarrufu',
      'Çevre dostu'
    ],
    benefits: [
      'Enerji faturasında %40 tasarruf',
      'Dış sesleri %50 azaltır',
      'Premium görünüm',
      'Uzun ömürlü',
      'Kolay temizleme',
      'Tüm mevsimde uygun'
    ],
    lightTransmission: '%40',
    heatInsulation: 'Çok Yüksek',
    soundInsulation: 'Yüksek',
    priceRange: '₺ 400-700',
    warranty: '2 Yıl',
    usage: 'Yatak odası, oturma odası, ofis, kütüphane'
  },
  'duet-perde': {
    name: 'Düet Perde',
    title: 'Düet Perde - İki Katmanlı Tasarım',
    description: 'İki katmanlı tasarım, gün ve gece kullanımı için esnek çözüm sunan plise perde.',
    features: [
      'İki katmanlı tasarım',
      'Gün ve gece kullanımı',
      'Işık kontrolü',
      'Gizlilik seçeneği',
      'Estetik görünüm',
      'Esnek kullanım'
    ],
    benefits: [
      'Gün ve gece kullanımı',
      'Işık kontrolü sağlar',
      'Gizlilik seçeneği',
      'Enerji tasarrufu',
      'Kolay temizleme',
      'Çok amaçlı'
    ],
    lightTransmission: '%45',
    heatInsulation: 'Yüksek',
    soundInsulation: 'Orta',
    priceRange: '₺ 350-600',
    warranty: '2 Yıl',
    usage: 'Yatak odası, oturma odası, ofis'
  },
  'pimapen-plise-perde': {
    name: 'Pimapen Plise Perde',
    title: 'Pimapen Plise Perde - Güçlü ve Dayanıklı',
    description: 'Pimapen profil ile güçlü ve dayanıklı, ticari kullanıma uygun plise perde.',
    features: [
      'Pimapen profil',
      'Güçlü ve dayanıklı',
      'Ticari kullanıma uygun',
      'Yüksek ısı yalıtımı',
      'Uzun ömürlü',
      'Profesyonel tasarım'
    ],
    benefits: [
      'Ticari kullanıma uygun',
      'Güçlü ve dayanıklı',
      'Uzun ömürlü kullanım',
      'Enerji tasarrufu',
      'Kolay temizleme',
      'Premium kalite'
    ],
    lightTransmission: '%35',
    heatInsulation: 'Yüksek',
    soundInsulation: 'Yüksek',
    priceRange: '₺ 400-700',
    warranty: '2 Yıl',
    usage: 'Ticari mekanlar, ofis, hastane, otel'
  },
  'cam-balkon-plise-perde': {
    name: 'Cam Balkon Plise Perde',
    title: 'Cam Balkon Plise Perde - Özel Tasarım',
    description: 'Cam balkonlar için özel tasarım, rüzgar ve ısıya dayanıklı plise perde.',
    features: [
      'Cam balkon özel tasarımı',
      'Rüzgar dayanıklı',
      'Isıya dayanıklı',
      'Güçlü mekanizma',
      'Uzun ömürlü',
      'Profesyonel kurulum'
    ],
    benefits: [
      'Cam balkonlar için ideal',
      'Rüzgar ve ısıya dayanıklı',
      'Güçlü mekanizma',
      'Uzun ömürlü',
      'Kolay temizleme',
      'Premium kalite'
    ],
    lightTransmission: '%40',
    heatInsulation: 'Yüksek',
    soundInsulation: 'Orta',
    priceRange: '₺ 450-800',
    warranty: '2 Yıl',
    usage: 'Cam balkonlar, veranda, teras'
  },
  'gece-gunduz-plise-perde': {
    name: 'Gece Gündüz Plise Perde',
    title: 'Gece Gündüz Plise Perde - Akıllı Tasarım',
    description: 'Gündüz şeffaflık, gece karanlığı sağlayan akıllı tasarımlı plise perde modeli.',
    features: [
      'İki katmanlı tasarım',
      'Gündüz şeffaflık',
      'Gece karanlığı',
      'Işık kontrolü',
      'Gizlilik seçeneği',
      'Esnek kullanım'
    ],
    benefits: [
      'Gün ve gece kullanımı',
      'Doğal ışık kontrolü',
      'Enerji tasarrufu',
      'Gizlilik seçeneği',
      'Estetik görünüm',
      'Kolay temizleme'
    ],
    lightTransmission: '%50',
    heatInsulation: 'Yüksek',
    soundInsulation: 'Orta',
    priceRange: '₺ 300-550',
    warranty: '2 Yıl',
    usage: 'Yatak odası, oturma odası, ofis'
  }
}

export default function ProductDetail({ product, slug }) {
  if (!product) {
    return <div>Ürün bulunamadı</div>
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, plise perde, perde, karartmalı perde`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://pliseperdesistemleri.com/urunler/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': product.name,
            'description': product.description,
            'brand': {
              '@type': 'Brand',
              'name': 'Plise Perde Sistemleri'
            },
            'offers': {
              '@type': 'AggregateOffer',
              'priceCurrency': 'TRY',
              'lowPrice': product.priceRange.split('-')[0].replace('₺ ', '').trim(),
              'highPrice': product.priceRange.split('-')[1].trim()
            }
          })}
        </script>
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {product.description}
                </p>
                <div className="flex gap-4 mb-8">
                  <a href="https://wa.me/905403363873" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    WhatsApp ile Sipariş Ver
                  </a>
                  <a href="tel:+905403363873" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                    Telefon: +90 540 336 3873
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-96 flex items-center justify-center text-white text-center p-8">
                <div>
                  <div className="text-4xl font-bold mb-4">{product.name}</div>
                  <p className="text-sm opacity-90">Premium Kalite • Garantili • Hızlı Teslimat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Özellikler</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Avantajları</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Teknik Özellikler</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden">
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Işık Geçirgenliği</td>
                    <td className="px-6 py-4 text-gray-600">{product.lightTransmission}</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Isı İzolasyonu</td>
                    <td className="px-6 py-4 text-gray-600">{product.heatInsulation}</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Ses Yalıtımı</td>
                    <td className="px-6 py-4 text-gray-600">{product.soundInsulation}</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Fiyat Aralığı</td>
                    <td className="px-6 py-4 text-primary font-bold">{product.priceRange}</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Garantisi</td>
                    <td className="px-6 py-4 text-gray-600">{product.warranty}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-secondary bg-gray-50">Kullanım Alanları</td>
                    <td className="px-6 py-4 text-gray-600">{product.usage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">Diğer Ürünlerimiz</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              <strong>12 farklı plise perde modeli</strong> arasından mekanınıza en uygun olanı seçebilirsiniz.
            </p>
            <Link href="/urunler" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              Tüm Ürünleri Gör
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name} Sipariş Vermek İster misiniz?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ücretsiz yerinde ölçü ve profesyonel montaj hizmeti ile <strong>tam çözüm</strong> sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905403363873" 
                className="bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition inline-block"
              >
                WhatsApp ile Sipariş Ver
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
  const product = products[params.slug]
  
  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
      slug: params.slug,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(products).map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
