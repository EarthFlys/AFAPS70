/* =========================================================
   CADET PREP — App Script
   ส่วนที่ 1: ข้อมูล (แก้ไข/เพิ่มวิชาได้ตรงนี้)
   ส่วนที่ 2: ENGINE (ไม่ต้องแก้)
   ========================================================= */

/* ---------- เตรียมทหาร ---------- */
const SUBJECTS = [
  { id:'math1', name:'คณิตศาสตร์ ม.ต้น', code:'MATH · M.1–3', color:'#f5c84c', groups:[
    { title:'จำนวนและพีชคณิต', topics:[
      'จำนวนเต็ม','จำนวนตรรกยะ','เลขยกกำลัง','จำนวนจริง','อัตราส่วน และร้อยละ',
      'สมการเชิงเส้นตัวแปรเดียว','สมการเชิงเส้นสองตัวแปร','สมการกำลังสองตัวแปรเดียว',
      'อสมการเชิงเส้นตัวแปรเดียว','ระบบสมการ','พหุนาม','การแยกตัวประกอบของพหุนาม','สมการกำลังสอง']},
    { title:'การวัดและเรขาคณิต', topics:[
      'การสร้างทางเรขาคณิต','มิติสัมพันธ์ของรูปเรขาคณิต','พื้นที่ผิว','ปริมาตร','เส้นขนาน',
      'การแปลงทางเรขาคณิต','ความเท่ากันทุกประการ','ทฤษฎีบทพีทาโกรัส','ความคล้าย',
      'อัตราส่วนตรีโกณมิติ','วงกลม']},
    { title:'สถิติและความน่าจะเป็น', topics:['สถิติ','ความน่าจะเป็น (ม.ต้น)']}
  ]},
  { id:'math2', name:'คณิตศาสตร์ ม.4', code:'MATH · M.4', color:'#c39bff', groups:[
    { title:'', topics:['เซต','ตรรกศาสตร์','จำนวนจริง (ม.4)','ความสัมพันธ์และฟังก์ชัน',
      'ฟังก์ชันเอกซ์โพเนนเชียลและฟังก์ชันลอการิทึม','เรขาคณิตวิเคราะห์','หลักการนับเบื้องต้น','ความน่าจะเป็น (ม.4)']}
  ]},
  { id:'phy', name:'ฟิสิกส์ ม.4', code:'PHYSICS', color:'#ff8a3d', groups:[
    { title:'', topics:['ธรรมชาติและพัฒนาการทางฟิสิกส์','การเคลื่อนที่แนวตรง','แรงและกฎการเคลื่อนที่',
      'สมดุลกล','งานและพลังงาน','โมเมนตัมและการชน','การเคลื่อนที่แนวโค้ง']}
  ]},
  { id:'chem', name:'เคมี ม.4', code:'CHEMISTRY', color:'#4fc3f7', groups:[
    { title:'', topics:['ความปลอดภัยและทักษะในปฏิบัติการเคมี','อะตอมและสมบัติของธาตุ','พันธะเคมี',
      'โมลและสูตรเคมี','สารละลาย','ปริมาณสัมพันธ์']}
  ]},
  { id:'bio', name:'ชีววิทยา ม.4', code:'BIOLOGY', color:'#7bd88f', groups:[
    { title:'', topics:['การศึกษาชีววิทยา','เคมีที่เป็นพื้นฐานของสิ่งมีชีวิต','เซลล์และการทำงานของเซลล์',
      'โครโมโซมและสารพันธุกรรม','การถ่ายทอดลักษณะทางพันธุกรรม','เทคโนโลยีทางดีเอ็นเอ','วิวัฒนาการ']}
  ]},
  { id:'earth', name:'โลก ดาราศาสตร์และอวกาศ', code:'EARTH & SPACE', color:'#3dd6c6', groups:[
    { title:'', topics:['โครงสร้างโลก','การแปรสัณฐานของแผ่นธรณี','ธรณีพิบัติภัย',
      'การลำดับเหตุการณ์ทางธรณีวิทยา','ทรัพยากรธรณี','แผนที่ภูมิประเทศ และแผนที่ธรณีวิทยา']}
  ]},
  { id:'eng', name:'ภาษาอังกฤษ', code:'ENGLISH · M.1–6', color:'#5b8cff', groups:[
    { title:'', topics:['Reading Comprehension','Vocabulary','Grammar','Structure','Expression','Conversation']}
  ]},
  { id:'thai', name:'ภาษาไทย', code:'THAI · M.1–4', color:'#ff6b9a', groups:[
    { title:'', topics:['สาระการอ่าน','สาระการเขียน','สาระการฟัง การดู การพูด','หลักการใช้ภาษาไทย','วรรณคดี และวรรณกรรม']}
  ]},
  { id:'social', name:'สังคมศึกษา', code:'SOCIAL · M.1–4', color:'#e8a87c', groups:[
    { title:'', topics:['ศาสนา ศีลธรรม จริยธรรม','หน้าที่พลเมือง วัฒนธรรม และการดำเนินชีวิตในสังคม',
      'เศรษฐศาสตร์','ประวัติศาสตร์','ภูมิศาสตร์','ความรู้รอบตัว ข่าว เหตุการณ์ปัจจุบัน และศาสตร์พระราชา']}
  ]},
];

