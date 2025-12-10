export const PAYMENT_LOGOS = {
  visa: "VISA",
  mastercard: "MC",
  мир: "Мир",
  мтс: "МТС",
  tinkoff: "Т",
  сбер: "СБ"
};

export const getCurrentYear = () => new Date().getFullYear();

export const FOOTER_STYLES = {
  container: "bg-base-300 text-base-content",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  sectionTitle: "text-lg font-bold mb-4",
  socialButton: "btn btn-circle text-white border-0 w-12 h-12",
  partnerCard: "p-3 bg-base-100 rounded-lg hover:bg-base-200 transition-colors",
  paymentBadge: "w-10 h-6 rounded flex items-center justify-center text-white text-xs font-semibold"
};