export interface Week {
  week: number;
  title: string;
  description: string;
  mainTopic: string;
  project: string;
  resources: {
    arabic?: string;
    english?: string;
  };
  youtubeChannels: {
    name: string;
    url: string;
    language: 'arabic' | 'english';
  }[];
  freeBooks: {
    title: string;
    url: string;
    format: 'pdf' | 'html' | 'web';
  }[];
  objectives: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const weeks: Week[] = [
  {
    week: 1,
    title: "أساسيات الشبكات",
    description: "تحليل حركة مرور شبكة وهمية باستخدام Wireshark وفهم بروتوكولات TCP/IP",
    mainTopic: "Networking",
    project: "تحليل حركة مرور الشبكة",
    resources: {
      arabic: "https://www.youtube.com/playlist?list=PLCIJjtxZvgshS_v-p7p_68p3mK9798n-J",
      english: "https://www.youtube.com/playlist?list=PLwwAN0Pru-1-Kj6thocL8lBDf_f2hN6Eb"
    },
    youtubeChannels: [
      { name: "Free4Arab - أساسيات الشبكات", url: "https://www.youtube.com/@Free4Arab", language: 'arabic' },
      { name: "محمد عاصم - الشبكات", url: "https://www.youtube.com/@MohamedAssem", language: 'arabic' },
      { name: "Professor Messer - CompTIA Network+", url: "https://www.youtube.com/@professormesser", language: 'english' },
      { name: "Practical Networking", url: "https://www.youtube.com/@PracticalNetworking", language: 'english' }
    ],
    freeBooks: [
      { title: "TCP/IP Illustrated (Free Online)", url: "https://en.wikipedia.org/wiki/TCP/IP_Illustrated", format: 'web' },
      { title: "Computer Networking: A Top-Down Approach (Summary)", url: "https://www.coursera.org/learn/computer-networking", format: 'web' },
      { title: "Wireshark User Guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/", format: 'html' }
    ],
    objectives: [
      "فهم نموذج OSI",
      "دراسة بروتوكولات TCP/IP",
      "تعلم عناوين IP و Subnetting",
      "فهم خدمات DNS و DHCP",
      "التعرف على المنافذ الشائعة"
    ],
    difficulty: 'beginner'
  },
  {
    week: 2,
    title: "نظام لينكس",
    description: "بناء بيئة عملك الأمنية وإتقان 20 أمر أساسي في سطر الأوامر",
    mainTopic: "Linux Fundamentals",
    project: "تثبيت Kali Linux والتعامل مع CLI",
    resources: {
      arabic: "https://www.youtube.com/playlist?list=PLuXY3ddo_8nz_m3m4v3S9v_v_v_v_v_v_v",
      english: "https://www.youtube.com/playlist?list=PLIhvC56v6w8X_9O_0_893_6f8fS7_8u_r"
    },
    youtubeChannels: [
      { name: "محمد عاصم - Linux من الصفر", url: "https://www.youtube.com/@MohamedAssem", language: 'arabic' },
      { name: "Elzero Web School - Linux", url: "https://www.youtube.com/@ElzeroWebSchool", language: 'arabic' },
      { name: "NetworkChuck - Linux for Hackers", url: "https://www.youtube.com/@NetworkChuck", language: 'english' },
      { name: "Linux Crash Course", url: "https://www.youtube.com/playlist?list=PLT98CRl2KxKHaKA8-P7sQl0IFeQrLIcUG", language: 'english' }
    ],
    freeBooks: [
      { title: "The Linux Command Line (Free PDF)", url: "http://linuxcommand.org/tlcl.php", format: 'pdf' },
      { title: "Linux Basics for Hackers", url: "https://nostarch.com/linuxbasicsforhackers", format: 'web' },
      { title: "Ubuntu Manual", url: "https://ubuntu.com/tutorials", format: 'web' }
    ],
    objectives: [
      "تثبيت توزيعة لينكس",
      "استخدام سطر الأوامر (CLI)",
      "إدارة الملفات والمجلدات",
      "فهم نظام الصلاحيات (Permissions)",
      "إدارة الحزم والبرامج"
    ],
    difficulty: 'beginner'
  },
  {
    week: 3,
    title: "Bash Scripting والأتمتة",
    description: "حل تحديات Bandit وكتابة سكريبت Bash لأتمتة المهام",
    mainTopic: "Shell Scripting",
    project: "حل تحديات OverTheWire Bandit",
    resources: {
      english: "https://www.youtube.com/watch?v=e7BufAVwDiM"
    },
    youtubeChannels: [
      { name: "freeCodeCamp - Bash Scripting", url: "https://www.youtube.com/@freeCodeCamp", language: 'english' },
      { name: "edureka! - Shell Scripting", url: "https://www.youtube.com/@edurekaIN", language: 'english' },
      { name: "محمد عاصم - Bash", url: "https://www.youtube.com/@MohamedAssem", language: 'arabic' }
    ],
    freeBooks: [
      { title: "Advanced Bash-Scripting Guide", url: "https://www.gnu.org/software/bash/manual/bash.html", format: 'html' },
      { title: "Bash Guide for Beginners", url: "https://www.tldp.org/LDP/Bash-Beginners-Guide/html/", format: 'html' },
      { title: "The Linux Command Line (Chapter 24-28)", url: "http://linuxcommand.org/tlcl.php", format: 'pdf' }
    ],
    objectives: [
      "أدوات لينكس المتقدمة (grep, sed, awk)",
      "إدارة العمليات والخدمات",
      "أساسيات Bash Scripting",
      "أتمتة المهام الروتينية",
      "حل تحديات Bandit"
    ],
    difficulty: 'beginner'
  },
  {
    week: 4,
    title: "البرمجة - Python الأساسيات",
    description: "تعلم أساسيات لغة Python وكتابة برنامج تشفير بسيط",
    mainTopic: "Python Basics",
    project: "برنامج تشفير وفك تشفير",
    resources: {
      arabic: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mQ9P",
      english: "https://www.coursera.org/courses?query=python+basics"
    },
    youtubeChannels: [
      { name: "Elzero Web School - Python", url: "https://www.youtube.com/@ElzeroWebSchool", language: 'arabic' },
      { name: "محمد عاصم - Python", url: "https://www.youtube.com/@MohamedAssem", language: 'arabic' },
      { name: "freeCodeCamp - Python for Beginners", url: "https://www.youtube.com/@freeCodeCamp", language: 'english' },
      { name: "Corey Schafer - Python Tutorials", url: "https://www.youtube.com/@CoreySchafer", language: 'english' }
    ],
    freeBooks: [
      { title: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", format: 'web' },
      { title: "Python 3 Official Documentation", url: "https://docs.python.org/3/", format: 'html' },
      { title: "Think Python (Free PDF)", url: "https://greenteapress.com/wp/think-python-2e/", format: 'pdf' }
    ],
    objectives: [
      "المتغيرات وأنواع البيانات",
      "الهياكل الشرطية (If/Else)",
      "الحلقات التكرارية (Loops)",
      "الدوال (Functions)",
      "التعامل مع الملفات"
    ],
    difficulty: 'beginner'
  },
  {
    week: 5,
    title: "بايثون للأمن السيبراني",
    description: "كتابة ماسح منافذ بسيط باستخدام مكتبة Sockets",
    mainTopic: "Python for Security",
    project: "كتابة Port Scanner",
    resources: {
      english: "https://www.cybrary.it/course/python-for-cybersecurity"
    },
    youtubeChannels: [
      { name: "Cybersecurity Tutorials - Python", url: "https://www.youtube.com/c/CybersecurityTutorials", language: 'english' },
      { name: "John Hammond - Python Hacking", url: "https://www.youtube.com/@JohnHammond", language: 'english' },
      { name: "NetworkChuck - Python Networking", url: "https://www.youtube.com/@NetworkChuck", language: 'english' }
    ],
    freeBooks: [
      { title: "Black Hat Python", url: "https://nostarch.com/blackhatpython", format: 'web' },
      { title: "Python Network Programming", url: "https://docs.python.org/3/library/socket.html", format: 'html' },
      { title: "Violent Python (Summary)", url: "https://nostarch.com/violentpython", format: 'web' }
    ],
    objectives: [
      "مكتبات الشبكات (Sockets)",
      "كتابة ماسح منافذ",
      "أتمتة مهام لينكس",
      "معالجة الأخطاء",
      "تطوير أدوات أمنية بسيطة"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 6,
    title: "أساسيات الأمن والمختبر المنزلي",
    description: "بناء مختبر منزلي وفهم مبادئ الأمن الأساسية",
    mainTopic: "Security Fundamentals",
    project: "بناء Home Lab مع Kali و Metasploitable",
    resources: {
      english: "https://www.isc2.org/landing/1mcc"
    },
    youtubeChannels: [
      { name: "Professor Messer - Security+", url: "https://www.youtube.com/@professormesser", language: 'english' },
      { name: "Cybrary - Security Fundamentals", url: "https://www.youtube.com/@cybrary", language: 'english' },
      { name: "ITPro.tv - Security Basics", url: "https://www.youtube.com/@ITProTV", language: 'english' }
    ],
    freeBooks: [
      { title: "ISC2 CC Study Guide", url: "https://www.isc2.org/landing/1mcc", format: 'web' },
      { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", format: 'web' },
      { title: "Security Essentials (Free PDF)", url: "https://www.sans.org/white-papers/", format: 'pdf' }
    ],
    objectives: [
      "مبدأ ثلاثية CIA",
      "إدارة المخاطر",
      "المصادقة والتفويض",
      "أساسيات التشفير",
      "بناء بيئة معزولة للتدريب"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 7,
    title: "أدوات الاستكشاف والتحليل",
    description: "إتقان Nmap وتحليل سجلات النظام",
    mainTopic: "Reconnaissance Tools",
    project: "مسح شامل للشبكة باستخدام Nmap",
    resources: {
      english: "https://tryhackme.com/path/outline/presecurity"
    },
    youtubeChannels: [
      { name: "NetworkChuck - Nmap Tutorial", url: "https://www.youtube.com/@NetworkChuck", language: 'english' },
      { name: "John Hammond - Nmap", url: "https://www.youtube.com/@JohnHammond", language: 'english' },
      { name: "Cybersecurity Tutorials - Nmap", url: "https://www.youtube.com/c/CybersecurityTutorials", language: 'english' }
    ],
    freeBooks: [
      { title: "Nmap Official Guide", url: "https://nmap.org/book/", format: 'html' },
      { title: "Nmap Reference Manual", url: "https://nmap.org/docs.html", format: 'html' },
      { title: "The Art of Intrusion (Summary)", url: "https://www.wiley.com/en-us/The+Art+of+Intrusion-p-9780470189405", format: 'web' }
    ],
    objectives: [
      "استخدام Nmap",
      "أنواع المسح المختلفة",
      "تحليل النتائج",
      "قراءة سجلات النظام",
      "توثيق النتائج"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 8,
    title: "أمن تطبيقات الويب (OWASP)",
    description: "استخدام Burp Suite واختبار ثغرات الويب الشائعة",
    mainTopic: "Web Security",
    project: "اختبار ثغرة XSS على موقع وهمي",
    resources: {
      english: "https://picoctf.org/"
    },
    youtubeChannels: [
      { name: "OWASP - Web Security", url: "https://www.youtube.com/c/OWASP", language: 'english' },
      { name: "Rana Khalil - Web Security", url: "https://www.youtube.com/@RanaKhalil101", language: 'english' },
      { name: "LiveOverflow - Web Hacking", url: "https://www.youtube.com/@LiveOverflow", language: 'english' }
    ],
    freeBooks: [
      { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", format: 'web' },
      { title: "Web Application Security Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/", format: 'web' },
      { title: "Burp Suite Documentation", url: "https://portswigger.net/burp/documentation", format: 'html' }
    ],
    objectives: [
      "فهم بروتوكول HTTP/HTTPS",
      "قائمة OWASP Top 10",
      "ثغرة XSS",
      "ثغرة SQL Injection",
      "استخدام Burp Suite"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 9,
    title: "التحقيق الجنائي الرقمي",
    description: "محاكاة حادثة واستخدام أدوات التحليل الجنائي",
    mainTopic: "Digital Forensics",
    project: "استعادة الملفات والتحقيق الجنائي",
    resources: {
      english: "https://www.coursera.org/professional-certificates/google-cybersecurity"
    },
    youtubeChannels: [
      { name: "13Cubed - Digital Forensics", url: "https://www.youtube.com/@13Cubed", language: 'english' },
      { name: "DFIR Science - Forensics", url: "https://www.youtube.com/c/DFIRScience", language: 'english' },
      { name: "Cybersecurity Tutorials - Forensics", url: "https://www.youtube.com/c/CybersecurityTutorials", language: 'english' }
    ],
    freeBooks: [
      { title: "The Sleuth Kit and Autopsy Documentation", url: "https://www.sleuthkit.org/", format: 'web' },
      { title: "Digital Forensics Essentials", url: "https://www.sans.org/white-papers/", format: 'pdf' },
      { title: "NIST Guidelines on Mobile Device Forensics", url: "https://csrc.nist.gov/publications/detail/sp/800-101/rev-1/final", format: 'pdf' }
    ],
    objectives: [
      "أساسيات التحليل الجنائي",
      "استخدام أداة Autopsy",
      "استعادة الملفات المحذوفة",
      "تحليل الأدلة الرقمية",
      "كتابة التقارير"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 10,
    title: "الاستجابة للحوادث",
    description: "وضع خطة استجابة وتحديد خطوات الاحتواء والإزالة",
    mainTopic: "Incident Response",
    project: "وضع Runbook للاستجابة للحوادث",
    resources: {
      english: "https://blueteamlabs.online/"
    },
    youtubeChannels: [
      { name: "Cybersecurity Tutorials - Incident Response", url: "https://www.youtube.com/c/CybersecurityTutorials", language: 'english' },
      { name: "SANS Cyber Aces - IR", url: "https://www.youtube.com/c/SANSCyberAces", language: 'english' },
      { name: "John Hammond - Incident Response", url: "https://www.youtube.com/@JohnHammond", language: 'english' }
    ],
    freeBooks: [
      { title: "NIST Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final", format: 'pdf' },
      { title: "Incident Response Playbook", url: "https://www.sans.org/white-papers/", format: 'pdf' },
      { title: "Blue Team Field Manual", url: "https://www.amazon.com/Blue-Team-Field-Manual-BTFM/dp/154101636X", format: 'web' }
    ],
    objectives: [
      "مراحل الاستجابة للحوادث",
      "التحضير والتخطيط",
      "الكشف والتحليل",
      "الاحتواء والإزالة",
      "الاستعادة والدروس المستفادة"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 11,
    title: "التشفير والهاش",
    description: "فهم مبادئ التشفير واستخدام OpenSSL",
    mainTopic: "Cryptography",
    project: "توليد شهادات SSL/TLS",
    resources: {
      english: "https://www.coursera.org/professional-certificates/google-cybersecurity"
    },
    youtubeChannels: [
      { name: "Professor Messer - Cryptography", url: "https://www.youtube.com/@professormesser", language: 'english' },
      { name: "Cybrary - Cryptography", url: "https://www.youtube.com/@cybrary", language: 'english' },
      { name: "3Blue1Brown - Cryptography", url: "https://www.youtube.com/@3Blue1Brown", language: 'english' }
    ],
    freeBooks: [
      { title: "Cryptography 101", url: "https://www.crypto101.io/", format: 'web' },
      { title: "OpenSSL Cookbook", url: "https://www.feistyduck.com/books/openssl-cookbook/", format: 'web' },
      { title: "A Graduate Course in Applied Cryptography", url: "https://toc.cryptobook.us/", format: 'web' }
    ],
    objectives: [
      "التشفير المتماثل",
      "التشفير غير المتماثل",
      "التجزئة (Hashing)",
      "التوقيعات الرقمية",
      "البنية التحتية للمفاتيح العامة (PKI)"
    ],
    difficulty: 'intermediate'
  },
  {
    week: 12,
    title: "التقييم والشهادة",
    description: "اجتياز اختبار شهادة ISC2 Certified in Cybersecurity",
    mainTopic: "Certification",
    project: "الحصول على شهادة ISC2 CC",
    resources: {
      english: "https://www.isc2.org/landing/1mcc"
    },
    youtubeChannels: [
      { name: "Professor Messer - Security+", url: "https://www.youtube.com/@professormesser", language: 'english' },
      { name: "Cybrary - Certification Prep", url: "https://www.youtube.com/@cybrary", language: 'english' },
      { name: "ITProTV - Exam Prep", url: "https://www.youtube.com/@ITProTV", language: 'english' }
    ],
    freeBooks: [
      { title: "ISC2 CC Study Guide", url: "https://www.isc2.org/landing/1mcc", format: 'web' },
      { title: "CompTIA Security+ Study Guide", url: "https://www.comptia.org/certifications/security", format: 'web' },
      { title: "Practice Exam Questions", url: "https://www.examtopics.com/", format: 'web' }
    ],
    objectives: [
      "مراجعة شاملة لكل المفاهيم",
      "حل اختبارات تجريبية",
      "التحضير النهائي",
      "اجتياز الاختبار",
      "الحصول على الشهادة"
    ],
    difficulty: 'advanced'
  }
];

export interface SpecializationPath {
  id: string;
  name: string;
  description: string;
  duration: string;
  projects: string[];
  certifications: string[];
  color: string;
}

export const specializationPaths: SpecializationPath[] = [
  {
    id: 'red-team',
    name: 'الفريق الأحمر (Offensive)',
    description: 'اختبار الاختراق والاستغلال والهندسة العكسية',
    duration: '6-12 شهراً',
    projects: [
      'اختراق شبكة Wi-Fi محمية',
      'استغلال ثغرات Zero-Day',
      'تطوير أدوات اختراق مخصصة'
    ],
    certifications: ['OSCP', 'CEH', 'GPEN'],
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'blue-team',
    name: 'الفريق الأزرق (Defensive)',
    description: 'الدفاع والاستجابة للحوادث والتحليل الجنائي',
    duration: '6-12 شهراً',
    projects: [
      'إعداد نظام IDS/IPS',
      'بناء SIEM',
      'التحقيق الجنائي الشامل'
    ],
    certifications: ['CySA+', 'GSEC', 'CISSP'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'cloud-security',
    name: 'أمن الحوسبة السحابية',
    description: 'تأمين بيئات AWS، Azure، و GCP',
    duration: '6-12 شهراً',
    projects: [
      'تأمين بيئة AWS',
      'إعداد سياسات IAM',
      'مراقبة التهديدات السحابية'
    ],
    certifications: ['AWS Security Specialty', 'Azure Security Engineer'],
    color: 'from-purple-500 to-pink-500'
  }
];
