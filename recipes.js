const recipes = [

// ── EXISTING BREAKFAST (5) ──

{
    name: "🥚 חביתה לילדים",
    category: "breakfast",
    image: "",
    ingredients: ["ביצים"],
    type: "מלוח",
    time: 5,
    method: "גז",
    description: "חביתה קלאסית.",
    steps: ["שוברים 2 ביצים", "טורפים היטב", "מטגנים 3 דקות", "מגישים"]
},
{
    name: "🧀 טוסט גבינה",
    category: "breakfast",
    image: "",
    ingredients: ["גבינה", "לחם"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "טוסט פשוט וטעים.",
    steps: ["שמים גבינה בין שתי פרוסות", "קולים", "מגישים חם"]
},
{
    name: "🍌 פנקייק בננה",
    category: "breakfast",
    image: "",
    ingredients: ["בננה", "ביצים"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "פנקייק בריא.",
    steps: ["מועכים בננה", "מערבבים עם ביצה", "מטגנים"]
},
{
    name: "🧀 חביתה עם גבינה",
    category: "breakfast",
    image: "",
    ingredients: ["ביצים", "גבינה"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "חביתה עשירה.",
    steps: ["טורפים ביצים", "מוסיפים גבינה", "מטגנים"]
},
{
    name: "🍞 לחם קלוי",
    category: "breakfast",
    image: "",
    ingredients: ["לחם"],
    type: "מלוח",
    time: 5,
    method: "גז",
    description: "טוסט פשוט.",
    steps: ["קולים את הלחם", "מגישים"]
},

// ── EXISTING MEAL (4) ──

{
    name: "🍝 פסטה ברוטב פשוט",
    category: "meal",
    image: "",
    ingredients: ["פסטה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה בסיסית.",
    steps: ["מרתיחים מים", "מבשלים פסטה", "מסננים", "מגישים"]
},
{
    name: "🍝 פסטה עם גבינה",
    category: "meal",
    image: "",
    ingredients: ["פסטה", "גבינה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה לילדים.",
    steps: ["מבשלים פסטה", "מוסיפים גבינה", "מערבבים"]
},
{
    name: "🥔 תפוח אדמה אפוי",
    category: "meal",
    image: "",
    ingredients: ["תפוח אדמה"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "תפוח אדמה רך וטעים.",
    steps: ["מחממים תנור", "אופים", "מגישים"]
},
{
    name: "🍗 עוף בתנור",
    category: "meal",
    image: "",
    ingredients: ["עוף"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "עוף פשוט וטעים.",
    steps: ["מתבלים", "אופים", "מגישים"]
},

// ── EXISTING SNACK (9) ──

{
    name: "🍞 טוסט שוקולד",
    category: "snack",
    image: "",
    ingredients: ["לחם", "שוקולד"],
    type: "מתוק",
    time: 5,
    method: "גז",
    description: "טוסט מתוק.",
    steps: ["שמים שוקולד בלחם", "קולים", "מגישים"]
},
{
    name: "🍌 בננה חמה",
    category: "snack",
    image: "",
    ingredients: ["בננה"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "בננה חמימה.",
    steps: ["פורסים בננה", "מחממים דקה", "מגישים"]
},
{
    name: "🥚 ביצה קשה",
    category: "snack",
    image: "",
    ingredients: ["ביצים"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "נשנוש בריא.",
    steps: ["מרתיחים מים", "מבשלים ביצה", "מקלפים"]
},
{
    name: "🧀 גבינה חמה",
    category: "snack",
    image: "",
    ingredients: ["גבינה"],
    type: "מלוח",
    time: 5,
    method: "מיקרוגל",
    description: "גבינה נמסה.",
    steps: ["שמים גבינה בקערה", "מחממים", "מגישים"]
},
{
    name: "🍌 שייק בננה",
    category: "snack",
    image: "",
    ingredients: ["בננה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "שייק מהיר.",
    steps: ["מועכים בננה", "מערבבים", "שותים"]
},
{
    name: "🍎 תפוח בדבש",
    category: "snack",
    image: "",
    ingredients: ["תפוח", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש מתוק.",
    steps: ["חותכים תפוח", "מזלפים דבש", "מגישים"]
},
{
    name: "🥒 סלט מלפפון",
    category: "snack",
    image: "",
    ingredients: ["מלפפון"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "סלט מרענן.",
    steps: ["חותכים מלפפון", "מתבלים", "מגישים"]
},
{
    name: "🍅 סלט עגבניות",
    category: "snack",
    image: "",
    ingredients: ["עגבנייה"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "סלט קלאסי.",
    steps: ["חותכים עגבניות", "מתבלים", "מגישים"]
},
{
    name: "🌽 תירס חם",
    category: "snack",
    image: "",
    ingredients: ["תירס"],
    type: "מלוח",
    time: 5,
    method: "מיקרוגל",
    description: "תירס מהיר.",
    steps: ["מחממים תירס", "מגישים"]
},

// ── EXISTING DESSERT (4) ──

{
    name: "🍫 בננה עם שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["בננה", "שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח זריז.",
    steps: ["פורסים בננה", "מוסיפים שוקולד", "מגישים"]
},
{
    name: "🍫 שוקולד מומס",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "שוקולד חם.",
    steps: ["שמים בקערה", "מחממים", "מערבבים"]
},
{
    name: "🍫 כדורי שוקולד מהירים",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד"],
    type: "מתוק",
    time: 10,
    method: "בלי בישול",
    description: "קינוח קל.",
    steps: ["ממיסים שוקולד", "יוצרים כדורים", "מקררים"]
},
{
    name: "🥛 שוקו חם",
    category: "dessert",
    image: "",
    ingredients: ["חלב", "שוקולד"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "שוקו מפנק.",
    steps: ["מחממים חלב", "מוסיפים שוקולד", "מערבבים"]
},

// ── NEW BREAKFAST (15) ──

{
    name: "🥚 ביצה מקושקשת",
    category: "breakfast",
    image: "",
    ingredients: ["ביצים", "חלב"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "ביצה רכה ואוורירית.",
    steps: ["טורפים 2 ביצים עם מעט חלב", "מחממים מחבת", "מוסיפים ומערבבים תוך כדי חימום", "מגישים"]
},
{
    name: "🍞 פרנץ' טוסט",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "ביצים", "חלב"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "לחם ספוג בביצה וחלב.",
    steps: ["טורפים ביצה עם חלב בקערה", "מטבילים פרוסת לחם", "מטגנים 2 דקות מכל צד", "מגישים"]
},
{
    name: "🍳 שקשוקה",
    category: "breakfast",
    image: "",
    ingredients: ["ביצים", "עגבנייה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "ביצים ברוטב עגבניות.",
    steps: ["חותכים עגבנייה ומחממים במחבת 5 דקות", "שוברים ביצים לתוך הרוטב", "מכסים ומבשלים 8 דקות", "מגישים"]
},
{
    name: "🌽 חביתת תירס",
    category: "breakfast",
    image: "",
    ingredients: ["ביצים", "תירס"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "חביתה עם תירס מתוק.",
    steps: ["טורפים ביצים", "מוסיפים תירס ומערבבים", "מטגנים 4 דקות", "מגישים"]
},
{
    name: "🍅 טוסט גבינה ועגבנייה",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "גבינה", "עגבנייה"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "טוסט עשיר ומשביע.",
    steps: ["קולים לחם", "מניחים גבינה ועגבנייה פרוסה", "מחממים עד שהגבינה נמסה", "מגישים"]
},
{
    name: "🥛 חלב חם עם דבש",
    category: "breakfast",
    image: "",
    ingredients: ["חלב", "דבש"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "כוס חמה ומרגיעה.",
    steps: ["שמים חלב בכוס", "מחממים 90 שניות", "מוסיפים דבש ומערבבים", "שותים"]
},
{
    name: "🥪 כריך גבינה ומלפפון",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "גבינה", "מלפפון"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "כריך טרי ובריא.",
    steps: ["פורסים גבינה ומלפפון", "מניחים על פרוסת לחם", "סוגרים ומגישים"]
},
{
    name: "🍌 שייק בוקר",
    category: "breakfast",
    image: "",
    ingredients: ["בננה", "חלב", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "שייק אנרגטי לבוקר.",
    steps: ["מועכים בננה בכוס", "מוסיפים חלב ודבש", "מערבבים היטב", "שותים"]
},
{
    name: "🍳 ביצה מטוגנת על טוסט",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "ביצים"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "ארוחת בוקר קלאסית.",
    steps: ["קולים לחם", "מטגנים ביצה", "מניחים ביצה על הטוסט", "מגישים"]
},
{
    name: "🫓 פיתה עם קוטג'",
    category: "breakfast",
    image: "",
    ingredients: ["פיתה", "קוטג'"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "ארוחת בוקר קלה וטעימה.",
    steps: ["פותחים פיתה", "ממלאים קוטג'", "מגישים"]
},
{
    name: "🍫 טוסט עם ממרח שוקולד",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "ממרח שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "ארוחת בוקר מתוקה.",
    steps: ["קולים לחם", "מורחים ממרח שוקולד", "מגישים"]
},
{
    name: "🥣 יוגורט עם דבש",
    category: "breakfast",
    image: "",
    ingredients: ["יוגורט", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "ארוחת בוקר בריאה.",
    steps: ["שמים יוגורט בקערה", "מזלפים דבש", "מגישים"]
},
{
    name: "🥞 פנקייק מקמח",
    category: "breakfast",
    image: "",
    ingredients: ["קמח", "ביצים", "חלב"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "פנקייק קלאסי ורך.",
    steps: ["מערבבים קמח ביצים וחלב לבלילה", "מחממים מחבת", "יוצקים ומטגנים 2 דקות מכל צד", "מגישים"]
},
{
    name: "🥑 טוסט אבוקדו",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "אבוקדו"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "טוסט טרנדי וטעים.",
    steps: ["קולים לחם", "מועכים אבוקדו", "מורחים על הטוסט", "מגישים"]
},
{
    name: "🍓 לחם עם ריבה",
    category: "breakfast",
    image: "",
    ingredients: ["לחם", "ריבה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "ארוחת בוקר מתוקה.",
    steps: ["לוקחים פרוסת לחם", "מורחים ריבה", "מגישים"]
},

// ── NEW MEAL (15) ──

{
    name: "🍗 עוף עם תפוח אדמה",
    category: "meal",
    image: "",
    ingredients: ["עוף", "תפוח אדמה"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "ארוחה שלמה ומשביעה.",
    steps: ["חותכים עוף ותפוח אדמה לחתיכות", "מתבלים ומניחים בתבנית", "אופים ב-200 מעלות 30 דקות", "מגישים"]
},
{
    name: "🍗 עוף מטוגן",
    category: "meal",
    image: "",
    ingredients: ["עוף", "ביצים"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "עוף פריך וטעים.",
    steps: ["טורפים ביצה בקערה", "מטבילים חתיכות עוף", "מטגנים 8 דקות מכל צד", "מגישים"]
},
{
    name: "🍝 פסטה עם עגבנייה",
    category: "meal",
    image: "",
    ingredients: ["פסטה", "עגבנייה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה ברוטב טרי.",
    steps: ["מבשלים פסטה ומסננים", "מחממים עגבנייה חתוכה במחבת", "מערבבים יחד", "מגישים"]
},
{
    name: "🍗 עוף עם עגבנייה",
    category: "meal",
    image: "",
    ingredients: ["עוף", "עגבנייה"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "עוף ברוטב עגבניות.",
    steps: ["חותכים עוף ועגבנייה", "מניחים בתבנית", "אופים 30 דקות", "מגישים"]
},
{
    name: "🥔 צ'יפס ביתי",
    category: "meal",
    image: "",
    ingredients: ["תפוח אדמה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "צ'יפס פריך ביתי.",
    steps: ["חותכים לפרוסות דקות", "מטגנים 15 דקות", "מתבלים ומגישים"]
},
{
    name: "🍗 עוף עם תירס",
    category: "meal",
    image: "",
    ingredients: ["עוף", "תירס"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "עוף עסיסי עם תירס.",
    steps: ["מניחים עוף בתבנית", "מוסיפים תירס מסביב", "אופים 30 דקות", "מגישים"]
},
{
    name: "🍚 אורז לבן",
    category: "meal",
    image: "",
    ingredients: ["אורז"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "אורז פשוט ומשביע.",
    steps: ["שוטפים אורז", "מרתיחים עם מים", "מבשלים 15 דקות על אש קטנה", "מגישים"]
},
{
    name: "🍗 קציצות עוף",
    category: "meal",
    image: "",
    ingredients: ["עוף", "לחם", "ביצים"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "קציצות עסיסיות לילדים.",
    steps: ["מרסקים עוף ומערבבים עם פירורי לחם וביצה", "יוצרים קציצות קטנות", "מטגנים 4 דקות מכל צד", "מגישים"]
},
{
    name: "🍝 פסטה עם טונה",
    category: "meal",
    image: "",
    ingredients: ["פסטה", "טונה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה מהירה וטעימה.",
    steps: ["מבשלים פסטה ומסננים", "מערבבים עם טונה", "מחממים דקה", "מגישים"]
},
{
    name: "🍚 אורז עם עוף",
    category: "meal",
    image: "",
    ingredients: ["אורז", "עוף"],
    type: "מלוח",
    time: 30,
    method: "גז",
    description: "ארוחה שלמה בסיר.",
    steps: ["מטגנים עוף קצוץ", "מוסיפים אורז ומים", "מבשלים 20 דקות על אש קטנה", "מגישים"]
},
{
    name: "🍝 סלט פסטה",
    category: "meal",
    image: "",
    ingredients: ["פסטה", "עגבנייה", "מלפפון"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "סלט פסטה קריר.",
    steps: ["מבשלים פסטה ומצננים", "חותכים עגבנייה ומלפפון", "מערבבים הכל יחד", "מגישים"]
},
{
    name: "🫓 פיתה עם טונה",
    category: "meal",
    image: "",
    ingredients: ["פיתה", "טונה"],
    type: "מלוח",
    time: 10,
    method: "בלי בישול",
    description: "כריך מהיר ומזין.",
    steps: ["פותחים פיתה", "ממלאים טונה", "מגישים"]
},
{
    name: "🥔 תפוח אדמה עם גבינה",
    category: "meal",
    image: "",
    ingredients: ["תפוח אדמה", "גבינה"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "תפוח אדמה עם גבינה נמסה.",
    steps: ["אופים תפוח אדמה 25 דקות", "חותכים ומניחים גבינה מעל", "מחזירים לתנור עד שנמס", "מגישים"]
},
{
    name: "🍗 עוף עם גזר",
    category: "meal",
    image: "",
    ingredients: ["עוף", "גזר"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "עוף עם ירקות.",
    steps: ["חותכים עוף וגזר לחתיכות", "מניחים בתבנית ומתבלים", "אופים 30 דקות", "מגישים"]
},
{
    name: "🍚 אורז עם ירקות",
    category: "meal",
    image: "",
    ingredients: ["אורז", "גזר", "פלפל"],
    type: "מלוח",
    time: 30,
    method: "גז",
    description: "אורז צבעוני עם ירקות.",
    steps: ["מטגנים גזר ופלפל קצוצים", "מוסיפים אורז ומים", "מבשלים 20 דקות", "מגישים"]
},

// ── NEW SNACK (15) ──

{
    name: "🍌 בננה עם יוגורט",
    category: "snack",
    image: "",
    ingredients: ["בננה", "יוגורט"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש בריא וקרמי.",
    steps: ["פורסים בננה לקערה", "מוסיפים יוגורט", "מגישים"]
},
{
    name: "🥕 גזר עם קוטג'",
    category: "snack",
    image: "",
    ingredients: ["גזר", "קוטג'"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש פריך עם טבילה.",
    steps: ["חותכים גזר לאצבעות", "שמים קוטג' בצלחת לטבילה", "מגישים"]
},
{
    name: "🫓 פיתה עם ממרח שוקולד",
    category: "snack",
    image: "",
    ingredients: ["פיתה", "ממרח שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש מתוק וטעים.",
    steps: ["חותכים פיתה לחצי", "מורחים ממרח שוקולד", "מגישים"]
},
{
    name: "🥑 טוסט אבוקדו ועגבנייה",
    category: "snack",
    image: "",
    ingredients: ["לחם", "אבוקדו", "עגבנייה"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש טרי ומזין.",
    steps: ["קולים לחם", "מועכים אבוקדו ומורחים", "מוסיפים עגבנייה פרוסה", "מגישים"]
},
{
    name: "🥕 גזר עם אבוקדו",
    category: "snack",
    image: "",
    ingredients: ["גזר", "אבוקדו"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש בריא וצבעוני.",
    steps: ["חותכים גזר לאצבעות", "מועכים אבוקדו לדיפ", "מגישים יחד"]
},
{
    name: "🫑 פלפל עם קוטג'",
    category: "snack",
    image: "",
    ingredients: ["פלפל", "קוטג'"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש צבעוני ובריא.",
    steps: ["חותכים פלפל לפסים", "שמים קוטג' לטבילה", "מגישים"]
},
{
    name: "🥣 יוגורט עם ריבה",
    category: "snack",
    image: "",
    ingredients: ["יוגורט", "ריבה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "יוגורט מתוק וטעים.",
    steps: ["שמים יוגורט בכוס", "מוסיפים ריבה מעל", "מגישים"]
},
{
    name: "🐟 כריך טונה",
    category: "snack",
    image: "",
    ingredients: ["לחם", "טונה"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "כריך מהיר ומזין.",
    steps: ["מניחים טונה על לחם", "סוגרים ומגישים"]
},
{
    name: "🥕 גזר עם דבש",
    category: "snack",
    image: "",
    ingredients: ["גזר", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש מתוק ובריא.",
    steps: ["חותכים גזר לפרוסות", "מזלפים דבש", "מגישים"]
},
{
    name: "🫑 פלפל עם אבוקדו",
    category: "snack",
    image: "",
    ingredients: ["פלפל", "אבוקדו"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש טרי.",
    steps: ["חותכים פלפל לפסים", "מועכים אבוקדו", "מגישים יחד"]
},
{
    name: "🫓 פיתה עם ריבה",
    category: "snack",
    image: "",
    ingredients: ["פיתה", "ריבה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "פיתה מתוקה.",
    steps: ["חותכים פיתה", "מורחים ריבה", "מגישים"]
},
{
    name: "🥕 גזר עם גבינה",
    category: "snack",
    image: "",
    ingredients: ["גזר", "גבינה"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש קלאסי.",
    steps: ["חותכים גזר ופורסים גבינה", "מגישים יחד"]
},
{
    name: "🥑 מלפפון עם אבוקדו",
    category: "snack",
    image: "",
    ingredients: ["מלפפון", "אבוקדו"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש ירוק ורענן.",
    steps: ["פורסים מלפפון", "מועכים אבוקדו לצד", "מגישים יחד"]
},
{
    name: "🍫 לחם עם שוקולד ובננה",
    category: "snack",
    image: "",
    ingredients: ["לחם", "שוקולד", "בננה"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "טוסט מתוק עם בננה.",
    steps: ["קולים לחם", "מניחים שוקולד ובננה פרוסה", "מחממים עד שהשוקולד נמס", "מגישים"]
},
{
    name: "🍌 יוגורט עם בננה ודבש",
    category: "snack",
    image: "",
    ingredients: ["יוגורט", "בננה", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קערת יוגורט טעימה.",
    steps: ["שמים יוגורט בקערה", "מוסיפים בננה פרוסה", "מזלפים דבש ומגישים"]
},

// ── NEW DESSERT (15) ──

{
    name: "🍫 פודינג שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד", "חלב"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "פודינג שוקולד עשיר.",
    steps: ["מחממים חלב על אש קטנה", "ממיסים שוקולד בחלב תוך ערבוב", "מבשלים עד שמסמיך", "שופכים לכוסות ומקררים"]
},
{
    name: "🍎 תפוח עם ממרח שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["תפוח", "ממרח שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח פריך ומתוק.",
    steps: ["חותכים תפוח לפרוסות", "שמים ממרח שוקולד לטבילה", "מגישים"]
},
{
    name: "🍪 עוגיות בננה",
    category: "dessert",
    image: "",
    ingredients: ["בננה", "ביצים"],
    type: "מתוק",
    time: 20,
    method: "תנור",
    description: "עוגיות רכות בשני מרכיבים.",
    steps: ["מועכים בננה עם מזלג", "מוסיפים ביצה ומערבבים", "יוצרים עיגולים על תבנית", "אופים 15 דקות ב-180 מעלות"]
},
{
    name: "🎂 עוגת שוקולד פשוטה",
    category: "dessert",
    image: "",
    ingredients: ["קמח", "ביצים", "שוקולד", "חלב"],
    type: "מתוק",
    time: 30,
    method: "תנור",
    description: "עוגת שוקולד לילדים.",
    steps: ["ממיסים שוקולד עם חלב", "מוסיפים ביצים וקמח ומערבבים", "שופכים לתבנית", "אופים 25 דקות ב-180 מעלות"]
},
{
    name: "🍯 שוקולד עם דבש",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח מתוק וזריז.",
    steps: ["שוברים שוקולד לחתיכות", "מזלפים דבש מעל", "מגישים"]
},
{
    name: "🍌 בננה בתנור עם דבש",
    category: "dessert",
    image: "",
    ingredients: ["בננה", "דבש"],
    type: "מתוק",
    time: 10,
    method: "תנור",
    description: "בננה חמה ומקורמלת.",
    steps: ["מניחים בננה בקליפה על תבנית", "אופים 10 דקות", "פותחים ומזלפים דבש", "מגישים חם"]
},
{
    name: "🧁 מאפין שוקולד מהיר",
    category: "dessert",
    image: "",
    ingredients: ["קמח", "שוקולד", "חלב", "ביצים"],
    type: "מתוק",
    time: 10,
    method: "מיקרוגל",
    description: "עוגה בכוס בדקות.",
    steps: ["ממיסים שוקולד עם חלב", "מוסיפים ביצה וקמח ומערבבים", "שופכים לכוס גדולה", "מחממים במיקרוגל 90 שניות"]
},
{
    name: "🍫 שייק שוקולד בננה",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד", "חלב", "בננה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "שייק מתוק ומרענן.",
    steps: ["מועכים בננה בכוס", "מוסיפים חלב ושוקולד מגורר", "מערבבים היטב", "שותים"]
},
{
    name: "🍎 תפוח אפוי בדבש",
    category: "dessert",
    image: "",
    ingredients: ["תפוח", "דבש"],
    type: "מתוק",
    time: 20,
    method: "תנור",
    description: "תפוח חם ומתוק.",
    steps: ["חותכים תפוח לחצי ומניחים בתבנית", "מזלפים דבש", "אופים 20 דקות", "מגישים חם"]
},
{
    name: "🥣 יוגורט עם שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["יוגורט", "שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח קל ומתוק.",
    steps: ["שמים יוגורט בכוס", "מגררים שוקולד מעל", "מגישים"]
},
{
    name: "🍪 עוגיות שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["קמח", "שוקולד", "ביצים"],
    type: "מתוק",
    time: 20,
    method: "תנור",
    description: "עוגיות שוקולד פשוטות.",
    steps: ["מועכים שוקולד עם ביצה", "מוסיפים קמח ומערבבים", "יוצרים כדורים על תבנית", "אופים 12 דקות ב-180 מעלות"]
},
{
    name: "🍌 בננה עם יוגורט ודבש",
    category: "dessert",
    image: "",
    ingredients: ["בננה", "יוגורט", "דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח קרמי ומתוק.",
    steps: ["פורסים בננה בקערה", "מוסיפים יוגורט", "מזלפים דבש ומגישים"]
},
{
    name: "🫓 פיתה עם ממרח שוקולד ובננה",
    category: "dessert",
    image: "",
    ingredients: ["פיתה", "ממרח שוקולד", "בננה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח מתוק בפיתה.",
    steps: ["חותכים פיתה לחצי", "מורחים ממרח שוקולד", "מוסיפים בננה פרוסה", "מגישים"]
},
{
    name: "🧁 מאפין בננה",
    category: "dessert",
    image: "",
    ingredients: ["קמח", "בננה", "ביצים"],
    type: "מתוק",
    time: 20,
    method: "תנור",
    description: "מאפין בננה רך.",
    steps: ["מועכים בננה", "מוסיפים ביצה וקמח ומערבבים", "יוצקים לתבניות מאפין", "אופים 15 דקות ב-180 מעלות"]
},
{
    name: "🍫 קרם שוקולד",
    category: "dessert",
    image: "",
    ingredients: ["שוקולד", "חלב", "ביצים"],
    type: "מתוק",
    time: 20,
    method: "גז",
    description: "קרם שוקולד עשיר.",
    steps: ["מחממים חלב ושוקולד תוך ערבוב", "מוסיפים ביצה טרופה", "מבשלים על אש קטנה עד שמסמיך", "שופכים לקערות ומקררים"]
}

];
