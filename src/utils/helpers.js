export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export const formatNameForURL = (name) => {
  return name.replace(/\s+/g, '-');
};

export const revertFormattedName = (formattedName) => {
  return formattedName.replace(/-/g, ' ');
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
