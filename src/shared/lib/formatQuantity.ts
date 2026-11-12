export const formatQuantity = (value: number, unit: string) => `${new Intl.NumberFormat('es-CL', { maximumFractionDigits: 2 }).format(value)} ${unit}`
