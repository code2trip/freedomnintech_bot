import { Card } from '@/components/Card';

const services = [
  {
    title: "Разработка",
    description: "Профессиональная разработка – решения под ключ",
    details: [
      "Сайты под ключ",
      "Мобильные приложения",
      "Чат-боты"
    ]
  },
  {
    title: "Дизайн",
    description: "Лицо вашего бренда",
    details: [
      "Дизайн любой сложности",
      "UX/UI макеты",
      "Брендбук, логотипы, доработки Figma",
      "Презентации, лендинги, гайды, портфолио, инфографика"
    ]
  },
  {
    title: "Маркетинг",
    description: "Комплексное продвижение – ваш успех в цифрах",
    details: [
      "Стратегическое продвижение и реклама",
      "Анализ рынка и конкурентов",
      "Создание сайтов и видеороликов",
      "Контент-маркетинг и PR",
      "Работа с целевой аудиторией",
      "Партнерское продвижение"
    ]
  }
];

export const Services = () => {
  return (
    <section style={{ marginTop: '32px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }}>
        Наши услуги
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {services.map(service => (
          <Card key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};
