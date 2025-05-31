export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe?: any;
        version?: string;
        platform?: string;
        colorScheme?: string;
        isExpanded?: boolean;
        isClosingConfirmationEnabled?: boolean;
        themeParams?: any;
        close: () => void;
        expand: () => void;
        showAlert: (message: string, callback?: () => void) => void;
        sendData: (data: string) => void;
        onEvent: (eventType: string, callback: () => void) => void;
        offEvent: (eventType: string, callback: () => void) => void;
      };
    };
  }
}