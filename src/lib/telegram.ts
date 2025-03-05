// Telegram Web App API integration
export const useTelegram = () => {
  const tg = (window as any).Telegram.WebApp;
  
  const expand = () => tg.expand();
  const close = () => tg.close();
  const sendData = (data: any) => tg.sendData(JSON.stringify(data));
  
  return {
    tg,
    user: tg.initDataUnsafe?.user,
    themeParams: tg.themeParams,
    expand,
    close,
    sendData
  };
}; 