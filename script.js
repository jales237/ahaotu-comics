const providersData = {
  NG: ["GTBank", "Access Bank", "Zenith Bank", "OPay", "PalmPay", "Moniepoint", "UBA", "First Bank", "Kuda Bank"],
  GH: ["MTN MoMo", "Telecel Cash", "AT Money", "Fidelity Bank Ghana"],
  ZA: ["Standard Bank", "FNB", "Absa", "Capitec"],
  KE: ["Safaricom M-Pesa", "Airtel Money", "Equity Bank", "KCB Bank"],
  CM: ["MTN MoMo", "Orange Money", "Dizpay", "Smobilpay"]
};

let uploadedComicPages = [];
let selectedSwapIndex = null;

let logoCatAwakeTimer = null;
let logoCatTapCount = 0;
let logoCatTapResetTimer = null;

function handleLogoCatTap() {
  const sleepingFace = document.getElementById('cat-face-sleeping');
  const awakeFace = document.getElementById('cat-face-awake');
  const tailPath = document.getElementById('cat-tail-path');
  const cryBubble = document.getElementById('cat-cry-bubble');

  if (!sleepingFace || !awakeFace || !tailPath || !cryBubble) return;

  logoCatTapCount++;
  clearTimeout(logoCatTapResetTimer);
  logoCatTapResetTimer = setTimeout(() => {
    logoCatTapCount = 0;
  }, 800);

  sleepingFace.style.display = 'none';
  awakeFace.style.display = 'block';

  if (logoCatTapCount >= 3) {
    tailPath.classList.add('wagging-tail');
    cryBubble.classList.add('active');
    setTimeout(() => {
      cryBubble.classList.remove('active');
      tailPath.classList.remove('wagging-tail');
    }, 1500);
    logoCatTapCount = 0;
  }

  clearTimeout(logoCatAwakeTimer);
  logoCatAwakeTimer = setTimeout(() => {
    sleepingFace.style.display = 'block';
    awakeFace.style.display = 'none';
    tailPath.classList.remove('wagging-tail');
    cryBubble.classList.remove('active');
  }, 15000);
}