/* ---------- NETSAT (มข.) ---------- */
const NETSAT = [
  { id:'ns-math', name:'ความฉลาดรู้ทั่วไปด้านคณิตศาสตร์', code:'NETSAT · MATH', color:'#5ce1e6', groups:[
    { title:'Functions', topics:['กราฟ','ฟังก์ชัน']},
    { title:'Numbers and Mathematical Expressions', topics:['สมการ','เลขยกกำลัง','สมการพหุนาม','ค่าคงที่','การวาดกราฟ']},
    { title:'Geometrical Figures', topics:['เรขาคณิต','การหาพื้นที่','ตรีโกณมิติ','ปริมาตรของรูปทรงต่าง ๆ','จำนวนเชิงซ้อน']},
    { title:'Data Handling', topics:['อัตราส่วน เปอร์เซ็นต์','ความน่าจะเป็น','สถิติพื้นฐาน','การวิเคราะห์ข้อมูล']},
  ]},
  { id:'ns-phy', name:'ความฉลาดรู้เฉพาะด้านฟิสิกส์', code:'NETSAT · PHYSICS', color:'#f7a541', groups:[
    { title:'เนื้อหา', topics:['กลศาสตร์','แม่เหล็กไฟฟ้า','คลื่นและแสง','ความร้อนและอุณหพลศาสตร์','ฟิสิกส์ยุคใหม่']},
    { title:'อื่น ๆ', topics:['เรื่องทั่วไป','ทักษะการวิเคราะห์เชิงกราฟ การวัดผล และทักษะทางคณิตศาสตร์','เรื่องใหม่ทางฟิสิกส์ที่กำลังค้นคว้าและพัฒนาในปัจจุบัน']},
    { title:'การประยุกต์ใช้ทักษะปฏิบัติการ', topics:['เลขนัยสำคัญ','วิเคราะห์หน่วยของปริมาณต่าง ๆ ทางฟิสิกส์','การวิเคราะห์กราฟ','คำอุปสรรค']},
    { title:'คณิตศาสตร์ในการแก้ปัญหาฟิสิกส์', topics:['พีชคณิต','ตรีโกณมิติ','กราฟความสัมพันธ์','อัตราส่วนและสัดส่วน']},
    { title:'ระดับโจทย์ที่ต้องฝึก', topics:[
      'ความรู้พื้นฐาน — รู้ จำ และเข้าใจเนื้อหาหรือข้อมูล',
      'ปัญหาไม่ซับซ้อน — ใช้ความสัมพันธ์หรือเนื้อหาเรื่องเดียว',
      'ปัญหาซับซ้อน — บูรณาการตั้งแต่ 2 เรื่องขึ้นไป']},
  ]},
  { id:'ns-chem', name:'ความฉลาดรู้เฉพาะด้านเคมี', code:'NETSAT · CHEMISTRY', color:'#c58af0', groups:[
    { title:'สสาร (Matter)', topics:['สถานะของสาร','สารละลาย','การเปลี่ยนแปลงทางเคมี','ปริมาณสารสัมพันธ์']},
    { title:'อันตรกิริยา (Interactions)', topics:['โครงสร้างอะตอมและตารางธาตุ','พันธะระหว่างโมเลกุล','แก๊สและสมบัติของแก๊ส','สารประกอบอินทรีย์และพอลิเมอร์']},
    { title:'พลังงาน (Energy)', topics:['ปฏิกิริยาเคมีและการเปลี่ยนแปลงพลังงาน','สมดุลเคมี','อัตราการเกิดปฏิกิริยาเคมี','กรด-เบส','ไฟฟ้าเคมี']},
  ], competency:['การทำนายผลการทดลอง','การใช้ประจักษ์พยานทางวิทยาศาสตร์','การแปลความหมายข้อมูลจากตารางหรือกราฟ',
    'การอธิบายและการให้เหตุผลทางวิทยาศาสตร์','การลงข้อสรุป','การสร้างแบบจำลอง','การแก้ปัญหา','การประยุกต์ใช้ความรู้']},
  { id:'ns-sci', name:'ความฉลาดรู้เฉพาะด้านวิทยาศาสตร์และเทคโนโลยี', code:'NETSAT · SCI & TECH', color:'#7cc0ff', groups:[
    { title:'ขอบเขตเนื้อหา', topics:['เทคโนโลยี','วิทยาศาสตร์กายภาพ','วิทยาศาสตร์ โลก และอวกาศ','วิทยาศาสตร์ชีวภาพ']},
    { title:'ทักษะดิจิทัล', topics:['วิทยาการคอมพิวเตอร์','เทคโนโลยีสารสนเทศ','การรู้ดิจิทัล']},
  ], competency:['การทำนายผลการทดลอง','การใช้ประจักษ์พยานทางวิทยาศาสตร์','การวิเคราะห์และแปลความหมายข้อมูลจากกราฟหรือตาราง',
    'การอธิบายและการให้เหตุผลทางวิทยาศาสตร์','การลงข้อสรุป','การแก้ปัญหา','การประยุกต์ใช้ความรู้และทักษะปฏิบัติการ']},
];

/* ---------- จ่าอากาศ ---------- */
const NCO = [
  { id:'nco-math', name:'คณิตศาสตร์', code:'จ่าอากาศ · MATH', color:'#4fb3ff', groups:[
    { title:'', topics:['จำนวนจริง','เซต','ตรรกศาสตร์','สมการ','ความสัมพันธ์และฟังก์ชัน',
      'เรขาคณิตวิเคราะห์','ลำดับและอนุกรม','ความน่าจะเป็น','สถิติ']}
  ]},
];

