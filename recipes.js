const recipes = [

{
    name: "🥚 חביתה לילדים",
    ingredients: ["ביצים"],
    type: "מלוח",
    time: 5,
    method: "גז",
    description: "חביתה קלאסית.",
    steps: [
        "שוברים 2 ביצים",
        "טורפים היטב",
        "מטגנים 3 דקות",
        "מגישים"
    ]
},

{
    name: "🧀 טוסט גבינה",
    ingredients: ["גבינה","לחם"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "טוסט פשוט וטעים.",
    steps: [
        "שמים גבינה בין שתי פרוסות",
        "קולים",
        "מגישים חם"
    ]
},

{
    name: "🍌 פנקייק בננה",
    ingredients: ["בננה","ביצים"],
    type: "מתוק",
    time: 10,
    method: "גז",
    description: "פנקייק בריא.",
    steps: [
        "מועכים בננה",
        "מערבבים עם ביצה",
        "מטגנים"
    ]
},

{
    name: "🍫 בננה עם שוקולד",
    ingredients: ["בננה","שוקולד"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "קינוח זריז.",
    steps: [
        "פורסים בננה",
        "מוסיפים שוקולד",
        "מגישים"
    ]
},

{
    name: "🍝 פסטה ברוטב פשוט",
    ingredients: ["פסטה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה בסיסית.",
    steps: [
        "מרתיחים מים",
        "מבשלים פסטה",
        "מסננים",
        "מגישים"
    ]
},

{
    name: "🍞 טוסט שוקולד",
    ingredients: ["לחם","שוקולד"],
    type: "מתוק",
    time: 5,
    method: "גז",
    description: "טוסט מתוק.",
    steps: [
        "שמים שוקולד בלחם",
        "קולים",
        "מגישים"
    ]
},

{
    name: "🧀 חביתה עם גבינה",
    ingredients: ["ביצים","גבינה"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "חביתה עשירה.",
    steps: [
        "טורפים ביצים",
        "מוסיפים גבינה",
        "מטגנים"
    ]
},

{
    name: "🍌 בננה חמה",
    ingredients: ["בננה"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "בננה חמימה.",
    steps: [
        "פורסים בננה",
        "מחממים דקה",
        "מגישים"
    ]
},

{
    name: "🥚 ביצה קשה",
    ingredients: ["ביצים"],
    type: "מלוח",
    time: 10,
    method: "גז",
    description: "נשנוש בריא.",
    steps: [
        "מרתיחים מים",
        "מבשלים ביצה",
        "מקלפים"
    ]
},

{
    name: "🍫 שוקולד מומס",
    ingredients: ["שוקולד"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "שוקולד חם.",
    steps: [
        "שמים בקערה",
        "מחממים",
        "מערבבים"
    ]
},

{
    name: "🧀 גבינה חמה",
    ingredients: ["גבינה"],
    type: "מלוח",
    time: 5,
    method: "מיקרוגל",
    description: "גבינה נמסה.",
    steps: [
        "שמים גבינה בקערה",
        "מחממים",
        "מגישים"
    ]
},

{
    name: "🍞 לחם קלוי",
    ingredients: ["לחם"],
    type: "מלוח",
    time: 5,
    method: "גז",
    description: "טוסט פשוט.",
    steps: [
        "קולים את הלחם",
        "מגישים"
    ]
},

{
    name: "🍝 פסטה עם גבינה",
    ingredients: ["פסטה","גבינה"],
    type: "מלוח",
    time: 20,
    method: "גז",
    description: "פסטה לילדים.",
    steps: [
        "מבשלים פסטה",
        "מוסיפים גבינה",
        "מערבבים"
    ]
},

{
    name: "🍌 שייק בננה",
    ingredients: ["בננה"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "שייק מהיר.",
    steps: [
        "מועכים בננה",
        "מערבבים",
        "שותים"
    ]
},

{
    name: "🍫 כדורי שוקולד מהירים",
    ingredients: ["שוקולד"],
    type: "מתוק",
    time: 10,
    method: "בלי בישול",
    description: "קינוח קל.",
    steps: [
        "ממיסים שוקולד",
        "יוצרים כדורים",
        "מקררים"
    ]
}
,
{
    name: "🍎 תפוח בדבש",
    ingredients: ["תפוח","דבש"],
    type: "מתוק",
    time: 5,
    method: "בלי בישול",
    description: "נשנוש מתוק.",
    steps: [
        "חותכים תפוח",
        "מזלפים דבש",
        "מגישים"
    ]
}
,
{
    name: "🥒 סלט מלפפון",
    ingredients: ["מלפפון"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "סלט מרענן.",
    steps: [
        "חותכים מלפפון",
        "מתבלים",
        "מגישים"
    ]
}
,
{
    name: "🍅 סלט עגבניות",
    ingredients: ["עגבנייה"],
    type: "מלוח",
    time: 5,
    method: "בלי בישול",
    description: "סלט קלאסי.",
    steps: [
        "חותכים עגבניות",
        "מתבלים",
        "מגישים"
    ]
}
,
{
    name: "🥛 שוקו חם",
    ingredients: ["חלב","שוקולד"],
    type: "מתוק",
    time: 5,
    method: "מיקרוגל",
    description: "שוקו מפנק.",
    steps: [
        "מחממים חלב",
        "מוסיפים שוקולד",
        "מערבבים"
    ]
}
,
{
    name: "🌽 תירס חם",
    ingredients: ["תירס"],
    type: "מלוח",
    time: 5,
    method: "מיקרוגל",
    description: "תירס מהיר.",
    steps: [
        "מחממים תירס",
        "מגישים"
    ]
}
,
{
    name: "🥔 תפוח אדמה אפוי",
    ingredients: ["תפוח אדמה"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "תפוח אדמה רך וטעים.",
    steps: [
        "מחממים תנור",
        "אופים",
        "מגישים"
    ]
}
,
{
    name: "🍗 עוף בתנור",
    ingredients: ["עוף"],
    type: "מלוח",
    time: 30,
    method: "תנור",
    description: "עוף פשוט וטעים.",
    steps: [
        "מתבלים",
        "אופים",
        "מגישים"
    ]
}
];
