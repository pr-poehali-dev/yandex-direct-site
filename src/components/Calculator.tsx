import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CalculatorOption {
  label: string;
  price: number;
}

interface CalculatorStep {
  id: string;
  title: string;
  options: CalculatorOption[];
}

export default function Calculator() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, CalculatorOption>>({});
  const [showResult, setShowResult] = useState(false);

  const steps: CalculatorStep[] = [
    {
      id: 'service',
      title: 'Тип услуги',
      options: [
        { label: 'Настройка новых кампаний', price: 15000 },
        { label: 'Создание лендинга', price: 25000 },
        { label: 'Оптимизация существующих кампаний', price: 10000 },
        { label: 'Аналитика и отчетность', price: 8000 },
        { label: 'Полный аудит рекламы', price: 5000 }
      ]
    },
    {
      id: 'budget',
      title: 'Рекламный бюджет в месяц',
      options: [
        { label: 'До 50 000 ₽', price: 0 },
        { label: '50 000 - 150 000 ₽', price: 3000 },
        { label: '150 000 - 300 000 ₽', price: 5000 },
        { label: 'Свыше 300 000 ₽', price: 8000 }
      ]
    },
    {
      id: 'complexity',
      title: 'Сложность проекта',
      options: [
        { label: 'Простой (1-2 кампании)', price: 0 },
        { label: 'Средний (3-5 кампаний)', price: 5000 },
        { label: 'Сложный (6+ кампаний)', price: 12000 }
      ]
    },
    {
      id: 'support',
      title: 'Дополнительные услуги',
      options: [
        { label: 'Базовая поддержка', price: 0 },
        { label: 'Расширенная поддержка', price: 7000 },
        { label: 'Премиум поддержка 24/7', price: 15000 }
      ]
    }
  ];

  const handleOptionSelect = (stepId: string, option: CalculatorOption) => {
    setSelectedOptions(prev => ({
      ...prev,
      [stepId]: option
    }));
  };

  const calculateTotal = () => {
    return Object.values(selectedOptions).reduce((sum, option) => sum + option.price, 0);
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const resetCalculator = () => {
    setSelectedOptions({});
    setShowResult(false);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark-charcoal mb-6">
          Калькулятор стоимости
        </h2>
        <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
          Узнайте примерную стоимость работ за 2 минуты
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {!showResult ? (
          <div className="space-y-8">
            {steps.map((step, stepIndex) => (
              <Card key={step.id} className="bg-white/80 backdrop-blur border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-dark-charcoal flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-vibrant-orange to-success-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {stepIndex + 1}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {step.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        onClick={() => handleOptionSelect(step.id, option)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                          selectedOptions[step.id]?.label === option.label
                            ? 'border-vibrant-orange bg-vibrant-orange/5'
                            : 'border-gray-200 hover:border-success-blue'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-open-sans text-dark-charcoal">{option.label}</div>
                          {option.price > 0 && (
                            <Badge variant="outline" className="text-success-blue border-success-blue/20">
                              +{option.price.toLocaleString()} ₽
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <Button
                onClick={handleCalculate}
                disabled={Object.keys(selectedOptions).length !== steps.length}
                size="lg"
                className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        ) : (
          <Card className="bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-xl">
            <CardContent className="text-center py-12">
              <div className="mb-8">
                <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-montserrat font-bold text-dark-charcoal mb-4">
                  Расчет готов!
                </h3>
                <div className="text-5xl font-montserrat font-bold text-vibrant-orange mb-6">
                  {calculateTotal().toLocaleString()} ₽
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <h4 className="font-montserrat font-bold text-dark-charcoal mb-4">Ваш выбор:</h4>
                <div className="space-y-3">
                  {Object.entries(selectedOptions).map(([stepId, option]) => {
                    const step = steps.find(s => s.id === stepId);
                    return (
                      <div key={stepId} className="flex justify-between items-center">
                        <span className="font-open-sans text-gray-600">{step?.title}:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat font-semibold text-dark-charcoal">
                            {option.label}
                          </span>
                          {option.price > 0 && (
                            <Badge variant="outline" className="text-success-blue border-success-blue/20">
                              +{option.price.toLocaleString()} ₽
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-vibrant-orange hover:bg-orange-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  size="lg"
                  className="border-success-blue text-success-blue hover:bg-success-blue hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
                >
                  <Icon name="RotateCcw" size={20} className="mr-2" />
                  Пересчитать
                </Button>
              </div>

              <p className="text-gray-600 font-open-sans mt-6 text-sm">
                * Стоимость является предварительной. Окончательная цена определяется после консультации.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}