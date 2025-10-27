'use client';

import { useState } from 'react';
import { MessageCircle, Heart, Book, Calendar, CreditCard, Bell, Phone, Mail, MapPin, Star, Users, BookOpen, GraduationCap, Play, Sparkles, Eye, Shield, Link, Copy, Check, Globe } from 'lucide-react';

export default function HospitalEspiritualExousia() {
  const [activeSection, setActiveSection] = useState('home');
  const [customDomain, setCustomDomain] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const chatTopics = [
    { id: 'depression', title: 'Depressão', icon: '💙', description: 'Apoio para momentos difíceis' },
    { id: 'spiritual', title: 'Conselhos Espirituais', icon: '🙏', description: 'Orientação espiritual' },
    { id: 'prejudice', title: 'Preconceito', icon: '🤝', description: 'Superando barreiras' },
    { id: 'love', title: 'Vida Amorosa', icon: '💕', description: 'Relacionamentos e amor' },
    { id: 'family', title: 'Família', icon: '👨‍👩‍👧‍👦', description: 'Harmonia familiar' },
    { id: 'friend', title: 'Conversar com Amigo', icon: '👥', description: 'Bate-papo amigável' }
  ];

  // Novos chats especiais solicitados
  const specialChats = [
    { 
      id: 'soul-healing', 
      title: 'Cura da Alma', 
      icon: '✨', 
      description: 'Processo profundo de cura espiritual e emocional',
      color: 'from-purple-600 to-pink-600',
      features: ['Limpeza energética', 'Cura de traumas', 'Renovação espiritual', 'Paz interior']
    },
    { 
      id: 'prophetic-regression', 
      title: 'Regressão Profética', 
      icon: '🔮', 
      description: 'Revelações espirituais sobre vidas passadas e propósito',
      color: 'from-indigo-600 to-purple-600',
      features: ['Visões proféticas', 'Conexão ancestral', 'Propósito divino', 'Revelações espirituais']
    },
    { 
      id: 'spiritual-liberation', 
      title: 'Liberação Espiritual', 
      icon: '🛡️', 
      description: 'Libertação de amarras espirituais e energias negativas',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quebra de maldições', 'Proteção espiritual', 'Limpeza áurica', 'Libertação total']
    },
    { 
      id: 'special-healing', 
      title: 'Chat Especial de Cura', 
      icon: '💎', 
      description: 'Sessão intensiva de cura com múltiplas técnicas espirituais',
      color: 'from-emerald-600 to-teal-600',
      features: ['Cura multidimensional', 'Técnicas avançadas', 'Restauração completa', 'Renovação total']
    }
  ];

  const dailyMessages = [
    "A paz está dentro de você, apenas respire e encontre-a.",
    "Cada novo dia é uma oportunidade de crescimento espiritual.",
    "O amor é a força mais poderosa do universo.",
    "Sua jornada espiritual é única e sagrada.",
    "A gratidão transforma o que temos em suficiente."
  ];

  const bibleVerses = [
    "\"Porque eu sei os planos que tenho para vocês\", diz o Senhor, \"planos de fazê-los prosperar e não de causar dano, planos de dar-lhes esperança e um futuro.\" - Jeremias 29:11",
    "\"Tudo posso naquele que me fortalece.\" - Filipenses 4:13",
    "\"O Senhor é o meu pastor; nada me faltará.\" - Salmos 23:1",
    "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.\" - Mateus 11:28"
  ];

  const bibleStudyTopics = [
    {
      id: 'beginners',
      title: 'Iniciantes na Fé',
      icon: '🌱',
      description: 'Primeiros passos na leitura bíblica',
      lessons: ['Como começar a ler a Bíblia', 'Entendendo o contexto histórico', 'Principais personagens bíblicos']
    },
    {
      id: 'reading-difficulties',
      title: 'Dificuldades de Leitura',
      icon: '📖',
      description: 'Apoio para quem tem dificuldades',
      lessons: ['Técnicas de leitura simplificada', 'Bíblia em áudio', 'Versões de fácil compreensão']
    },
    {
      id: 'daily-devotional',
      title: 'Devocional Diário',
      icon: '☀️',
      description: 'Estudos diários guiados',
      lessons: ['Plano de leitura de 30 dias', 'Reflexões matinais', 'Oração e meditação']
    },
    {
      id: 'life-application',
      title: 'Aplicação na Vida',
      icon: '💡',
      description: 'Como aplicar os ensinamentos',
      lessons: ['Princípios para o dia a dia', 'Tomada de decisões bíblicas', 'Relacionamentos cristãos']
    }
  ];

  const mentorshipPrograms = [
    {
      id: 'personal',
      title: 'Mentoria Pessoal',
      icon: '👤',
      description: 'Acompanhamento individual personalizado',
      duration: '3 meses',
      price: 'R$ 150/mês',
      features: ['Sessões semanais de 1h', 'Plano de estudo personalizado', 'Suporte via WhatsApp', 'Material didático incluso']
    },
    {
      id: 'group',
      title: 'Mentoria em Grupo',
      icon: '👥',
      description: 'Aprendizado colaborativo com outros estudantes',
      duration: '2 meses',
      price: 'R$ 80/mês',
      features: ['Encontros semanais de 1h30', 'Grupo de até 8 pessoas', 'Discussões interativas', 'Certificado de participação']
    },
    {
      id: 'intensive',
      title: 'Curso Intensivo',
      icon: '⚡',
      description: 'Programa acelerado para iniciantes',
      duration: '4 semanas',
      price: 'R$ 200 (único)',
      features: ['Aulas diárias de 45min', 'Material completo', 'Exercícios práticos', 'Suporte total']
    }
  ];

  // Função para gerar link personalizado
  const generateCustomLink = () => {
    if (!customDomain.trim()) return;
    
    const baseUrl = 'https://hospitalexousia.com';
    const cleanDomain = customDomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const newLink = `${baseUrl}/${cleanDomain}`;
    setGeneratedLink(newLink);
  };

  // Função para copiar link
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const renderHome = () => (
    <div className="min-h-screen">
      {/* Hero Section com Background da Nova Imagem */}
      <div 
        className="relative h-screen flex items-center justify-center text-white"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7877928d-64d2-462e-a18d-46562c69716b.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/df390fee-7667-4adf-bb42-aff553088587.jpg" 
            alt="Logo Hospital Espiritual Exousia" 
            className="h-32 w-auto mx-auto mb-6 rounded-full shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
            Hospital Espiritual Exousia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Um refúgio de paz, orientação espiritual e estudo bíblico para sua alma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('chat')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Iniciar Conversa Espiritual
            </button>
            <button 
              onClick={() => setActiveSection('mentorship')}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Começar Estudo Bíblico
            </button>
          </div>
        </div>
      </div>

      {/* Seção de Link Personalizado */}
      <div className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              🌐 Link de Domínio Personalizado
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Crie seu link personalizado para compartilhar nossos serviços espirituais
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Digite o nome para seu link personalizado:
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                      hospitalexousia.com/
                    </span>
                    <input
                      type="text"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      placeholder="meu-link-especial"
                      className="w-full pl-44 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-lg"
                    />
                  </div>
                </div>
                <button
                  onClick={generateCustomLink}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Link className="w-5 h-5 inline mr-2" />
                  Gerar Link
                </button>
              </div>
            </div>

            {generatedLink && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Seu Link Personalizado foi Criado!
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 bg-white p-3 rounded-lg border border-gray-300">
                    <code className="text-indigo-600 font-mono text-lg break-all">
                      {generatedLink}
                    </code>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      copied 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 inline mr-2" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 inline mr-2" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  ✨ Compartilhe este link para que outras pessoas acessem diretamente nossos serviços espirituais!
                </p>
              </div>
            )}

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <Link className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-blue-700">Link Personalizado</h4>
                <p className="text-sm text-gray-600">Crie URLs únicos e memoráveis</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-700">Domínio Incluso</h4>
                <p className="text-sm text-gray-600">Já incluso no Hospital Exousia</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-700">Compartilhamento</h4>
                <p className="text-sm text-gray-600">Espalhe amor e orientação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Serviços */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nossos Serviços Espirituais
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Chat Espiritual</h3>
              <p className="text-gray-600">Converse sobre diversos temas espirituais com orientadores especializados</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Book className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Mensagens Diárias</h3>
              <p className="text-gray-600">Receba mensagens inspiradoras e versículos bíblicos todos os dias</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Estudo Bíblico</h3>
              <p className="text-gray-600">Aprenda a ler e compreender a Bíblia com métodos simplificados</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">Mentoria</h3>
              <p className="text-gray-600">Acompanhamento personalizado para seu crescimento espiritual</p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem Celestial */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2488ba42-6a63-46fd-8145-3b36a5e56e02.jpg" 
            alt="Anjo celestial" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl mb-8"
          />
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Proteção e Orientação Divina
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso hospital espiritual oferece um ambiente seguro e acolhedor, 
            onde você pode encontrar paz, orientação e renovação espiritual através do estudo da Palavra.
          </p>
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Chat Espiritual</h1>
          <p className="text-lg text-gray-600">Escolha um tema para conversar</p>
        </div>
        
        {/* Chats Especiais - Seção Destacada */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
            ✨ Chats Especiais de Cura ✨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialChats.map((chat) => (
              <div key={chat.id} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border-2 border-purple-200 hover:border-purple-400">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{chat.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{chat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{chat.description}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {chat.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <Sparkles className="w-3 h-3 text-purple-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${chat.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Iniciar Sessão Especial
                </button>
                
                <div className="mt-3 text-center">
                  <span className="text-sm text-purple-600 font-semibold">Sessão Premium - R$ 80,00</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chats Regulares */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Chats Regulares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatTopics.map((topic) => (
              <div key={topic.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-4 text-center">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{topic.title}</h3>
                <p className="text-gray-600 text-center mb-4">{topic.description}</p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Iniciar Chat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Valores das Sessões */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Valores das Sessões</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 border-2 border-purple-200 rounded-xl bg-purple-50">
              <h4 className="text-lg font-bold text-purple-600 mb-2">Chats Especiais</h4>
              <p className="text-3xl font-bold text-gray-800 mb-2">R$ 80,00</p>
              <p className="text-gray-600">Sessão premium de cura</p>
            </div>
            <div className="text-center p-6 border-2 border-blue-200 rounded-xl">
              <h4 className="text-lg font-bold text-blue-600 mb-2">30 minutos</h4>
              <p className="text-3xl font-bold text-gray-800 mb-2">R$ 25,00</p>
              <p className="text-gray-600">Sessão rápida</p>
            </div>
            <div className="text-center p-6 border-2 border-green-200 rounded-xl bg-green-50">
              <h4 className="text-lg font-bold text-green-600 mb-2">1 hora</h4>
              <p className="text-3xl font-bold text-gray-800 mb-2">R$ 45,00</p>
              <p className="text-gray-600">Mais popular</p>
            </div>
            <div className="text-center p-6 border-2 border-pink-200 rounded-xl">
              <h4 className="text-lg font-bold text-pink-600 mb-2">2 horas</h4>
              <p className="text-3xl font-bold text-gray-800 mb-2">R$ 80,00</p>
              <p className="text-gray-600">Sessão completa</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Pagar via PIX
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Mensagens Inspiradoras</h1>
          <p className="text-lg text-gray-600">Alimento diário para sua alma</p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-600 text-center">Mensagem do Dia</h3>
            <p className="text-lg text-gray-700 text-center italic mb-4">
              "{dailyMessages[new Date().getDay()]}"
            </p>
            <div className="flex justify-center">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">Versículo Bíblico</h3>
            <p className="text-lg text-gray-700 text-center italic">
              {bibleVerses[new Date().getDay() % bibleVerses.length]}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-green-600 text-center">Oração do Dia</h3>
            <p className="text-lg text-gray-700 text-center italic">
              "Senhor, conceda-me serenidade para aceitar as coisas que não posso mudar, 
              coragem para mudar as que posso, e sabedoria para distinguir umas das outras. 
              Que eu possa viver um dia de cada vez, aproveitando um momento de cada vez."
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBibleStudy = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Estudo Bíblico</h1>
          <p className="text-lg text-gray-600">Aprenda a ler e compreender a Bíblia de forma simples</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bibleStudyTopics.map((topic) => (
            <div key={topic.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{topic.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {topic.lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Play className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">{lesson}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 font-semibold">
                Começar Estudo
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Recursos Especiais para Dificuldades de Leitura</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 border-green-200 rounded-xl">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-green-600 mb-2">Bíblia Simplificada</h4>
              <p className="text-gray-600">Versões em linguagem simples e clara</p>
            </div>
            <div className="text-center p-6 border-2 border-blue-200 rounded-xl">
              <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-blue-600 mb-2">Áudio Bíblia</h4>
              <p className="text-gray-600">Escute a Palavra com narração profissional</p>
            </div>
            <div className="text-center p-6 border-2 border-purple-200 rounded-xl">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-purple-600 mb-2">Apoio Personalizado</h4>
              <p className="text-gray-600">Acompanhamento individual especializado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMentorship = () => (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Mentoria Espiritual</h1>
          <p className="text-lg text-gray-600">Acompanhamento personalizado para seu crescimento na fé</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mentorshipPrograms.map((program) => (
            <div key={program.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="text-3xl font-bold text-orange-600 mb-2">{program.price}</div>
                <div className="text-sm text-gray-500">Duração: {program.duration}</div>
              </div>
              
              <div className="space-y-3 mb-6">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold">
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Por que escolher nossa Mentoria?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">Metodologia Especializada</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Técnicas adaptadas para diferentes níveis de leitura</li>
                <li>• Materiais visuais e interativos</li>
                <li>• Abordagem respeitosa e paciente</li>
                <li>• Foco na compreensão, não na velocidade</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">Mentores Qualificados</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Formação em teologia e pedagogia</li>
                <li>• Experiência com dificuldades de aprendizado</li>
                <li>• Acompanhamento empático e personalizado</li>
                <li>• Disponibilidade para dúvidas e apoio</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contato</h1>
          <p className="text-lg text-gray-600">Entre em contato conosco</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <span className="text-gray-700">111945313861</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-3" />
                <span className="text-gray-700">contato@hospitalexousia.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-3" />
                <span className="text-gray-700">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Horário de Atendimento</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Segunda a Sexta:</span>
                <span className="text-gray-700">8h às 22h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sábado:</span>
                <span className="text-gray-700">9h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Domingo:</span>
                <span className="text-gray-700">14h às 20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/df390fee-7667-4adf-bb42-aff553088587.jpg" 
                alt="Logo" 
                className="h-12 w-12 rounded-full shadow-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Hospital Espiritual</h1>
                <p className="text-sm text-gray-600">Exousia</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Início
              </button>
              <button 
                onClick={() => setActiveSection('chat')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'chat' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Chat
              </button>
              <button 
                onClick={() => setActiveSection('bible-study')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'bible-study' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Estudo Bíblico
              </button>
              <button 
                onClick={() => setActiveSection('mentorship')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'mentorship' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Mentoria
              </button>
              <button 
                onClick={() => setActiveSection('messages')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'messages' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Mensagens
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Contato
              </button>
            </nav>

            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t sticky top-16 z-40">
        <div className="flex justify-around py-2 text-xs">
          <button 
            onClick={() => setActiveSection('home')}
            className={`p-2 rounded-lg ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Início
          </button>
          <button 
            onClick={() => setActiveSection('chat')}
            className={`p-2 rounded-lg ${activeSection === 'chat' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Chat
          </button>
          <button 
            onClick={() => setActiveSection('bible-study')}
            className={`p-2 rounded-lg ${activeSection === 'bible-study' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Estudo
          </button>
          <button 
            onClick={() => setActiveSection('mentorship')}
            className={`p-2 rounded-lg ${activeSection === 'mentorship' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Mentoria
          </button>
          <button 
            onClick={() => setActiveSection('messages')}
            className={`p-2 rounded-lg ${activeSection === 'messages' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Mensagens
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            className={`p-2 rounded-lg ${activeSection === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            Contato
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'chat' && renderChat()}
        {activeSection === 'bible-study' && renderBibleStudy()}
        {activeSection === 'mentorship' && renderMentorship()}
        {activeSection === 'messages' && renderMessages()}
        {activeSection === 'contact' && renderContact()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/df390fee-7667-4adf-bb42-aff553088587.jpg" 
                  alt="Logo" 
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Hospital Espiritual</h3>
                  <p className="text-sm text-gray-300">Exousia</p>
                </div>
              </div>
              <p className="text-gray-300">
                Um refúgio de paz e orientação espiritual para sua alma.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Chat Espiritual</li>
                <li>Estudo Bíblico</li>
                <li>Mentoria Personalizada</li>
                <li>Mensagens Inspiradoras</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Especialidades</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Dificuldades de Leitura</li>
                <li>Iniciantes na Fé</li>
                <li>Apoio Emocional</li>
                <li>Orientação Familiar</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 111945313861</p>
                <p>✉️ contato@hospitalexousia.com</p>
                <p>📍 São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Hospital Espiritual Exousia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}