import { useTelegram } from '@/lib/telegram';

export const Card = ({ title, description, details }: {
  title: string;
  description: string;
  details: string[];
}) => {
  const { tg } = useTelegram();
  
  return (
    <div style={{
      backgroundColor: tg.themeParams.secondary_bg_color || '#f0f0f0',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: tg.themeParams.text_color || '#000000'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        color: tg.themeParams.hint_color || '#666666',
        marginBottom: '12px'
      }}>
        {description}
      </p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {details.map((detail, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            fontSize: '14px',
            color: tg.themeParams.text_color || '#000000'
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: tg.themeParams.button_color || '#32a6fb',
              marginRight: '8px'
            }} />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}; 