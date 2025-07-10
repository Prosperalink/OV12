'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface ILanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<ILanguageContextType | undefined>(
  undefined
);

// Translation data based on MULTILINGUAL_COPY_IMPLEMENTATION.md
const translations = {
  en: {
    // Hero Section
    'hero.title': 'Orson Vision',
    'hero.subtitle': 'Cinematic Humanism in Digital Innovation',
    'hero.description':
      'We unearth and amplify your unique story through cinematic digital experiences that resonate deeply, transform perceptions, and inspire meaningful action. Every interaction is crafted like a film scene—with precision, artistry, and emotional depth.',
    'hero.primaryCta': 'Begin Your Cinematic Journey',
    'hero.secondaryCta': 'Watch Our Story',
    'hero.socialProof': '4.9/5 from 200+ clients',
    'hero.trustedBy': 'Trusted by 500+ businesses',

    // Solutions Matrix
    'solutions.digitalInnovation.title': 'Digital Innovation',
    'solutions.digitalInnovation.subtitle':
      'Transforming visions into compelling digital narratives that captivate audiences and amplify impact',
    'solutions.digitalInnovation.description':
      'We transform your vision into compelling digital narratives that captivate audiences and amplify your impact. Every solution is crafted with cinematic precision, unearthing the human story behind your technology and creating experiences that resonate long after the first interaction.',

    'solutions.creativeDesign.title': 'Creative Design',
    'solutions.creativeDesign.subtitle':
      "Crafting compelling visual narratives that unearth your brand's unique story and amplify it through cinematic design experiences",
    'solutions.creativeDesign.description':
      "We craft compelling visual narratives that unearth your brand's unique story and amplify it through cinematic design experiences. Every visual element is crafted with precision and artistry, creating emotional connections that transform how audiences perceive and engage with your brand.",

    'solutions.contentCreation.title': 'Content Creation',
    'solutions.contentCreation.subtitle':
      'Amplifying your voice through cinematic storytelling that resonates deeply and inspires meaningful action',
    'solutions.contentCreation.description':
      'We amplify your voice through cinematic storytelling that resonates deeply with audiences and inspires meaningful action. From visual narratives to compelling copy, we craft content that unearths the human element in every story and transforms how your message connects with the world.',

    'solutions.technologySolutions.title': 'Technology Solutions',
    'solutions.technologySolutions.subtitle':
      'Crafting seamless technology experiences that amplify human potential and transform digital interactions',
    'solutions.technologySolutions.description':
      'We craft seamless technology experiences that amplify human potential and transform how people interact with your digital presence. Every solution is built with cinematic precision, ensuring reliability and performance while creating moments that resonate and inspire.',

    'solutions.strategicConsulting.title': 'Strategic Consulting',
    'solutions.strategicConsulting.subtitle':
      'Unearthing your unique potential and crafting strategic narratives that transform your market presence',
    'solutions.strategicConsulting.description':
      'We unearth your unique potential and craft strategic narratives that transform your market presence. Through cinematic humanism, we help you navigate the digital landscape with clarity, purpose, and the confidence to amplify your impact in meaningful ways.',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.clientJourney': 'Client Journey',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    // About Page
    'about.story.title': 'Our Story',
    'about.story.content':
      "Founded in 2020, Orson Vision emerged from a simple yet powerful belief: that technology should serve humanity, not replace it. Our name 'Orson' pays homage to Orson Welles, the master storyteller who revolutionized cinema, while 'Vision' represents our forward-thinking approach to digital innovation.",

    'about.mission.title': 'Our Mission',
    'about.mission.content':
      "We believe in 'Cinematic Humanism' - the art of crafting digital experiences that feel as compelling and emotionally resonant as the greatest films. Every project we undertake is approached with the same attention to detail, narrative structure, and emotional impact that goes into creating a cinematic masterpiece.",

    // Contact Page
    'contact.form.title': 'Start Your Project',
    'contact.form.subtitle':
      "Ready to transform your digital presence? Let's discuss your vision and create something extraordinary together.",
    'contact.form.fullName': 'Full Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.company': 'Company',
    'contact.form.serviceInterest': 'Service Interest *',
    'contact.form.budgetRange': 'Budget Range',
    'contact.form.timeline': 'Timeline',
    'contact.form.projectDetails': 'Project Details *',
    'contact.form.successMessage':
      'Thank You! Your message has been received. Our team will get back to you within 24 hours to discuss your project and how we can help bring your vision to life.',

    // Client Journey
    'clientJourney.title': 'Your Journey With Us',
    'clientJourney.subtitle':
      'A collaborative process designed to transform your vision into digital reality, with transparency and excellence at every step.',

    // Testimonials
    'testimonials.title': 'Client Success Stories',
    'testimonials.subtitle':
      "Discover how we've helped businesses transform their digital presence and achieve remarkable results.",
  },

  fr: {
    // Hero Section
    'hero.title': 'Orson Vision',
    'hero.subtitle': "Humanisme Cinématographique dans l'Innovation Numérique",
    'hero.description':
      'Nous unissons et amplifions votre histoire unique à travers des expériences numériques cinématographiques qui résonnent profondément, transforment les perceptions et inspirent une action significative. Chaque interaction est conçue comme une scène de film—avec précision, art et profondeur émotionnelle.',
    'hero.primaryCta': 'Commencez Votre Voyage Cinématographique',
    'hero.secondaryCta': 'Regardez Notre Histoire',
    'hero.socialProof': '4,9/5 de 200+ clients',
    'hero.trustedBy': 'Fait confiance par 500+ entreprises',

    // Solutions Matrix
    'solutions.digitalInnovation.title': 'Innovation Numérique',
    'solutions.digitalInnovation.subtitle':
      "Transformer les visions en récits numériques captivants qui séduisent les publics et amplifient l'impact",
    'solutions.digitalInnovation.description':
      "Nous transformons votre vision en récits numériques captivants qui séduisent les publics et amplifient votre impact. Chaque solution est conçue avec une précision cinématographique, révélant l'histoire humaine derrière votre technologie et créant des expériences qui résonnent longtemps après la première interaction.",

    'solutions.creativeDesign.title': 'Design Créatif',
    'solutions.creativeDesign.subtitle':
      "Créer des récits visuels captivants qui révèlent l'histoire unique de votre marque et l'amplifient à travers des expériences de design cinématographiques",
    'solutions.creativeDesign.description':
      "Nous créons des récits visuels captivants qui révèlent l'histoire unique de votre marque et l'amplifient à travers des expériences de design cinématographiques. Chaque élément visuel est conçu avec précision et art, créant des connexions émotionnelles qui transforment la façon dont les publics perçoivent et s'engagent avec votre marque.",

    'solutions.contentCreation.title': 'Création de Contenu',
    'solutions.contentCreation.subtitle':
      'Amplifier votre voix à travers la narration cinématographique qui résonne profondément et inspire une action significative',
    'solutions.contentCreation.description':
      "Nous amplifions votre voix à travers la narration cinématographique qui résonne profondément avec les publics et inspire une action significative. Des récits visuels au contenu captivant, nous créons du contenu qui révèle l'élément humain dans chaque histoire et transforme la façon dont votre message se connecte avec le monde.",

    'solutions.technologySolutions.title': 'Solutions Technologiques',
    'solutions.technologySolutions.subtitle':
      'Créer des expériences technologiques fluides qui amplifient le potentiel humain et transforment les interactions numériques',
    'solutions.technologySolutions.description':
      'Nous créons des expériences technologiques fluides qui amplifient le potentiel humain et transforment la façon dont les gens interagissent avec votre présence numérique. Chaque solution est construite avec une précision cinématographique, assurant fiabilité et performance tout en créant des moments qui résonnent et inspirent.',

    'solutions.strategicConsulting.title': 'Conseil Stratégique',
    'solutions.strategicConsulting.subtitle':
      'Révéler votre potentiel unique et créer des récits stratégiques qui transforment votre présence sur le marché',
    'solutions.strategicConsulting.description':
      "Nous révélons votre potentiel unique et créons des récits stratégiques qui transforment votre présence sur le marché. À travers l'humanisme cinématographique, nous vous aidons à naviguer dans le paysage numérique avec clarté, objectif et la confiance d'amplifier votre impact de manière significative.",

    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.solutions': 'Solutions',
    'nav.clientJourney': 'Votre Voyage Avec Nous',
    'nav.testimonials': 'Histoires de Succès Clients',
    'nav.contact': 'Contact',

    // About Page
    'about.story.title': 'Notre Histoire',
    'about.story.content':
      "Fondée en 2020, Orson Vision est née d'une croyance simple mais puissante : que la technologie devrait servir l'humanité, pas la remplacer. Notre nom 'Orson' rend hommage à Orson Welles, le maître conteur qui a révolutionné le cinéma, tandis que 'Vision' représente notre approche avant-gardiste de l'innovation numérique.",

    'about.mission.title': 'Notre Mission',
    'about.mission.content':
      "Nous croyons en 'l'Humanisme Cinématographique' - l'art de créer des expériences numériques qui se sentent aussi captivantes et émotionnellement résonnantes que les plus grands films. Chaque projet que nous entreprenons est abordé avec la même attention aux détails, à la structure narrative et à l'impact émotionnel qui va dans la création d'un chef-d'œuvre cinématographique.",

    // Contact Page
    'contact.form.title': 'Démarrez Votre Projet',
    'contact.form.subtitle':
      "Prêt à transformer votre présence numérique ? Discutons de votre vision et créons quelque chose d'extraordinaire ensemble.",
    'contact.form.fullName': 'Nom Complet *',
    'contact.form.email': 'Adresse E-mail *',
    'contact.form.company': 'Entreprise',
    'contact.form.serviceInterest': 'Intérêt de Service *',
    'contact.form.budgetRange': 'Fourchette Budgétaire',
    'contact.form.timeline': 'Calendrier',
    'contact.form.projectDetails': 'Détails du Projet *',
    'contact.form.successMessage':
      'Merci ! Votre message a été reçu. Notre équipe vous répondra dans les 24 heures pour discuter de votre projet et comment nous pouvons vous aider à concrétiser votre vision.',

    // Client Journey
    'clientJourney.title': 'Votre Voyage Avec Nous',
    'clientJourney.subtitle':
      'Un processus collaboratif conçu pour transformer votre vision en réalité numérique, avec transparence et excellence à chaque étape.',

    // Testimonials
    'testimonials.title': 'Histoires de Succès Clients',
    'testimonials.subtitle':
      'Découvrez comment nous avons aidé les entreprises à transformer leur présence numérique et à obtenir des résultats remarquables.',
  },

  ar: {
    // Hero Section
    'hero.title': 'أورسون فيجن',
    'hero.subtitle': 'الإنسانية السينمائية في الابتكار الرقمي',
    'hero.description':
      'نحن نكشف ونعزز قصتك الفريدة من خلال التجارب الرقمية السينمائية التي تتردد بعمق، وتحول التصورات، وتلهم العمل الهادف. كل تفاعل مصمم مثل مشهد فيلم—بدقة وفن وعمق عاطفي.',
    'hero.primaryCta': 'ابدأ رحلتك السينمائية',
    'hero.secondaryCta': 'شاهد قصتنا',
    'hero.socialProof': '٤.٩/٥ من ٢٠٠+ عميل',
    'hero.trustedBy': 'يثق بنا ٥٠٠+ شركة',

    // Solutions Matrix
    'solutions.digitalInnovation.title': 'الابتكار الرقمي',
    'solutions.digitalInnovation.subtitle':
      'تحويل الرؤى إلى قصص رقمية مقنعة تجذب الجماهير وتعزز التأثير',
    'solutions.digitalInnovation.description':
      'نحن نحول رؤيتك إلى قصص رقمية مقنعة تجذب الجماهير وتعزز تأثيرك. كل حل مصمم بدقة سينمائية، يكشف القصة الإنسانية وراء تقنيتك ويخلق تجارب تتردد طويلاً بعد التفاعل الأول.',

    'solutions.creativeDesign.title': 'التصميم الإبداعي',
    'solutions.creativeDesign.subtitle':
      'ابتكار قصص بصرية مقنعة تكشف القصة الفريدة لعلامتك التجارية وتعززها من خلال تجارب التصميم السينمائية',
    'solutions.creativeDesign.description':
      'نحن نبتكر قصص بصرية مقنعة تكشف القصة الفريدة لعلامتك التجارية وتعززها من خلال تجارب التصميم السينمائية. كل عنصر بصري مصمم بدقة وفن، مما يخلق روابط عاطفية تحول طريقة إدراك الجماهير وتفاعلها مع علامتك التجارية.',

    'solutions.contentCreation.title': 'إنشاء المحتوى',
    'solutions.contentCreation.subtitle':
      'تعزيز صوتك من خلال السرد السينمائي الذي يتردد بعمق ويلهم العمل الهادف',
    'solutions.contentCreation.description':
      'نحن نعزز صوتك من خلال السرد السينمائي الذي يتردد بعمق مع الجماهير ويلهم العمل الهادف. من القصص البصرية إلى المحتوى المقنع، نبتكر محتوى يكشف العنصر الإنساني في كل قصة ويحول طريقة اتصال رسالتك بالعالم.',

    'solutions.technologySolutions.title': 'الحلول التقنية',
    'solutions.technologySolutions.subtitle':
      'ابتكار تجارب تقنية سلسة تعزز الإمكانات البشرية وتحول التفاعلات الرقمية',
    'solutions.technologySolutions.description':
      'نحن نبتكر تجارب تقنية سلسة تعزز الإمكانات البشرية وتحول طريقة تفاعل الناس مع وجودك الرقمي. كل حل مبني بدقة سينمائية، مما يضمن الموثوقية والأداء مع خلق لحظات تتردد وتلهم.',

    'solutions.strategicConsulting.title': 'الاستشارات الاستراتيجية',
    'solutions.strategicConsulting.subtitle':
      'كشف إمكاناتك الفريدة وابتكار قصص استراتيجية تحول وجودك في السوق',
    'solutions.strategicConsulting.description':
      'نحن نكشف إمكاناتك الفريدة ونبتكر قصص استراتيجية تحول وجودك في السوق. من خلال الإنسانية السينمائية، نساعدك في التنقل في المشهد الرقمي بوضوح وهدف والثقة لتعزيز تأثيرك بطرق هادفة.',

    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.solutions': 'الحلول',
    'nav.clientJourney': 'رحلتك معنا',
    'nav.testimonials': 'قصص نجاح العملاء',
    'nav.contact': 'اتصل بنا',

    // About Page
    'about.story.title': 'قصتنا',
    'about.story.content':
      "تأسست أورسون فيجن في عام ٢٠٢٠ من إيمان بسيط لكنه قوي: أن التكنولوجيا يجب أن تخدم الإنسانية، لا أن تحل محلها. اسمنا 'أورسون' يحيي ذكرى أورسون ويلز، سيد السرد الذي ثور السينما، بينما 'فيجن' تمثل نهجنا المتقدم للابتكار الرقمي.",

    'about.mission.title': 'مهمتنا',
    'about.mission.content':
      "نحن نؤمن بـ 'الإنسانية السينمائية' - فن ابتكار التجارب الرقمية التي تشعر بالجاذبية والصدى العاطفي مثل أعظم الأفلام. كل مشروع نقوم به يتم التعامل معه بنفس الاهتمام بالتفاصيل والهيكل السردي والتأثير العاطفي الذي يدخل في إنشاء تحفة سينمائية.",

    // Contact Page
    'contact.form.title': 'ابدأ مشروعك',
    'contact.form.subtitle':
      'مستعد لتحويل وجودك الرقمي؟ دعنا نناقش رؤيتك ونبتكر شيئًا استثنائيًا معًا.',
    'contact.form.fullName': 'الاسم الكامل *',
    'contact.form.email': 'عنوان البريد الإلكتروني *',
    'contact.form.company': 'الشركة',
    'contact.form.serviceInterest': 'اهتمام الخدمة *',
    'contact.form.budgetRange': 'نطاق الميزانية',
    'contact.form.timeline': 'الجدول الزمني',
    'contact.form.projectDetails': 'تفاصيل المشروع *',
    'contact.form.successMessage':
      'شكرًا لك! تم استلام رسالتك. سيرد فريقنا عليك خلال 24 ساعة لمناقشة مشروعك وكيف يمكننا مساعدتك في تحقيق رؤيتك.',

    // Client Journey
    'clientJourney.title': 'رحلتك معنا',
    'clientJourney.subtitle':
      'عملية تعاونية مصممة لتحويل رؤيتك إلى واقع رقمي، مع الشفافية والتميز في كل خطوة.',

    // Testimonials
    'testimonials.title': 'قصص نجاح العملاء',
    'testimonials.subtitle':
      'اكتشف كيف ساعدنا الشركات في تحويل وجودها الرقمي وتحقيق نتائج رائعة.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): ILanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