/* ---------- สนามสอบทั้งหมด ---------- */
const TRACKS = {
  cadet:  { name:'เตรียมทหาร', subjects:SUBJECTS, list:'#subjects' },
  netsat: { name:'NETSAT',     subjects:NETSAT,   list:'#subjects-netsat' },
  nco:    { name:'จ่าอากาศ',   subjects:NCO,      list:'#subjects-nco' },
};

/* ---------- วิชาประจำวัน (เตรียมทหาร) 0=อาทิตย์ ... 6=เสาร์ · n = จำนวนหัวข้อต่อวัน ---------- */
const STUDY_PLAN = {
  1:{ subjects:[{id:'math1',n:2},{id:'eng',n:1}],    extra:['ทำโจทย์ 10 ข้อจากเรื่องที่อ่าน','ท่องศัพท์อังกฤษ 20 คำ'] },
  2:{ subjects:[{id:'phy',n:2},{id:'thai',n:1}],     extra:['ทำโจทย์ 10 ข้อจากเรื่องที่อ่าน'] },
  3:{ subjects:[{id:'math2',n:2},{id:'social',n:1}], extra:['ทำโจทย์ 10 ข้อจากเรื่องที่อ่าน','อ่านข่าวสั้น ๆ 10 นาที'] },
  4:{ subjects:[{id:'chem',n:2},{id:'earth',n:1}],   extra:['ทำโจทย์ 10 ข้อจากเรื่องที่อ่าน'] },
  5:{ subjects:[{id:'bio',n:2},{id:'eng',n:1}],      extra:['ทำโจทย์ 10 ข้อจากเรื่องที่อ่าน','ท่องศัพท์อังกฤษ 20 คำ'] },
  6:{ subjects:[{id:'math1',n:1},{id:'math2',n:1},{id:'thai',n:1}], extra:['ทำข้อสอบเก่าจับเวลา 1 ชุด','ตรวจข้อผิดและจดเหตุผล'] },
  0:{ subjects:[{id:'social',n:1}], extra:['ทบทวนเรื่องที่ติ๊กแล้วทั้งสัปดาห์','จดสูตร/จุดที่ยังจำไม่ได้ลงสมุด'] },
};

/* ---------- กิจวัตรประจำวัน ---------- */
const ROUTINE = [
  {id:'wake', text:'ตื่นนอนตรงเวลา + ดื่มน้ำ 1 แก้ว'},
  {id:'water',text:'ดื่มน้ำให้ครบ ~2 ลิตร'},
  {id:'sleep',text:'นอนก่อน 22:00'},
];

/* ---------- ตารางเวลา ---------- */
const SCHOOL_DAY = [
  ['05:30','ตื่นนอน ดื่มน้ำ ยืดเหยียด'],['06:00','ท่องศัพท์ / ทบทวนสูตร 20 นาที'],['07:15','ไปโรงเรียน'],
  ['16:30','วิ่ง + ราวดึงข้อที่โรงเรียน'],['17:30','เวทดัมเบลที่บ้าน 30–40 นาที'],['18:15','อาบน้ำ กินข้าว พัก'],
  ['19:00','อ่านวิชาหลัก (50 นาที)'],['20:00','พัก 10 นาที → อ่านวิชารอง'],
  ['21:00','ทำโจทย์ + สรุป 1 หน้า'],['21:45','เตรียมของ ปิดจอ'],['22:00','นอน 7–8 ชั่วโมง'],
];
const WEEKEND = [
  ['06:00','ตื่น ดื่มน้ำ ยืดเหยียด'],['06:30','วิ่งยาว (เสาร์) / เดินเบา ๆ (อาทิตย์)'],['08:00','อาหารเช้า'],
  ['09:00','อ่านหนังสือ ช่วงที่ 1'],['10:30','ข้อสอบเก่า / ทบทวน'],['12:00','พักกลางวัน'],
  ['13:30','อ่านหนังสือ ช่วงที่ 2'],['15:30','ตรวจข้อผิด จดสรุป'],['17:00','เวทดัมเบล (เสาร์) / ยืดเหยียด (อาทิตย์)'],
  ['21:30','เตรียมนอน'],
];

