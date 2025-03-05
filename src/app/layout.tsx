import { useTelegram } from '@/lib/telegram';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { tg } = useTelegram();
  
  return (
    <html lang="ru" style={{
      backgroundColor: tg.themeParams.bg_color || '#ffffff'
    }}>
      <body style={{
        color: tg.themeParams.text_color || '#000000',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}
