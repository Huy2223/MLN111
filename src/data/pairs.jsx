export const PAIRS = [
  /* ── 1 ─────────────────────────────────────────── */
  {
    id: 'berkeley-mach',
    isHero: false,
    school: 'Chủ nghĩa duy tâm chủ quan',
    title: 'Berkeley & Mach',
    names: 'George Berkeley (1685–1753) · Ernst Mach (1838–1916)',
    tags: ['Duy tâm chủ quan', 'Cảm giác luận'],
    tagline:
      'Sự vật chỉ là tổ hợp cảm giác. Nhận thức không phản ánh thế giới khách quan mà chỉ phản ánh trạng thái chủ quan của con người.',
    figs: [
      {
        ph: 'B', name: 'Berkeley', years: '1685 – 1753', src: '/images/Berkeley.jpg',
        tagline: '"Esse est percipi" — tồn tại là được tri giác. Không có vật chất độc lập nào tồn tại ngoài cảm giác của chúng ta.',
      },
      {
        ph: 'M', name: 'Ernst Mach', years: '1838 – 1916', src: '/images/Ernst_Mach.jpg',
        tagline: 'Thế giới chỉ là phức hợp cảm giác. Khoa học chỉ nên mô tả quan hệ giữa các cảm giác — không nên đặt câu hỏi về bản chất thực của sự vật.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Luận điểm cốt lõi</h3>
          <p>
            Berkeley và Mach cho rằng <strong>sự vật chỉ là kết quả của sự phức hợp các cảm giác</strong> —
            "vật hay vật thể là những phức hợp cảm giác." Không có thế giới vật chất độc lập nào
            tồn tại ngoài cảm giác của chúng ta.
          </p>
          <p>
            Fichte thậm chí cho rằng nhận thức chỉ có nghĩa là nhận thức các cảm giác của bản
            thân con người — không hơn, không kém.
          </p>
          <h3>Hệ quả</h3>
          <p>
            Nhận thức không phản ánh thế giới khách quan mà chỉ phản ánh{' '}
            <strong>trạng thái chủ quan</strong> của con người. Berkeley còn thừa nhận Thượng Đế là
            chủ thể nhận thức tối cao đứng sau mọi cảm giác.
          </p>
          <h3>Hạn chế căn bản</h3>
          <p>
            Quan niệm này phủ nhận hoàn toàn tính khách quan của bất cứ thứ gì ngoài cảm giác cá
            nhân. Nếu đúng, không có cơ sở khách quan nào cho khoa học hay hành động thực tiễn —
            mọi thứ chỉ là chuỗi ảo giác chủ quan không thể kiểm chứng.
          </p>
          <blockquote>
            "Esse est percipi" — Tồn tại là được tri giác.
            <cite>— George Berkeley</cite>
          </blockquote>
        </>
      )
    },
  },

  /* ── 2 ─────────────────────────────────────────── */
  {
    id: 'plato-hegel',
    isHero: false,
    school: 'Chủ nghĩa duy tâm khách quan',
    title: 'Plato & Hegel',
    names: 'Plato (427–347 TCN) · G.W.F. Hegel (1770–1831)',
    tags: ['Duy tâm khách quan', 'Biện chứng pháp'],
    tagline:
      'Nhận thức là quá trình của linh hồn và tinh thần thế giới — không phải của con người trong thực tiễn vật chất.',
    figs: [
      {
        ph: 'P', name: 'Plato', years: '427 – 347 TCN', src: '/images/plato.webp',
        tagline: 'Nhận thức là hồi tưởng — linh hồn nhớ lại những ý niệm đã tiếp xúc ở thế giới ý niệm trước khi nhập vào thể xác. Thế giới vật chất chỉ là bóng mờ.',
      },
      {
        ph: 'H', name: 'Hegel', years: '1770 – 1831', src: '/images/hegel.JPG', objectPosition: 'center 52%',
        tagline: 'Tinh thần thế giới tự nhận thức chính mình qua lịch sử nhân loại. Con người là phương tiện để tuyệt đối thể nhận ra chính mình.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Plato — Thuyết hồi tưởng</h3>
          <p>
            Plato cho rằng khả năng nhận thức là khả năng của{' '}
            <strong>linh hồn vũ trụ</strong>. Nhận thức chỉ là quá trình <em>hồi tưởng</em> —
            nhớ lại những gì linh hồn đã có sẵn ở thế giới ý niệm trước khi nhập vào thể xác.
            Thế giới vật chất chỉ là bóng mờ của thế giới ý niệm thực sự.
          </p>
          <h3>Hegel — Tinh thần thế giới tự nhận thức</h3>
          <p>
            Hegel coi khả năng nhận thức là khả năng của{' '}
            <strong>tinh thần thế giới</strong>. Nhận thức là quá trình tự ý thức của tinh thần
            thế giới — con người chỉ là phương tiện để tinh thần thế giới tự nhận thức chính mình
            qua lịch sử.
          </p>
          <h3>Đóng góp tích cực</h3>
          <p>
            Dù duy tâm, Hegel có đóng góp đáng kể: ông vận dụng <strong>phép biện chứng</strong>{' '}
            và hệ thống phạm trù lôgích phong phú vào nhận thức luận. Hegel cũng phê phán quan điểm
            "không thể biết" — điểm mà Marx sau này tiếp thu, cải tạo và đặt trên nền tảng duy vật.
          </p>
          <blockquote>
            "Cái hợp lý thì hiện thực, cái hiện thực thì hợp lý."
            <cite>— G.W.F. Hegel, Triết học pháp quyền</cite>
          </blockquote>
        </>
      )
    },
  },

  /* ── 3 ─────────────────────────────────────────── */
  {
    id: 'descartes-hume',
    isHero: false,
    school: 'Thuyết hoài nghi',
    title: 'Descartes & Hume',
    names: 'René Descartes (1596–1650) · David Hume (1711–1776)',
    tags: ['Thuyết hoài nghi', 'Kinh nghiệm luận'],
    tagline:
      'Hoài nghi về khả năng nhận thức — và cả sự tồn tại khách quan của sự vật. Nhưng không phải mọi hoài nghi đều vô nghĩa.',
    figs: [
      {
        ph: 'D', name: 'Descartes', years: '1596 – 1650', src: '/images/descarte.webp',
        tagline: 'Hoài nghi có phương pháp — nghi ngờ mọi thứ để tìm điều chắc chắn tuyệt đối. "Cogito, ergo sum": tôi tư duy, vậy tôi tồn tại.',
      },
      {
        ph: 'H', name: 'Hume', years: '1711 – 1776', src: '/images/hume.jpg',
        tagline: 'Không có căn cứ lý tính nào cho quan hệ nhân quả. Mọi tri thức đều từ kinh nghiệm cảm giác — và kinh nghiệm không thể chứng minh sự tồn tại khách quan của thế giới.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Hoài nghi như phương pháp — Descartes</h3>
          <p>
            Descartes dùng <strong>hoài nghi có phương pháp</strong>: nghi ngờ tất cả để tìm ra
            điều chắc chắn tuyệt đối làm điểm xuất phát. Tư tưởng này có đóng góp tích cực cho
            việc chống triết học kinh viện và tư duy tôn giáo mù quáng.
          </p>
          <p>
            Tuy nhiên, nguyên tắc "hoài nghi" của Descartes tạo kẽ hở cho chủ nghĩa duy tâm:
            nếu mọi thứ đều có thể nghi ngờ, làm sao chứng minh thế giới bên ngoài tồn tại?
          </p>
          <h3>Hoài nghi triệt để — Hume</h3>
          <p>
            Hume đi xa hơn: không chỉ nghi ngờ khả năng nhận thức mà còn{' '}
            <strong>nghi ngờ cả sự tồn tại khách quan của sự vật</strong>. Mọi tri thức đều xuất
            phát từ kinh nghiệm cảm giác, nhưng kinh nghiệm không thể chứng minh quan hệ nhân quả
            hay sự tồn tại liên tục của thế giới.
          </p>
          <h3>Hạn chế chung</h3>
          <p>
            Các nhà hoài nghi không hiểu được biện chứng của quá trình nhận thức — đặc biệt là
            vai trò của thực tiễn. Khi con người hành động và thành công lặp đi lặp lại, điều đó
            tự bác bỏ mọi hoài nghi cực đoan về thế giới khách quan.
          </p>
          <blockquote>
            "Cogito, ergo sum" — Tôi tư duy, vậy tôi tồn tại.
            <cite>— René Descartes, Méditations métaphysiques</cite>
          </blockquote>
        </>
      )
    },
  },

  /* ── 4 ─────────────────────────────────────────── */
  {
    id: 'kant',
    isHero: false,
    school: 'Thuyết không thể biết',
    title: 'Immanuel Kant',
    names: 'Immanuel Kant (1724–1804)',
    tags: ['Thuyết không thể biết', 'Triết học phê phán'],
    tagline:
      'Con người không thể nhận thức được bản chất thế giới — chỉ có thể biết hiện tượng bên ngoài. "Vật tự nó — Ding an sich" mãi nằm ngoài tầm với của nhận thức.',
    figs: [
      {
        ph: 'K', name: 'Immanuel Kant', years: '1724 – 1804', src: '/images/Kant.webp',
        tagline: 'Nhận thức của chúng ta bị giới hạn bởi các hình thức tiên nghiệm của giác tính — do đó bản chất thực của thế giới, "vật tự nó", vĩnh viễn không thể biết được.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Luận điểm cốt lõi — "Vật tự nó" không thể biết</h3>
          <p>
            Kant cho rằng về nguyên tắc <strong>con người không thể nhận thức được bản chất thế giới</strong>.
            Chúng ta có hình ảnh về sự vật, nhưng đó chỉ là những biểu hiện bên ngoài — không phải
            chính bản thân sự vật. Con người không thể nhận thức được{' '}
            <em>"vật tự nó — Ding an sich"</em>, chỉ có thể nhận thức được các hiện tượng bề ngoài.
          </p>
          <h3>Điều Kant đúng — và điều sai căn bản</h3>
          <p>
            Kant không hoàn toàn sai khi chỉ ra rằng nhận thức của chúng ta bị giới hạn bởi{' '}
            <strong>các hình thức tiên nghiệm của giác tính</strong>. Nhưng ông sai căn bản khi kết
            luận rằng do đó <em>bản chất thế giới không thể biết</em> — đây là bước nhảy lôgích
            không có căn cứ.
          </p>
          <p>
            Đây là lập trường đối thủ chính mà chủ nghĩa duy vật biện chứng phải bác bỏ, bởi vì
            nếu thế giới không thể biết thì mọi tri thức khoa học và hành động thực tiễn mất đi
            nền tảng khách quan.
          </p>
          <h3>Thực tiễn bác bỏ thuyết không thể biết</h3>
          <p>
            Chủ nghĩa duy vật biện chứng bác bỏ Kant bằng chính thực tiễn: khi con người áp dụng
            tri thức để biến đổi thế giới thành công, đó là bằng chứng mạnh nhất rằng tri thức đó{' '}
            <strong>phản ánh đúng bản chất sự vật</strong> — không thể là "ảo giác" hay tri thức
            thuần túy về hiện tượng.
          </p>
          <blockquote>
            "Luận điểm về việc tư duy con người có thể đạt tới chân lý khách quan hay không,
            hoàn toàn không phải là vấn đề lý luận mà là vấn đề thực tiễn."
            <cite>— C. Mác, Luận đề về Feuerbach, II</cite>
          </blockquote>
        </>
      )
    },
  },

  /* ── 5 ─────────────────────────────────────────── */
  {
    id: 'feuerbach-holbach',
    isHero: false,
    school: 'Chủ nghĩa duy vật trước Marx',
    title: 'Feuerbach & Holbach',
    names: 'L. Feuerbach (1804–1872) · P. Holbach (1723–1789)',
    tags: ['Duy vật siêu hình', 'Duy vật trực quan'],
    tagline:
      'Công nhận thế giới khách quan có thể được nhận thức — nhưng hiểu nhận thức chỉ là sự phản ánh thụ động, sao chép giản đơn, chưa thấy vai trò của thực tiễn.',
    figs: [
      {
        ph: 'F', name: 'L. Feuerbach', years: '1804 – 1872', src: '/images/Feuerbach.jpg',
        tagline: 'Vật chất, tự nhiên tồn tại khách quan và có thể nhận thức được — nhưng con người chỉ tiếp nhận thụ động từ tự nhiên, không cải tạo nó.',
      },
      {
        ph: 'H', name: 'P. Holbach', years: '1723 – 1789', src: '/images/HolbachPaul.jpg',
        tagline: 'Tư tưởng là sản phẩm của bộ óc vật chất. Nhận thức là sự phản ánh thụ động các tác động cơ học của giới tự nhiên lên giác quan.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Đóng góp — thừa nhận khả năng nhận thức</h3>
          <p>
            Các đại biểu duy vật trước Marx nhìn chung đều công nhận{' '}
            <strong>khả năng nhận thức thế giới của con người</strong>. Họ coi thế giới khách quan
            là đối tượng của nhận thức và bảo vệ nguyên tắc nhận thức là phản ánh hiện thực khách
            quan vào bộ óc người — đây là điểm tiến bộ so với các trường phái duy tâm và hoài nghi.
          </p>
          <h3>Hạn chế — siêu hình và trực quan</h3>
          <p>
            Do tính chất <strong>siêu hình</strong>, chủ nghĩa duy vật trước Marx hiểu phản ánh chỉ
            là sự <em>sao chép giản đơn</em> — nhận thức như quá trình thụ động, không có vận động
            biện chứng, không có mâu thuẫn nảy sinh và giải quyết. Do tính chất{' '}
            <strong>trực quan</strong>, họ hiểu phản ánh là sự tiếp nhận một chiều những tác động
            trực tiếp của sự vật lên giác quan — <em>chưa hiểu vai trò của thực tiễn</em>.
          </p>
          <h3>Marx vạch rõ sai lầm căn bản</h3>
          <blockquote>
            "Khuyết điểm chủ yếu của toàn bộ chủ nghĩa duy vật từ trước đến nay — kể cả chủ nghĩa
            duy vật của Feuerbach — là sự vật, hiện thực, cái cảm giác được, chỉ được nhận thức
            dưới hình thức khách thể hay hình thức trực quan, chứ không được nhận thức là hoạt động
            cảm giác của con người, là thực tiễn, không được nhận thức về mặt chủ quan."
            <cite>— C. Mác, Luận đề về Feuerbach (C. Mác và Ph. Ăngghen: Toàn tập, t.3, tr.9)</cite>
          </blockquote>
          <p>
            Trước Marx, ngay cả duy vật cũng chỉ nhìn thế giới như một thứ{' '}
            <em>cho sẵn để quan sát</em>. Marx thêm vào chiều kích thực tiễn: con người không chỉ
            quan sát thế giới mà còn <strong>biến đổi nó</strong>, và chính hành động biến đổi đó
            mới là nền tảng thực sự của nhận thức.
          </p>
        </>
      )
    },
  },

  /* ── 6 ─────────────────────────────────────────── */
  {
    id: 'marx-lenin',
    isHero: true,
    school: 'Chủ nghĩa duy vật biện chứng',
    title: 'Marx & Lenin',
    names: 'Karl Marx (1818–1883) · V.I. Lenin (1870–1924)',
    tags: ['Duy vật biện chứng', 'Thực tiễn luận'],
    tagline:
      'Tri thức không chỉ phản ánh thế giới — mà là nền tảng để biến đổi nó. Thực tiễn là trung tâm của mọi nhận thức.',
    figs: [
      {
        ph: 'M', name: 'Karl Marx', years: '1818 – 1883', src: '/images/Marx.jpg',
        tagline: 'Nhận thức không phải sự phản ánh thụ động — mà là hoạt động thực tiễn sáng tạo. Con người biết thế giới bằng cách biến đổi nó.',
      },
      {
        ph: 'L', name: 'V.I. Lenin', years: '1870 – 1924', src: '/images/Lenin.jpg',
        tagline: 'Quan điểm về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức. Thực tiễn bác bỏ mọi hoài nghi về khả năng nhận thức thế giới.',
      },
    ],
    Body: function Body() {
      return (
        <>
          <h3>Ba nguyên tắc nền tảng</h3>
          <p>
            <strong>Nguyên tắc 1 — Tồn tại khách quan:</strong> Sự vật tồn tại độc lập với ý thức
            con người, dù ta có biết hay không. Lenin viết:{' '}
            <em>"Chủ nghĩa duy vật nói chung thừa nhận rằng tồn tại thực tại khách quan (vật chất)
            là không phụ thuộc vào ý thức, cảm giác, kinh nghiệm của loài người."</em>{' '}
            Đây là nền tảng không thể nhượng bộ.
          </p>
          <p>
            <strong>Nguyên tắc 2 — Phản ánh tích cực:</strong> Cảm giác, tri giác, ý thức là hình
            ảnh <em>chủ quan</em> của hiện thực <em>khách quan</em> —{' '}
            <em>"Cảm giác là một hình ảnh chủ quan của thế giới khách quan"</em> (Lenin). Nhưng không
            phải sự sao chép cứng nhắc như cái gương, mà là phản ánh sáng tạo, tích cực, có vai trò
            của chủ thể và hoạt động thực tiễn.
          </p>
          <p>
            <strong>Nguyên tắc 3 — Thực tiễn kiểm tra tri thức:</strong> Thực tiễn là tiêu chuẩn
            duy nhất để phân biệt hình ảnh đúng và hình ảnh sai của ý thức.{' '}
            <em>"Quan điểm về đời sống, về thực tiễn, phải là quan điểm thứ nhất và cơ bản của lý
            luận về nhận thức."</em>
          </p>
          <blockquote>
            "Quan điểm về đời sống, về thực tiễn, phải là quan điểm thứ nhất và cơ bản của lý
            luận về nhận thức."
            <cite>— V.I. Lenin, Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán (Toàn tập, t.18, tr.164)</cite>
          </blockquote>
          <h3>Đột phá so với mọi trường phái trước</h3>
          <p>
            Duy vật trước Marx công nhận thế giới khách quan nhưng hiểu nhận thức là sự{' '}
            <strong>phản ánh thụ động</strong>. Duy tâm thấy tính năng động của nhận thức nhưng đặt
            nó vào ý thức thuần túy. Marx kết hợp cả hai bằng <strong>thực tiễn</strong>: nhận thức
            vừa phản ánh thực tại khách quan, vừa là hoạt động sáng tạo biến đổi thực tại đó.
          </p>
          <p>
            Khi tri thức được áp dụng vào thực tiễn và thành công, đó là bằng chứng mạnh nhất rằng
            tri thức đó phản ánh đúng bản chất sự vật — bác bỏ hoàn toàn thuyết "không thể biết"
            của Kant và thuyết hoài nghi của Hume.
          </p>
        </>
      )
    },
  },
]