const translations = {
  en: {
    selectLang: "Language:",
    signIn: "Sign In",
    register: "Register",
    following: "Following",
    followers: "Followers",
    likes: "Likes",
    uploadComic: "+ Upload Comic",
    dashboard: "Dashboard",
    appearance: "Appearance Mode",
    home: "Home",
    trendingComics: "Trending Comics",
    trendingWebtoon: "Trending Webtoon",
    trendingRomance: "Trending Romance",
    novels: "Novels",
    recentUpdated: "Recently Updated",
    browseAll: "Browse All Titles",
    pillSpotlight: "Spotlight",
    pillStories: "Stories",
    pillComics: "Comics",
    pillNovels: "Novels",
    pillRomance: "Romance",
    newComicsTitle: "New Comics",
    subHeadline: "The #1 Platform to publish premium stories & earn cash across Africa.",
    postCta: "🚀 Publish Chapter & Earn",
    payoutTitle: "1. Payout Channels",
    payoutSub: "Select your country first to load your local banking & mobile networks.",
    selectCountry: "Select Country",
    chooseCountry: "Choose your country...",
    selectProvider: "Select Bank / Network Provider",
    chooseProviderFirst: "First select a country above...",
    accountLabel: "Account Number / Phone ID (10-16 Digits)",
    verifyContinue: "Verify & Continue Setup",
    connectProfileTitle: "2. Connect Profile",
    connectProfileSub: "Secure your credentials to instantly activate your monetization channel.",
    continueGoogle: "Continue with Google",
    continueApple: "Continue with Apple",
    studioTitle: "🎨 ACN Master Creator Studio",
    studioSub: "Upload your chapter sequence and manage pages.",
    chapterNameLabel: "Comic Title / Chapter Name",
    dropzoneMain: "Tap here to select your comic pages",
    dropzoneSub: "Supports multi-select PNG, JPG",
    uploadInstructions: "💡 Tip: Select your files in order. Tap page A then page B to swap positions instantly!",
    noPagesYet: "No pages added yet. Select files above!",
    publishCta: "🚀 Publish Chapter",
    footerPromo: "Get the latest stories made just for",
    downloadApp: "Download App"
  },
  fr: {
    selectLang: "Langue :",
    signIn: "Connexion",
    register: "S'inscrire",
    following: "Abonnements",
    followers: "Abonnés",
    likes: "J'aime",
    uploadComic: "+ Publier une BD",
    dashboard: "Tableau de bord",
    appearance: "Mode d'apparence",
    home: "Accueil",
    trendingComics: "Comics tendance",
    trendingWebtoon: "Webtoon tendance",
    trendingRomance: "Romance tendance",
    novels: "Romans",
    recentUpdated: "Mis à jour récemment",
    browseAll: "Tous les titres",
    pillSpotlight: "À la une",
    pillStories: "Histoires",
    pillComics: "BDs",
    pillNovels: "Romans",
    pillRomance: "Romance",
    newComicsTitle: "Nouveaux Comics",
    subHeadline: "La plateforme n°1 pour publier des histoires et gagner de l'argent en Afrique.",
    postCta: "🚀 Publier",
    payoutTitle: "1. Canaux de paiement",
    payoutSub: "Sélectionnez votre pays pour charger vos réseaux bancaires et mobiles.",
    selectCountry: "Sélectionner le pays",
    chooseCountry: "Choisissez votre pays...",
    selectProvider: "Banque / Réseau mobile",
    chooseProviderFirst: "Sélectionnez d'abord un pays...",
    accountLabel: "Numéro de compte / ID téléphone (10-16 chiffres)",
    verifyContinue: "Vérifier et continuer",
    connectProfileTitle: "2. Connecter le profil",
    connectProfileSub: "Sécurisez vos identifiants pour activer votre monétisation.",
    continueGoogle: "Continuer avec Google",
    continueApple: "Continuer avec Apple",
    studioTitle: "🎨 Studio Créateur ACN",
    studioSub: "Téléchargez votre chapitre et organisez vos pages.",
    chapterNameLabel: "Titre de la BD / Chapitre",
    dropzoneMain: "Appuyez ici pour sélectionner vos pages",
    dropzoneSub: "Prend en charge PNG, JPG",
    uploadInstructions: "💡 Astuce : Sélectionnez vos fichiers dans l'ordre. Appuyez sur la page A puis B pour les échanger !",
    noPagesYet: "Aucune page ajoutée. Sélectionnez vos fichiers ci-dessus !",
    publishCta: "🚀 Publier",
    footerPromo: "Découvrez les meilleures histoires créées pour",
    downloadApp: "Télécharger l'appli"
  },
  sw: {
    selectLang: "Lugha:",
    signIn: "Ingia",
    register: "Jisajili",
    following: "Unaofuata",
    followers: "Wafuasi",
    likes: "Zilizopendwa",
    uploadComic: "+ Pakia Katuni",
    dashboard: "Dashibodi",
    appearance: "Muonekano",
    home: "Nyumbani",
    trendingComics: "Katuni Zinazovuma",
    trendingWebtoon: "Webtoon Zinazovuma",
    trendingRomance: "Mapenzi Yanayovuma",
    novels: "Riwaya",
    recentUpdated: "Zilizosasishwa Hivi Punde",
    browseAll: "Vinjari Zote",
    pillSpotlight: "Maalum",
    pillStories: "Hadithi",
    pillComics: "Katuni",
    pillNovels: "Riwaya",
    pillRomance: "Mapenzi",
    newComicsTitle: "Katuni Mpya",
    subHeadline: "Jukwaa #1 la kuchapisha hadithi na kupata pesa barani Afrika.",
    postCta: "🚀 Chapisha",
    payoutTitle: "1. Njia za Malipo",
    payoutSub: "Chagua nchi yako kwanza kupakia mitandao ya simu na benki.",
    selectCountry: "Chagua Nchi",
    chooseCountry: "Chagua nchi yako...",
    selectProvider: "Benki / Mtandao wa Simu",
    chooseProviderFirst: "Chagua nchi kwanza hapo juu...",
    accountLabel: "Namba ya Akaunti / Simu (Tarakimu 10-16)",
    verifyContinue: "Thibitisha na Uendelee",
    connectProfileTitle: "2. Unganisha Wasifu",
    connectProfileSub: "Linda maelezo yako ili kuwezesha malipo yako.",
    continueGoogle: "Endelea na Google",
    continueApple: "Endelea na Apple",
    studioTitle: "🎨 Studio ya Waunaji ya ACN",
    studioSub: "Pakia mlolongo wa sura yako na upange kurasa.",
    chapterNameLabel: "Jina la Katuni / Sura",
    dropzoneMain: "Gusa hapa kuchagua kurasa za katuni",
    dropzoneSub: "Inasaidia PNG, JPG",
    uploadInstructions: "💡 Kidokezo: Chagua faili kwa mpangilio. Gusa ukurasa A kisha B kubadilisha nafasi!",
    noPagesYet: "Hakuna kurasa zilizoongezwa bado!",
    publishCta: "🚀 Chapisha Sura",
    footerPromo: "Pata hadithi mpya zilizotengenezwa maalum kwa ajili ya",
    downloadApp: "Pakua Programu"
  },
  yo: {
    selectLang: "Ede:",
    signIn: "Wole",
    register: "Forukọsilẹ",
    following: "Awọn ti n tẹle",
    followers: "Awọn tẹle e",
    likes: "Awọn fẹran",
    uploadComic: "+ Gbe Awọn Aworanjade",
    dashboard: "Dasibodu",
    appearance: "Irisi Oju-iwe",
    home: "Ile",
    trendingComics: "Awọn Aworanjade Tobi",
    trendingWebtoon: "Webtoon ti o gba",
    trendingRomance: "Ifẹ ti o gba",
    novels: "Awọn iwe",
    recentUpdated: "Awọn imudojuiwọn tuntun",
    browseAll: "Wo Gbogbo Rẹ",
    pillSpotlight: "Pataki",
    pillStories: "Awọn Itan",
    pillComics: "Aworanjade",
    pillNovels: "Awọn iwe",
    pillRomance: "Ifẹ",
    newComicsTitle: "Awọn Aworanjade Tuntun",
    subHeadline: "Pẹpẹ akọkọ lati gbe awọn itanjadejade jade ati jo'gun owo ni Afika.",
    postCta: "🚀 Tẹjade",
    payoutTitle: "1. Awọn ọna Isanwo",
    payoutSub: "Yan orilẹ-ede rẹ lati mu awọn banki agbegbe wa.",
    selectCountry: "Yan Orilẹ-ede",
    chooseCountry: "Yan orilẹ-ede rẹ...",
    selectProvider: "Banki / Nẹtiwọọki",
    chooseProviderFirst: "Yan orilẹ-ede ni oke ni akọkọ...",
    accountLabel: "Nọmba Akaunti / Foonu (Awọn nọmba 10-16)",
    verifyContinue: "Daju ki o tẹsiwaju",
    connectProfileTitle: "2. So Profaili pọ",
    connectProfileSub: "Aabo awọn alaye rẹ lati bẹrẹ gbigba owo.",
    continueGoogle: "Tẹsiwaju pẹlu Google",
    continueApple: "Tẹsiwaju pẹlu Apple",
    studioTitle: "🎨 Ile-iṣẹ ACN Studio",
    studioSub: "Gbe awọn oju-iwe ori rẹ soke ki o ṣeto wọn.",
    chapterNameLabel: "Akọle Iwe / Ori",
    dropzoneMain: "Fọwọkan nibi lati yan awọn oju-iwe rẹ",
    dropzoneSub: "Ṣe atilẹyin PNG, JPG",
    uploadInstructions: "💡 Imọran: Yan awọn faili rẹ ni tẹlentẹle. Fọwọkan oju-iwe A lẹhinna B lati yipada!",
    noPagesYet: "Ko si oju-iwe ti a fi kun sibẹ!",
    publishCta: "🚀 Tẹjade",
    footerPromo: "Gba awọn itan tuntun ti a ṣe fun",
    downloadApp: "Gba App silẹ"
  },
  zu: {
    selectLang: "Ulimi:",
    signIn: "Ngena",
    register: "Bhalisa",
    following: "Olandelayo",
    followers: "Abalandeli",
    likes: "Okuthandwayo",
    uploadComic: "+ Layisha Ikhathuni",
    dashboard: "Ideshibhodi",
    appearance: "Ukubukeka",
    home: "Ikhaya",
    trendingComics: "Amakhathuni Edumile",
    trendingWebtoon: "I-Webtoon Edumile",
    trendingRomance: "Ezothando Ezidumile",
    novels: "Amanoveli",
    recentUpdated: "Okusha",
    browseAll: "Buka Konke",
    pillSpotlight: "Okukhethekile",
    pillStories: "Izindaba",
    pillComics: "Amakhathuni",
    pillNovels: "Amanoveli",
    pillRomance: "Ezothando",
    newComicsTitle: "Amakhathuni Amasha",
    subHeadline: "Inkundla yokuqala yokushicilela izindaba nokuthola imali e-Afrika.",
    postCta: "🚀 Shicilela",
    payoutTitle: "1. Izindlela Zokukhokha",
    payoutSub: "Khetha izwe lakho kuqala ukuze ufake amabhangeakho.",
    selectCountry: "Khetha Izwe",
    chooseCountry: "Khetha izwe lakho...",
    selectProvider: "Ibhange / Inethiwekhi",
    chooseProviderFirst: "Khetha izwe ngenhla kuqala...",
    accountLabel: "Inombolo Ye-akhawunti (Amadijithi angu-10-16)",
    verifyContinue: "Qinisekisa Futhi Uqhubeke",
    connectProfileTitle: "2. Xhumanisa Iphrofayela",
    connectProfileSub: "Vikela imininingwane yakho ukuze uqale ukuthola imali.",
    continueGoogle: "Qhubeka no-Google",
    continueApple: "Qhubeka no-Apple",
    studioTitle: "🎨 Isitudiyo Sezihleli Sika-ACN",
    studioSub: "Layisha izahluko zakho bese uhlela amakhasi.",
    chapterNameLabel: "Isihloko Sezincwadi / Isahluko",
    dropzoneMain: "Thinta lapha ukukhetha amakhasi akho",
    dropzoneSub: "Sekela i-PNG, JPG",
    uploadInstructions: "💡 Iseluleko: Khetha amafayela akho ngokulandelana. Thinta ikhasi A bese u-B ukushintshana!",
    noPagesYet: "Awukho amakhasi angeziwe okwamanje!",
    publishCta: "🚀 Shicilela",
    footerPromo: "Thola izindaba ezintsha ezenzelwe",
    downloadApp: "Landa Uhlelo"
  },
  ha: {
    selectLang: "Harshe:",
    signIn: "Shiga",
    register: "Yi Rijista",
    following: "Suna Bi",
    followers: "Mabiya",
    likes: "Abubuwan So",
    uploadComic: "+ Dora Barkwanci",
    dashboard: "Allon Gudanarwa",
    appearance: "Yanayin Fuskantar",
    home: "Gida",
    trendingComics: "Barkwanci Masu Tasiri",
    trendingWebtoon: "Webtoon Mai Tasiri",
    trendingRomance: "Soyayya Mai Tasiri",
    novels: "Littattafai",
    recentUpdated: "Sabbin Abubuwa",
    browseAll: "Duba Duk",
    pillSpotlight: "Musamman",
    pillStories: "Labarai",
    pillComics: "Barkwanci",
    pillNovels: "Littattafai",
    pillRomance: "Soyayya",
    newComicsTitle: "Sabbin Barkwanci",
    subHeadline: "Cibiyar farko ta wallafa labarai da samun kudi a Afirka.",
    postCta: "🚀 Wallafa",
    payoutTitle: "1. Hanyoyin Biya",
    payoutSub: "Zaɓi ƙasarku tukuna don loda bankunan ku.",
    selectCountry: "Zaɓi Ƙasa",
    chooseCountry: "Zaɓi ƙasarka...",
    selectProvider: "Banki / Kamfanin Sadarwa",
    chooseProviderFirst: "Zaɓi ƙasa a sama tukuna...",
    accountLabel: "Lambar Asusu / Wayar hannu (Lambar 10-16)",
    verifyContinue: "Tabbatar Kuma Ci Gaba",
    connectProfileTitle: "2. Haɗa Bayanan Martaba",
    connectProfileSub: "Tsare bayananka don kunna samun kudin shiga.",
    continueGoogle: "Ci gaba da Google",
    continueApple: "Ci gaba da Apple",
    studioTitle: "🎨 Sashen Masu Fasaha na ACN",
    studioSub: "Loda jerin babi naka kuma ka tsara shafuka.",
    chapterNameLabel: "Sunan Littafi / Babi",
    dropzoneMain: "Taɓa nan don zaɓar shafukan ku",
    dropzoneSub: "Yana goyan bayan PNG, JPG",
    uploadInstructions: "💡 Shawara: Zaɓi fayilolinku a jere. Taɓa shafi A sannan B domin musanya su nan take!",
    noPagesYet: "Babu shafin da aka ƙara tukuna!",
    publishCta: "🚀 Wallafa",
    footerPromo: "Samu sabbin labaran da aka yi domin",
    downloadApp: "Sauke Manhajar"
  }
};

