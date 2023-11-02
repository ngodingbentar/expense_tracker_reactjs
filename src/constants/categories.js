const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Bisnis', amount: 0, color: incomeColors[0] },
  { type: 'Investasi', amount: 0, color: incomeColors[1] },
  { type: 'Gaji', amount: 0, color: incomeColors[6] },
  { type: 'Tabungan', amount: 0, color: incomeColors[7] },
];

export const expenseCategories = [
  { type: 'Tagihan', amount: 0, color: expenseColors[0] },
  { type: 'Liburan', amount: 0, color: expenseColors[3] },
  { type: 'Makanan', amount: 0, color: expenseColors[4] },
  { type: 'Belanja', amount: 0, color: expenseColors[5] },
  { type: 'Entertainment', amount: 0, color: expenseColors[7] },
  { type: 'Lainnya', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};