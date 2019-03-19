export default {
  methods: {
    dateFormat(date) {
      const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      const birthDate = new Date(date);

      const day = birthDate.getDate();
      const monthIndex = birthDate.getMonth();
      const year = birthDate.getFullYear();

      return `${day} ${monthNames[monthIndex]} ${year}`
    }
  }
}