function setLanguage(langCode, evt) {
  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  if (evt && evt.target) {
    evt.target.classList.add('active');
  }

  const dict = translations[langCode] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = langCode === 'fr' ? 'Rechercher des BDs...' :
                              langCode === 'sw' ? 'Tafuta katuni uzipendazo...' :
                              langCode === 'yo' ? 'Wa awọn aworanjade ayanfẹ rẹ...' :
                              langCode === 'zu' ? 'Sesha amakhathuni...' :
                              langCode === 'ha' ? 'Nemo sanannun littattafan barkwanci...' :
                              'Search favorite comics...';
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  
  const isLight = body.classList.contains('light-mode');
  const themeText = document.getElementById('theme-mode-text');
  if (themeText) {
    themeText.textContent = isLight ? 'Light Mode' : 'Dark Mode';
  }
}

function updateProviders() {
  const countrySelect = document.getElementById('country-select').value;
  const providerSelect = document.getElementById('provider-select');
  
  providerSelect.innerHTML = '<option value="" disabled selected>Choose your bank/network...</option>';
  providerSelect.disabled = false;

  if (providersData[countrySelect]) {
    providersData[countrySelect].forEach(provider => {
      const opt = document.createElement('option');
      opt.value = provider;
      opt.textContent = provider;
      providerSelect.appendChild(opt);
    });
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

function goToJoinModal() {
  const country = document.getElementById('country-select').value;
  const provider = document.getElementById('provider-select').value;
  const account = document.getElementById('payout-account').value;
  
  if(!country || !provider || !account) {
    alert('Please complete all payout fields.');
    return;
  }
  
  if(account.length < 10) {
    alert('Account number or ID must be at least 10 characters.');
    return;
  }

  closeModal('setup-modal');
  openModal('join-modal');
}

function triggerAuthFlow(providerName) {
  closeModal('join-modal');
  
  const overlay = document.getElementById('loading-overlay');
  const spinnerBox = document.getElementById('spinner-container');
  const checkMarkBox = document.getElementById('check-container');
  const title = document.getElementById('loading-title');
  const subtitle = document.getElementById('loading-subtitle');

  if (spinnerBox) spinnerBox.style.display = 'block';
  if (checkMarkBox) checkMarkBox.style.display = 'none';
  if (title) title.textContent = `Connecting with ${providerName}...`;
  if (subtitle) subtitle.textContent = 'Securing your ACN Creator Account & Payout Gateway';
  
  if (overlay) overlay.classList.add('active');
  
  setTimeout(() => {
    if (spinnerBox) spinnerBox.style.display = 'none';
    if (checkMarkBox) checkMarkBox.style.display = 'block';
    if (title) title.textContent = 'Account Linked Successfully!';
    if (subtitle) subtitle.textContent = 'Monetization channel activated for weekly payouts.';
    
    setTimeout(() => {
      if (overlay) overlay.classList.remove('active');
    }, 1200);
  }, 1500);
}

function toggleSidebar() {
  const drawer = document.getElementById('side-drawer');
  const overlay = document.getElementById('sidebar-overlay');
  if (drawer) drawer.classList.toggle('active');
  if (overlay) overlay.classList.toggle('active');
}

function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const tempUrl = URL.createObjectURL(file);
    const avatarContainer = document.getElementById('user-avatar-display');
    if (avatarContainer) {
      avatarContainer.innerHTML = `<img src="${tempUrl}" alt="Profile Avatar">`;
    }
  }
  event.target.value = '';
}

