import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">PP</span>
          </div>
          <span className="font-bold text-lg text-secondary hidden sm:inline">Plise Perde</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-secondary hover:text-primary transition">
            Ana Sayfa
          </Link>

          <div className="relative group">
            <button className="text-secondary hover:text-primary transition flex items-center gap-1">
              Hizmetlerimiz
              <span>▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/hizmetler/yerinde-olcu" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Yerinde Ölçü
              </Link>
              <Link href="/hizmetler/yerinde-montaj" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Yerinde Montaj
              </Link>
              <Link href="/hizmetler/kurumsal-cozumler" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Kurumsal Çözümler
              </Link>
              <Link href="/hizmetler/ozel-tasarim" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Özel Tasarım
              </Link>
              <Link href="/hizmetler/toplu-uretim" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Toplu Üretim
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-secondary hover:text-primary transition flex items-center gap-1">
              Ürünlerimiz
              <span>▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition max-h-96 overflow-y-auto">
              <Link href="/urunler/yapiskan-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Yapışkanlı Plise Perde
              </Link>
              <Link href="/urunler/blackout-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Blackout Plise Perde
              </Link>
              <Link href="/urunler/karartmali-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Karartmalı Plise Perde
              </Link>
              <Link href="/urunler/yari-karartmali-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Yarı Karartmalı Plise Perde
              </Link>
              <Link href="/urunler/tam-karartmali-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Tam Karartmalı Plise Perde
              </Link>
              <Link href="/urunler/tul-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Tül Plise Perde
              </Link>
              <Link href="/urunler/keten-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Keten Plise Perde
              </Link>
              <Link href="/urunler/honeycomb-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Honeycomb Perde
              </Link>
              <Link href="/urunler/duet-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Düet Perde
              </Link>
              <Link href="/urunler/pimapen-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Pimapen Plise Perde
              </Link>
              <Link href="/urunler/cam-balkon-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Cam Balkon Plise Perde
              </Link>
              <Link href="/urunler/gece-gunduz-plise-perde" className="block px-4 py-2 text-secondary hover:bg-gray-50">
                Gece Gündüz Plise Perde
              </Link>
            </div>
          </div>

          <Link href="/hizmet-bolgeler" className="text-secondary hover:text-primary transition">
            Hizmet Bölgeleri
          </Link>

          <Link href="/iletisim" className="text-secondary hover:text-primary transition">
            İletişim
          </Link>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition border-2 border-secondary rounded-lg"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-secondary hover:text-primary transition font-semibold">
              Ana Sayfa
            </Link>
            
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left text-secondary hover:text-primary transition font-semibold flex items-center justify-between"
              >
                Hizmetlerimiz
                <span className={`transition ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/hizmetler/yerinde-olcu" className="block text-secondary hover:text-primary transition text-sm">
                    Yerinde Ölçü
                  </Link>
                  <Link href="/hizmetler/yerinde-montaj" className="block text-secondary hover:text-primary transition text-sm">
                    Yerinde Montaj
                  </Link>
                  <Link href="/hizmetler/kurumsal-cozumler" className="block text-secondary hover:text-primary transition text-sm">
                    Kurumsal Çözümler
                  </Link>
                  <Link href="/hizmetler/ozel-tasarim" className="block text-secondary hover:text-primary transition text-sm">
                    Özel Tasarım
                  </Link>
                  <Link href="/hizmetler/toplu-uretim" className="block text-secondary hover:text-primary transition text-sm">
                    Toplu Üretim
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full text-left text-secondary hover:text-primary transition font-semibold flex items-center justify-between"
              >
                Ürünlerimiz
                <span className={`transition ${productsOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {productsOpen && (
                <div className="pl-4 mt-2 space-y-2 max-h-64 overflow-y-auto">
                  <Link href="/urunler/yapiskan-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Yapışkanlı Plise Perde
                  </Link>
                  <Link href="/urunler/blackout-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Blackout Plise Perde
                  </Link>
                  <Link href="/urunler/karartmali-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Karartmalı Plise Perde
                  </Link>
                  <Link href="/urunler/yari-karartmali-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Yarı Karartmalı Plise Perde
                  </Link>
                  <Link href="/urunler/tam-karartmali-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Tam Karartmalı Plise Perde
                  </Link>
                  <Link href="/urunler/tul-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Tül Plise Perde
                  </Link>
                  <Link href="/urunler/keten-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Keten Plise Perde
                  </Link>
                  <Link href="/urunler/honeycomb-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Honeycomb Perde
                  </Link>
                  <Link href="/urunler/duet-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Düet Perde
                  </Link>
                  <Link href="/urunler/pimapen-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Pimapen Plise Perde
                  </Link>
                  <Link href="/urunler/cam-balkon-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Cam Balkon Plise Perde
                  </Link>
                  <Link href="/urunler/gece-gunduz-plise-perde" className="block text-secondary hover:text-primary transition text-sm">
                    Gece Gündüz Plise Perde
                  </Link>
                </div>
              )}
            </div>

            <Link href="/hizmet-bolgeler" className="block text-secondary hover:text-primary transition font-semibold">
              Hizmet Bölgeleri
            </Link>

            <Link href="/iletisim" className="block text-secondary hover:text-primary transition font-semibold">
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
