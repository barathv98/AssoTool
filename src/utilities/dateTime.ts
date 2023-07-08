function allShortMonthYear(dt: Date) {
	const day = dt.toLocaleString('default', { day: 'numeric' });
	const month = dt.toLocaleString('default', { month: 'short' });
	const year = dt.toLocaleString('default', { year: 'numeric' });
	return `${day} ${month} ${year}`;
}

export default allShortMonthYear;
