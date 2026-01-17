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
