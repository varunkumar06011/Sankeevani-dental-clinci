// WhatsApp utility for Sanjeevani Dental Care

export const PHONE_NUMBER = "+919491945437";
export const PHONE_NUMBER_INTL = "919491945437";
export const WHATSAPP_MESSAGE = "Hi Sanjeevani Dental Clinic, I need an appointment tomorrow.";

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) => {
  return `https://wa.me/${PHONE_NUMBER_INTL}?text=${encodeURIComponent(message)}`;
};

export const getTelUrl = () => {
  return `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
};

export const getGoogleMapsUrl = () => {
  // Open Google Maps search for Sanjeevani Dental Care Ongole
  return "https://www.google.com/maps/search/Sanjeevani+Dental+Care+Ongole";
};