// Each locale: language name, shared labels, home copy, privacy guide, terms guide.
const starlaneLocales = {
  en: ['English', 'Language|Home|Our playground|The studio|Contact us|Privacy policy|Terms of use|Skip to content|Back to top|Read the full English text|Reading guide'],
  zh: ['简体中文', '语言|首页|游乐场|工作室|联系我们|隐私政策|用户协议|跳转到正文|返回顶部|阅读完整英文原文|阅读摘要',
    '跟随你的星光。|一点创意，一段轻松时光，一个由你探索的小世界。|开始玩|慢一点，再玩一局。|我们从色彩、选择和小惊喜中寻找轻松的乐趣。|用色彩创造|试试看|给花园换个颜色。|选择花朵配色|晨光|白日梦|晴日|海风|工作室互动小品|轻松上手，尽情探索。|我们做简单好玩、注重细节、留有想象空间的休闲游戏。|缤纷创意|做出自己的风格。|日常乐趣|忙里偷闲的小冒险。|用心细节|让每一次互动都有趣。|用一点心意，装满想象力。|我们相信，好游戏能让平常的一刻变得更美好。|Starlane 是一家独立游戏工作室，探索休闲游戏、色彩和有趣的互动。|我们用好奇心开启每一段创作旅程。|我们的方向|休闲游戏|我们的精神|保持好奇|从一声你好开始。|有疑问、合作意向，或只是想打个招呼？欢迎来信。|玩一会儿，开心一整天。|独立创作，快乐世界。',
    '我们处理的信息|视游戏而定，我们可能处理游戏进度和设置、设备和诊断信息、广告标识与互动、购买记录、平台登录信息，以及你主动发来的邮件。|用途和合作方|这些信息用于运行游戏、发放购买内容与奖励、分析故障、投放和衡量广告以及处理客服请求。可能涉及商店、Google Play Games、Firebase 和广告合作方。|你的选择|可用的游戏同意设置和设备设置可帮助你管理广告及通知。当地法律可能赋予你访问、更正、删除等权利。卸载可能删除本地进度，但不会自动删除服务商持有的数据。|保留与联系|我们按服务和法律所需保留信息，合作方可能在其他国家处理信息。有关隐私权、儿童信息或其他疑问，请发邮件联系我们。',
    '游戏使用|请遵守游戏年龄要求和适用法律。游戏和网站供个人娱乐，请勿作弊、欺诈、干扰安全或侵害他人权益。|内购与虚拟物品|内购为可选项目；价格和内容以购买界面为准。虚拟物品通常仅在相应游戏内使用。退款与恢复资格取决于法律、商店政策及购买项目。|广告与存档|部分游戏提供广告奖励和第三方平台功能。卸载或换设备可能丢失本地进度；登录平台服务不一定开启云存档。|服务变更与权益|游戏和限时活动可能更新。遇到欺诈或严重违规时，访问可能受限。协议不限制法定消费者权益；遇到问题可以联系支持。'],
  es: ['Español', 'Idioma|Inicio|Zona de juegos|El estudio|Contacto|Política de privacidad|Condiciones de uso|Ir al contenido|Volver arriba|Leer el texto completo en inglés|Guía de lectura',
    'Sigue tu chispa.|Un toque de creatividad, un descanso agradable y un mundo por explorar.|Vamos a jugar|Menos prisa, una partida más.|Encontramos la diversión en los colores, las decisiones y las pequeñas sorpresas.|Crea con color|Pruébalo|Dale un color nuevo al jardín.|Elige una paleta|Amanecer|Ensueño|Sol|Brisa marina|Boceto interactivo del estudio|Fácil de empezar, bonito de descubrir.|Creamos juegos casuales accesibles, con detalles cuidados y espacio para imaginar.|Creatividad a todo color|Crea algo que se parezca a ti.|Juego cotidiano|Una aventura entre las tareas del día.|Detalles que encantan|Pequeños gestos que hacen agradable jugar.|Un poco de corazón y mucha imaginación.|Un buen juego puede alegrar un momento cualquiera.|Starlane es un estudio independiente de juegos casuales, color e interacción lúdica.|La curiosidad nos acompaña en cada proyecto.|Nuestro enfoque|Juegos casuales|Nuestro espíritu|Curiosidad natural|Todo empieza con un hola.|¿Una pregunta, una colaboración o un saludo? Nos encantará saber de ti.|Un poco de juego alegra el día.|Ideas independientes, mundos divertidos.',
    'Qué información tratamos|Según el juego, podemos tratar progreso y ajustes, datos del dispositivo y de diagnóstico, información publicitaria, compras, datos de acceso a plataformas y mensajes de soporte.|Usos y proveedores|Los datos ayudan a prestar el servicio, entregar compras y recompensas, resolver errores y gestionar anuncios. Pueden intervenir tiendas, Google Play Games, Firebase y socios publicitarios.|Tus opciones|Puedes gestionar permisos y preferencias desde los controles disponibles del juego o del dispositivo. Según la ley, puedes tener derechos de acceso, corrección o supresión. Desinstalar no borra automáticamente los datos de los proveedores.|Conservación y contacto|Conservamos los datos según las necesidades del servicio y la ley. Algunos proveedores pueden tratarlos en otros países. Escríbenos por consultas de privacidad o sobre menores.',
    'Uso del juego|Respeta los requisitos de edad y la ley. El servicio es para entretenimiento personal; no se permite hacer trampas, cometer fraude ni vulnerar derechos ajenos.|Compras y objetos virtuales|Las compras son opcionales y el precio se muestra antes de pagar. Los objetos virtuales se usan en su juego. Los reembolsos y la restauración dependen de la ley, la tienda y el producto.|Anuncios y progreso|Algunos juegos incluyen anuncios con recompensa y servicios externos. Desinstalar o cambiar de dispositivo puede borrar el progreso local; iniciar sesión no garantiza guardado en la nube.|Cambios y derechos|Las funciones y eventos pueden cambiar. El fraude o un incumplimiento grave pueden dar lugar a restricciones. Conservas los derechos legales del consumidor y puedes escribir a soporte.'],
  pt: ['Português', 'Idioma|Início|Área de jogos|O estúdio|Contato|Política de privacidade|Termos de uso|Ir para o conteúdo|Voltar ao topo|Ler o texto completo em inglês|Guia de leitura',
    'Siga seu brilho.|Um toque de criatividade, uma pausa gostosa e um mundo para explorar.|Vamos jogar|Menos pressa, mais uma partida.|Encontramos diversão nas cores, nas escolhas e nas pequenas surpresas.|Crie com cores|Experimente|Dê uma cor nova ao jardim.|Escolha uma paleta|Amanhecer|Devaneio|Sol|Brisa do mar|Esboço interativo do estúdio|Fácil de começar, gostoso de explorar.|Criamos jogos casuais acessíveis, com detalhes caprichados e espaço para imaginar.|Criatividade colorida|Crie algo com a sua cara.|Diversão cotidiana|Uma aventura entre as tarefas do dia.|Detalhes que encantam|Pequenos toques que fazem a diferença.|Um pouco de carinho e muita imaginação.|Um bom jogo pode deixar um momento comum mais alegre.|A Starlane é um estúdio independente de jogos casuais, cores e interações divertidas.|A curiosidade guia cada projeto.|Nosso foco|Jogos casuais|Nosso espírito|Curiosidade natural|Tudo começa com um olá.|Tem uma pergunta, proposta ou quer só dar um oi? Escreva para nós.|Um pouco de diversão ilumina o dia.|Ideias independentes, mundos divertidos.',
    'Dados tratados|Dependendo do jogo, podemos tratar progresso e preferências, dados do dispositivo e de diagnóstico, informações de anúncios, compras, login em plataformas e mensagens de suporte.|Uso e parceiros|Usamos dados para operar o jogo, entregar compras e recompensas, corrigir falhas e medir anúncios. Lojas, Google Play Games, Firebase e parceiros de publicidade podem participar.|Suas opções|Gerencie permissões e preferências pelos controles disponíveis no jogo ou no aparelho. A lei pode garantir acesso, correção e exclusão. Desinstalar não apaga automaticamente dados mantidos pelos fornecedores.|Retenção e contato|Mantemos informações conforme as necessidades do serviço e da lei. Fornecedores podem tratar dados em outros países. Escreva para nós sobre privacidade ou informações de crianças.',
    'Uso dos jogos|Observe os requisitos de idade e a lei. Os serviços são para entretenimento pessoal. Não use trapaças, cometa fraude ou viole direitos de outras pessoas.|Compras e itens virtuais|Compras são opcionais, com preço na tela de pagamento. Itens virtuais são usados no respectivo jogo. Reembolsos e restauração dependem da lei, da loja e do produto.|Anúncios e progresso|Alguns jogos têm anúncios com recompensa e serviços de terceiros. Desinstalar ou trocar de aparelho pode apagar o progresso local. Fazer login não garante salvamento na nuvem.|Mudanças e direitos|Recursos e eventos podem mudar. Fraude ou infração grave pode levar a restrições. Seus direitos legais de consumidor permanecem, e você pode procurar nosso suporte.'],
  fr: ['Français', 'Langue|Accueil|Espace jeux|Le studio|Nous contacter|Politique de confidentialité|Conditions d’utilisation|Aller au contenu|Retour en haut|Lire le texte intégral en anglais|Guide de lecture',
    'Suis ton étincelle.|Un peu de créativité, une pause agréable et un monde à explorer.|Jouons|Moins de hâte, encore une partie.|Couleurs, choix et petites surprises : le plaisir est là.|Créer en couleurs|À essayer|Donne une nouvelle couleur au jardin.|Choisir une palette|Aurore|Rêverie|Soleil|Brise marine|Croquis interactif du studio|Facile à découvrir, agréable à explorer.|Nous créons des jeux grand public accessibles, soignés et ouverts à l’imagination.|Créativité en couleurs|Crée quelque chose à ton image.|Jouer au quotidien|Une aventure au milieu de la journée.|Le plaisir des détails|Ces petites attentions qui font la différence.|Un peu de cœur, beaucoup d’imagination.|Un bon jeu peut illuminer un moment ordinaire.|Starlane est un studio indépendant qui explore les jeux grand public, la couleur et les interactions ludiques.|La curiosité accompagne chacun de nos projets.|Notre domaine|Jeux grand public|Notre esprit|Curieux par nature|Tout commence par un bonjour.|Une question, une collaboration ou un simple salut ? Écris-nous.|Un peu de jeu illumine la journée.|Esprits indépendants, mondes ludiques.',
    'Données traitées|Selon le jeu, nous pouvons traiter la progression, les réglages, les données techniques et de diagnostic, les données publicitaires, les achats, les connexions à des plateformes et les messages au support.|Usages et prestataires|Ces données servent à faire fonctionner les jeux, fournir achats et récompenses, corriger les erreurs et mesurer les publicités. Des boutiques, Google Play Games, Firebase et des partenaires publicitaires peuvent intervenir.|Vos choix|Gérez les autorisations et préférences dans les contrôles disponibles. La loi peut vous accorder des droits d’accès, de rectification ou d’effacement. La désinstallation n’efface pas automatiquement les données des prestataires.|Conservation et contact|Nous conservons les informations selon les besoins du service et les obligations légales. Des prestataires peuvent les traiter à l’étranger. Contactez-nous pour toute question de confidentialité, notamment concernant les enfants.',
    'Utilisation|Respectez les conditions d’âge et la loi. Les services sont destinés au divertissement personnel. La triche, la fraude et les atteintes aux droits d’autrui sont interdites.|Achats et objets virtuels|Les achats sont facultatifs, avec un prix affiché avant paiement. Les objets virtuels s’utilisent dans le jeu concerné. Les remboursements et la restauration dépendent de la loi, de la boutique et du produit.|Publicités et progression|Certains jeux proposent des publicités récompensées et des services tiers. Une désinstallation ou un changement d’appareil peut effacer la progression locale. La connexion ne garantit pas une sauvegarde en ligne.|Modifications et droits|Les fonctionnalités et événements peuvent évoluer. Une fraude ou une violation grave peut entraîner une restriction. Vos droits légaux de consommateur restent applicables et le support peut vous aider.'],
  de: ['Deutsch', 'Sprache|Startseite|Spielwiese|Das Studio|Kontakt|Datenschutzerklärung|Nutzungsbedingungen|Zum Inhalt|Nach oben|Vollständigen englischen Text lesen|Lesehilfe',
    'Folge deinem Funkeln.|Ein wenig Kreativität, eine schöne Pause und eine Welt zum Entdecken.|Losspielen|Weniger Eile, noch eine Runde.|Farben, Entscheidungen und kleine Überraschungen machen uns Spaß.|Mit Farben gestalten|Probier es aus|Gib dem Garten neue Farben.|Farbpalette wählen|Morgenrot|Tagtraum|Sonnenschein|Meeresbrise|Interaktive Skizze aus dem Studio|Leicht einzusteigen, schön zu entdecken.|Wir machen zugängliche Gelegenheitsspiele mit liebevollen Details und Platz für Fantasie.|Bunte Kreativität|Gestalte etwas ganz Eigenes.|Spielen im Alltag|Ein kleines Abenteuer zwischendurch.|Liebevolle Details|Kleine Dinge, die das Spielen schöner machen.|Ein bisschen Herz und viel Fantasie.|Ein gutes Spiel kann einen ganz gewöhnlichen Moment verschönern.|Starlane ist ein unabhängiges Studio für Gelegenheitsspiele, Farben und verspielte Interaktionen.|Neugier begleitet uns bei jedem Projekt.|Unser Schwerpunkt|Gelegenheitsspiele|Unser Antrieb|Von Natur aus neugierig|Alles beginnt mit einem Hallo.|Eine Frage, eine Idee zur Zusammenarbeit oder nur ein Gruß? Schreib uns.|Ein bisschen Spiel macht den Tag heller.|Unabhängige Ideen, verspielte Welten.',
    'Verarbeitete Daten|Je nach Spiel können Spielfortschritt, Einstellungen, Geräte- und Diagnosedaten, Werbedaten, Käufe, Plattformanmeldungen und Supportnachrichten verarbeitet werden.|Zwecke und Anbieter|Die Daten dienen dem Spielbetrieb, Käufen, Belohnungen, der Fehlerbehebung und Werbung. App-Stores, Google Play Games, Firebase und Werbepartner können beteiligt sein.|Deine Möglichkeiten|Berechtigungen und Einstellungen lassen sich über verfügbare Spiel- oder Geräteeinstellungen verwalten. Je nach Rechtslage bestehen Rechte auf Auskunft, Berichtigung oder Löschung. Eine Deinstallation löscht Daten bei Dienstleistern nicht automatisch.|Speicherung und Kontakt|Wir speichern Daten nach den Erfordernissen des Dienstes und des Gesetzes. Dienstleister können Daten in anderen Ländern verarbeiten. Schreib uns bei Fragen zum Datenschutz oder zu Daten von Kindern.',
    'Nutzung|Beachte die Altersvorgaben und geltendes Recht. Die Dienste dienen privater Unterhaltung. Betrug, Manipulationen und Verletzungen fremder Rechte sind untersagt.|Käufe und virtuelle Gegenstände|Käufe sind freiwillig; der Preis wird vor der Zahlung angezeigt. Virtuelle Gegenstände sind im jeweiligen Spiel nutzbar. Erstattungen und Wiederherstellung hängen von Recht, Store und Produkt ab.|Werbung und Spielfortschritt|Einige Spiele bieten Werbung mit Belohnungen oder Dienste Dritter. Deinstallation oder Gerätewechsel können lokalen Fortschritt löschen. Eine Anmeldung garantiert keine Cloud-Sicherung.|Änderungen und Rechte|Funktionen und Events können sich ändern. Betrug oder schwere Verstöße können Einschränkungen zur Folge haben. Gesetzliche Verbraucherrechte bleiben bestehen. Unser Support hilft bei Fragen.'],
  id: ['Bahasa Indonesia', 'Bahasa|Beranda|Area bermain|Studio|Hubungi kami|Kebijakan privasi|Ketentuan penggunaan|Lompat ke konten|Kembali ke atas|Baca teks lengkap dalam bahasa Inggris|Panduan membaca',
    'Ikuti cahayamu.|Sedikit kreativitas, jeda yang menyenangkan, dan dunia untuk dijelajahi.|Ayo bermain|Santai saja, main sekali lagi.|Warna, pilihan, dan kejutan kecil membuat bermain terasa menyenangkan.|Berkreasi dengan warna|Coba sekarang|Beri warna baru pada taman.|Pilih palet bunga|Fajar|Lamunan|Sinar matahari|Angin laut|Sketsa interaktif dari studio|Mudah dimulai, seru dijelajahi.|Kami membuat gim kasual yang mudah dimainkan, dengan detail menarik dan ruang untuk berimajinasi.|Kreasi penuh warna|Buat sesuatu yang mencerminkan dirimu.|Bermain setiap hari|Petualangan kecil di sela kesibukan.|Detail yang menyenangkan|Sentuhan kecil yang membuat bermain lebih seru.|Sedikit perhatian, banyak imajinasi.|Gim yang baik bisa mencerahkan momen biasa.|Starlane adalah studio independen yang menjelajahi gim kasual, warna, dan interaksi yang menyenangkan.|Rasa ingin tahu menuntun setiap proyek kami.|Fokus kami|Gim kasual|Semangat kami|Selalu ingin tahu|Semua berawal dari sapaan.|Ada pertanyaan, ide kerja sama, atau sekadar ingin menyapa? Kirim pesan kepada kami.|Sedikit bermain, hari lebih cerah.|Pikiran mandiri, dunia yang ceria.',
    'Informasi yang diproses|Bergantung pada gim, kami dapat memproses progres, pengaturan, data perangkat dan diagnostik, informasi iklan, pembelian, login platform, serta pesan dukungan.|Tujuan dan penyedia|Informasi digunakan untuk menjalankan gim, memberikan pembelian dan hadiah, memperbaiki kesalahan, serta mengukur iklan. Toko aplikasi, Google Play Games, Firebase, dan mitra iklan dapat terlibat.|Pilihan Anda|Kelola izin dan preferensi melalui kontrol yang tersedia di gim atau perangkat. Hukum dapat memberikan hak akses, koreksi, dan penghapusan. Menghapus aplikasi tidak otomatis menghapus data yang disimpan penyedia.|Penyimpanan dan kontak|Kami menyimpan data sesuai kebutuhan layanan dan hukum. Penyedia dapat memproses data di negara lain. Hubungi kami untuk pertanyaan privasi atau data anak.',
    'Penggunaan gim|Patuhi persyaratan usia dan hukum. Layanan untuk hiburan pribadi. Kecurangan, penipuan, dan pelanggaran hak orang lain dilarang.|Pembelian dan barang virtual|Pembelian bersifat opsional dengan harga yang ditampilkan sebelum pembayaran. Barang virtual digunakan di gim terkait. Pengembalian dana dan pemulihan bergantung pada hukum, toko, dan produk.|Iklan dan progres|Sebagian gim menawarkan iklan berhadiah serta layanan pihak ketiga. Menghapus gim atau mengganti perangkat dapat menghilangkan progres lokal. Login tidak menjamin penyimpanan cloud.|Perubahan dan hak|Fitur dan acara dapat berubah. Penipuan atau pelanggaran berat dapat menyebabkan pembatasan. Hak konsumen tetap berlaku, dan Anda dapat menghubungi dukungan.'],
  ja: ['日本語', '言語|ホーム|遊び場|スタジオ|お問い合わせ|プライバシーポリシー|利用規約|本文へ移動|ページ上部へ|英語の全文を読む|概要ガイド',
    'ときめきを追いかけよう。|少しの創造力と心地よいひと休み。自由に遊べる小さな世界。|遊んでみる|あわてず、もう一回。|色や選択、小さな発見から、遊ぶ楽しさを見つけます。|色で遊ぼう|試してみる|花の色を変えてみよう。|花の配色を選ぶ|朝焼け|夢心地|陽だまり|潮風|スタジオの遊べるスケッチ|気軽に始めて、自由に楽しむ。|遊びやすさと細部を大切に、想像の余地があるカジュアルゲームを作っています。|色あざやかな創造|自分らしいものを作ろう。|日常の遊び|忙しい毎日の合間に、小さな冒険を。|うれしい細部|小さな工夫で遊びをもっと楽しく。|少しの心と、たくさんの想像力。|よいゲームは、何気ないひとときを少し素敵にしてくれます。|Starlane は、カジュアルゲーム、色彩、遊び心のある体験を探る独立系スタジオです。|好奇心を大切に、ひとつずつ形にしています。|私たちの分野|カジュアルゲーム|私たちの姿勢|好奇心を忘れない|こんにちは、から始めよう。|ご質問やコラボのご相談、ちょっとしたご挨拶もお待ちしています。|少し遊んで、明るい一日を。|独立した発想、遊び心のある世界。',
    '取り扱う情報|ゲームに応じて、進行状況や設定、端末・診断情報、広告関連情報、購入情報、プラットフォームへのログイン情報、お問い合わせ内容を取り扱うことがあります。|利用目的と提供事業者|ゲーム運営、購入や報酬の提供、不具合対応、広告の配信や測定に利用します。アプリストア、Google Play Games、Firebase、広告事業者が関わる場合があります。|選択と権利|ゲームや端末の設定で利用可能な権限や広告設定を管理できます。適用法により、開示・訂正・削除などの権利が認められる場合があります。アンインストールで事業者のデータが自動削除されるわけではありません。|保存と連絡先|サービス提供や法令上必要な期間、情報を保存します。事業者が国外で処理する場合があります。プライバシーや子どもの情報についてはメールでお問い合わせください。',
    'ゲームの利用|年齢条件と適用法を守り、個人での娯楽に利用してください。不正プレイ、詐欺、他者の権利侵害は禁止されています。|購入と仮想アイテム|アプリ内購入は任意で、価格は購入画面に表示されます。仮想アイテムは該当ゲーム内で利用します。返金や購入の復元は適用法、ストア規定、商品によって異なります。|広告とセーブ|報酬付き広告や第三者サービスがある場合があります。アンインストールや機種変更で端末内の進行状況が失われることがあります。ログインしてもクラウド保存が有効とは限りません。|変更と権利|機能やイベントが変更される場合があります。詐欺や重大な違反に対して利用を制限することがあります。法令上の消費者の権利は維持されます。困ったときはお問い合わせください。'],
  ko: ['한국어', '언어|홈|놀이터|스튜디오|문의하기|개인정보 처리방침|이용약관|본문으로 이동|맨 위로|영문 전문 읽기|요약 안내',
    '반짝임을 따라가요.|작은 창의력과 기분 좋은 휴식, 자유롭게 탐험할 수 있는 세상.|플레이하기|서두르지 말고 한 판 더.|색과 선택, 작은 발견에서 즐거움을 찾습니다.|색으로 만들기|체험하기|정원의 색을 바꿔 보세요.|꽃 색상 팔레트 선택|새벽빛|꿈결|햇살|바닷바람|스튜디오의 인터랙티브 스케치|쉽게 시작하고 즐겁게 탐험해요.|쉽게 즐길 수 있고 세심한 디테일과 상상할 여지가 있는 캐주얼 게임을 만듭니다.|다채로운 창의력|나만의 느낌을 표현해 보세요.|일상 속 놀이|바쁜 하루 사이의 작은 모험.|기분 좋은 디테일|놀이를 더 즐겁게 하는 작은 손길.|작은 마음, 큰 상상력.|좋은 게임은 평범한 순간을 조금 더 특별하게 만듭니다.|Starlane은 캐주얼 게임과 색, 재미있는 상호작용을 탐구하는 독립 스튜디오입니다.|호기심을 잃지 않고 하나씩 만들어 갑니다.|우리의 분야|캐주얼 게임|우리의 정신|늘 새로운 호기심|인사 한마디에서 시작해요.|질문이나 협업 제안, 가벼운 인사도 환영합니다.|잠깐의 놀이로 더 밝은 하루.|독립적인 생각, 즐거운 세상.',
    '처리하는 정보|게임에 따라 진행 상황과 설정, 기기 및 진단 정보, 광고 정보, 구매 정보, 플랫폼 로그인과 문의 내용을 처리할 수 있습니다.|이용 목적과 제공업체|게임 운영, 구매 및 보상 제공, 오류 해결, 광고 제공 및 측정에 사용합니다. 앱 스토어, Google Play Games, Firebase 및 광고 파트너가 관여할 수 있습니다.|선택과 권리|게임이나 기기의 설정에서 사용 가능한 권한과 광고 설정을 관리할 수 있습니다. 법률에 따라 열람, 정정, 삭제 등을 요청할 수 있습니다. 앱을 삭제해도 제공업체가 가진 정보가 자동으로 삭제되지는 않습니다.|보관 및 문의|서비스 및 법률상 필요한 기간 동안 정보를 보관하며, 제공업체는 다른 나라에서 처리할 수 있습니다. 개인정보 또는 아동의 정보에 관한 질문은 이메일로 문의하세요.',
    '게임 이용|연령 요건과 법을 준수하고 개인적인 오락 목적으로 이용하세요. 부정행위, 사기, 타인의 권리 침해는 금지됩니다.|구매와 가상 아이템|인앱 구매는 선택 사항이며 가격은 구매 화면에 표시됩니다. 가상 아이템은 해당 게임에서 사용합니다. 환불과 복원은 관련 법률, 스토어 정책, 상품에 따라 달라집니다.|광고와 저장|일부 게임은 보상형 광고와 외부 서비스를 제공합니다. 앱 삭제나 기기 변경 시 로컬 진행 정보가 사라질 수 있으며 로그인만으로 클라우드 저장이 보장되지 않습니다.|변경과 권리|기능과 이벤트는 변경될 수 있습니다. 사기나 중대한 위반에는 이용 제한이 적용될 수 있습니다. 법정 소비자 권리는 유지되며 도움이 필요하면 문의할 수 있습니다.'],
  ru: ['Русский', 'Язык|Главная|Игровая площадка|Студия|Связаться с нами|Политика конфиденциальности|Условия использования|К основному содержанию|Наверх|Читать полный текст на английском|Краткое руководство',
    'Следуй за своей искрой.|Немного творчества, приятная пауза и целый мир для открытий.|Давай играть|Меньше спешки, ещё одна игра.|Цвета, выбор и маленькие сюрпризы делают игру приятной.|Твори в цвете|Попробуй|Раскрась цветы в саду.|Выбрать палитру|Рассвет|Грёзы|Солнечный день|Морской бриз|Интерактивный эскиз студии|Легко начать, приятно исследовать.|Мы создаём доступные казуальные игры с вниманием к деталям и местом для воображения.|Яркое творчество|Создай что-то своё.|Игра каждый день|Маленькое приключение между делами.|Приятные детали|Мелочи, которые делают игру увлекательнее.|Немного тепла и много фантазии.|Хорошая игра может украсить обычный момент.|Starlane — независимая студия казуальных игр, ярких цветов и игровых экспериментов.|В каждом проекте нами движет любопытство.|Наше направление|Казуальные игры|Наш настрой|Любопытство к новому|Всё начинается с приветствия.|Есть вопрос, идея для сотрудничества или просто хочется поздороваться? Напиши нам.|Немного игры — и день светлее.|Независимые идеи, игровые миры.',
    'Какие данные обрабатываются|В зависимости от игры мы можем обрабатывать прогресс, настройки, данные устройства и диагностики, сведения о рекламе, покупках, входе на платформу и обращения в поддержку.|Цели и поставщики|Данные нужны для работы игр, выдачи покупок и наград, исправления ошибок и работы рекламы. Могут участвовать магазины приложений, Google Play Games, Firebase и рекламные партнёры.|Ваш выбор|Управляйте доступными разрешениями в игре или на устройстве. Закон может предоставлять права на доступ, исправление и удаление. Удаление игры не удаляет автоматически данные у поставщиков.|Хранение и контакты|Данные хранятся по мере необходимости для работы сервиса и соблюдения закона. Поставщики могут обрабатывать их в других странах. По вопросам конфиденциальности и данных детей напишите нам.',
    'Использование игр|Соблюдайте возрастные требования и закон. Сервисы предназначены для личного развлечения. Запрещены обман, мошенничество и нарушение чужих прав.|Покупки и виртуальные предметы|Покупки необязательны; цена указывается до оплаты. Виртуальные предметы используются в соответствующей игре. Возврат и восстановление зависят от закона, магазина и товара.|Реклама и прогресс|Некоторые игры содержат рекламу с наградами и сторонние сервисы. При удалении приложения или смене устройства локальный прогресс может исчезнуть. Вход не гарантирует облачного сохранения.|Изменения и права|Функции и события могут меняться. Мошенничество или серьёзные нарушения могут привести к ограничениям. Законные права потребителей сохраняются; за помощью можно обратиться в поддержку.'],
  vi: ['Tiếng Việt', 'Ngôn ngữ|Trang chủ|Sân chơi|Studio|Liên hệ|Chính sách quyền riêng tư|Điều khoản sử dụng|Đến nội dung|Về đầu trang|Đọc toàn văn tiếng Anh|Tóm tắt để tham khảo',
    'Theo dấu ánh sáng của bạn.|Một chút sáng tạo, một khoảng nghỉ dễ chịu và một thế giới để khám phá.|Chơi nào|Chậm lại, chơi thêm một ván.|Màu sắc, lựa chọn và những bất ngờ nhỏ làm nên niềm vui.|Sáng tạo với màu sắc|Thử ngay|Đổi màu cho khu vườn.|Chọn bảng màu hoa|Bình minh|Mơ màng|Nắng ấm|Gió biển|Phác thảo tương tác của studio|Dễ bắt đầu, thú vị để khám phá.|Chúng tôi làm trò chơi giải trí dễ tiếp cận, chăm chút chi tiết và dành chỗ cho trí tưởng tượng.|Sáng tạo đầy màu sắc|Tạo một điều mang dấu ấn của bạn.|Niềm vui mỗi ngày|Một cuộc phiêu lưu nhỏ giữa ngày bận rộn.|Chi tiết thú vị|Những điều nhỏ giúp chơi vui hơn.|Một chút chân thành và thật nhiều tưởng tượng.|Một trò chơi hay có thể làm khoảnh khắc bình thường trở nên đẹp hơn.|Starlane là studio độc lập khám phá trò chơi giải trí, màu sắc và tương tác vui nhộn.|Sự tò mò dẫn đường trong mỗi dự án.|Trọng tâm|Trò chơi giải trí|Tinh thần|Luôn tò mò|Mọi thứ bắt đầu từ một lời chào.|Bạn có câu hỏi, muốn hợp tác hay chỉ muốn chào hỏi? Hãy viết cho chúng tôi.|Chơi một chút, ngày vui hơn.|Ý tưởng độc lập, thế giới vui tươi.',
    'Thông tin được xử lý|Tùy trò chơi, chúng tôi có thể xử lý tiến độ, cài đặt, dữ liệu thiết bị và chẩn đoán, dữ liệu quảng cáo, giao dịch, đăng nhập nền tảng và nội dung hỗ trợ.|Mục đích và đối tác|Dữ liệu dùng để vận hành trò chơi, cung cấp giao dịch và phần thưởng, sửa lỗi và đo lường quảng cáo. Cửa hàng ứng dụng, Google Play Games, Firebase và đối tác quảng cáo có thể tham gia.|Lựa chọn của bạn|Bạn có thể quản lý các quyền và tùy chọn có sẵn trên thiết bị hoặc trong trò chơi. Luật có thể cho phép truy cập, sửa hoặc xóa dữ liệu. Gỡ ứng dụng không tự động xóa dữ liệu do nhà cung cấp lưu giữ.|Lưu giữ và liên hệ|Chúng tôi lưu giữ dữ liệu theo nhu cầu dịch vụ và pháp luật. Nhà cung cấp có thể xử lý ở quốc gia khác. Hãy liên hệ nếu có câu hỏi về quyền riêng tư hoặc thông tin của trẻ em.',
    'Sử dụng trò chơi|Tuân thủ yêu cầu về tuổi và pháp luật. Dịch vụ dùng để giải trí cá nhân; không được gian lận, lừa đảo hay xâm phạm quyền của người khác.|Mua hàng và vật phẩm ảo|Mua hàng là tùy chọn, giá hiển thị trước khi thanh toán. Vật phẩm ảo dùng trong trò chơi tương ứng. Việc hoàn tiền và khôi phục tùy thuộc vào luật, cửa hàng và sản phẩm.|Quảng cáo và tiến độ|Một số trò chơi có quảng cáo nhận thưởng và dịch vụ bên thứ ba. Gỡ ứng dụng hoặc đổi thiết bị có thể làm mất tiến độ lưu trên máy. Đăng nhập không bảo đảm có lưu đám mây.|Thay đổi và quyền lợi|Tính năng và sự kiện có thể thay đổi. Gian lận hoặc vi phạm nghiêm trọng có thể bị hạn chế truy cập. Quyền của người tiêu dùng theo pháp luật vẫn được bảo đảm; bạn có thể liên hệ hỗ trợ.'],
  th: ['ภาษาไทย', 'ภาษา|หน้าแรก|สนามเล่น|สตูดิโอ|ติดต่อเรา|นโยบายความเป็นส่วนตัว|ข้อกำหนดการใช้งาน|ข้ามไปยังเนื้อหา|กลับด้านบน|อ่านฉบับเต็มภาษาอังกฤษ|สรุปเพื่อการอ่าน',
    'ตามประกายของคุณไป|เติมความคิดสร้างสรรค์ พักสบาย ๆ แล้วออกสำรวจโลกเล็ก ๆ ของคุณ|มาเล่นกัน|ไม่ต้องรีบ เล่นอีกสักรอบ|สีสัน ทางเลือก และเรื่องน่าประหลาดใจเล็ก ๆ ทำให้การเล่นสนุก|สร้างสรรค์ด้วยสี|ลองเล่น|เปลี่ยนสีให้สวนดอกไม้|เลือกชุดสีดอกไม้|รุ่งอรุณ|ฝันกลางวัน|แสงแดด|สายลมทะเล|ภาพร่างแบบโต้ตอบจากสตูดิโอ|เริ่มง่าย สนุกกับการสำรวจ|เราสร้างเกมเล่นสบายที่เข้าถึงง่าย ใส่ใจรายละเอียด และเปิดพื้นที่ให้จินตนาการ|ความคิดสร้างสรรค์หลากสี|สร้างสิ่งที่เป็นตัวคุณ|เล่นได้ทุกวัน|การผจญภัยเล็ก ๆ ระหว่างวัน|รายละเอียดที่ชวนยิ้ม|สิ่งเล็ก ๆ ที่ทำให้การเล่นสนุกขึ้น|หัวใจเล็ก ๆ กับจินตนาการมากมาย|เกมที่ดีทำให้ช่วงเวลาธรรมดาพิเศษขึ้นได้|Starlane เป็นสตูดิโออิสระที่สำรวจเกมเล่นสบาย สีสัน และการโต้ตอบที่สนุกสนาน|ความอยากรู้อยากเห็นนำทางทุกโครงการของเรา|สิ่งที่เรามุ่งเน้น|เกมเล่นสบาย|จิตวิญญาณของเรา|ชอบค้นหาสิ่งใหม่|ทุกอย่างเริ่มจากคำว่าสวัสดี|มีคำถาม อยากร่วมงาน หรือแค่อยากทักทาย เขียนมาหาเราได้เลย|เล่นสักนิด ให้วันนี้สดใส|ความคิดอิสระ โลกแห่งความสนุก',
    'ข้อมูลที่ประมวลผล|เราอาจประมวลผลความคืบหน้า การตั้งค่า ข้อมูลอุปกรณ์และการวินิจฉัย ข้อมูลโฆษณา การซื้อ การเข้าสู่ระบบแพลตฟอร์ม และข้อความที่ส่งถึงฝ่ายช่วยเหลือ ทั้งนี้ขึ้นอยู่กับเกม|วัตถุประสงค์และผู้ให้บริการ|ข้อมูลช่วยให้เกมทำงาน ส่งมอบสิ่งที่ซื้อและรางวัล แก้ไขข้อผิดพลาด และวัดผลโฆษณา ร้านค้าแอป Google Play Games, Firebase และพันธมิตรโฆษณาอาจมีส่วนเกี่ยวข้อง|ทางเลือกของคุณ|จัดการสิทธิ์และการตั้งค่าที่มีในเกมหรืออุปกรณ์ได้ กฎหมายอาจให้สิทธิเข้าถึง แก้ไข หรือลบข้อมูล การถอนการติดตั้งไม่ได้ลบข้อมูลของผู้ให้บริการโดยอัตโนมัติ|การเก็บรักษาและการติดต่อ|เราเก็บข้อมูลตามความจำเป็นของบริการและกฎหมาย ผู้ให้บริการอาจประมวลผลในประเทศอื่น ติดต่อเราหากมีคำถามเกี่ยวกับความเป็นส่วนตัวหรือข้อมูลเด็ก',
    'การใช้งานเกม|ปฏิบัติตามข้อกำหนดด้านอายุและกฎหมาย ใช้บริการเพื่อความบันเทิงส่วนตัว ห้ามโกง ฉ้อโกง หรือละเมิดสิทธิ์ผู้อื่น|การซื้อและไอเท็มเสมือน|การซื้อเป็นทางเลือกและจะแสดงราคาก่อนชำระเงิน ไอเท็มเสมือนใช้ในเกมที่เกี่ยวข้อง การคืนเงินและกู้คืนรายการซื้อขึ้นอยู่กับกฎหมาย ร้านค้า และสินค้า|โฆษณาและความคืบหน้า|บางเกมมีโฆษณาพร้อมรางวัลและบริการจากบุคคลภายนอก การถอนการติดตั้งหรือเปลี่ยนอุปกรณ์อาจทำให้ความคืบหน้าในเครื่องหายไป การเข้าสู่ระบบไม่ได้รับประกันการบันทึกบนคลาวด์|การเปลี่ยนแปลงและสิทธิ์|ฟีเจอร์และกิจกรรมอาจเปลี่ยนแปลง การฉ้อโกงหรือการละเมิดร้ายแรงอาจนำไปสู่การจำกัดการเข้าถึง สิทธิ์ผู้บริโภคตามกฎหมายยังคงอยู่ ติดต่อเราได้หากต้องการความช่วยเหลือ.']
};

