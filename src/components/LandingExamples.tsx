import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface LandingExample {
  title: string;
  category: string;
  image: string;
  features: string[];
  conversion: string;
  industry: string;
}

export default function LandingExamples() {
  const examples: LandingExample[] = [
    {
      title: 'Ресторан быстрого питания',
      category: 'Общепит',
      image: 'img/c5d5cf07-529c-4a7b-a4bc-e06506f70bef.jpg',
      features: ['Онлайн заказ', 'Система лояльности', 'Интеграция с доставкой', 'Мобильная версия'],
      conversion: '+180%',
      industry: 'HoReCa'
    },
    {
      title: 'Фитнес центр',
      category: 'Спорт',
      image: 'img/98a2f97c-71ab-4bfb-aaea-04de3c29578e.jpg',
      features: ['Запись на тренировки', 'Профили тренеров', 'Расписание групповых занятий', 'Калькулятор абонементов'],
      conversion: '+220%',
      industry: 'Фитнес'
    },
    {
      title: 'Галерея лендингов',
      category: 'Портфолио',
      image: 'img/b620a63a-a71f-4d97-9435-68523251aa15.jpg',
      features: ['Адаптивный дизайн', 'Быстрая загрузка', 'SEO оптимизация', 'A/B тестирование'],
      conversion: '+150%',
      industry: 'Разные'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
          Примеры <span className="text-vibrant-orange">лендингов</span>
        </h2>
        <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
          Продающие посадочные страницы для разных ниш с высокими показателями конверсии
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {examples.map((example, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={example.image}
                alt={example.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-vibrant-orange/90 text-white border-0">
                  {example.category}
                </Badge>
                <Badge className="bg-success-blue/90 text-white border-0">
                  {example.conversion}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="font-montserrat font-bold text-dark-charcoal flex items-center justify-between">
                {example.title}
                <Icon name="ExternalLink" size={18} className="text-gray-400 group-hover:text-vibrant-orange transition-colors" />
              </CardTitle>
              <div className="flex items-center gap-2">
                <Icon name="Building" size={16} className="text-success-blue" />
                <span className="font-open-sans text-sm text-gray-600">{example.industry}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-montserrat font-semibold text-dark-charcoal mb-2">Ключевые элементы:</h4>
                  <div className="space-y-2">
                    {example.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span className="font-open-sans text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white font-montserrat font-semibold group-hover:shadow-md transition-all"
                >
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть детали
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-vibrant-orange/10 via-white to-success-blue/10 border-0 shadow-lg">
        <CardContent className="text-center py-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-montserrat font-bold text-dark-charcoal mb-6">
              Нужен лендинг для вашего бизнеса?
            </h3>
            <p className="text-xl font-open-sans text-gray-600 mb-8 leading-relaxed">
              Создаем продающие посадочные страницы с высокой конверсией для любой ниши. 
              Современный дизайн, быстрая загрузка и интеграция с системами аналитики.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <div className="font-montserrat font-semibold text-dark-charcoal">Адаптивность</div>
                <div className="font-open-sans text-sm text-gray-600">Под все устройства</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div className="font-montserrat font-semibold text-dark-charcoal">Скорость</div>
                <div className="font-open-sans text-sm text-gray-600">Быстрая загрузка</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div className="font-montserrat font-semibold text-dark-charcoal">Конверсия</div>
                <div className="font-open-sans text-sm text-gray-600">Высокие показатели</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="BarChart3" size={24} className="text-white" />
                </div>
                <div className="font-montserrat font-semibold text-dark-charcoal">Аналитика</div>
                <div className="font-open-sans text-sm text-gray-600">Полное отслеживание</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Palette" size={20} className="mr-2" />
                Заказать лендинг
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-success-blue text-success-blue hover:bg-success-blue hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}