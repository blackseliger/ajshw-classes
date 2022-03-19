export default function showColor(obj) {
  // eslint-disable-next-line no-nested-ternary
  return obj.health > 50 ? 'healthy' : obj.health <= 50 && obj.health >= 15 ? 'wounded' : 'critical';
}
