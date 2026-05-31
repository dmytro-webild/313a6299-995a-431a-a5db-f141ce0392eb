"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Headphones, Lightbulb, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Anasayfa",
          id: "#hero",
        },
        {
          name: "Hakkımızda",
          id: "#about",
        },
        {
          name: "Ürünler",
          id: "#products",
        },
        {
          name: "Hizmetler",
          id: "#features",
        },
        {
          name: "Referanslar",
          id: "#socialproof",
        },
        {
          name: "SSS",
          id: "#faq",
        },
        {
          name: "İletişim",
          id: "#contact",
        },
      ]}
      button={{
        text: "Teklif Al",
        href: "#contact",
      }}
      logoSrc="http://img.b2bpic.net/free-photo/25th-years-anniversary-celebration-3d-render_460848-8044.jpg"
      logoAlt="MNT Teknoloji Logo"
      brandName="MNT Teknoloji"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="Geleceğin Teknolojisi, Bugün MNT Teknoloji'de"
      description="En yeni teknoloji ürünleri ve uzman hizmetlerimizle dijital dünyanızı güçlendirin. Akıllı telefonlardan dizüstü bilgisayarlara, aksesuarlardan teknik desteğe kadar her şey tek adreste."
      buttons={[
        {
          text: "Ürünlerimizi Keşfedin",
          href: "#products",
        },
        {
          text: "Hizmetlerimiz",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-professional-with-futuristic-interface_482257-130652.jpg"
      imageAlt="MNT Teknoloji Modern Arayüz Panosu"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-man_1098-15443.jpg",
          alt: "Smiling man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-attractive-man-glasses-is-posing-photographer-studio_613910-2638.jpg",
          alt: "Young attractive man in glasses is posing for photographer at studio.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/videographer-smiling-camera-working-computer-editing-video-footage-audio-app-sitting-mo_482257-2649.jpg",
          alt: "Videographer smiling at camera working on computer editing video footage and audio app sitting in mo...",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bearded-man-with-headphones_23-2149705880.jpg",
          alt: "Portrait of bearded man with headphones",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-black-freelancer-laying-sofa-texting-phone_482257-126547.jpg",
          alt: "Portrait of black freelancer laying on the sofa and texting on phone",
        },
      ]}
      avatarText="Binlerce Memnun Müşteri"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Yenilikçi Çözümler",
          icon: Lightbulb,
        },
        {
          type: "text",
          text: "Müşteri Memnuniyeti",
        },
        {
          type: "text-icon",
          text: "Hızlı Teslimat",
          icon: Rocket,
        },
        {
          type: "text",
          text: "Geleceğe Yön Veriyoruz",
        },
        {
          type: "text-icon",
          text: "7/24 Destek",
          icon: Headphones,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="MNT Teknoloji Hakkında"
      description={[
        "20 yılı aşkın tecrübemizle, Antalya Teknopark'ta faaliyet gösteren MNT Teknoloji, en güncel ve kaliteli teknoloji ürünlerini sizlere sunmaktan gurur duyar. Müşteri memnuniyetini ön planda tutan hizmet anlayışımızla, ihtiyaçlarınıza özel çözümler üretiyoruz.",
        "Amacımız, teknolojiyi herkes için erişilebilir kılmak ve dijital yaşamınızı kolaylaştırmaktır. Geniş ürün yelpazemiz, uzman teknik ekibimiz ve rekabetçi fiyatlarımızla her zaman yanınızdayız. Geleceğin teknolojisini bugünden deneyimlemek için bizi ziyaret edin.",
      ]}
      buttons={[
        {
          text: "Bize Ulaşın",
          href: "#contact",
        },
      ]}
      showBorder={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-items-per-row"
      useInvertedBackground={true}
      features={[
        {
          title: "Hızlı ve Güvenilir Hizmet",
          description: "Teknik servis ve satış sonrası destek süreçlerinde zamanında ve etkin çözümler sunuyoruz.",
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-3d-illustration-basketball-player-dunking-motion-design_183364-124108.jpg",
          imageAlt: "Hızlı ve güvenilir hizmet ikonu",
        },
        {
          title: "Geniş Ürün Yelpazesi",
          description: "Piyasadaki en yeni akıllı telefonlar, dizüstü bilgisayarlar, tabletler ve aksesuarlar tek adreste.",
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-sale-with-discounts_23-2152027239.jpg",
          imageAlt: "Geniş ürün yelpazesi ikonu",
        },
        {
          title: "Uzman Teknik Destek",
          description: "Deneyimli teknisyenlerimizle her türlü teknik sorununuzda profesyonel destek sağlıyoruz.",
          imageSrc: "http://img.b2bpic.net/free-photo/phone-call-communication-icon-illustration_53876-74751.jpg",
          imageAlt: "Uzman teknik destek ikonu",
        },
        {
          title: "Rekabetçi Fiyatlar",
          description: "Kaliteden ödün vermeden en uygun fiyatlarla teknolojiye erişmenizi sağlıyoruz.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cash-money_23-2151344861.jpg",
          imageAlt: "Rekabetçi fiyatlar ikonu",
        },
      ]}
      title="Neden MNT Teknoloji?"
      description="MNT Teknoloji olarak, sizlere en iyi alışveriş deneyimini sunmak için çalışıyoruz."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "X-Pro Akıllı Telefon",
          price: "14.999 TL",
          variant: "128 GB",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336643.jpg",
          imageAlt: "X-Pro Akıllı Telefon",
        },
        {
          id: "p2",
          name: "UltraBook Pro Dizüstü",
          price: "22.499 TL",
          variant: "16 GB RAM, 512 GB SSD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-laptop-notebook-flowerpots-dark-background_169016-49018.jpg",
          imageAlt: "UltraBook Pro Dizüstü Bilgisayar",
        },
        {
          id: "p3",
          name: "SoundMax Gürültü Önleyici Kulaklık",
          price: "2.999 TL",
          variant: "Siyah",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-wearing-sport-clothes_329181-13214.jpg",
          imageAlt: "SoundMax Gürültü Önleyici Kulaklık",
        },
        {
          id: "p4",
          name: "FitLife Akıllı Saat",
          price: "1.799 TL",
          variant: "Gümüş",
          imageSrc: "http://img.b2bpic.net/free-photo/extreme-closeup-asian-sportswoman-checking-pulse-with-electronic-device_1098-18984.jpg",
          imageAlt: "FitLife Akıllı Saat",
        },
        {
          id: "p5",
          name: "Turbo SSD Harici Disk",
          price: "1.299 TL",
          variant: "1 TB",
          imageSrc: "http://img.b2bpic.net/free-photo/disc-disk-port-copy-data_1232-4119.jpg",
          imageAlt: "Turbo SSD Harici Disk",
        },
        {
          id: "p6",
          name: "PowerCharge Kablosuz Şarj Cihazı",
          price: "599 TL",
          variant: "Hızlı Şarj",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-vehicle-charging-station-with-pump_23-2148895423.jpg",
          imageAlt: "PowerCharge Kablosuz Şarj Cihazı",
        },
      ]}
      title="En Yeni Ürünlerimizi Keşfedin"
      description="Geniş ürün yelpazemizle teknolojinin kalbinden en güncel ürünleri sizlere sunuyoruz."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="opacity"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "+20 Yıl",
          description: "Sektör Deneyimi",
        },
        {
          id: "m2",
          value: "297+",
          description: "Memnun Müşteri",
        },
        {
          id: "m3",
          value: "1000+",
          description: "Satılan Ürün",
        },
      ]}
      title="Başarılarımızdan Bazıları"
      description="Tecrübemiz ve müşteri odaklı yaklaşımımızla sektörde fark yaratıyoruz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ayşe Yılmaz",
          date: "2 ay önce",
          title: "Harika Hizmet!",
          quote: "MNT Teknoloji'den aldığım dizüstü bilgisayar beklentimin çok üzerindeydi. Hızlı teslimat ve sorunsuz kurulum için teşekkürler.",
          tag: "Müşteri Deneyimi",
          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-businessman-working-office_158595-1164.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-paint-textured-background-aesthetic-diy-experimental-art_53876-126191.jpg",
          imageAlt: "Testimonial background 1",
        },
        {
          id: "t2",
          name: "Can Demir",
          date: "5 ay önce",
          title: "Uzman Destek",
          quote: "Telefonumdaki sorunu kısa sürede giderdiler. Teknik ekibin bilgisi ve ilgisi gerçekten takdire şayan.",
          tag: "Teknik Servis",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/polygonal-abstract-wireframeshapes-network-connection-big-data-concept-background-with-line-dot_90220-496.jpg",
          imageAlt: "Testimonial background 2",
        },
        {
          id: "t3",
          name: "Elif Kaya",
          date: "1 ay önce",
          title: "Geniş Ürün Seçeneği",
          quote: "Aradığım tüm aksesuarları MNT Teknoloji'de buldum. Fiyatlar da oldukça uygun ve ürünler kaliteli.",
          tag: "Ürün Yelpazesi",
          avatarSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098593.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/neon-purple-lights-with-bokeh-effect_1017-2671.jpg",
          imageAlt: "Testimonial background 3",
        },
        {
          id: "t4",
          name: "Mehmet Yıldız",
          date: "3 ay önce",
          title: "Hızlı Çözüm",
          quote: "Acil ihtiyacım olan bir ürünü hemen temin ettiler. Güvenilir ve çözüm odaklı bir firma.",
          tag: "Acil Durum",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-with-arms-crossed_1170-1133.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-science-background-with-connecting-lines-dots_1048-13023.jpg",
          imageAlt: "Testimonial background 4",
        },
        {
          id: "t5",
          name: "Zeynep Arslan",
          date: "6 ay önce",
          title: "Güler Yüzlü Ekip",
          quote: "Mağazadaki çalışanlar çok yardımsever ve ürünler hakkında detaylı bilgi verdiler. Teşekkür ederim.",
          tag: "Satış Danışmanlığı",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-futuristic-particle-waves-network-communication_1048-18880.jpg",
          imageAlt: "Testimonial background 5",
        },
      ]}
      title="Müşterilerimiz Ne Söylüyor?"
      description="Memnuniyetiniz bizim için en büyük ilham kaynağıdır."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "InnovateCorp",
        "CodeFlow",
        "InsightWave",
        "GuardianNet",
        "ConnectHub",
        "SynapseAI",
        "SkyVault",
      ]}
      title="İş Ortaklarımız"
      description="Güçlü iş birlikleriyle daha iyi hizmet sunuyoruz."
      showCard={false}
      logos={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cpxent",
          alt: "InnovateCorp Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/linkedin-picture-template_742173-4956.jpg",
          alt: "CodeFlow Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/20-ux-ui-line-filled-icon-presentation_1142-22658.jpg",
          alt: "InsightWave Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/shield-gradient-logo-design-vector_474888-6221.jpg",
          alt: "GuardianNet Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/code-logo-collection-flat-design_23-2148809708.jpg",
          alt: "ConnectHub Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/technology-logo-template_23-2150529418.jpg",
          alt: "SynapseAI Logo",
        },
        {
          src: "http://img.b2bpic.net/free-vector/illustration-cloud-upload_53876-35883.jpg",
          alt: "SkyVault Logo",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Hangi ürün kategorilerini sunuyorsunuz?",
          content: "Akıllı telefonlar, dizüstü bilgisayarlar, tabletler, oyun konsolları, akıllı ev cihazları ve geniş bir aksesuar yelpazesi sunmaktayız.",
        },
        {
          id: "faq2",
          title: "Teknik servis hizmetleriniz var mı?",
          content: "Evet, deneyimli teknik ekibimizle tüm teknolojik cihazlarınız için onarım, bakım ve yazılım desteği sağlıyoruz.",
        },
        {
          id: "faq3",
          title: "Ürünlerinizin garantisi var mı?",
          content: "Tüm ürünlerimiz üretici garantisi altındadır. Garanti süreleri ve koşulları ürün sayfasında belirtilmektedir.",
        },
        {
          id: "faq4",
          title: "Mağazanıza nasıl ulaşabilirim?",
          content: "Mağazamız Sakarya Blv. No:186, Kepez/Antalya adresinde, Teknopark içerisinde yer almaktadır. Harita üzerinden yol tarifi alabilirsiniz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Merak ettikleriniz için buradayız."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="İletişim"
      title="Bize Ulaşın"
      description="Her türlü soru, görüş ve talepleriniz için bize yazın. En kısa sürede size geri dönüş yapacağız."
      inputPlaceholder="E-posta adresinizi girin"
      buttonText="Gönder"
      termsText="Gönder düğmesine tıklayarak gizlilik politikamızı kabul etmiş olursunuz."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Şirket",
          items: [
            {
              label: "Hakkımızda",
              href: "#about",
            },
            {
              label: "Hizmetler",
              href: "#features",
            },
            {
              label: "Ürünler",
              href: "#products",
            },
            {
              label: "İş Ortakları",
              href: "#socialproof",
            },
          ],
        },
        {
          title: "Destek",
          items: [
            {
              label: "Sıkça Sorulan Sorular",
              href: "#faq",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
            {
              label: "Gizlilik Politikası",
              href: "#",
            },
            {
              label: "Kullanım Koşulları",
              href: "#",
            },
          ],
        },
        {
          title: "Sosyal Medya",
          items: [
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
          ],
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/25th-years-anniversary-celebration-3d-render_460848-8044.jpg"
      logoAlt="MNT Teknoloji Logo"
      logoText="MNT Teknoloji"
      copyrightText="© 2024 MNT Teknoloji. Tüm Hakları Saklıdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
