import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CaseData {
  title: string;
  result: string;
  metric: string;
  budget: string;
  category: string;
  image: string;
  details: {
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    timeline: string;
    tools: string[];
  };
}

interface CaseModalProps {
  case_: CaseData;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseModal({ case_, isOpen, onClose }: CaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-success-blue text-success-blue">
              {case_.category}
            </Badge>
            <h2 className="text-2xl font-montserrat font-bold text-dark-charcoal">
              {case_.title}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full w-10 h-10 p-0"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <img 
                src={case_.image}
                alt={case_.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-vibrant-orange/10 to-vibrant-orange/5 border-vibrant-orange/20">
                  <CardContent className="text-center py-4">
                    <div className="text-2xl font-montserrat font-bold text-vibrant-orange mb-1">
                      {case_.result}
                    </div>
                    <div className="text-sm font-open-sans text-gray-600">Результат</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-success-blue/10 to-success-blue/5 border-success-blue/20">
                  <CardContent className="text-center py-4">
                    <div className="text-lg font-montserrat font-bold text-success-blue mb-1">
                      {case_.metric}
                    </div>
                    <div className="text-sm font-open-sans text-gray-600">Метрика</div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-gradient-to-br from-gradient-blue/10 to-gradient-blue/5 border-gradient-blue/20">
                <CardContent className="text-center py-4">
                  <div className="text-xl font-montserrat font-bold text-gradient-blue mb-1">
                    {case_.budget}
                  </div>
                  <div className="text-sm font-open-sans text-gray-600">Рекламный бюджет</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Icon name="FileText" size={20} className="text-vibrant-orange" />
                Описание проекта
              </h3>
              <p className="font-open-sans text-gray-700 leading-relaxed">
                {case_.details.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Icon name="AlertTriangle" size={20} className="text-vibrant-orange" />
                Вызов
              </h3>
              <p className="font-open-sans text-gray-700 leading-relaxed">
                {case_.details.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={20} className="text-vibrant-orange" />
                Решение
              </h3>
              <p className="font-open-sans text-gray-700 leading-relaxed">
                {case_.details.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-vibrant-orange" />
                Достигнутые результаты
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {case_.details.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="font-open-sans text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-vibrant-orange" />
                  Сроки реализации
                </h3>
                <p className="font-open-sans text-gray-700">{case_.details.timeline}</p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                  <Icon name="Settings" size={20} className="text-vibrant-orange" />
                  Использованные инструменты
                </h3>
                <div className="flex flex-wrap gap-2">
                  {case_.details.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="border-success-blue text-success-blue">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center">
            <h3 className="text-xl font-montserrat font-bold text-dark-charcoal mb-4">
              Готовы получить такие же результаты?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-success-blue text-success-blue hover:bg-success-blue hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить аудит
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const caseDetails: Record<string, CaseData['details']> = {
  'electronics': {
    description: 'Крупный интернет-магазин электроники столкнулся с высокой стоимостью привлечения клиентов и низкой конверсией рекламных кампаний в Яндекс.Директ.',
    challenge: 'Основной проблемой была неэффективная структура кампаний, широкий таргетинг и отсутствие негативных ключевых слов, что приводило к большому количеству нецелевых кликов.',
    solution: 'Провели полную реструктуризацию кампаний, создали детальную семантику по категориям товаров, настроили точный таргетинг по демографии и интересам, оптимизировали посадочные страницы.',
    results: [
      'Увеличение конверсии на 340%',
      'Снижение CPC на 65%',
      'Рост ROAS до 450%',
      'Увеличение количества заказов в 3 раза'
    ],
    timeline: '6 недель полной оптимизации',
    tools: ['Яндекс.Директ', 'Яндекс.Метрика', 'Яндекс.Вордстат', 'Key Collector', 'Google Analytics']
  },
  'dental': {
    description: 'Стоматологическая клиника в Москве нуждалась в увеличении потока пациентов через контекстную рекламу при ограниченном бюджете.',
    challenge: 'Высокая конкуренция в сфере стоматологии, дорогие ключевые слова и необходимость привлекать качественных пациентов, готовых к лечению.',
    solution: 'Сфокусировались на long-tail запросах, создали отдельные кампании для разных видов услуг, настроили геотаргетинг по районам, добавили расширения с отзывами.',
    results: [
      'Увеличение заявок на 180%',
      'Снижение CPA на 45%',
      'Повышение качества лидов на 60%',
      'ROI увеличился до 280%'
    ],
    timeline: '4 недели настройки и оптимизации',
    tools: ['Яндекс.Директ', 'Яндекс.Метрика', 'CallTouch', 'Roistat', 'Яндекс.Справочник']
  },
  'education': {
    description: 'Онлайн-школа по изучению иностранных языков хотела масштабировать рекламу и увеличить количество студентов при сохранении рентабельности.',
    challenge: 'Сезонность спроса, высокая стоимость привлечения в сфере образования и необходимость демонстрации качества обучения через рекламу.',
    solution: 'Создали воронку из нескольких этапов: бесплатный урок → пробный курс → полный курс. Настроили ремаркетинг, использовали видеообъявления, оптимизировали под мобильные устройства.',
    results: [
      'Рост продаж на 210%',
      'ROI увеличен до 380%',
      'Снижение стоимости лида на 35%',
      'Увеличение среднего чека на 25%'
    ],
    timeline: '8 недель с тестированием гипотез',
    tools: ['Яндекс.Директ', 'Facebook Ads', 'Яндекс.Метрика', 'AmoCRM', 'Яндекс.Аудитории']
  }
};