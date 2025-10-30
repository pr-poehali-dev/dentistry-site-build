import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    {
      icon: 'Smile',
      title: 'Терапия',
      description: 'Лечение кариеса, пульпита и других заболеваний зубов'
    },
    {
      icon: 'Sparkles',
      title: 'Отбеливание',
      description: 'Профессиональное отбеливание зубов до 8 тонов'
    },
    {
      icon: 'Drill',
      title: 'Хирургия',
      description: 'Удаление зубов, имплантация, костная пластика'
    },
    {
      icon: 'Teeth',
      title: 'Ортопедия',
      description: 'Протезирование: коронки, мосты, виниры'
    },
    {
      icon: 'Gauge',
      title: 'Ортодонтия',
      description: 'Исправление прикуса, установка брекетов и элайнеров'
    },
    {
      icon: 'Baby',
      title: 'Детская стоматология',
      description: 'Бережное лечение зубов у детей любого возраста'
    }
  ];

  const doctors = [
    {
      name: 'Анна Смирнова',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет',
      image: 'https://cdn.poehali.dev/projects/defa22d6-d57b-4217-a00f-b963b6c189c4/files/174eb165-2619-4ef5-aa52-40d8cc188c1f.jpg'
    },
    {
      name: 'Дмитрий Петров',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет',
      image: 'https://cdn.poehali.dev/projects/defa22d6-d57b-4217-a00f-b963b6c189c4/files/19276978-4864-40f4-84ce-9085cb8c6ccb.jpg'
    },
    {
      name: 'Елена Иванова',
      specialty: 'Стоматолог-ортодонт',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/projects/defa22d6-d57b-4217-a00f-b963b6c189c4/files/174eb165-2619-4ef5-aa52-40d8cc188c1f.jpg'
    }
  ];

  const prices = [
    { service: 'Консультация', price: 'Бесплатно' },
    { service: 'Лечение кариеса', price: 'от 3 500 ₽' },
    { service: 'Профессиональная чистка', price: '4 500 ₽' },
    { service: 'Отбеливание', price: 'от 15 000 ₽' },
    { service: 'Имплантация', price: 'от 35 000 ₽' },
    { service: 'Брекет-системы', price: 'от 80 000 ₽' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
    setFormData({
      name: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Smile" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">DentaCare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">Врачи</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#appointment" className="text-sm font-medium hover:text-primary transition-colors">Запись</a>
          </nav>
          <Button asChild>
            <a href="tel:+74951234567">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 495 123-45-67
            </a>
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://cdn.poehali.dev/projects/defa22d6-d57b-4217-a00f-b963b6c189c4/files/adefeba1-c376-4215-a251-45c5017b2b8e.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Здоровая улыбка начинается здесь
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Современная стоматология с заботой о каждом пациенте. Безболезненное лечение, опытные врачи и передовые технологии.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#appointment">
                  Записаться на приём
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр стоматологических услуг для всей семьи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-none" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши врачи</h2>
            <p className="text-lg text-muted-foreground">Команда профессионалов с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Icon name="Award" size={16} />
                    <span>Опыт {doctor.experience}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {prices.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b last:border-b-0"
                    >
                      <span className="font-medium">{item.service}</span>
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-center">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Первичная консультация и диагностика — бесплатно
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на приём</h2>
              <p className="text-lg text-muted-foreground">Заполните форму, и мы свяжемся с вами для подтверждения</p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Выберите врача</Label>
                    <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Любой доступный врач" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor, index) => (
                          <SelectItem key={index} value={doctor.name}>
                            {doctor.name} — {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Желаемая дата</Label>
                      <Input 
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Желаемое время</Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea 
                      id="message"
                      placeholder="Опишите ваши пожелания или проблему..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary/50 border-t">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smile" size={32} className="text-primary" />
                <span className="text-2xl font-bold text-primary">DentaCare</span>
              </div>
              <p className="text-muted-foreground">
                Современная стоматологическая клиника с заботой о вашем здоровье
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 495 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@dentacare.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Пт: 9:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Сб-Вс: 10:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 DentaCare. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
