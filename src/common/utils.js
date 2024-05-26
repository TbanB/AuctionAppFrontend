function convertDate(inputDate) {
    const newDate = new Date(inputDate);
    
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

export { convertDate };