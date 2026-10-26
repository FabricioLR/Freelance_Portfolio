export const WHATSAPP_NUMBER = "5561995798701";
export const EMAIL = "fabriciolongodearaujo@gmail.com";
export const PORTFOLIO_URL = "https://www.fabriciolr.online/";

export function whatsappLink(message = "Hi Fabrício! I'd like to talk about a project.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
