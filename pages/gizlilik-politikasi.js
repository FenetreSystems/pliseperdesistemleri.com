import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'

export default function GizlilikPolitikasi() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası - Plise Perde Sistemleri</title>
        <meta name="description" content="Plise Perde Sistemleri gizlilik politikası. Kişisel verilerinizin nasıl korunduğunu, toplanmasını ve kullanımını öğrenin." />
        <meta name="keywords" content="gizlilik politikası, kişisel veriler, veri koruması, GDPR, gizlilik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/gizlilik-politikasi" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Gizlilik <span className="text-primary">Politikası</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Plise Perde Sistemleri olarak, müşterilerimizin gizliliğini ve kişisel verilerinin korunmasını en yüksek öncelik olarak görüyoruz.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">1. Toplanan Veriler</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitemizi ziyaret ettiğinizde, aşağıdaki türde veriler toplayabiliriz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>İletişim Bilgileri:</strong> Ad, soyadı, telefon numarası, e-posta adresi</li>
                  <li><strong>Adres Bilgileri:</strong> Ev adresi, iş adresi, teslimat adresi</li>
                  <li><strong>Ödeme Bilgileri:</strong> Banka hesap bilgileri, kredi kartı bilgileri (güvenli şekilde işlenir)</li>
                  <li><strong>Proje Bilgileri:</strong> Ölçü bilgileri, tasarım tercihleri, renk seçimleri</li>
                  <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret süresi</li>
                  <li><strong>Çerezler:</strong> Oturum bilgileri, tercihler, analitik veriler</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">2. Verilerin Kullanımı</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Toplanan veriler aşağıdaki amaçlarla kullanılır:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Hizmet sağlama ve sipariş işleme</li>
                  <li>Müşteri desteği ve iletişim</li>
                  <li>Ürün ve hizmet geliştirme</li>
                  <li>Pazarlama ve promosyon faaliyetleri (izniniz ile)</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  <li>Web sitesi analitikleri ve iyileştirmeleri</li>
                  <li>Dolandırıcılık ve güvenlik tehditlerine karşı koruma</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">3. Verilerin Korunması</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alıyoruz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>SSL/TLS şifreleme teknolojisi kullanımı</li>
                  <li>Güvenli sunucu altyapısı</li>
                  <li>Düzenli güvenlik denetimleri</li>
                  <li>Erişim kontrolü ve yetkilendirme</li>
                  <li>Veri yedekleme ve kurtarma planları</li>
                  <li>Personel eğitimi ve gizlilik politikası uygulaması</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">4. Üçüncü Taraflarla Veri Paylaşımı</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kişisel verileriniz aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Kargo Şirketleri:</strong> Teslimat hizmetleri için</li>
                  <li><strong>Ödeme Sağlayıcıları:</strong> Ödeme işlemleri için</li>
                  <li><strong>Yasal Yükümlülükler:</strong> Mahkeme kararları ve yasal talepler</li>
                  <li><strong>Hizmet Sağlayıcılar:</strong> Web hosting, analitik, e-posta hizmetleri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">5. Haklarınız</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KVKK (Kişisel Verilerin Korunması Kanunu) uyarınca aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Verilerinize erişim hakkı</li>
                  <li>Verilerin düzeltilmesi hakkı</li>
                  <li>Verilerin silinmesi hakkı</li>
                  <li>Veri işlemeye itiraz etme hakkı</li>
                  <li>Veri taşınabilirliği hakkı</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">6. Çerezler</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezleri tarayıcı ayarlarından devre dışı bırakabilirsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">7. İletişim</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gizlilik politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700"><strong>E-posta:</strong> info@pliseperdesistemleri.com</p>
                  <p className="text-gray-700"><strong>Telefon:</strong> +90 540 336 3873</p>
                  <p className="text-gray-700"><strong>Adres:</strong> Cumhuriyet Mah. 2233 Sok. No:4/A, Gebze / Kocaeli</p>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-gray-700 text-sm">
                  <strong>Son Güncelleme:</strong> 4 Mayıs 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFooter />
    </>
  )
}