/* ---------- ท่าออกกำลังกาย ---------- */
const EX = {
  row:{name:'Dumbbell Row',th:'โน้มตัวดึงดัมเบลทีละข้าง',sets:'4 × 10/ข้าง',how:'มือและเข่าข้างหนึ่งวางบนเก้าอี้ หลังตรง ดึงศอกไปทางสะโพก บีบสะบัก ค้าง 1 วิ แล้วลดลงช้า ๆ',why:'ท่าหลักแทนการดึงข้อ ฝึกกล้ามปีก'},
  pullover:{name:'Dumbbell Pullover',th:'นอนลดดัมเบลไปเหนือศีรษะ',sets:'3 × 10',how:'นอนหงาย ถือดัมเบลสองมือเหนืออก ลดลงไปหลังศีรษะช้า ๆ ศอกงอเล็กน้อย แล้วดึงกลับ',why:'แนวแรงใกล้การดึงข้อมาก'},
  revfly:{name:'Reverse Fly',th:'ก้มตัวกางแขน',sets:'3 × 12',how:'ก้มตัว 45° หลังตรง กางแขนออกข้างจนสะบักบีบกัน ใช้น้ำหนักเบา',why:'หลังบนและสะบักแข็งแรง'},
  hammer:{name:'Hammer Curl',th:'ม้วนดัมเบลแบบค้อน',sets:'3 × 10',how:'ฝ่ามือหันเข้าหากัน ม้วนขึ้นโดยไม่เหวี่ยงตัว',why:'แขนหน้าช่วยดึงช่วงท้าย'},
  farmer:{name:'Farmer Hold',th:'ถือดัมเบลค้าง',sets:'3 × 40 วิ',how:'ถือดัมเบลหนักที่สุดที่ถือไหว ยืนตรง ไหล่ลง อกผาย',why:'แรงบีบมือ ไม่หลุดราว'},
  tablerow:{name:'Inverted Row (ใต้โต๊ะ)',th:'ดึงตัวขึ้นใต้โต๊ะ',sets:'3 × 6–10',how:'นอนใต้โต๊ะ จับขอบโต๊ะ ลำตัวตรง ดึงอกขึ้นหาขอบโต๊ะ',why:'ท่าที่บ้านที่ใกล้การดึงข้อที่สุด',warn:'ใช้เฉพาะโต๊ะที่แข็งแรงมาก ลองโยกทดสอบก่อนทุกครั้ง ห้ามใช้โต๊ะพับ/โต๊ะพลาสติก'},
  ytw:{name:'Prone Y-T-W',th:'นอนคว่ำยกแขน',sets:'2 × 8 ต่อท่า',how:'นอนคว่ำ ยกแขนเป็นตัว Y → T → W ค้างท่าละ 2 วิ (มือเปล่าหรือถือขวดน้ำ)',why:'กล้ามเนื้อรอบสะบัก'},
  hang:{name:'Dead Hang',th:'ห้อยตัวนิ่ง',sets:'3 × 20–40 วิ',how:'จับราวกว้างกว่าไหล่เล็กน้อย ห้อยตัวนิ่ง แขนตึง',why:'จุดเริ่มต้นของคนที่ดึงข้อไม่ได้'},
  scap:{name:'Scapular Pull',th:'ดึงสะบัก',sets:'3 × 8',how:'ห้อยตัวแขนตึง กดไหล่ลงและบีบสะบักให้ตัวขึ้นเล็กน้อย ไม่งอศอก',why:'ฝึกให้เริ่มดึงด้วยหลัง'},
  flexhang:{name:'Flexed-arm Hang',th:'ค้างคางเหนือราว',sets:'3 × ค้างนานสุด',how:'เหยียบเก้าอี้/กระโดดให้คางพ้นราว แล้วค้างไว้ อกชิดราว',why:'แรงช่วงบนสุดของการดึง'},
  negative:{name:'Negative Pull-up',th:'ปล่อยตัวลงช้า ๆ',sets:'4 × 3 (ลง 5 วิ)',how:'กระโดดให้คางพ้นราว ค่อย ๆ ลดตัวลงนับ 1–5 จนแขนตึง',why:'ท่าที่ได้ผลที่สุดเพื่อดึงข้อครั้งแรก'},
  pushup:{name:'Push-up',th:'ดันพื้น',sets:'4 × (สูงสุด − 2)',how:'ลำตัวตรง ลงจนอกเกือบแตะพื้น ศอกทำมุมประมาณ 45° กับลำตัว',why:'ท่าทดสอบสมรรถภาพ'},
  floorpress:{name:'DB Floor Press',th:'นอนดันดัมเบลบนพื้น',sets:'3 × 10',how:'นอนหงาย ดันดัมเบลขึ้นตรง ลดลงจนศอกแตะพื้นเบา ๆ',why:'เพิ่มแรงดัน ช่วยท่าดันพื้น'},
  press:{name:'Shoulder Press',th:'ดันดัมเบลเหนือศีรษะ',sets:'3 × 10',how:'เกร็งท้อง ดันขึ้นเหนือศีรษะ ไม่แอ่นหลัง',why:'ไหล่แข็งแรง สมดุลกับท่าดึง'},
  situp:{name:'Sit-up',th:'ลุกนั่ง',sets:'3 × 25',how:'ชันเข่า ลุกขึ้นด้วยแรงท้อง ไม่กระชากคอ',why:'ท่าทดสอบสมรรถภาพ'},
  plank:{name:'Plank',th:'แพลงก์',sets:'3 × 45 วิ',how:'ศอกอยู่ใต้ไหล่ ลำตัวตรง เกร็งก้นและท้อง',why:'แกนกลางลำตัว ตัวไม่แกว่งตอนดึง'},
  legraise:{name:'Leg Raise',th:'นอนยกขา',sets:'3 × 12',how:'นอนหงาย ยกขาตรงขึ้น 90° ลดลงช้า ๆ ไม่ให้หลังแอ่น',why:'หน้าท้องส่วนล่าง'},
  goblet:{name:'Goblet Squat',th:'ถือดัมเบลแนบอกแล้วสควอท',sets:'4 × 12',how:'ย่อจนต้นขาขนานพื้น หลังตรง ส้นเท้าติดพื้น',why:'ขาแรง วิ่งดีขึ้น'},
  lunge:{name:'DB Lunge',th:'ก้าวย่อถือดัมเบล',sets:'3 × 10/ข้าง',how:'ก้าวยาว ย่อจนเข่าหลังเกือบแตะพื้น ลำตัวตั้งตรง',why:'ขาและการทรงตัว'},
  jump:{name:'Squat Jump',th:'ย่อแล้วกระโดด',sets:'3 × 8',how:'ย่อครึ่งหนึ่งแล้วกระโดดสุดแรง ลงพื้นเบา ๆ งอเข่ารับ',why:'พลังระเบิดของขา'},
  stretch:{name:'Stretch & Mobility',th:'ยืดเหยียดทั้งตัว',sets:'15–20 นาที',how:'ยืดต้นขาหน้า-หลัง สะโพก ไหล่ อก ค้างท่าละ 30 วิ',why:'ช่วยร่างกายฟื้นตัว'},
};