(() => {
  const url = new URL(location.href);
  const supported = code => Object.prototype.hasOwnProperty.call(starlaneLocales, code);
  const requested = url.searchParams.get('lang');
  const browser = (navigator.languages || [navigator.language]).map(code => (code || '').toLowerCase().split('-')[0]).find(supported);
  const code = supported(requested) ? requested : browser || 'en';
  const locale = starlaneLocales[code];
  const [language, home, play, studio, contact, privacy, terms, skip, top, full, guide] = locale[1].split('|');
  const page = /(?:privacy|terms)\.html$/.exec(url.pathname)?.[0];
  document.documentElement.lang = code === 'zh' ? 'zh-Hans' : code === 'pt' ? 'pt-BR' : code;
  const set = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  const label = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('aria-label', value);
  };
  const select = document.createElement('select');
  select.className = 'language-picker';
  select.setAttribute('aria-label', language);
  for (const [key, data] of Object.entries(starlaneLocales)) {
    const option = new Option(data[0], key, false, code === key);
    option.lang = key;
    select.add(option);
  }
  select.addEventListener('change', () => {
    url.searchParams.set('lang', select.value);
    location.assign(url.href);
  });
  document.querySelector('.nav nav').append(select);
  // Preserve an explicit language choice when moving between these three pages.
  document.querySelectorAll('a[href]').forEach(link => {
    if (!/^(index|privacy|terms)\.html$/.test(link.getAttribute('href'))) return;
    const next = new URL(link.href);
    next.searchParams.set('lang', code);
    link.href = next.href;
  });
  if (code === 'en') return;
  set('.skip', skip);
  set('.nav nav a[href*="index.html"]', home);
  set('.nav nav a[href="#play"]', play);
  set('.nav nav a[href="#studio"]', studio);
  set('.nav-contact', contact);
  set('.nav nav a[href*="privacy.html"]', privacy);
  set('footer a[href*="privacy.html"]', privacy);
  set('footer a[href*="terms.html"]', terms);
  set('footer a[href*="index.html"]', home);
  set('.footer-bottom a[href="#"]', top);
  label('.nav nav', language + ' · ' + home);
  label('.nav .brand', 'Starlane · ' + home);
  set('.footer-bottom > span', '© 2026 Starlane');

  if (page) {
    const isPrivacy = page === 'privacy.html';
    const title = isPrivacy ? privacy : terms;
    document.title = title + ' — Starlane';
    document.querySelector('meta[name="description"]').content = title + ' — ' + guide + ' · Starlane';
    set('.privacy-hero h1', title);
    set('.privacy-hero .eyebrow', 'STARLANE');
    const fullLink = document.createElement('a');
    fullLink.href = page + '?lang=en';
    fullLink.textContent = full + ' ↗';
    fullLink.className = 'legal-original';
    const heroText = document.querySelector('.privacy-hero p');
    heroText.replaceChildren(document.createTextNode(guide + ' · '), fullLink);
    const toc = document.querySelector('.privacy-toc');
    toc.setAttribute('aria-label', title);
    toc.replaceChildren();
    const article = document.querySelector('.privacy-article');
    article.replaceChildren();
    const sections = locale[isPrivacy ? 3 : 4].split('|');
    for (let i = 0; i < sections.length; i += 2) {
      const section = document.createElement('section');
      section.id = 'guide-' + (i / 2 + 1);
      const heading = document.createElement('h2');
      heading.textContent = sections[i];
      const body = document.createElement('p');
      body.textContent = sections[i + 1];
      section.append(heading, body);
      article.append(section);
      const anchor = document.createElement('a');
      anchor.href = '#' + section.id;
      anchor.textContent = heading.textContent;
      toc.append(anchor);
    }
    const contactLink = document.createElement('a');
    contactLink.href = document.querySelector('.nav-contact').href;
    contactLink.textContent = contact;
    const links = document.createElement('p');
    links.append(contactLink);
    if (!isPrivacy) {
      const policy = document.createElement('a');
      policy.href = 'privacy.html?lang=' + code;
      policy.textContent = privacy;
      links.append(' · ', policy);
    }
    article.append(links);
    return;
  }

  const h = locale[2].split('|');
  const fields = [
    '.hero-welcome h1', '.hero-welcome p', '.hero-welcome .button',
    '.section-top h2', '.section-top > p', '.card-top > span:first-child',
    '.tiny-pill', '.palette-row > p', null, null, null, null, null, null,
    '.play-note h3', '.play-note > p', '.focus-item:nth-of-type(1) h4', '.focus-item:nth-of-type(1) p',
    '.focus-item:nth-of-type(2) h4', '.focus-item:nth-of-type(2) p',
    '.focus-item:nth-of-type(3) h4', '.focus-item:nth-of-type(3) p',
    '.studio-grid h2', '.studio-story .large-copy', '.studio-story > p:nth-of-type(2)',
    '.studio-story > p:nth-of-type(3)', '.studio-facts > div:first-child small',
    '.studio-facts > div:first-child span', '.studio-facts > div:last-child small',
    '.studio-facts > div:last-child span', '.contact-heading h2', '.contact-bottom p',
    '.company strong', '.company p'
  ];
  fields.forEach((selector, i) => { if (selector) set(selector, h[i]); });
  document.title = 'Starlane — ' + h[32];
  document.querySelector('meta[name="description"]').content = h[24];
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = h[24];
  set('.hero-welcome .eyebrow', 'STARLANE');
  set('#play .eyebrow', '01 / ' + play);
  set('#studio .eyebrow', '02 / ' + studio);
  set('#contact .eyebrow', '03 / ' + contact);
  set('.studio-sign small', h[32]);
  set('.ribbon div', [h[16], h[18], h[20], h[16], h[18]].join(' ✳ '));
  set('#garden-title', h[7]);
  label('.palettes', h[8]);
  document.querySelectorAll('[data-palette]').forEach((button, index) => {
    button.dataset.label = h[9 + index];
    button.setAttribute('aria-label', h[9 + index]);
  });
  const status = document.querySelector('#palette-status');
  status.dataset.suffix = h[13];
  status.textContent = h[9] + ' · ' + h[13];
  document.querySelector('.hero-landscape').alt = '';
  document.querySelector('.contact-mascot').alt = '';
})();
