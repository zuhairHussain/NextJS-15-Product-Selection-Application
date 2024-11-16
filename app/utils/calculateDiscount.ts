export default function calculateDiscount (total: number) {
  if (total > 200) return 0.15;
  if (total > 100) return 0.1;
  if (total > 50) return 0.05;
  return 0;
};