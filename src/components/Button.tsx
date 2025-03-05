import { useTelegram } from '@/lib/telegram';

export const Button = ({ children, onClick }: {
  children: React.ReactNode,
  onClick: () => void
}) => {
  const { tg } = useTelegram();
  
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: tg.themeParams.button_color || '#32a6fb',
        color: tg.themeParams.button_text_color || '#ffffff',
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}; 