/* ---------- ตารางฝึกรายวัน ---------- */
const WORKOUT = {
  0:{title:'Rest Day',sub:'พักฟื้น',run:null,home:['stretch'],school:[]},
  1:{title:'Interval + Pull A',sub:'วิ่งเร็วสลับ · เน้นหลัง',run:{t:'วิ่ง Interval ที่ รร',d:'วอร์ม 10 นาที → วิ่งเร็ว 400 ม. × 5 (พักเดิน 2 นาที) → คูลดาวน์ 5 นาที'},home:['row','pullover','revfly','hammer','farmer'],school:['hang','scap']},
  2:{title:'Push + Core',sub:'ดันพื้น · ลุกนั่ง · แกนกลาง',run:null,home:['pushup','floorpress','press','situp','plank'],school:[]},
  3:{title:'Easy Run + Pull B',sub:'วิ่งเบา · ดึงตัว',run:{t:'วิ่งเบาที่ รร',d:'วิ่งสบาย ๆ 25–30 นาที ความเร็วที่ยังพูดคุยได้'},home:['tablerow','row','ytw','hammer'],school:['flexhang','negative']},
  4:{title:'Legs + Core',sub:'ขา · พลังระเบิด',run:null,home:['goblet','lunge','jump','legraise','plank'],school:[]},
  5:{title:'Tempo + Pull A',sub:'วิ่งต่อเนื่อง · เน้นหลัง',run:{t:'วิ่ง Tempo ที่ รร',d:'วอร์ม 10 นาที → วิ่งค่อนข้างเหนื่อยต่อเนื่อง 15–20 นาที → คูลดาวน์'},home:['row','pullover','farmer'],school:['hang','negative']},
  6:{title:'Long Run + Full Body',sub:'วิ่งยาว · ทั้งตัว',run:{t:'วิ่งยาว',d:'วิ่งช้าต่อเนื่อง 35–45 นาที (ที่ รร หรือสวนใกล้บ้าน)'},home:['pushup','situp','row','goblet'],school:[]},
};


/* =========================================================
   ENGINE
   ========================================================= */
const DOW = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
const DOW_S = ['อา','จ','อ','พ','พฤ','ศ','ส'];
const WEEK_ORDER = [1,2,3,4,5,6,0];
const KEY = 'cadetPrep.v1';

const ALL_SUBJECTS = [];
Object.entries(TRACKS).forEach(([t, cfg]) => cfg.subjects.forEach(s => { s.track = t; ALL_SUBJECTS.push(s); }));

let state = JSON.parse(localStorage.getItem(KEY) || 'null') || {};
state.examDate  = state.examDate  || '';
state.examDates = state.examDates || {};
state.include   = state.include   || {};
state.topics    = state.topics    || {};
state.days      = state.days      || {};

const readFilter = {cadet:'all', netsat:'all', nco:'all'};
let selDow = new Date().getDay();

/* ---------- Helpers ---------- */
const save = () => localStorage.setItem(KEY, JSON.stringify(state));
const pad = n => String(n).padStart(2, '0');
const dkey = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = s => document.querySelector(s);
const $ = s => Array.from(document.querySelectorAll(s));
const CHK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0c110d" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>';

const tkey = (sid, t) => sid + '::' + t;
const tname = k => k.split('::')[1];
const subjById = id => ALL_SUBJECTS.find(s => s.id === id);
const subjOf = k => subjById(k.split('::')[0]);
const allTopics = s => s.groups.flatMap(g => g.topics.map(t => tkey(s.id, t)));
const planSubs = dow => STUDY_PLAN[dow]?.subjects || [];
const todayDay = () => getDay(dkey(new Date()), new Date().getDay());

/* ---------- วันสอบ ---------- */
const getExam = t => t === 'cadet' ? state.examDate : (state.examDates[t] || '');
function setExam(t, v) {
  if (t === 'cadet') state.examDate = v; else state.examDates[t] = v;
  save(); updateCd(); renderToday();
}
function daysLeft(t = 'cadet') {
  const v = getExam(t);
  if (!v) return null;
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.max(0, Math.round((new Date(v + 'T00:00:00') - now) / 86400000));
}
function updateCd() {
  $('[data-cd]').forEach(el => { const l = daysLeft(el.dataset.cd); el.textContent = l === null ? '--' : l; });
}

/* ---------- เลือกหัวข้อ ---------- */
function pickTopics(dow, exclude = [], perSubject) {
  const out = [];
  planSubs(dow).forEach(p => {
    const s = subjById(p.id);
    if (!s) return;
    allTopics(s)
      .filter(k => !state.topics[k] && !exclude.includes(k))
      .slice(0, perSubject ?? p.n)
      .forEach(k => out.push(k));
  });
  return out;
}

