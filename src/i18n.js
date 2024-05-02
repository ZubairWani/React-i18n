import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"


i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug : true,
    fallbackLng: "en",
    returnObjects: true,
    resources:{
        en: {
            translation:{
                greeting: "Hello, Welcome!",
                
                description: {
                    line1: "My name is Zubair and im from Sopore",
                    line2: "Testing Internationalisation",
                    
                },
            },
        },
        fr: {
            translation:{
                greeting: "Bonjour, Bienvenue!",
                
                description: {
                    line1: "Je m'appelle Zubair et je viens de Sopore.",
                    line2: "Tester l’internationalisation",
                    
                },
            },
        },
        hi: {
            translation:{
                greeting: "नमस्ते, स्वागत है!",
                
                description: {
                    line1: "मेरा नाम जुबैर है और मैं सोपोर से हूं",
                    line2: "अंतर्राष्ट्रीयकरण का परीक्षण",
                    
                },
            },
        },
        ar: {
            translation:{
                greeting: "مرحبا أهلا وسهلا!",
                
                description: {
                    line1: "اسمي زبير وأنا من سوبور",
                    line2: "اختبار التدويل",
                    
                },
            },
        },
    },
});