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
      "UX/UI дизайн",
      "Брендбуки",
      "Логотипы"
    ]
  },
  {
    title: "Маркетинг",
    description: "Комплексное продвижение",
    details: [
      "SEO оптимизация",
      "Контент-маркетинг",
      "Рекламные кампании"
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
