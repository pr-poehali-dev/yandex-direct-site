import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Target',
      title: 'Настройка рекламы',
      description: 'Профессиональная настройка кампаний в Яндекс.Директ с максимальным ROI',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'TrendingUp',
      title: 'Оптимизация',
      description: 'Анализ и улучшение показателей существующих рекламных кампаний',
      price: 'от 10 000 ₽'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Глубокий анализ эффективности и отчеты по результатам',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Аудит рекламы',
      description: 'Комплексная проверка текущих кампаний и рекомендации',
      price: 'от 5 000 ₽'
    }
  ];

  const cases = [
    {
      title: 'Интернет-магазин электроники',
      result: '+340% конверсий',
      metric: 'CPC снижен на 65%',
      budget: '250 000 ₽/мес',
      category: 'E-commerce',
      image: 'img/46ae2a03-e1f9-45d0-a33b-ba30a7c3f438.jpg'
    },
    {
      title: 'Стоматологическая клиника',
      result: '+180% заявок',
      metric: 'CPA снижен на 45%',
      budget: '80 000 ₽/мес',
      category: 'Медицина',
      image: 'img/0b834dcb-fad0-481f-8258-41616ff2ee84.jpg'
    },
    {
      title: 'Онлайн-школа',
      result: '+210% продаж',
      metric: 'ROI увеличен до 380%',
      budget: '150 000 ₽/мес',
      category: 'Образование',
      image: 'img/cfbb0442-4b24-4ddd-a833-80dafa2da2d4.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      company: 'TechStore',
      text: 'Результат превзошел все ожидания! Конверсии выросли в 3 раза, а расходы на рекламу снизились.',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      company: 'DentPlus',
      text: 'Профессиональный подход и отличные результаты. Поток пациентов увеличился вдвое!',
      rating: 5
    },
    {
      name: 'Елена Козлова',
      company: 'EduPro',
      text: 'Грамотная настройка кампаний привела к росту продаж на 210%. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-dark-charcoal">Direct Expert</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-dark-charcoal hover:text-vibrant-orange transition-colors font-open-sans">Услуги</a>
            <a href="#cases" className="text-dark-charcoal hover:text-vibrant-orange transition-colors font-open-sans">Кейсы</a>
            <a href="#reviews" className="text-dark-charcoal hover:text-vibrant-orange transition-colors font-open-sans">Отзывы</a>
            <a href="#blog" className="text-dark-charcoal hover:text-vibrant-orange transition-colors font-open-sans">Блог</a>
            <Button className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/20 font-open-sans">
            🚀 Специалист по Яндекс.Директ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-dark-charcoal mb-8 leading-tight">
            Увеличиваю продажи через
            <span className="bg-gradient-to-r from-vibrant-orange to-success-blue bg-clip-text text-transparent"> Яндекс.Директ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-open-sans leading-relaxed max-w-2xl mx-auto">
            Настраиваю эффективную контекстную рекламу, которая приносит качественных клиентов и увеличивает прибыль вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-4 text-lg animate-scale-in">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-success-blue text-success-blue hover:bg-success-blue hover:text-white font-montserrat font-semibold px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Analytics Visualization */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur rounded-3xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="img/cfbb0442-4b24-4ddd-a833-80dafa2da2d4.jpg" 
                alt="Аналитика Яндекс.Директ" 
                className="rounded-2xl shadow-xl w-full h-auto animate-float"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="text-center animate-scale-in">
                <div className="text-4xl font-montserrat font-bold text-vibrant-orange mb-2">150+</div>
                <div className="text-dark-charcoal font-open-sans">Успешных проектов</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-4xl font-montserrat font-bold text-success-blue mb-2">340%</div>
                <div className="text-dark-charcoal font-open-sans">Рост конверсий</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-4xl font-montserrat font-bold text-gradient-blue mb-2">5 лет</div>
                <div className="text-dark-charcoal font-open-sans">Опыт работы</div>
              </div>
              <div className="text-center animate-scale-in">
                <div className="text-4xl font-montserrat font-bold text-vibrant-orange mb-2">24/7</div>
                <div className="text-dark-charcoal font-open-sans">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 bg-white/50 rounded-3xl mx-4 my-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
            Услуги по <span className="text-vibrant-orange">Яндекс.Директ</span>
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Полный спектр услуг для максимального результата от контекстной рекламы
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <CardTitle className="font-montserrat font-bold text-dark-charcoal">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-open-sans text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="text-vibrant-orange font-montserrat font-bold text-lg">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
            Результаты клиентов
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Реальные кейсы с впечатляющими показателями роста
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={case_.image} 
                  alt={case_.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-success-blue text-success-blue">
                    {case_.category}
                  </Badge>
                  <div className="text-sm text-gray-500 font-open-sans">{case_.budget}</div>
                </div>
                <CardTitle className="font-montserrat font-bold text-dark-charcoal mb-2">
                  {case_.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-open-sans text-gray-600">Результат:</span>
                    <span className="font-montserrat font-bold text-vibrant-orange text-lg">{case_.result}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-open-sans text-gray-600">Метрика:</span>
                    <span className="font-montserrat font-semibold text-success-blue">{case_.metric}</span>
                  </div>
                  <Button variant="outline" className="w-full border-dark-charcoal text-dark-charcoal hover:bg-dark-charcoal hover:text-white font-montserrat font-semibold mt-4">
                    Подробнее о кейсе
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="container mx-auto px-4 py-20 bg-gradient-to-r from-vibrant-orange/5 to-success-blue/5 rounded-3xl mx-4 my-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Что говорят о работе наши клиенты
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="font-montserrat font-bold text-dark-charcoal">
                  {testimonial.name}
                </CardTitle>
                <CardDescription className="font-open-sans text-vibrant-orange font-semibold">
                  {testimonial.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
            Полезные материалы
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Советы и лайфхаки по контекстной рекламе
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge className="w-fit mb-4 bg-vibrant-orange/10 text-vibrant-orange border-vibrant-orange/20">
                Гайд
              </Badge>
              <CardTitle className="font-montserrat font-bold text-dark-charcoal">
                10 ошибок в настройке Директа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-open-sans text-gray-600 mb-4">
                Разбираем самые частые ошибки, которые снижают эффективность рекламных кампаний
              </CardDescription>
              <Button variant="ghost" className="p-0 h-auto text-success-blue hover:text-success-blue/80 font-montserrat font-semibold">
                Читать статью <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge className="w-fit mb-4 bg-success-blue/10 text-success-blue border-success-blue/20">
                Кейс
              </Badge>
              <CardTitle className="font-montserrat font-bold text-dark-charcoal">
                Как снизить CPC на 60%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-open-sans text-gray-600 mb-4">
                Пошаговый разбор оптимизации кампании с примерами и скриншотами
              </CardDescription>
              <Button variant="ghost" className="p-0 h-auto text-success-blue hover:text-success-blue/80 font-montserrat font-semibold">
                Читать статью <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge className="w-fit mb-4 bg-gradient-blue/10 text-gradient-blue border-gradient-blue/20">
                Обновление
              </Badge>
              <CardTitle className="font-montserrat font-bold text-dark-charcoal">
                Новые возможности Директа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-open-sans text-gray-600 mb-4">
                Обзор последних обновлений платформы и как их использовать
              </CardDescription>
              <Button variant="ghost" className="p-0 h-auto text-success-blue hover:text-success-blue/80 font-montserrat font-semibold">
                Читать статью <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-vibrant-orange to-success-blue text-white border-0 overflow-hidden">
          <CardContent className="text-center py-16 px-8 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Готовы увеличить продажи?
              </h2>
              <p className="text-xl font-open-sans mb-8 max-w-2xl mx-auto opacity-90">
                Получите бесплатный аудит вашей рекламы и персональные рекомендации по улучшению результатов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="bg-white text-dark-charcoal hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить аудит бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-charcoal font-montserrat font-semibold px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-xl font-montserrat font-bold text-dark-charcoal">Direct Expert</span>
            </div>
            <p className="font-open-sans text-gray-600 mb-4">
              Профессиональная настройка контекстной рекламы в Яндекс.Директ
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} className="text-vibrant-orange" />
              <Icon name="Mail" size={20} className="text-vibrant-orange" />
              <Icon name="MessageCircle" size={20} className="text-vibrant-orange" />
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-dark-charcoal mb-4">Услуги</h4>
            <ul className="space-y-2 font-open-sans text-gray-600">
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Настройка рекламы</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Оптимизация кампаний</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Аналитика и отчеты</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Аудит рекламы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-dark-charcoal mb-4">Компания</h4>
            <ul className="space-y-2 font-open-sans text-gray-600">
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-dark-charcoal mb-4">Контакты</h4>
            <div className="space-y-3 font-open-sans text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-vibrant-orange" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-vibrant-orange" />
                <span>expert@direct.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-vibrant-orange" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="font-open-sans text-gray-600">
            © 2024 Direct Expert. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}