function openComicUploadStudio() {
  const modal = document.getElementById('comic-upload-modal');
  if (modal) modal.classList.add('active');
}

function closeComicUploadStudio() {
  const modal = document.getElementById('comic-upload-modal');
  if (modal) modal.classList.remove('active');
}

function handleComicPagesSelected(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  Array.from(files).forEach(file => {
    const tempUrl = URL.createObjectURL(file);
    uploadedComicPages.push({
      id: Date.now() + Math.random(),
      name: file.name,
      url: tempUrl
    });
  });

  renderComicPagesGrid();
  event.target.value = '';
}

function renderComicPagesGrid() {
  const gridContainer = document.getElementById('comic-pages-preview-list');
  if (!gridContainer) return;
  
  if (uploadedComicPages.length === 0) {
    gridContainer.innerHTML = `<div class="empty-pages-placeholder" data-i18n="noPagesYet">No pages added yet. Select files above!</div>`;
    selectedSwapIndex = null;
    return;
  }

  let html = '';
  uploadedComicPages.forEach((page, index) => {
    const isSelected = selectedSwapIndex === index ? 'selected-for-swap' : '';
    html += `
      <div class="comic-page-thumb-card ${isSelected}" onclick="handleThumbClick(${index})">
        <span class="page-sequence-badge">#${index + 1}</span>
        <img src="${page.url}" alt="Comic Page ${index + 1}">
        <button class="thumb-delete-btn" onclick="event.stopPropagation(); removeComicPage(${index})" title="Remove">&times;</button>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
}

function handleThumbClick(index) {
  if (selectedSwapIndex === null) {
    selectedSwapIndex = index;
    renderComicPagesGrid();
  } else if (selectedSwapIndex === index) {
    selectedSwapIndex = null;
    renderComicPagesGrid();
  } else {
        const temp = uploadedComicPages[selectedSwapIndex];
    uploadedComicPages[selectedSwapIndex] = uploadedComicPages[index];
    uploadedComicPages[index] = temp;
    selectedSwapIndex = null;
    renderComicPagesGrid();
  }
}

function removeComicPage(index) {
  uploadedComicPages.splice(index, 1);
  selectedSwapIndex = null;
  renderComicPagesGrid();
}

function publishComicPages() {
  const titleInput = document.getElementById('comic-title-input');
  const title = titleInput ? titleInput.value.trim() : '';
  if (!title) {
    alert('Please enter a comic title or chapter name.');
    return;
  }
  if (uploadedComicPages.length === 0) {
    alert('Please select at least one comic page to publish.');
    return;
  }

  closeComicUploadStudio();
  alert(`🚀 Successfully published "${title}" with ${uploadedComicPages.length} pages to ACN! Your post-to-earn cash revenue is now active.`);
  uploadedComicPages = [];
  selectedSwapIndex = null;
  renderComicPagesGrid();
  if (titleInput) titleInput.value = '';
}

function installPWA() {
  alert('ACN Creator Network is ready! Add this page to your home screen via your browser menu.');
}