/* หมุนวิชาในสนามนั้นทีละวัน แล้วเลือกเรื่องถัดไปที่ยังไม่อ่าน */
function pickTrackTopic(t, exclude = []) {
  const subs = TRACKS[t]?.subjects || [];
  if (!subs.length) return null;
  const start = Math.floor(Date.now() / 86400000) % subs.length;
  for (let i = 0; i < subs.length; i++) {
    const s = subs[(start + i) % subs.length];
    const k = allTopics(s).find(k => !state.topics[k] && !exclude.includes(k));
    if (k) return k;
  }
  return null;
}

function getDay(key, dow) {
  if (!state.days[key]) {
    const topics = pickTopics(dow);
    Object.keys(state.include).forEach(t => {
      if (!state.include[t]) return;
      const k = pickTrackTopic(t, topics);
      if (k) topics.push(k);
    });
    state.days[key] = {done:{}, topics, custom:[], pct:0};
    save();
  }
  return state.days[key];
}

function toggleInclude(t, on) {
  state.include[t] = on;
  const day = todayDay();
  if (on) {
    if (!day.topics.some(k => subjOf(k)?.track === t)) {
      const k = pickTrackTopic(t, day.topics);
      if (k) day.topics.push(k);
    }
  } else {
    day.topics = day.topics.filter(k => subjOf(k)?.track !== t || state.topics[k]);
  }
  save(); renderAll();
}

function buildSections(day, dow) {
  const plan = STUDY_PLAN[dow] || {subjects:[], extra:[]};
  const w = WORKOUT[dow];

  const study = day.topics.map(k => {
    const s = subjOf(k);
    return {id:'t:'+k, text:'อ่าน: '+tname(k), tag:s?.code || '', color:s?.color, topic:k};
  });
  (plan.extra || []).forEach((t, i) => study.push({id:'x'+i, text:t}));

  const train = [];
  if (w.run) train.push({id:'run', text:w.run.t, sub:w.run.d, tag:'รร', color:'#ff8a3d'});
  w.school.forEach(id => train.push({id:'s-'+id, text:EX[id].name+' — '+EX[id].th, sub:EX[id].sets, tag:'ราว รร', color:'#ff8a3d'}));
  w.home.forEach(id => train.push({id:'h-'+id, text:EX[id].name+' — '+EX[id].th, sub:EX[id].sets, tag:'บ้าน'}));

  const sections = [
    {key:'study',   title:'อ่านหนังสือ · Study',     items:study},
    {key:'train',   title:'ออกกำลังกาย · '+w.title, items:train},
    {key:'routine', title:'กิจวัตร · Routine',        items:ROUTINE.map(r => ({id:'r-'+r.id, text:r.text}))},
  ];
  if (day.custom.length) {
    sections.push({key:'custom', title:'งานเพิ่มเติม',
      items:day.custom.map((t, i) => ({id:'c-'+i, text:t, custom:true, ci:i}))});
  }
  return sections;
}

const isDone = (it, day) => it.topic ? !!state.topics[it.topic] : !!day.done[it.id];

/* ---------- Templates ---------- */
function checkHTML(it, done) {
  const tagStyle = it.color ? `style="color:${it.color};border-color:${it.color}66"` : '';
  return `<label class="check">
    <input type="checkbox" data-id="${esc(it.id)}" ${it.topic ? `data-topic="${esc(it.topic)}"` : ''} ${done ? 'checked' : ''}>
    <span class="box">${CHK}</span>
    <span class="txt">${esc(it.text)}${it.sub ? `<small>${esc(it.sub)}</small>` : ''}</span>
    ${it.tag ? `<span class="tag" ${tagStyle}>${esc(it.tag)}</span>` : ''}
    ${it.custom ? `<button class="del" data-del="${it.ci}" title="ลบ">×</button>` : ''}
  </label>`;
}

function exCard(id) {
  const e = EX[id];
  return `<div class="ex">
    <div class="t"><div><h4>${e.name}</h4><div class="th">${e.th}</div></div><span class="sets">${e.sets}</span></div>
    <p>${e.how}</p>
    <div class="why">✓ ${e.why}</div>
    ${e.warn ? `<div class="warn">⚠ ${e.warn}</div>` : ''}
  </div>`;
}

function subjectCard(s, f) {
  const ks = allTopics(s);
  const d = ks.filter(k => state.topics[k]).length;
  const sp = ks.length ? Math.round(d / ks.length * 100) : 0;
  let body = '';
  s.groups.forEach(g => {
    const items = g.topics.map(t => tkey(s.id, t)).filter(k =>
      f === 'all' || (f === 'done' ? state.topics[k] : !state.topics[k]));
    if (!items.length) return;
    if (g.title) body += `<div class="sec">${esc(g.title)}</div>`;
    body += items.map(k => checkHTML({id:'t:'+k, text:tname(k), topic:k}, !!state.topics[k])).join('');
  });
  if (!body) body = `<div class="empty">${f === 'todo' ? 'อ่านครบแล้ว เยี่ยมมาก!' : 'ยังไม่มีหัวข้อที่อ่านแล้ว'}</div>`;
  const comp = s.competency ? `<div class="comp"><div class="comp-h">Competency · ทักษะที่ใช้ในข้อสอบ</div>
      <div class="comp-list">${s.competency.map(c => `<span>${esc(c)}</span>`).join('')}</div></div>` : '';
  return `<div class="subj glass" style="--c:${s.color}">
    <div class="subj-h">
      <div class="code">${esc(s.code)}</div>
      <div class="row"><h3>${esc(s.name)}</h3><span class="n">${d}/${ks.length}</span></div>
      <div class="pbar"><i style="width:${sp}%"></i></div>
    </div>
    <div class="subj-b">${body}${comp}</div>
  </div>`;
}

