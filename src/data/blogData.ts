export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kurban-eti-saklama-rehberi-2026",
    title: "Kurban Eti Nasıl Saklanır? Profesyonel Saklama ve Dinlendirme Rehberi",
    excerpt: "Kurban etinin lezzetini kaybetmemesi ve bozulmaması için kesim sonrası ilk 24 saat kritik öneme sahiptir. İşte profesyonel kasapların sırları...",
    category: "Bilgi Rehberi",
    author: "Çınar Kurban",
    date: "27 Mart 2026",
    readTime: "8 Dakika",
    tags: ["Et Saklama", "Kurban 2026", "Beslenme"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban bayramının en önemli aşamalarından biri, ibadet sonrası elde edilen etlerin doğru şekilde muhafaza edilmesidir. Yanlış saklama koşulları hem lezzet kaybına hem de hızlı bozulmalara yol açabilir.</p>
      
      <h2>1. Ölüm Sertliğine Dikkat (Rigor Mortis)</h2>
      <p>Hayvan kesildikten hemen sonra etler 'rigor mortis' denilen bir sertlik evresine girer. Bu aşamada etlerin hemen parçalanıp buzluğa atılması, etin sertleşmesine ve lezzetini kaybetmesine neden olur. Etin en az 5-6 saat, ideal olarak 24 saat boyunca oda sıcaklığında değil, 4-6 derece arasındaki serin bir ortamda (güneş görmeyen, hava akımı olan) dinlendirilmesi gerekir.</p>
      
      <blockquote>"Sıcak et asla buzluğa veya poşete girmemeli; aksi halde etin merkezi soğuyamaz ve 'yeşerme' dediğimiz bozulma başlar."</blockquote>

      <h2>2. Et Pişirmede Altın Kurallar</h2>
      <p>Kurban eti kesildiği gün yenmemelidir. Eğer mutlaka tüketilecekse, etin içindeki sinir ve dokuların yumuşaması için düdüklü tencere veya uzun süreli kısık ateşli pişirme yöntemleri tercih edilmelidir. Dinlenmiş et ise hem daha çabuk pişer hem de vücut tarafından daha kolay sindirilir.</p>
      
      <h2>3. Paketleme ve Dondurma Teknikleri</h2>
      <ul>
        <li><strong>Porsiyonlama:</strong> Etleri bir kez çözüldüğünde bitirilecek şekilde (yaklaşık 500gr - 1kg) porsiyonlara ayırın. Çözülen eti tekrar dondurmak sağlığa zararlıdır.</li>
        <li><strong>Hava ile Temas:</strong> Etleri saklama poşetlerine koyarken havasını olabildiğince alın. Mümkünse vakumlu paketleme cihazları kullanın; bu yöntem etin tazeliğini 3 kat daha uzun korur.</li>
        <li><strong>Kıyma vs Kuşbaşı:</strong> Kıyma haline getirilen etlerin yüzey alanı arttığı için bakteri üremesi çok daha hızlıdır. Bu yüzden kıymaları kuşbaşı etlere göre daha öncelikli tüketin.</li>
      </ul>
      
      <p>Profesyonel tesisimizde biz etlerinizi kesim sonrası frigofrik araçlara yüklemeden önce karkas formunda tam bir gece boyunca endüstriyel soğutucularımızda dinlendiriyoruz. Bu sayede kapınıza gelen etler işlem görmeye hazır ve güvenilir kondisyonda oluyor.</p>
    `
  },
  {
    id: "4",
    slug: "dana-vs-duve-hangisi-daha-cok-et-verir",
    title: "Dana mı, Düve mi? Kurbanlıkta Et Kalitesi ve Verim Karşılaştırması",
    excerpt: "Erkek tosun ile dişi düve arasındaki et lezzeti, yağ oranı ve net et verimi farklarını inceliyoruz. Kurban seçiminde hangisi daha kârlı?",
    category: "Seçim Rehberi",
    author: "Veteriner Hekim Selim Bey",
    date: "26 Mart 2026",
    readTime: "7 Dakika",
    tags: ["Hayvan Seçimi", "Et Verimi", "Kurbanlık"],
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban bayramı yaklaşırken her hissedarın aklındaki temel soru: 'Tosun mu alsak, düve mi?'. Her iki seçeneğin de kendine has avantajları ve dini gereklilikleri bulunmaktadır.</p>

      <h2>1. Erkek Dana (Tosun) Verimi</h2>
      <p>Erkek büyükbaş hayvanlar (tosun), dişilere göre daha fazla kemik yapısı ve daha az yağ oranına sahiptir. Karkas et verimi açısından tosun her zaman daha üstündür. Kas yapısı daha gelişmiş olduğu için hissedar başına düşen 'kırmızı et' oranı tosunlarda daha yüksek çıkar.</p>

      <h2>2. Dişi Düve (İnek Olmamış) Lezzeti</h2>
      <p>Düveler, hormon yapıları gereği etin içine daha fazla yağ (mermerleşme) yaparlar. Bu yağlanma, pişirme esnasında eriyerek ete olağanüstü bir lezzet ve yumuşaklık katar. Eğer önceliğiniz kilo değil de 'lokum gibi et' ise düve sizin için doğru tercih olabilir. Ancak dinen kurban edilecek dişi hayvanın damızlık vasfını yitirmemiş olması ve gebe olmaması şartına Çınar Kurban olarak çok dikkat ediyoruz.</p>

      <h2>3. Verim Karşılaştırması (Karkas Randımanı)</h2>
      <p>Ortalama bir canlı kiloya sahip tosun %55-60 arası karkas randımanı verirken, düvelerde bu oran %50-55 bandında kalabilir. Yani 500 kiloluk bir tosundan alacağınız et miktarı, aynı kilodaki düveye göre 20-30 kilo daha fazla olabilir.</p>

      <p>Özetle; kalabalık aileler ve et miktarına önem verenler için <strong>Erkek Tosun</strong>, lezzet ve yumuşaklık arayan gurme damaklar için <strong>Dişi Düve</strong> öneriyoruz. Tesisimizde bu ayrımı size net şekilde yaparak şeffaf kilo garantisi sunuyoruz.</p>
    `
  },
  {
    id: "2",
    slug: "kurbanlik-hayvan-secerken-dikkat-edilmesi-gerekenler",
    title: "Kurbanlık Hayvan Seçerken Nelere Dikkat Edilmelidir? (Kapak Atma Rehberi)",
    excerpt: "Dinen kurban vasfı taşıyan bir hayvan nasıl anlaşılır? Kapak atma, kilo tayini ve sağlık göstergeleri hakkında detaylı rehber.",
    category: "Seçim Rehberi",
    author: "Çınar Kurban",
    date: "25 Mart 2026",
    readTime: "6 Dakika",
    tags: ["Kurban Seçimi", "Hisse", "Vekalet"],
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>Kurbanlık hayvan seçimi sadece bir alışveriş değil, bir ibadetin başlangıcıdır. Bu nedenle seçilen hayvanın hem İslami usullere hem de sağlık şartlarına uygun olması gerekir.</p>

      <h2>Kapak Atma (Dini Yaş Tayini)</h2>
      <p>Büyükbaş hayvanlarda (sığır/manda) kurbanlık olabilme şartı 2 kameri yılı (24 ay) doldurmuş olmasıdır. Hayvanın kimliği bazen eksik olabilir, bu yüzden en sağlam kanıt 'kapak atma' denilen ön süt dişlerinin düşüp yerine kalıcı büyük dişlerin çıkmasıdır. Alt çenede iki büyük ön dişin görülmesi, hayvanın rüştünü ispat ettiğinin kanıtıdır.</p>

      <h2>Sağlık Kontrolü (A'dan Z'ye)</h2>
      <ul>
        <li><strong>Bakışlar:</strong> Hayvan canlı ve diri bakmalı, tepkisel olmalıdır.</li>
        <li><strong>Burun:</strong> Burunu nemli olmalı ancak sürekli akan veya köpüren bir salya bulunmamalıdır.</li>
        <li><strong>Yürüme:</strong> Topallık, yara veya belirgin bir fiziksel sakatlık kurban ibadetine engel olabilir.</li>
        <li><strong>Gebe Kontrolü:</strong> Dişi hayvanlarda veteriner ultrasonu ile gebelik testi yapılmalı, gebe hayvan asla kurban edilmemelidir.</li>
      </ul>

      <p>Çınar Kurban olarak biz, yaylalardan özenle seçtiğimiz tosunları veteriner hekimimizce tek tek kontrol ediyor ve tartı fişleriyle beraber her hissedara hayvana dair tam şeffaflık sağlıyoruz.</p>
    `
  },
  {
    id: "5",
    slug: "vekalet-kurbanin-ruhu-whatsapp-ve-dijital-vekalet",
    title: "Vekalet: Kurban İbadetinin Ruhu. WhatsApp Üzerinden Vekalet Geçerli mi?",
    excerpt: "Dijital çağda vekalet süreci nasıl işler? Diyanet İşleri Başkanlığı'nın bu konudaki görüşü ve bizim uygulama prensiplerimiz.",
    category: "Fıkhi Bilgiler",
    author: "Hoca Efendi",
    date: "24 Mart 2026",
    readTime: "5 Dakika",
    tags: ["Vekalet", "Dijital Kurban", "Fıkıh"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Kurban, bir 'vekalet' ibadetidir. Yani kişi kendi kurbanını kesemiyorsa, bunu bir başkasına veya kuruma kestirebilir. Peki ama fiziki olmayan bu süreç dini olarak nasıl tamamlanır?</p>

      <h2>WhatsApp veya Telefonla Vekalet Olur mu?</h2>
      <p>Evet, vekalet için asıl olan 'beyan' ve 'niyet'tir. Kişinin niyetini açıkça belirtmesi, vekil olan kişiye bunu iletmesi (sözlü, yazılı, SMS veya görüntülü görüşme) ve vekilin de bunu kabul etmesi yeterlidir. Önemli olan tarafların birbirini tanıması veya güven tesis edilmesidir.</p>

      <h2>Vekalet Sözü Nasıl Söylenmeli?</h2>
      <p>En uygun vekalet verme şekli şöyledir: <strong>'2026 kurbanımı kesmeye, kestirmeye ve etini hisse sahiplerine veya ihtiyaç sahiplerine dağıtmaya seni (veya kurumunu) genel vekil tayin ettim.'</strong> Bu sözden sonra vekilin 'Kabul ettim, Allah kabul etsin' demesiyle süreç fıkhen tamamlanır.</p>

      <h2>Bizim Sürecimiz</h2>
      <p>Çınar Kurban olarak biz, her hissedarımıza özel vekalet onay sistemi kullanıyoruz. Kesim anında isminizi zikrederek tekbir getiriyor ve bu süreci şeffaf şekilde kayıt altına alıyoruz. Gönül rahatlığıyla ibadetinizi temsil ediyoruz.</p>
    `
  },
  {
    id: "3",
    slug: "hisseli-kurban-kesimi-avantajlari",
    title: "Neden Hisseli Kurban? İstanbul Şehir Hayatında Devrim Yaratan Kolaylık",
    excerpt: "İstanbul gibi metropollerde kurban ibadetini yerine getirmenin en kolay yolu hisseli kurban organizasyonlarıdır. Neden mi?",
    category: "Şehir & Yaşam",
    author: "Çınar Kurban",
    date: "22 Mart 2026",
    readTime: "6 Dakika",
    tags: ["Hisse", "İstanbul", "Kolaylık"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>İstanbul'da kurban denince eski bayramlardaki o keşmekeş akla gelir: Boş arsalarda yapılan kontrolsüz kesimler, kaçan boğalar ve temizlik sorunları. Artık tüm bunlar mazide kaldı.</p>

      <h2>1. Profesyonel Organizasyon ve Güven</h2>
      <p>Hisseli kurbanın en büyük avantajı, tüm sürecin tek elden yönetilmesidir. 7 hissedar bir araya gelir (veya biz sizi birleştiririz), büyükbaş tosun vekaleten kesilir ve her şey dijital terazilerde milimetrik bölünür. Sizin ne tartmayla ne de pay etmeyle uğraşmanıza gerek kalmaz.</p>

      <h2>2. Hijyenik Tesis ve Soğuk Hava Deposu</h2>
      <p>Etlerin bozulmaması için kesim sonrası 'soğuk zincir' bozulmamalıdır. Tesisimizdeki endüstriyel soğutma sistemleri, etlerinizi size teslim edene kadar en ideal sıcaklıkta tutar. Bu, evde balkonlarda veya bahçelerde yapılan kesimlerde sağlanması imkansız bir hijyen standardıdır.</p>

      <h2>3. Zaman Tasarrufu</h2>
      <p>Bayram bayramdır; sevdiklerinizle vakit geçirme zamanıdır. Kesimhanelerde saatlerce sıra beklemek yerine, randevu saatinizde gelip sadece çayınızı içerek veya vekaletinizi dijital yolla verip kurbanınızın işlenmiş halde kapınıza gelmesini bekleyerek bayramı bayram tadında yaşarsınız.</p>
    `
  }
];
