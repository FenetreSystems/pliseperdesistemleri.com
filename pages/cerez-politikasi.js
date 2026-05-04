import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'

export default function CerezPolitikasi() {
  return (
    <>
      <Head>
        <title>Çerez Politikası - Plise Perde Sistemleri</title>
        <meta name="description" content="Plise Perde Sistemleri çerez politikası. Çerezlerin nasıl kullanıldığını, türlerini ve kontrol etmeyi öğrenin." />
        <meta name="keywords" content="çerez politikası, çerezler, web analitik, kullanıcı deneyimi, gizlilik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/cerez-politikasi/" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Çerez <span className="text-primary">Politikası</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bu sayfada, web sitemizde kullanılan çerezler ve bunların nasıl kullanıldığı hakkında bilgi bulabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">1. Çerez Nedir?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, ziyaretiniz hakkında bilgi içerir ve sonraki ziyaretlerde kullanılır.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">2. Çerez Türleri</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitemizde aşağıdaki çerez türleri kullanılır:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-secondary mb-2">Gerekli Çerezler</h3>
                    <p className="text-gray-700 mb-2">
                      Web sitesinin temel işlevleri için gereklidir. Devre dışı bırakılamaz.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Oturum çerezleri (PHPSESSID)</li>
                      <li>Güvenlik çerezleri (CSRF token)</li>
                      <li>Tercih çerezleri (dil seçimi)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-secondary mb-2">Analitik Çerezler</h3>
                    <p className="text-gray-700 mb-2">
                      Web sitesinin nasıl kullanıldığını anlamak için kullanılır.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Google Analytics çerezleri</li>
                      <li>Ziyaret sayısı ve sayfalar</li>
                      <li>Kullanıcı davranışı analizi</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-secondary mb-2">Pazarlama Çerezleri</h3>
                    <p className="text-gray-700 mb-2">
                      Hedefli reklamlar ve pazarlama kampanyaları için kullanılır.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Reklam tercihleriniz</li>
                      <li>Ziyaret geçmişi</li>
                      <li>İlgi alanları</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-secondary mb-2">Sosyal Medya Çerezleri</h3>
                    <p className="text-gray-700 mb-2">
                      Sosyal medya entegrasyonu için kullanılır.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Facebook Pixel</li>
                      <li>Twitter çerezleri</li>
                      <li>Instagram çerezleri</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">3. Çerezlerin Kullanımı</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerezler aşağıdaki amaçlarla kullanılır:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Oturum yönetimi ve kullanıcı kimliği doğrulama</li>
                  <li>Tercihlerinizi hatırlama (dil, tema, vb.)</li>
                  <li>Web sitesi performansını ölçme</li>
                  <li>Kullanıcı deneyimini iyileştirme</li>
                  <li>Hedefli reklamlar gösterme</li>
                  <li>Dolandırıcılık ve güvenlik tehditlerine karşı koruma</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">4. Çerez Süresi</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerezlerin geçerlilik süresi türüne göre değişir:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Oturum Çerezleri:</strong> Tarayıcı kapatılana kadar</li>
                  <li><strong>Kalıcı Çerezler:</strong> 1 ay - 2 yıl arası</li>
                  <li><strong>Analitik Çerezler:</strong> 2 yıl</li>
                  <li><strong>Pazarlama Çerezleri:</strong> 1 ay - 1 yıl</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">5. Çerezleri Kontrol Etme</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerezleri kontrol etmek için:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Tarayıcı Ayarları:</strong> Çerezleri devre dışı bırakabilirsiniz</li>
                  <li><strong>Seçici Silme:</strong> Belirli çerezleri silebilirsiniz</li>
                  <li><strong>Gizli Mod:</strong> Çerezleri kaydetmeden tarama yapabilirsiniz</li>
                  <li><strong>Tarayıcı Eklentileri:</strong> Çerez yönetimi eklentileri kullanabilirsiniz</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">6. Üçüncü Taraf Çerezleri</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitemiz, aşağıdaki üçüncü taraf hizmetleri kullanır:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Google Analytics:</strong> Web sitesi analitikleri</li>
                  <li><strong>Google Ads:</strong> Reklam hizmetleri</li>
                  <li><strong>Facebook Pixel:</strong> Sosyal medya pazarlaması</li>
                  <li><strong>Stripe/PayPal:</strong> Ödeme işlemleri</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">7. Gizlilik ve Güvenlik</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerezlerinizin güvenliği için:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>SSL/TLS şifreleme kullanılır</li>
                  <li>Hassas bilgiler çerezlerde saklanmaz</li>
                  <li>Çerezler düzenli olarak temizlenir</li>
                  <li>Gizlilik politikasına uyulur</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">8. Çerez Onayı</h2>
                <p className="text-gray-700 leading-relaxed">
                  Web sitemizi kullanarak, çerez politikasını kabul etmiş sayılırsınız. Ancak, tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Lütfen unutmayın ki, bazı çerezler web sitesinin düzgün çalışması için gereklidir.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">9. İletişim</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerez politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
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
