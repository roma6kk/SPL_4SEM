document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  const surname = document.getElementById('surname').value.trim();
  if (!surname || surname.length > 20 || !/^[a-zA-Zа-яА-Я]+$/.test(surname)) {
    document.getElementById('surnameError').textContent = 'Поле не должно быть пустым и содержать более 20 символов.';
    isValid = false;
  }

  const name = document.getElementById('name').value.trim();
  if (!name || name.length > 20 || !/^[a-zA-Zа-яА-Я]+$/.test(name)) {
    document.getElementById('nameError').textContent = 'Поле не должно быть пустым и содержать более 20 символов.';
    isValid = false;
  }

  const email = document.getElementById('email').value.trim();
  if (!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email)) {
    document.getElementById('emailError').textContent = 'Недопустимый формат.';
    isValid = false;
  }

  const phone = document.getElementById('phone').value.trim();
  if (!phone || !/^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Поле не должно быть пустым. Формат: (0xx)xxx-xx-xx.';
    isValid = false;
  }

  const radios = document.querySelectorAll('input[name="choices"]');
  let isRadioSelected = Array.from(radios).some(radio => radio.checked);
  if (!isRadioSelected) {
    document.getElementById('aboutError').textContent = 'Вы должны выбрать курс';
    isValid = false;
}

  const about = document.getElementById('about').value.trim();
  if (about.length > 250) {
    document.getElementById('aboutError').textContent = 'Поле не должно содержать более 250 символов.';
    isValid = false;
  }

  const city = document.getElementById('city').value;
  const bstuChecked = document.querySelector('input[name="bstu"]').checked; 
  const course = document.querySelector('input[name="course"]:checked')?.value;
  
  if (city !== 'minsk' || !bstuChecked || course !== '3') {
    const confirmation = confirm("Вы уверены в своем выборе?\n\nГород: " + city + "\nБГТУ: " + (bstuChecked ? "Да" : "Нет") + "\nКурс: " + (course || "не выбран"));
    if (!confirmation) {
      return;
    }
  }
  
  if (isValid) {
    alert('Форма успешно отправлена!');
  }
});