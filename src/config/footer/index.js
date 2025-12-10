import footerData from './footer.json';
import { 
  PAYMENT_LOGOS, 
  getCurrentYear, 
  FOOTER_STYLES 
} from './constants';

// Основной конфиг с утилитами
const footerConfig = {
  // Основные данные
  ...footerData,
  
  // Утилитные функции
  utils: {
    getCurrentYear,
    getPaymentLogo: (key) => PAYMENT_LOGOS[key] || key.toUpperCase(),
    formatPhone: (phone) => phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')
  },
  
  // Стили
  styles: FOOTER_STYLES,
  
  // Методы для получения данных
  getCompanyInfo: () => footerData.company,
  getSocialLinks: () => footerData.social.networks,
  getUsefulLinks: () => footerData.links.useful.items,
  getLegalLinks: () => footerData.links.legal.items,
  getPartners: () => footerData.partners.sponsors,
  getPaymentMethods: () => footerData.payment.methods,
  
  // Методы для рендеринга
  renderPaymentMethod: (method) => ({
    ...method,
    displayName: PAYMENT_LOGOS[method.logo] || method.logo
  }),
  
  renderPartner: (partner) => ({
    ...partner,
    fullDescription: `${partner.name} — ${partner.description}`
  })
};

// Экспорт по умолчанию
export default footerConfig;

// Именованный экспорт для удобства
export const {
  company,
  social,
  links,
  partners,
  newsletter,
  payment,
  legal,
  utils,
  styles,
  getCompanyInfo,
  getSocialLinks,
  getUsefulLinks,
  getLegalLinks,
  getPartners,
  getPaymentMethods
} = footerConfig;