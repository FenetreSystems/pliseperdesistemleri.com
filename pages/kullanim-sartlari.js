import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileFooter from '../components/MobileFooter'

export default function KullanimSartlari() {
  return (
    <>
      <Head>
        <title>Kullanım Şartları - Plise Perde Sistemleri</title>
        <meta name="description" content="Plise Perde Sistemleri web sitesi kullanım şartları. Hak ve sorumluluklar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pliseperdesistemleri.com/kullanim-sartlari" />
      </Head>

      <Header />

      <main className="pb-20 md:pb-0">
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Kullanım <span className="text-primary">Şartları</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bu sayfayı ziyaret ederek ve hizmetlerimizi kullanarak, aşağıdaki şartları kabul etmiş sayılırsınız.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">1. Hizmet Tanımı</h2>
                <p className="text-gray-700 leading-relaxed">
                  Plise Perde Sistemleri, plise perde ürünleri ve montaj hizmetleri sağlayan bir işletmedir. Web sitemiz, ürün bilgisi, sipariş yönetimi ve müşteri desteği için kullanılır.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">2. Kullanıcı Sorumlulukları</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitesini kullanırken aşağıdaki sorumlulukları kabul edersiniz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Doğru ve güncel bilgi sağlamak</li>
                  <li>Yasalara uygun şekilde hizmetleri kullanmak</li>
                  <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                  <li>Zararlı yazılım veya saldırılar yapmamak</li>
                  <li>Fikri mülkiyet haklarına saygı göstermek</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">3. Sipariş ve Ödeme</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sipariş verirken:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Doğru adres bilgisi sağlamalısınız</li>
                  <li>Ödeme yöntemini seçmelisiniz</li>
                  <li>Siparişi onayladıktan sonra iptal edemezsiniz (iade politikasına tabi)</li>
                  <li>Fiyatlar değişikliğe tabi olabilir</li>
                  <li>Stok durumuna göre teslimat süresi değişebilir</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">4. İade ve Değişim Politikası</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ürünler aşağıdaki şartlarda iade edilebilir:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Teslimat tarihinden itibaren 14 gün içinde</li>
                  <li>Ürün kullanılmamış ve orijinal ambalajında olmalı</li>
                  <li>Montaj yapılmamış olmalı</li>
                  <li>İade masrafları müşteri tarafından karşılanır</li>
                  <li>Montaj yapılan ürünler iade edilemez</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">5. Garanti</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tüm ürünlerimiz 2 yıl garantilidir. Garanti kapsamı:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Üretim hatalarından kaynaklanan arızalar</li>
                  <li>Malzeme kusurları</li>
                  <li>Mekanizm arızaları</li>
                  <li>Montaj işçiliği ömür boyu garantilidir</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Garanti kapsamı dışında: Kullanıcı hatası, kaza, yanlış kurulum, doğal aşınma
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">6. Sorumluluk Sınırlaması</h2>
                <p className="text-gray-700 leading-relaxed">
                  Plise Perde Sistemleri, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Doğrudan veya dolaylı zararlardan sorumlu değildir. Maksimum sorumluluk, ödenen tutarla sınırlıdır.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">7. Fikri Mülkiyet</h2>
                <p className="text-gray-700 leading-relaxed">
                  Web sitesindeki tüm içerik, tasarım, logo ve ürün bilgileri Plise Perde Sistemleri'nin fikri mülkiyetidir. İzin olmadan kopyalama, dağıtma veya kullanma yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">8. Yasadışı Kullanım</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aşağıdaki davranışlar yasaktır:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Zararlı yazılım yayma</li>
                  <li>Spam veya taciz</li>
                  <li>Dolandırıcılık veya hile</li>
                  <li>Yasalara aykırı içerik</li>
                  <li>Hacking veya yetkisiz erişim</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">9. Değişiklikler</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bu şartları önceden haber vermeden değiştirebiliriz. Değişiklikler yayınlandığı anda yürürlüğe girer.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">10. İletişim</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kullanım şartları hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
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