/* ---------- Render: TODAY ---------- */
function renderToday() {
  const now = new Date(), key = dkey(now), dow = now.getDay();
  const day = getDay(key, dow);
  const sections = buildSections(day, dow);

  let total = 0, done = 0, html = '';
  sections.forEach(sec => {
    const d = sec.items.filter(i => isDone(i, day)).length;
    total += sec.items.length; done += d;
    html += `<div class="sec">${sec.title} <b>${d}/${sec.items.length}</b></div>`;
    if (sec.key === 'study' && !day.topics.length && planSubs(dow).length)
      html += `<div class="empty">อ่านครบทุกหัวข้อของวิชาวันนี้แล้ว — ทำข้อสอบเก่าแทน</div>`;
    html += sec.items.map(i => checkHTML(i, isDone(i, day))).join('');
    if (sec.key === 'study' && planSubs(dow).length)
      html += `<div class="more-row"><button class="btn ghost mini" id="moreBtn">+ อ่านเพิ่มอีกเรื่อง</button></div>`;
  });
  $('#todayList').innerHTML = html;

  const pct = total ? Math.round(done / total * 100) : 0;
  day.pct = pct; save();

  $('#dayTitle').textContent = 'วัน' + DOW[dow];
  $('#dayPill').textContent = `${done}/${total} · ${pct}%`;
  $('#todayText').textContent = `วัน${DOW[dow]}ที่ ${now.toLocaleDateString('th-TH', {day:'numeric', month:'long', year:'numeric'})}`;

  const all = SUBJECTS.flatMap(allTopics);
  const readDone = all.filter(k => state.topics[k]).length;
  const readPct = all.length ? Math.round(readDone / all.length * 100) : 0;

  let streak = 0;
  const d = new Date();
  if (pct < 80) d.setDate(d.getDate() - 1);
  while (state.days[dkey(d)]?.pct >= 80) { streak++; d.setDate(d.getDate() - 1); }

  const left = daysLeft('cadet');
  $('#stats').innerHTML = [
    ['Today · วันนี้',          pct + '%',      `${done} จาก ${total} งาน`,        pct, 'var(--accent)'],
    ['Cadet · อ่านแล้ว',        readPct + '%',  `${readDone}/${all.length} หัวข้อ`, readPct, 'var(--ok)'],
    ['Streak · ต่อเนื่อง',      streak + ' วัน', 'วันที่ทำครบ ≥80%',               Math.min(streak * 10, 100), 'var(--orange)'],
    ['Exam · วันสอบ', left === null ? '--' : left + ' วัน', left === null ? 'ตั้งวันสอบด้านบน' : 'เหลือก่อนสอบเตรียมทหาร', null, ''],
  ].map(([k, v, s, p, c]) => `<div class="stat glass">
      <div class="lbl">${k}</div><div class="v">${v}</div><div class="s">${s}</div>
      ${p !== null ? `<div class="pbar"><i style="width:${p}%;--c:${c}"></i></div>` : ''}
    </div>`).join('');

  const tl = (dow === 0 || dow === 6) ? WEEKEND : SCHOOL_DAY;
  const hm = pad(now.getHours()) + ':' + pad(now.getMinutes());
  let nowIdx = -1;
  tl.forEach((b, i) => { if (b[0] <= hm) nowIdx = i; });
  $('#timeline').innerHTML = tl.map((b, i) => `<div class="tl-i ${i === nowIdx ? 'now' : ''}">
      <div class="tl-time">${b[0]}${i === nowIdx ? '<span class="now-badge">NOW</span>' : ''}</div>
      <div class="tl-t">${b[1]}</div>
    </div>`).join('');
  $('#clock').textContent = hm;

  let ch = '';
  for (let i = 6; i >= 0; i--) {
    const x = new Date(); x.setDate(x.getDate() - i);
    const p = state.days[dkey(x)]?.pct || 0;
    ch += `<div class="col">
      <div class="b ${p >= 80 ? 'hi' : ''} ${i === 0 ? 'today' : ''}" style="height:${Math.max(p, 3)}%" title="${p}%"></div>
      <span>${DOW_S[x.getDay()]}</span></div>`;
  }
  $('#chart').innerHTML = ch;
}

/* ---------- Render: แผนรายสัปดาห์ (เตรียมทหาร) ---------- */
function renderPlan() {
  const today = new Date().getDay();
  $('#plan').innerHTML = WEEK_ORDER.map(d => {
    const subs = planSubs(d).map(x => {
      const s = subjById(x.id);
      return s ? `<div class="pchip" style="--c:${s.color}"><i></i>${s.name}</div>` : '';
    }).join('');
    const ex = d === 6 ? '<div class="pchip x">+ ข้อสอบเก่า</div>'
             : d === 0 ? '<div class="pchip x">+ ทบทวนทั้งสัปดาห์</div>' : '';
    return `<div class="pday ${d === today ? 'today' : ''}"><b>${DOW[d]}</b>${subs}${ex}</div>`;
  }).join('');
}

