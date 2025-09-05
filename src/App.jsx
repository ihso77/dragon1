import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Users, MessageCircle, Gift, Heart, Globe, Crown, Shield, Star, Home, Info, BookOpen, Tag, UserPlus } from 'lucide-react'
import './App.css'

// Import images
import bannerImage from './assets/bannenre.webp'
import logoImage from './assets/loogo_d.webp'
import serverTagImage from './assets/لقطةالشاشة2025-09-05095328.png'

function App() {
  const [language, setLanguage] = useState('ar')
  const [currentPage, setCurrentPage] = useState('home')
  const [onlineCount, setOnlineCount] = useState(1000)
  const [memberCount, setMemberCount] = useState(16500)
  const [discordData, setDiscordData] = useState(null)

  // Fetch Discord server data
  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch('https://discord.com/api/guilds/1325810262997209201/widget.json')
        const data = await response.json()
        setDiscordData(data)
        if (data.presence_count) setOnlineCount(data.presence_count)
      } catch (error) {
        console.log('Discord API not available, using default values')
      }
    }
    fetchDiscordData()
  }, [])

  // Language content
  const content = {
    ar: {
      title: "House of Dragon 🐉",
      subtitle: "مجتمع هاوس اوف دراغون ، الخادم الاول للهدايا والدردشة وتكوين الصدقات والاستماع بوقتك!",
      joinServer: "انضم للخادم",
      serverTag: "تاغ السيرفر",
      members: "عضو",
      online: "متصل",
      nav: {
        home: "الرئيسية",
        about: "عن الخادم",
        rules: "القوانين",
        serverTag: "تاغ السيرفر",
        join: "انضم إلينا"
      },
      sections: {
        about: {
          title: "عن الخادم",
          description: "خادم ديسكورد عربي مميز يجمع محبي House of Dragon في مجتمع واحد للدردشة والمرح وتكوين صداقات جديدة.",
          features: {
            title: "مميزات الخادم",
            items: [
              { icon: Gift, title: "هدايا يومية", desc: "احصل على هدايا وجوائز يومية" },
              { icon: MessageCircle, title: "دردشة نشطة", desc: "غرف دردشة متنوعة ونشطة على مدار الساعة" },
              { icon: Users, title: "مجتمع كبير", desc: "أكثر من 16,500 عضو نشط" },
              { icon: Crown, title: "إدارة محترفة", desc: "فريق إدارة متفاني ومحترف" }
            ]
          }
        },
        rules: {
          title: "قوانين الخادم",
          subtitle: "القوانين هي لحفظ امان وسلامة الخادم من الاشخاص السوء والتكلم في المحادثات العامة بكل اريحية واحترام.",
          items: [
            "يُمنع التحدث في مواضيع لها علاقة بـ السياسة، الدين.",
            "يُمنع السب والقذف في أي روم من رومات السيرفر مهما كانت.",
            "يُمنع التحدث كتابيًا بلغة غير العربية والانجلزية ( الفرانكو ممنوع ).",
            "اسلوبك في الكلام يدل على طريقة تربيتك فـ يُرجى الحديث بطريقة تليق بالخادم الذي تتواجد به.",
            "يُمنع منعًا باتًا ذكر اسماء خوادم اخرى غير خادمنا والفروع الخاصة به.",
            "يُمنع تفعيل السبام في أي روم من رومات السيرفر.",
            "يُمنع التحدث بطريقة سيئة مع اداري او اونر في الخادم.",
            "يُمنع التحدث في مشاكل شخصية بينك وبين عضو في الخادم.",
            "يُمنع طلب كريديت او شئ مادي من عضو اخر.",
            "يُمنع اهانة شخص اذا كان لا يقبل ذلك وعليه ان يحذرك وبعد ذلك اذا تم تكررارها سيتم تطبيق عقوبات.",
            "لابد من التحدث باحترام بين الذكر والأنثى.",
            "يُمنع مضايقة البنات او التحدث اليهم بطريقة سيئة تربيتك تنعكس على طريقة كلامك في الشات العام.",
            "يُمنع نشر روابط في أي روم من رومات الخادم."
          ],
          note: "القوانين قابلة للتعديل في اي وقت."
        },
        serverTag: {
          title: "تاغ السيرفر",
          description: "استخدم تاغ السيرفر للتعريف بنفسك في المجتمع",
          tagName: "# RedDot Dragon 🐉"
        },
        join: {
          title: "انضم إلينا الآن",
          description: "انضم إلى مجتمعنا المميز واستمتع بوقتك معنا"
        }
      },
      languages: {
        ar: "العربية",
        en: "English",
        fr: "Français"
      }
    },
    en: {
      title: "House of Dragon 🐉",
      subtitle: "House of Dragon community, the first server for gifts, chat, making friends and enjoying your time!",
      joinServer: "Join Server",
      serverTag: "Server Tag",
      members: "members",
      online: "online",
      nav: {
        home: "Home",
        about: "About",
        rules: "Rules",
        serverTag: "Server Tag",
        join: "Join Us"
      },
      sections: {
        about: {
          title: "About Server",
          description: "A distinguished Arabic Discord server that brings together House of Dragon fans in one community for chatting, fun and making new friends.",
          features: {
            title: "Server Features",
            items: [
              { icon: Gift, title: "Daily Gifts", desc: "Get daily gifts and rewards" },
              { icon: MessageCircle, title: "Active Chat", desc: "Various and active chat rooms 24/7" },
              { icon: Users, title: "Large Community", desc: "More than 16,500 active members" },
              { icon: Crown, title: "Professional Management", desc: "Dedicated and professional management team" }
            ]
          }
        },
        rules: {
          title: "Server Rules",
          subtitle: "Rules are to maintain the safety and security of the server from bad people and to speak in public conversations with comfort and respect.",
          items: [
            "Talking about topics related to politics and religion is prohibited.",
            "Cursing and slander in any server room is prohibited.",
            "Speaking in writing in a language other than Arabic and English is prohibited (Franco is prohibited).",
            "Your way of speaking reflects your upbringing, so please speak in a way that befits the server you are in.",
            "It is strictly forbidden to mention the names of other servers other than our server and its branches.",
            "Spam is prohibited in any server room.",
            "It is forbidden to speak badly with an admin or owner in the server.",
            "It is forbidden to talk about personal problems between you and a member in the server.",
            "It is forbidden to ask for credit or something material from another member.",
            "It is forbidden to insult a person if he does not accept that and he must warn you and after that if it is repeated, penalties will be applied.",
            "You must speak respectfully between male and female.",
            "It is forbidden to harass girls or speak to them in a bad way. Your upbringing is reflected in the way you speak in the general chat.",
            "It is forbidden to post links in any server room."
          ],
          note: "Rules are subject to change at any time."
        },
        serverTag: {
          title: "Server Tag",
          description: "Use the server tag to introduce yourself in the community",
          tagName: "# RedDot Dragon 🐉"
        },
        join: {
          title: "Join Us Now",
          description: "Join our distinguished community and enjoy your time with us"
        }
      },
      languages: {
        ar: "العربية",
        en: "English",
        fr: "Français"
      }
    },
    fr: {
      title: "House of Dragon 🐉",
      subtitle: "Communauté House of Dragon, le premier serveur pour les cadeaux, le chat, se faire des amis et profiter de votre temps!",
      joinServer: "Rejoindre le Serveur",
      serverTag: "Tag du Serveur",
      members: "membres",
      online: "en ligne",
      nav: {
        home: "Accueil",
        about: "À propos",
        rules: "Règles",
        serverTag: "Tag du Serveur",
        join: "Rejoignez-nous"
      },
      sections: {
        about: {
          title: "À propos du Serveur",
          description: "Un serveur Discord arabe distingué qui rassemble les fans de House of Dragon dans une communauté pour discuter, s'amuser et se faire de nouveaux amis.",
          features: {
            title: "Fonctionnalités du Serveur",
            items: [
              { icon: Gift, title: "Cadeaux Quotidiens", desc: "Obtenez des cadeaux et récompenses quotidiens" },
              { icon: MessageCircle, title: "Chat Actif", desc: "Salles de chat variées et actives 24h/24" },
              { icon: Users, title: "Grande Communauté", desc: "Plus de 16 500 membres actifs" },
              { icon: Crown, title: "Gestion Professionnelle", desc: "Équipe de gestion dédiée et professionnelle" }
            ]
          }
        },
        rules: {
          title: "Règles du Serveur",
          subtitle: "Les règles sont là pour maintenir la sécurité du serveur et permettre de parler dans les conversations publiques avec confort et respect.",
          items: [
            "Il est interdit de parler de sujets liés à la politique et à la religion.",
            "Les insultes et la calomnie dans toute salle du serveur sont interdites.",
            "Il est interdit de parler par écrit dans une langue autre que l'arabe et l'anglais (le franco est interdit).",
            "Votre façon de parler reflète votre éducation, alors veuillez parler d'une manière qui convient au serveur dans lequel vous vous trouvez.",
            "Il est strictement interdit de mentionner les noms d'autres serveurs autres que notre serveur et ses branches.",
            "Le spam est interdit dans toute salle du serveur.",
            "Il est interdit de mal parler avec un admin ou propriétaire du serveur.",
            "Il est interdit de parler de problèmes personnels entre vous et un membre du serveur.",
            "Il est interdit de demander du crédit ou quelque chose de matériel à un autre membre.",
            "Il est interdit d'insulter une personne si elle n'accepte pas cela et elle doit vous avertir et après cela si c'est répété, des sanctions seront appliquées.",
            "Vous devez parler respectueusement entre homme et femme.",
            "Il est interdit de harceler les filles ou de leur parler de manière inappropriée. Votre éducation se reflète dans votre façon de parler dans le chat général.",
            "Il est interdit de poster des liens dans toute salle du serveur."
          ],
          note: "Les règles peuvent changer à tout moment."
        },
        serverTag: {
          title: "Tag du Serveur",
          description: "Utilisez le tag du serveur pour vous présenter dans la communauté",
          tagName: "# RedDot Dragon 🐉"
        },
        join: {
          title: "Rejoignez-nous maintenant",
          description: "Rejoignez notre communauté distinguée et profitez de votre temps avec nous"
        }
      },
      languages: {
        ar: "العربية",
        en: "English",
        fr: "Français"
      }
    }
  }

  const currentContent = content[language]

  const handleJoinServer = () => {
    window.open('https://discord.gg/houseofdragon', '_blank')
  }

  const renderNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full border-2 border-yellow-500" />
            <span className="text-xl font-bold text-yellow-400">House of Dragon</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(currentContent.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === key
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Language Buttons */}
          <div className="flex gap-1">
            {Object.entries(currentContent.languages).map(([code, name]) => (
              <Button
                key={code}
                variant={language === code ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage(code)}
                className={`text-xs transition-all duration-200 ${
                  language === code
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                    : 'border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 bg-black/40'
                }`}
              >
                <Globe className="w-3 h-3 mr-1" />
                {code.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  const renderHomePage = () => (
    <div className="pt-16">
      {/* Hero Section with Smaller Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img 
              src={logoImage} 
              alt="House of Dragon Logo" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-500 shadow-2xl animate-pulse"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-yellow-500" />
                <span className="text-lg font-bold text-yellow-400">+{memberCount.toLocaleString()}</span>
                <span className="text-gray-300 text-sm">{currentContent.members}</span>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold text-green-400">+{onlineCount}</span>
                <span className="text-gray-300 text-sm">{currentContent.online}</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleJoinServer}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-6 py-3 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {currentContent.joinServer}
          </Button>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">
            {currentContent.sections.about.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            {currentContent.sections.about.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.sections.about.features.items.map((feature, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <feature.icon className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <CardTitle className="text-lg text-yellow-400">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const renderAboutPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              {currentContent.sections.about.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 max-w-3xl mx-auto">
              {currentContent.sections.about.description}
            </CardDescription>
          </CardHeader>
        </Card>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-yellow-400">
          {currentContent.sections.about.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.sections.about.features.items.map((feature, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <feature.icon className="w-12 h-12 text-yellow-500" />
                  <div>
                    <CardTitle className="text-xl text-yellow-400">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-300">{feature.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderRulesPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-black/40 backdrop-blur-sm border-red-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-red-400 mb-4 flex items-center justify-center gap-2">
              <Shield className="w-8 h-8" />
              {currentContent.sections.rules.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 max-w-4xl mx-auto">
              {currentContent.sections.rules.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {currentContent.sections.rules.items.map((rule, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-black/20 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <Badge variant="outline" className="border-red-500 text-red-400 bg-black/40 min-w-fit">
                    #{index + 1}
                  </Badge>
                  <p className="text-gray-300 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 font-semibold text-center">
                ⚠️ {currentContent.sections.rules.note}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderServerTagPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 flex items-center justify-center gap-2">
              <Tag className="w-8 h-8" />
              {currentContent.sections.serverTag.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              {currentContent.sections.serverTag.description}
            </CardDescription>
            <Badge variant="outline" className="text-xl px-6 py-3 border-yellow-500 text-yellow-400 bg-black/40 mb-8">
              {currentContent.sections.serverTag.tagName}
            </Badge>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-md mx-auto">
              <img 
                src={serverTagImage} 
                alt="Server Tag Preview" 
                className="w-full rounded-lg border-2 border-yellow-500/30 shadow-2xl"
              />
              <p className="text-gray-400 text-sm mt-4">
                {language === 'ar' ? 'معاينة تاغ السيرفر' : 
                 language === 'en' ? 'Server Tag Preview' : 
                 'Aperçu du Tag du Serveur'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderJoinPage = () => (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 flex items-center justify-center gap-2">
          <UserPlus className="w-8 h-8" />
          {currentContent.sections.join.title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {currentContent.sections.join.description}
        </p>
        
        <div className="flex justify-center mb-8">
          <Button 
            onClick={handleJoinServer}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {currentContent.joinServer}
          </Button>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-yellow-400">Discord Widget</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <iframe 
              src="https://discord.com/widget?id=1325810262997209201&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency="true" 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-lg shadow-lg border border-yellow-500/30"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage()
      case 'about':
        return renderAboutPage()
      case 'rules':
        return renderRulesPage()
      case 'serverTag':
        return renderServerTagPage()
      case 'join':
        return renderJoinPage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {renderNavigation()}
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-black/60 border-t border-yellow-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold text-yellow-400">House of Dragon 🐉</span>
          </div>
          <p className="text-gray-400 mb-4">
            {language === 'ar' ? 'الخادم الأول للهدايا والدردشة وتكوين الصداقات' : 
             language === 'en' ? 'The first server for gifts, chat and making friends' :
             'Le premier serveur pour les cadeaux, le chat et se faire des amis'}
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>Server ID: 1325810262997209201</span>
            <span>•</span>
            <span>© 2025 House of Dragon</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