/* ---------- Render: สนามสอบ (cadet / netsat / nco) ---------- */
function renderTrack(t) {
  const cfg = TRACKS[t];
  const list = $(cfg.list);
  if (!list) return;
  const all = cfg.subjects.flatMap(allTopics);
  const dn = all.filter(k => state.topics[k]).length;
  const p = all.length ? Math.round(dn / all.length * 100) : 0;
  $(`[data-pill="${t}"]`).forEach(el => el.textContent = `${dn}/${all.length} · ${p}%`);
  $(`[data-bar="${t}"]`).forEach(el => el.style.width = p + '%');
  list.innerHTML = cfg.subjects.map(s => subjectCard(s, readFilter[t] || 'all')).join('');
}

/* ---------- Render: TRAINING ---------- */
function renderTrain() {
  const today = new Date().getDay();
  $('#week').innerHTML = WEEK_ORDER.map(d => `<button class="day glass ${d === today ? 'today' : ''} ${d === selDow ? 'sel' : ''}" data-dow="${d}">
      <b>${DOW_S[d]}</b><span>${WORKOUT[d].title}</span></button>`).join('');

  const w = WORKOUT[selDow];
  $('#wTitle').innerHTML = `${w.title}<small>วัน${DOW[selDow]}</small>`;
  $('#wSub').textContent = w.sub;

  let html = '';
  if (w.run) html += `<div class="runbox">
      <div class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1405" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="4" r="2"/><path d="M6 20l3-6 3 2 1-5 4 4M9 14l-2-3 4-3 3 3"/></svg></div>
      <div><h4>${w.run.t}</h4><p>${w.run.d}</p></div>
    </div>`;
  if (w.school.length) html += `<div class="sec">ที่ราวโรงเรียน (หลังวิ่ง)</div><div class="ex-grid">${w.school.map(exCard).join('')}</div>`;
  html += `<div class="sec">ที่บ้าน · ดัมเบล / น้ำหนักตัว</div><div class="ex-grid">${w.home.map(exCard).join('')}</div>`;
  $('#wBody').innerHTML = html;
}

function renderAll() {
  renderToday();
  renderPlan();
  Object.keys(TRACKS).forEach(renderTrack);
  renderTrain();
  updateCd();
}

/* ---------- Actions ---------- */
function addCustom() {
  const v = $('#customInput').value.trim();
  if (!v) return;
  todayDay().custom.push(v);
  $('#customInput').value = '';
  save(); renderToday();
}

function deleteCustom(i) {
  const day = todayDay();
  day.custom.splice(i, 1);
  const nd = {};
  Object.entries(day.done).forEach(([k, v]) => {
    if (!k.startsWith('c-')) { nd[k] = v; return; }
    const n = +k.slice(2);
    if (n < i) nd[k] = v;
    else if (n > i) nd['c-' + (n - 1)] = v;
  });
  day.done = nd;
  save(); renderToday();
}

function addMoreTopic() {
  const dow = new Date().getDay();
  const day = todayDay();
  day.topics.push(...pickTopics(dow, day.topics, 1).slice(0, 1));
  save(); renderToday();
}

/* ---------- Events ---------- */
$('.tab').forEach(t => t.addEventListener('click', () => {
  $('.tab').forEach(x => x.classList.toggle('active', x === t));
  $('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + t.dataset.view));
  window.scrollTo({top:0, behavior:'smooth'});
}));

document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.exam)    { setExam(el.dataset.exam, el.value); return; }
  if (el.dataset.include) { toggleInclude(el.dataset.include, el.checked); return; }
  if (el.type !== 'checkbox') return;
  if (el.dataset.topic) state.topics[el.dataset.topic] = el.checked;
  else todayDay().done[el.dataset.id] = el.checked;
  save(); renderAll();
});

document.addEventListener('click', e => {
  const del = e.target.closest('.del');
  if (del) { e.preventDefault(); deleteCustom(+del.dataset.del); return; }

  if (e.target.id === 'moreBtn') { addMoreTopic(); return; }

  const dayBtn = e.target.closest('.day');
  if (dayBtn) { selDow = +dayBtn.dataset.dow; renderTrain(); return; }

  const chip = e.target.closest('.chip');
  if (chip && chip.dataset.track) {
    const t = chip.dataset.track;
    readFilter[t] = chip.dataset.f;
    $(`.chip[data-track="${t}"]`).forEach(c => c.classList.toggle('active', c === chip));
    renderTrack(t);
  }
});

$('#addBtn').addEventListener('click', addCustom);
$('#customInput').addEventListener('keydown', e => { if (e.key === 'Enter') addCustom(); });

$('#resetBtn').addEventListener('click', () => {
  if (!confirm('ล้างข้อมูลทั้งหมด (ติ๊กอ่านหนังสือ + ประวัติรายวัน)?')) return;
  state = {examDate:state.examDate, examDates:state.examDates, include:state.include, topics:{}, days:{}};
  save(); renderAll();
});

/* ---------- Init ---------- */
$('[data-exam]').forEach(i => i.value = getExam(i.dataset.exam) || '');
$('[data-include]').forEach(i => i.checked = !!state.include[i.dataset.include]);
renderAll();
setInterval(() => { renderToday(); updateCd(); }, 60000);
window.__APP_OK = true;